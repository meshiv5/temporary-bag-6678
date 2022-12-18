const axios = require("axios");
export default async function getSearchItems(query, page, header) {
  if (!header) {
    const res = await axios.get(
      `https://zee5.cyclic.app/search?query=${query}&page=${page}`
    );
    return res;
  }
  const res = await axios.get(
    `https://zee5.cyclic.app/search?query=${query}&page=${page}&lag=${header.l}&genres=${header.g}&content=${header.c}`
  );
  return res;
}
