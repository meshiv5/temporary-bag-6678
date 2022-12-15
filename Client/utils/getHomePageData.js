export default async function getHomePageData(queryPart) {
  
  const axios = require("axios");
  const response = await axios.get(
    `https://gwapi.zee5.com/content/collection/0-8-${queryPart}?page=1&limit=5&item_limit=20&country=IN&translation=en&languages=en,hi&version=10`,
    {
      headers: {
        "x-access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9kdWN0X2NvZGUiOiJ6ZWU1QDk3NSIsInBsYXRmb3JtX2NvZGUiOiJXZWJAJCF0Mzg3MTIiLCJpc3N1ZWRBdCI6IjIwMjItMTItMTNUMDc6NTY6MTUuODQ0WiIsInR0bCI6ODY0MDAwMDAsImlhdCI6MTY3MDkxODE3NX0.TTipy5H3Giur8XlJjF4YhrfXhJPMvSh87fAO9F1-9sg",
      },
    }
  );
  return response;
}
