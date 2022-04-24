const { getRawTextFromUrl } = require(".");

describe("getRawTextFromUrl", () => {
  it("should return a document text", async () => {
    const response = await getRawTextFromUrl({
      raw_text_url:
        "https://www.federalregister.gov/documents/full_text/text/2022/04/25/2022-08777.txt",
    });

    // console.log(response);
    expect(response).toBeDefined();
  });
});
