import * as core from "@actions/core";
import { instaler } from "./install.js";

async function run() {
  try {
    const tempPath = core.getInput("tempPath");
    const luaVersion = core.getInput("luaVersion");

    const path = await instaler({ tempPath, luaVersion });

    core.info(`✅ [Dry Run] Lua install path: ${path}`);
    core.setOutput("path", path);
  } catch (err) {
    core.setFailed(err.message);
  }
}

run();
