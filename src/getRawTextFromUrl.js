const axios = require("axios");

const getRawTextFromUrl = async (options = {}) => {
  const { raw_text_url } = options;
  const url = raw_text_url;
  const res = await axios.get(url);
  const { data } = res;
  return data;
};

module.exports = getRawTextFromUrl;
