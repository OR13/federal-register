const axios = require("axios");

const getDocuments = async (options = {}) => {
  let url = `https://www.federalregister.gov/api/v1/documents.json?per_page=20&order=newest`;

  if (options.agency) {
    url += `&conditions[agencies][]=${options.agency}`;
  }

  const res = await axios.get(url);
  const { data } = res;
  return data;
};

module.exports = getDocuments;
