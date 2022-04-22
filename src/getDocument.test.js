const { getDocument } = require(".");

describe("getDocument", () => {
  it.skip("should return a document by number", async () => {
    const response = await getDocument({
      document_number: "2022-08590",
    });
    expect(response.abstract).toBeDefined();
  });
});
