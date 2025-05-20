import { NextResponse } from 'next/server';
import { getLanguageFromGeo } from '@/utils/getLanguageFromGeo';

export async function GET() {
  try {
    const detectedLanguage = await getLanguageFromGeo();
    const response = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IPGEOLOCATION_API_KEY}`
    );
    const geoData = await response.json();

    return NextResponse.json({
      success: true,
      detectedLanguage,
      geoData: {
        country: geoData.country_name,
        countryCode: geoData.country_code2,
        city: geoData.city,
        ip: geoData.ip,
      },
    });
  } catch (error) {
    console.error('Geolocation test error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      },
      { status: 500 }
    );
  }
} 