const projectId = import.meta.env.VITE_OLA_PROJECT_ID;
export const olaApiKey = import.meta.env.VITE_OLA_API_KEY;
const clientId = import.meta.env.VITE_OLA_CLIENT_ID;
const clientSecret = import.meta.env.VITE_OLA_CLIENT_SECRET;

const url = `https://api.olamaps.io/places/v1/autocomplete?input=Taj%20Mahal&api_key=${
  import.meta.env.VITE_OLA_API_KEY
}`;

export const location = `https://api.olamaps.io/places/v1/geocode?address=Ola Electric, 2, Hosur Rd, Koramangala Industrial Layout, Koramangala, Bengaluru, 560095, Karnataka&language=hi&api_key=${
  import.meta.env.VITE_OLA_API_KEY
}`;
