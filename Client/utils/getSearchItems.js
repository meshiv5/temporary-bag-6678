const axios = require("axios");
export default async function getSearchItems(query, page, header) {
  if (!header) {
    const res = await axios.get(
      `http://localhost:8080/search?query=${query}&page=${page}`
    );
    return res;
  }
  const res = await axios.get(
    `http://localhost:8080/search?query=${query}&page=${page}&lag=${header.l}&genres=${header.g}&content=${header.c}`
  );
  return res;
}
