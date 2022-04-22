const { PdfReader } = require("pdfreader");

const getPdfBuffer = async (url) => {
  const res = await axios({
    url: url,
    method: "GET",
    responseType: "arraybuffer", // important
  });
  const { data } = res;
  return data;
};

const getTextFromPdfBuffer = async (pdfBuffer) => {
  let data = "";
  return new Promise((resolve, reject) => {
    new PdfReader().parseBuffer(pdfBuffer, (err, item) => {
      if (err) reject(err);
      else if (!item) resolve(data);
      else if (item.text) {
        data += "\n" + item.text;
      }
    });
  });
};

const getRawTextFromPdfUrl = async (url) => {
  const buf = await getPdfBuffer(url);
  const text = await getTextFromPdfBuffer(buf);
  return text;
};

module.exports = getRawTextFromPdfUrl;
