'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function CSSTestPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">CSS Test Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">TailwindCSS Test</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full">Primary Button</Button>
                <Button variant="secondary" className="w-full">Secondary Button</Button>
                <Button variant="outline" className="w-full">Outline Button</Button>
                
                <div className="flex gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Color Test</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="p-2 bg-primary text-primary-foreground rounded">Primary</div>
                <div className="p-2 bg-secondary text-secondary-foreground rounded">Secondary</div>
                <div className="p-2 bg-muted text-muted-foreground rounded">Muted</div>
                <div className="p-2 bg-accent text-accent-foreground rounded">Accent</div>
                <div className="p-2 bg-destructive text-destructive-foreground rounded">Destructive</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Layout Test</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-16 bg-blue-500 rounded"></div>
                <div className="h-16 bg-green-500 rounded"></div>
                <div className="h-16 bg-red-500 rounded"></div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Border Test</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="p-2 border rounded">Default border</div>
                <div className="p-2 border-2 border-blue-500 rounded">Blue border</div>
                <div className="p-2 border border-dashed rounded">Dashed border</div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            If you can see styled components above, TailwindCSS is working correctly!
          </p>
          <Button className="mt-4" onClick={() => window.location.href = '/mapbox-demo'}>
            Go to Mapbox Demo
          </Button>
        </div>
      </div>
    </div>
  );
}