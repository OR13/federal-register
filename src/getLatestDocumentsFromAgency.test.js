const { getLatestDocumentsFromAgency } = require(".");

describe("getLatestDocumentsFromAgency", () => {
  it.skip("should return 20 items sorted by most recent from an agency", async () => {
    const response = await getLatestDocumentsFromAgency("commerce-department");
    expect(response.count).toBeDefined();
    expect(response.description).toBeDefined();
    expect(response.total_pages).toBeDefined();
    expect(response.next_page_url).toBeDefined();
    expect(response.results).toBeDefined();
    expect(response.results.length).toBe(20);
  });
});
