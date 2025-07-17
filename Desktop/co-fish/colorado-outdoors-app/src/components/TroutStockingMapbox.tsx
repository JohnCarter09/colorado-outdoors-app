'use client';

import { useState, useMemo } from 'react';
import { Marker, Popup, Source, Layer } from 'react-map-gl/mapbox';
import BaseMapbox from './BaseMapbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Fish, 
  MapPin, 
  Calendar, 
  Hash, 
  Layers,
  Zap
} from 'lucide-react';

interface TroutStocking {
  id: string;
  location: string;
  species: string;
  quantity: number;
  stockingDate: string;
  longitude?: number;
  latitude?: number;
  county?: string;
  waterBodyType?: string;
}

interface TroutMarkerProps {
  stocking: TroutStocking;
  onClick: () => void;
  isSelected?: boolean;
  size?: 'small' | 'default' | 'large';
}

// Custom marker component for trout stocking
function TroutMarker({ 
  stocking, 
  onClick, 
  isSelected = false,
  size = 'default' 
}: TroutMarkerProps) {
  const markerSize = size === 'small' ? 20 : size === 'large' ? 40 : 30;
  
  return (
    <Marker
      longitude={stocking.longitude || -105.7821}
      latitude={stocking.latitude || 39.5501}
      anchor="bottom"
      onClick={onClick}
    >
      <div 
        className={`
          relative cursor-pointer transition-all duration-200 
          ${isSelected ? 'scale-125' : 'hover:scale-110'}
        `}
        style={{ width: markerSize, height: markerSize }}
      >
        <div 
          className={`
            w-full h-full rounded-full border-2 border-white shadow-lg
            flex items-center justify-center text-white font-bold text-xs
            ${getSpeciesColor(stocking.species)}
          `}
        >
          <Fish className="w-3 h-3" />
        </div>
        
        {/* Quantity indicator */}
        {stocking.quantity && stocking.quantity > 1000 && (
          <div className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
            !
          </div>
        )}
      </div>
    </Marker>
  );
}

function getSpeciesColor(species: string): string {
  const speciesColors: { [key: string]: string } = {
    'Rainbow Trout': 'bg-blue-500',
    'Brown Trout': 'bg-amber-600', 
    'Brook Trout': 'bg-green-600',
    'Cutthroat Trout': 'bg-red-500',
    'Kokanee Salmon': 'bg-purple-500'
  };
  return speciesColors[species] || 'bg-blue-500';
}

// Enhanced popup component
function StockingPopup({ stocking, onClose }: { stocking: TroutStocking; onClose: () => void }) {
  return (
    <Popup
      longitude={stocking.longitude || -105.7821}
      latitude={stocking.latitude || 39.5501}
      anchor="top"
      onClose={onClose}
      closeButton={false}
      className="mapbox-popup"
    >
      <Card className="border-0 shadow-lg min-w-[250px]">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue-600" />
            {stocking.location}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-2 right-2 h-6 w-6 p-0"
          >
            ×
          </Button>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Species</span>
            <Badge 
              variant="secondary" 
              className={`${getSpeciesColor(stocking.species)} text-white`}
            >
              {stocking.species}
            </Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Quantity</span>
            <div className="flex items-center gap-1">
              <Hash className="h-3 w-3 text-green-600" />
              <span className="font-semibold text-green-600">
                {stocking.quantity?.toLocaleString() || 'Unknown'}
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Date</span>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3 text-blue-500" />
              <span className="text-sm">
                {new Date(stocking.stockingDate).toLocaleDateString()}
              </span>
            </div>
          </div>
          
          {stocking.county && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">County</span>
              <span className="text-sm font-medium">{stocking.county}</span>
            </div>
          )}

          {stocking.waterBodyType && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Water Type</span>
              <Badge variant="outline">{stocking.waterBodyType}</Badge>
            </div>
          )}
        </CardContent>
      </Card>
    </Popup>
  );
}

