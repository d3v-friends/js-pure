#!/usr/bin/env node
import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import * as script from "./script";

let [entry, root] = process.argv;

if (!entry) {
    throw new Error("need entry");
}

if (!root) {
    root = __dirname;
}

const dtsConfigFp = path.resolve(root, "config", "dts.js");
const esbuildConfigFp = path.resolve(root, "config", "esbuild.js");

fs.mkdirSync(path.dirname(dtsConfigFp), { recursive: true });
fs.mkdirSync(path.dirname(esbuildConfigFp), { recursive: true });

// todo 여기에 빌드 cli 작성하기


