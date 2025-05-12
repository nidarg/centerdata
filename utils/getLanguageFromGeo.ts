// utils/getLanguageFromGeo.ts
import axios from 'axios';

const IPGEOLOCATION_API_KEY = '803b037465f048b6a329b3e020e407b1'; // Replace with your actual API key

export const getLanguageFromGeo = async (): Promise<string> => {
  try {
    const response = await axios.get(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${IPGEOLOCATION_API_KEY}`
    );
    const countryCode = response.data.country_code2.toLowerCase();

    // Map country codes to languages
    const languageMap: { [key: string]: string } = {
      dk: 'da', // Denmark
      se: 'sv', // Sweden
      no: 'no', // Norway
      fi: 'fi', // Finland
    };

    return languageMap[countryCode] || 'en'; // Default to English if country not in map
  } catch (error) {
    console.error('Error detecting language from geolocation:', error);
    return 'en'; // Default to English on error
  }
};