// Map controls panel
function MapControls({ 
  viewMode, 
  onViewModeChange, 
  showHeatmap, 
  onHeatmapToggle,
  selectedSpecies,
  onSpeciesChange,
  stockingData 
}: {
  viewMode: string;
  onViewModeChange: (mode: string) => void;
  showHeatmap: boolean;
  onHeatmapToggle: (checked: boolean) => void;
  selectedSpecies: string;
  onSpeciesChange: (species: string) => void;
  stockingData: TroutStocking[];
}) {
  const speciesList = [...new Set(stockingData.map(s => s.species))].filter(Boolean);
  
  return (
    <Card className="absolute top-4 left-4 z-10 shadow-lg max-w-xs">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center gap-2">
          <Layers className="h-4 w-4" />
          Map Controls
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* View Mode */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Map Style</label>
          <Select value={viewMode} onValueChange={onViewModeChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="outdoors">Outdoors</SelectItem>
              <SelectItem value="satellite">Satellite</SelectItem>
              <SelectItem value="terrain">Terrain</SelectItem>
              <SelectItem value="streets">Streets</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Species Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Species Filter</label>
          <Select value={selectedSpecies} onValueChange={onSpeciesChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Species" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Species</SelectItem>
              {speciesList.map(species => (
                <SelectItem key={species} value={species}>
                  {species}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Heatmap Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <label className="text-sm font-medium">Heatmap</label>
          </div>
          <Switch checked={showHeatmap} onCheckedChange={onHeatmapToggle} />
        </div>
      </CardContent>
    </Card>
  );
}

interface TroutStockingMapboxProps {
  stockingData?: TroutStocking[];
  className?: string;
  onLocationSelect?: (stocking: TroutStocking) => void;
}

export default function TroutStockingMapbox({ 
  stockingData = [], 
  className = "h-96 w-full",
  onLocationSelect
}: TroutStockingMapboxProps) {
  const [selectedStocking, setSelectedStocking] = useState<TroutStocking | null>(null);
  const [viewMode, setViewMode] = useState('outdoors');
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [selectedSpecies, setSelectedSpecies] = useState('all');

  // Filter data based on selected species
  const filteredData = useMemo(() => {
    if (selectedSpecies === 'all') return stockingData;
    return stockingData.filter(s => s.species === selectedSpecies);
  }, [stockingData, selectedSpecies]);

  // Create heatmap data
  const heatmapData = useMemo(() => {
    return {
      type: 'FeatureCollection',
      features: filteredData.map(stocking => ({
        type: 'Feature',
        properties: {
          weight: Math.log(stocking.quantity || 1)
        },
        geometry: {
          type: 'Point',
          coordinates: [
            stocking.longitude || -105.7821,
            stocking.latitude || 39.5501
          ]
        }
      }))
    };
  }, [filteredData]);

  // Heatmap layer style
  const heatmapLayer = {
    id: 'heatmap',
    type: 'heatmap' as const,
    source: 'stockings',
    paint: {
      'heatmap-weight': ['get', 'weight'],
      'heatmap-intensity': {
        stops: [
          [11, 1],
          [15, 3]
        ]
      },
      'heatmap-color': [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
        0, 'rgba(33,102,172,0)',
        0.2, 'rgb(103,169,207)',
        0.4, 'rgb(209,229,240)',
        0.6, 'rgb(253,219,199)',
        0.8, 'rgb(239,138,98)',
        1, 'rgb(178,24,43)'
      ],
      'heatmap-radius': {
        stops: [
          [11, 15],
          [15, 20]
        ]
      }
    }
  };

  const mapStyles: { [key: string]: string } = {
    outdoors: 'mapbox://styles/mapbox/outdoors-v12',
    satellite: 'mapbox://styles/mapbox/satellite-streets-v12',
    terrain: 'mapbox://styles/mapbox/terrain-v1',
    streets: 'mapbox://styles/mapbox/streets-v12'
  };

  const handleMarkerClick = (stocking: TroutStocking) => {
    setSelectedStocking(stocking);
    onLocationSelect?.(stocking);
  };

  return (
    <div className="relative">
      <BaseMapbox 
        className={className}
        mapStyle={mapStyles[viewMode]}
      >
        {/* Heatmap Layer */}
        {showHeatmap && (
          <Source id="stockings" type="geojson" data={heatmapData}>
            <Layer {...heatmapLayer} />
          </Source>
        )}

        {/* Individual Markers */}
        {!showHeatmap && filteredData.map((stocking) => (
          <TroutMarker
            key={stocking.id}
            stocking={stocking}
            onClick={() => handleMarkerClick(stocking)}
            isSelected={selectedStocking?.id === stocking.id}
          />
        ))}

        {/* Popup */}
        {selectedStocking && (
          <StockingPopup
            stocking={selectedStocking}
            onClose={() => setSelectedStocking(null)}
          />
        )}
      </BaseMapbox>
      
      {/* Map Controls */}
      <MapControls
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        showHeatmap={showHeatmap}
        onHeatmapToggle={setShowHeatmap}
        selectedSpecies={selectedSpecies}
        onSpeciesChange={setSelectedSpecies}
        stockingData={stockingData}
      />
      
      {/* Legend */}
      <Card className="absolute bottom-4 left-4 z-10 shadow-lg">
        <CardContent className="p-3">
          <div className="flex items-center gap-2 mb-2">
            <Fish className="h-4 w-4 text-blue-600" />
            <span className="font-semibold text-sm">
              {showHeatmap ? 'Stocking Density' : 'Recent Stockings'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <Badge variant="outline" className="text-xs">
              {filteredData.length} locations
            </Badge>
          </div>
          {selectedSpecies !== 'all' && (
            <Badge variant="secondary" className="mt-2 text-xs">
              {selectedSpecies} only
            </Badge>
          )}
        </CardContent>
      </Card>
    </div>
  );
}