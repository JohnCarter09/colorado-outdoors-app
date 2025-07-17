'use client';

import { useState } from 'react';
import { Marker, Popup } from 'react-map-gl/mapbox';
import BaseMapbox from './BaseMapbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { 
  Fish, 
  Target, 
  Trees, 
  Tent,
  Layers
} from 'lucide-react';

interface ActivityItem {
  id: string;
  name?: string;
  location?: string;
  latitude?: number;
  longitude?: number;
  species?: string;
  quantity?: number;
  season?: string;
  description?: string;
  amenities?: string[];
}

// Activity configurations
const activityConfig = {
  trout: {
    label: 'Trout Stocking',
    icon: Fish,
    color: 'bg-blue-500',
    markerColor: '#3B82F6'
  },
  hunting: {
    label: 'Hunting Areas', 
    icon: Target,
    color: 'bg-red-500',
    markerColor: '#EF4444'
  },
  parks: {
    label: 'State Parks',
    icon: Trees,
    color: 'bg-green-500',
    markerColor: '#10B981'
  },
  camping: {
    label: 'Campgrounds',
    icon: Tent,
    color: 'bg-purple-500',
    markerColor: '#8B5CF6'
  }
};

function ActivityMarker({ item, type, onClick, isSelected }: {
  item: ActivityItem;
  type: keyof typeof activityConfig;
  onClick: () => void;
  isSelected: boolean;
}) {
  const config = activityConfig[type];
  const IconComponent = config.icon;
  
  return (
    <Marker
      longitude={item.longitude || -105.7821}
      latitude={item.latitude || 39.5501}
      anchor="bottom"
      onClick={onClick}
    >
      <div 
        className={`
          w-8 h-8 rounded-full border-2 border-white shadow-lg
          flex items-center justify-center text-white cursor-pointer
          transition-all duration-200 ${isSelected ? 'scale-125' : 'hover:scale-110'}
        `}
        style={{ backgroundColor: config.markerColor }}
      >
        <IconComponent className="w-4 h-4" />
      </div>
    </Marker>
  );
}

