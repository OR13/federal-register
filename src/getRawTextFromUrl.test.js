const { getRawTextFromUrl } = require(".");

describe("getRawTextFromUrl", () => {
  it("should return a document text", async () => {
    const response = await getRawTextFromUrl({
      raw_text_url:
        "https://www.federalregister.gov/documents/full_text/text/2022/04/22/2022-08590.txt",
    });
    expect(response).toBeDefined();
  });
});
