const core = require("@actions/core");

const lib = require("./src");

const getOpts = () => {
  return {
    agency: core.getInput("agency"),
    document_number: core.getInput("document_number"),
    raw: core.getInput("raw"),
    limit: core.getInput("raw")
      ? parseInt(core.getInput("raw"), 10)
      : undefined,
  };
};

async function run() {
  try {
    const opts = getOpts();

    if (opts.document_number) {
      const response = await lib.getDocument(opts);
      core.setOutput("json", JSON.stringify(response));
      core.setOutput("text", response.abstract);
      if (opts.raw) {
        try {
          const { raw_text_url } = response;
          const text = await lib.getRawTextFromUrl({ raw_text_url });
          core.setOutput("text", text.substring(0, opts.limit || text.length));
        } catch (e) {
          console.warn(e.message);
        }
      }
    } else {
      const response = await lib.getDocuments(opts);
      core.setOutput("json", JSON.stringify(response));
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
