const axios = require("axios");
const { convert } = require("html-to-text");
const getRawTextFromUrl = async (options = {}) => {
  const { raw_text_url } = options;
  const url = raw_text_url;
  const res = await axios.get(url);
  const { data } = res;
  const text = convert(data, {
    wordwrap: 130,
  });
  return text;
};

module.exports = getRawTextFromUrl;
