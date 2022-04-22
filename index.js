const core = require("@actions/core");
const yaml = require("js-yaml");
const fs = require("fs");

const lib = require("./src");

const getOpts = () => {
  const doc = yaml.load(fs.readFileSync("./action.yml", "utf8"));
  let opts = {};
  for (const opt of Object.keys(doc.inputs)) {
    opts[opt] = core.getInput(opt);
  }
  return opts;
};

async function run() {
  try {
    const opts = getOpts();

    if (opts.document_number) {
      const response = await lib.getDocument(opts);
      core.setOutput("json", JSON.stringify(response));
      core.setOutput("text", response.abstract);
      if (opts.raw) {
        const { raw_text_url } = response;
        const text = await lib.getRawTextFromUrl({ raw_text_url });
        core.setOutput("text", text);
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
