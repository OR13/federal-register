const axios = require("axios");

const getLatestDocumentsFromAgency = async (agency) => {
  const url = `https://www.federalregister.gov/api/v1/documents.json?per_page=20&order=newest&conditions[agencies][]=${agency}`;
  const res = await axios.get(url);
  const { data } = res;
  return data;
};

module.exports = getLatestDocumentsFromAgency;
