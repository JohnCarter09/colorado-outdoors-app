'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function MapboxTestPage() {
  const [tokenStatus, setTokenStatus] = useState<{
    isValid: boolean;
    message: string;
    token: string;
  } | null>(null);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    
    if (!token) {
      setTokenStatus({
        isValid: false,
        message: 'No Mapbox token found in environment variables',
        token: 'Not found'
      });
      return;
    }

    // Check token type
    const tokenType = token.startsWith('pk.') ? 'Public Token' : 
                     token.startsWith('sk.') ? 'Secret Token' : 'Unknown';
    
    setTokenStatus({
      isValid: token.startsWith('pk.') || token.startsWith('sk.'),
      message: `Token type: ${tokenType}. ${token.startsWith('sk.') ? 'Warning: Secret tokens should not be used in client-side code!' : ''}`,
      token: token.substring(0, 20) + '...' // Show first 20 chars only
    });
  }, []);

  const testMapboxAPI = async () => {
    try {
      const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
      const response = await fetch(`https://api.mapbox.com/styles/v1/mapbox/streets-v11?access_token=${token}`);
      
      if (response.ok) {
        setTokenStatus(prev => ({
          ...prev!,
          isValid: true,
          message: prev!.message + ' - API test successful!'
        }));
      } else {
        setTokenStatus(prev => ({
          ...prev!,
          isValid: false,
          message: `API test failed: ${response.status} ${response.statusText}`
        }));
      }
    } catch (error) {
      setTokenStatus(prev => ({
        ...prev!,
        isValid: false,
        message: `API test error: ${error}`
      }));
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Mapbox Configuration Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {tokenStatus && (
            <Alert className={tokenStatus.isValid ? 'border-green-500' : 'border-red-500'}>
              {tokenStatus.isValid ? 
                <CheckCircle className="h-4 w-4 text-green-500" /> : 
                <AlertCircle className="h-4 w-4 text-red-500" />
              }
              <AlertDescription>
                <strong>Token Status:</strong> {tokenStatus.message}
                <br />
                <strong>Token Preview:</strong> {tokenStatus.token}
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <h3 className="font-semibold">Environment Variables Check:</h3>
            <pre className="bg-gray-100 p-2 rounded text-sm">
              {JSON.stringify({
                NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ? 'Set' : 'Not set',
                NODE_ENV: process.env.NODE_ENV,
              }, null, 2)}
            </pre>
          </div>

          <Button onClick={testMapboxAPI} className="w-full">
            Test Mapbox API Connection
          </Button>

          <div className="mt-4 text-sm text-gray-600">
            <h4 className="font-semibold mb-2">Token Types:</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Public Token (pk.)</strong> - Safe for client-side use, recommended for web apps</li>
              <li><strong>Secret Token (sk.)</strong> - Should only be used server-side, can be restricted</li>
            </ul>
          </div>

          <div className="mt-4">
            <Button 
              onClick={() => window.location.href = '/mapbox-demo'} 
              variant="outline" 
              className="w-full"
            >
              Go to Mapbox Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}