'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface GeoData {
  country: string;
  countryCode: string;
  city: string;
  ip: string;
}

interface TestResponse {
  success: boolean;
  detectedLanguage: string;
  geoData: GeoData;
  error?: string;
}

export default function TestGeoPage() {
  const [data, setData] = useState<TestResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations('common');

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const response = await fetch('/api/test-geo');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch geolocation data');
      } finally {
        setLoading(false);
      }
    };

    fetchGeoData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading geolocation data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">No data available</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Geolocation Test Results</h1>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
            <h2 className="font-semibold mb-2">Detection Status</h2>
            <p className={data.success ? 'text-green-500' : 'text-red-500'}>
              {data.success ? 'Successfully detected location' : 'Failed to detect location'}
            </p>
          </div>

          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
            <h2 className="font-semibold mb-2">Detected Language</h2>
            <p className="text-lg">{data.detectedLanguage}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {data.detectedLanguage === 'da' 
                ? 'Danish (Correct for Denmark)' 
                : 'Not Danish (Incorrect for Denmark)'}
            </p>
          </div>

          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
            <h2 className="font-semibold mb-2">Location Details</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Country:</span> {data.geoData.country}</p>
              <p><span className="font-medium">Country Code:</span> {data.geoData.countryCode}</p>
              <p><span className="font-medium">City:</span> {data.geoData.city}</p>
              <p><span className="font-medium">IP Address:</span> {data.geoData.ip}</p>
            </div>
          </div>

          {data.geoData.countryCode === 'DK' ? (
            <div className="p-4 bg-green-100 dark:bg-green-900 rounded">
              <p className="text-green-800 dark:text-green-200">
                ✅ Successfully detected Denmark location
              </p>
            </div>
          ) : (
            <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded">
              <p className="text-yellow-800 dark:text-yellow-200">
                ⚠️ Not detecting Denmark location. If you're using a VPN, please make sure you're connected to a Danish server.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 