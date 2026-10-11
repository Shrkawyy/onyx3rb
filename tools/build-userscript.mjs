import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const here = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const js = readFileSync(resolve(here, 'extension/content.js'), 'utf8');
const css = readFileSync(resolve(here, 'extension/panel.css'), 'utf8');
const header = `// ==UserScript==
// @name         ONYX 3RB Companion
// @namespace    https://3rb.io/
// @version      1.0.0
// @description  ONYX overlay for 3rb.io. No automated bots or game-network interception.
// @match        https://3rb.io/*
// @match        https://www.3rb.io/*
// @run-at       document-idle
// @grant        none
// @noframes
// ==/UserScript==\n\n`;
const body = `(() => {\n  'use strict';\n  const css = ${JSON.stringify(css)};\n  function insertStyle() {\n    if (document.getElementById('onyx3rb-styles')) return;\n    const style = document.createElement('style');\n    style.id = 'onyx3rb-styles';\n    style.textContent = css;\n    (document.head || document.documentElement).appendChild(style);\n  }\n  insertStyle();\n})();\n\n${js}\n`;
const out = resolve(here, 'userscript/onyx-3rb.user.js');
writeFileSync(out, header + body);
console.log(`Built ${out}`);
