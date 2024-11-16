const projectId = import.meta.env.VITE_OLA_PROJECT_ID;
export const olaApiKey = import.meta.env.VITE_OLA_API_KEY;
const clientId = import.meta.env.VITE_OLA_CLIENT_ID;
const clientSecret = import.meta.env.VITE_OLA_CLIENT_SECRET;

const url = `https://api.olamaps.io/places/v1/autocomplete?input=Taj%20Mahal&api_key=${
  import.meta.env.VITE_OLA_API_KEY
}`;

export const location = `https://api.olamaps.io/places/v1/geocode?address=Solapur, 413004, Maharashtra&language=hi&api_key=${
  import.meta.env.VITE_OLA_API_KEY
}`;
