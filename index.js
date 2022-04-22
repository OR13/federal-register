const core = require("@actions/core");

const lib = require("./src");

const mapper = {
  ["recent-documents"]: async () => {
    const agency = core.getInput("agency");
    const response = await lib.getLatestDocumentsFromAgency(agency);
    core.setOutput("json", JSON.stringify(response));
  },
};

async function run() {
  try {
    const read = core.getInput("read");
    if (mapper[read]) {
      return mapper[read]();
    } else {
      throw new Error("Unsupported operation");
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
