'use client';

import { useState, useEffect } from 'react';
import { Fish, Search, Filter, MapPin, Calendar, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface StockingRecord {
  id: string;
  location: string;
  county: string;
  species: string;
  quantity: number;
  stockingDate: string;
  source: string;
  latitude?: number;
  longitude?: number;
}

export default function StockingReportsPage() {
  const [stockingData, setStockingData] = useState<StockingRecord[]>([]);
  const [filteredData, setFilteredData] = useState<StockingRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCounty, setSelectedCounty] = useState<string>('all');
  const [selectedSpecies, setSelectedSpecies] = useState<string>('all');

  const loadStockingData = async () => {
    try {
      const response = await fetch('/api/data/trout-stocking');
      const data = await response.json();
      if (data.success) {
        setStockingData(data.data || []);
        setFilteredData(data.data || []);
      }
    } catch (error) {
      console.error('Failed to load stocking data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterData = () => {
    let filtered = stockingData;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(record =>
        record.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.county.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // County filter
    if (selectedCounty !== 'all') {
      filtered = filtered.filter(record => record.county === selectedCounty);
    }

    // Species filter
    if (selectedSpecies !== 'all') {
      filtered = filtered.filter(record => record.species === selectedSpecies);
    }

    setFilteredData(filtered);
  };

  useEffect(() => {
    loadStockingData();
  }, []);

  useEffect(() => {
    filterData();
  }, [searchTerm, selectedCounty, selectedSpecies, stockingData]);

  const counties = Array.from(new Set(stockingData.map(record => record.county))).sort();
  const species = Array.from(new Set(stockingData.map(record => record.species))).sort();

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return 'N/A';
    }
  };

  return (
    <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <p className="text-muted-foreground">
            Real-time trout stocking data from Colorado Parks & Wildlife
          </p>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Search & Filters
            </CardTitle>
            <CardDescription>
              Find specific locations, counties, or species
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search locations or counties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCounty} onValueChange={setSelectedCounty}>
                <SelectTrigger>
                  <SelectValue placeholder="All Counties" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Counties</SelectItem>
                  {counties.map(county => (
                    <SelectItem key={county} value={county}>{county}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedSpecies} onValueChange={setSelectedSpecies}>
                <SelectTrigger>
                  <SelectValue placeholder="All Species" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Species</SelectItem>
                  {species.map(spec => (
                    <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Summary Stats */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-foreground">{filteredData.length}</div>
                <p className="text-sm text-muted-foreground">Total Records</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-foreground">
                  {Array.from(new Set(filteredData.map(r => r.county))).length}
                </div>
                <p className="text-sm text-muted-foreground">Counties</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-foreground">
                  {Array.from(new Set(filteredData.map(r => r.species))).length}
                </div>
                <p className="text-sm text-muted-foreground">Species</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-foreground">
                  {filteredData.reduce((sum, r) => sum + (r.quantity || 0), 0).toLocaleString()}
                </div>
                <p className="text-sm text-muted-foreground">Total Fish</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Stocking Data */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Stocking Records</CardTitle>
            <CardDescription>
              {isLoading ? 'Loading...' : `Showing ${filteredData.length} of ${stockingData.length} records`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin" />
                <span className="ml-2 text-muted-foreground">Loading stocking data...</span>
              </div>
            ) : filteredData.length === 0 ? (
              <div className="text-center py-12">
                <Fish className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No records found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredData.map((record, index) => (
                  <Card key={index} className="hover:bg-muted/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {record.location}
                          </h3>
                          <p className="text-muted-foreground mb-3">{record.county} County</p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">{record.species}</Badge>
                            {record.source && (
                              <Badge variant="outline">{record.source}</Badge>
                            )}
                          </div>
                        </div>
                        <div className="text-right space-y-2">
                          <div className="text-2xl font-bold text-foreground">
                            {record.quantity?.toLocaleString() || 'N/A'}
                          </div>
                          <p className="text-sm text-muted-foreground">fish stocked</p>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {formatDate(record.stockingDate)}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
    </div>
  );
}