function ActivityPopup({ item, type, onClose }: {
  item: ActivityItem;
  type: keyof typeof activityConfig;
  onClose: () => void;
}) {
  const config = activityConfig[type];
  const IconComponent = config.icon;
  
  return (
    <Popup
      longitude={item.longitude || -105.7821}
      latitude={item.latitude || 39.5501}
      anchor="top"
      onClose={onClose}
      closeButton={false}
    >
      <Card className="border-0 shadow-lg min-w-[250px]">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center gap-2">
            <IconComponent className="h-4 w-4" style={{ color: config.markerColor }} />
            {item.name || item.location}
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
        <CardContent className="pt-0 space-y-2">
          {type === 'trout' && (
            <>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Species</span>
                <Badge variant="secondary">{item.species}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Quantity</span>
                <span className="font-semibold">{item.quantity?.toLocaleString()}</span>
              </div>
            </>
          )}
          
          {type === 'hunting' && (
            <>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Species</span>
                <Badge variant="secondary">{item.species}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Season</span>
                <span className="text-sm">{item.season}</span>
              </div>
            </>
          )}
          
          {(type === 'parks' || type === 'camping') && (
            <>
              {item.description && (
                <p className="text-sm text-muted-foreground">{item.description}</p>
              )}
              {item.amenities && (
                <div className="space-y-1">
                  <span className="text-sm font-medium">Amenities</span>
                  <div className="flex flex-wrap gap-1">
                    {item.amenities.slice(0, 3).map((amenity, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </Popup>
  );
}

function LayerControls({ visibleLayers, onToggleLayer, dataCounts }: {
  visibleLayers: { [key: string]: boolean };
  onToggleLayer: (layer: string) => void;
  dataCounts: { [key: string]: number };
}) {
  return (
    <Card className="absolute top-4 left-4 z-10 shadow-lg max-w-xs">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center gap-2">
          <Layers className="h-4 w-4" />
          Activity Layers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {Object.entries(activityConfig).map(([key, config]) => (
          <div key={key} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Checkbox
                id={key}
                checked={visibleLayers[key]}
                onCheckedChange={() => onToggleLayer(key)}
              />
              <label
                htmlFor={key}
                className="flex items-center space-x-2 cursor-pointer text-sm"
              >
                <div className={`w-3 h-3 rounded-full ${config.color}`} />
                <config.icon className="h-4 w-4" />
                <span>{config.label}</span>
              </label>
            </div>
            <Badge variant="outline" className="text-xs">
              {dataCounts[key] || 0}
            </Badge>
          </div>
        ))}
        
        <Separator />
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Total Locations</span>
          <Badge variant="secondary">
            {Object.values(dataCounts).reduce((sum, count) => sum + count, 0)}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

interface OutdoorsMapboxProps {
  troutData?: ActivityItem[];
  huntingData?: ActivityItem[];
  parksData?: ActivityItem[];
  campingData?: ActivityItem[];
  className?: string;
}

export default function OutdoorsMapbox({
  troutData = [],
  huntingData = [],
  parksData = [],
  campingData = [],
  className = "h-96 w-full"
}: OutdoorsMapboxProps) {
  const [visibleLayers, setVisibleLayers] = useState({
    trout: true,
    hunting: true,
    parks: true,
    camping: true
  });
  const [selectedItem, setSelectedItem] = useState<ActivityItem | null>(null);
  const [selectedType, setSelectedType] = useState<keyof typeof activityConfig | null>(null);

  const dataCounts = {
    trout: troutData.length,
    hunting: huntingData.length,
    parks: parksData.length,
    camping: campingData.length
  };

  const toggleLayer = (layerName: string) => {
    setVisibleLayers(prev => ({
      ...prev,
      [layerName]: !prev[layerName]
    }));
  };

  const handleMarkerClick = (item: ActivityItem, type: keyof typeof activityConfig) => {
    setSelectedItem(item);
    setSelectedType(type);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
    setSelectedType(null);
  };

  return (
    <div className="relative">
      <BaseMapbox 
        className={className}
        mapStyle="mapbox://styles/mapbox/outdoors-v12"
      >
        {/* Trout Stocking Markers */}
        {visibleLayers.trout && troutData.map((item) => (
          <ActivityMarker
            key={`trout-${item.id}`}
            item={item}
            type="trout"
            onClick={() => handleMarkerClick(item, 'trout')}
            isSelected={selectedItem?.id === item.id && selectedType === 'trout'}
          />
        ))}

        {/* Hunting Areas */}
        {visibleLayers.hunting && huntingData.map((item) => (
          <ActivityMarker
            key={`hunting-${item.id}`}
            item={item}
            type="hunting"
            onClick={() => handleMarkerClick(item, 'hunting')}
            isSelected={selectedItem?.id === item.id && selectedType === 'hunting'}
          />
        ))}

        {/* Parks */}
        {visibleLayers.parks && parksData.map((item) => (
          <ActivityMarker
            key={`park-${item.id}`}
            item={item}
            type="parks"
            onClick={() => handleMarkerClick(item, 'parks')}
            isSelected={selectedItem?.id === item.id && selectedType === 'parks'}
          />
        ))}

        {/* Camping */}
        {visibleLayers.camping && campingData.map((item) => (
          <ActivityMarker
            key={`camping-${item.id}`}
            item={item}
            type="camping"
            onClick={() => handleMarkerClick(item, 'camping')}
            isSelected={selectedItem?.id === item.id && selectedType === 'camping'}
          />
        ))}

        {/* Popup */}
        {selectedItem && selectedType && (
          <ActivityPopup
            item={selectedItem}
            type={selectedType}
            onClose={handleClosePopup}
          />
        )}
      </BaseMapbox>

      {/* Layer Controls */}
      <LayerControls
        visibleLayers={visibleLayers}
        onToggleLayer={toggleLayer}
        dataCounts={dataCounts}
      />
    </div>
  );
}