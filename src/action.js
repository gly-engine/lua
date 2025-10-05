import * as core from "@actions/core";
import { installer } from "./lib.js";

async function run() {
  try {
    const tempPath = core.getInput("tempPath");
    const luaVersion = core.getInput("luaVersion");

    const path = await installer({ tempPath, luaVersion });

    core.info(`✅ [Dry Run] Lua install path: ${path}`);
    core.setOutput("path", path);
  } catch (err) {
    core.setFailed(err.message);
  }
}

run();
