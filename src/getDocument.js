const axios = require("axios");

const getDocument = async (options = {}) => {
  const { document_number } = options;
  const url = `https://www.federalregister.gov/api/v1/documents/${document_number}.json`;
  const res = await axios.get(url);
  const { data } = res;
  return data;
};

module.exports = getDocument;
