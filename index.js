const core = require("@actions/core");

const lib = require("./src");

const getOpts = () => {
  const agency = core.getInput("agency");
  const document_number = core.getInput("document_number");
  return { agency, document_number };
};

async function run() {
  try {
    const opts = getOpts();

    if (opts.document_number) {
      const response = await lib.getDocument(opts);
      core.setOutput("json", JSON.stringify(response));
      core.setOutput("text", response.abstract);
    } else {
      const response = await lib.getDocuments(opts);
      core.setOutput("json", JSON.stringify(response));
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
