const { getDocuments } = require(".");

describe.skip("getDocuments", () => {
  it("should return 20 items sorted by most recent", async () => {
    const response = await getDocuments();
    expect(response.description).toBe("All Documents");
    expect(response.total_pages).toBeDefined();
    expect(response.next_page_url).toBeDefined();
    expect(response.results).toBeDefined();
    expect(response.results.length).toBe(20);
  });

  it("should return 20 items sorted by most recent from an agency", async () => {
    const response = await getDocuments({ agency: "commerce-department" });
    expect(response.description).toBe("Documents from Commerce Department");
    expect(response.total_pages).toBeDefined();
    expect(response.next_page_url).toBeDefined();
    expect(response.results).toBeDefined();
    expect(response.results.length).toBe(20);
  });
});
