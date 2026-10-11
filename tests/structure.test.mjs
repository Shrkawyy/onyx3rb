import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
const read = (path) => readFileSync(resolve(process.cwd(), path), 'utf8');
const manifest = JSON.parse(read('extension/manifest.json'));
const js = read('extension/content.js');
const script = read('userscript/onyx-3rb.user.js');
test('Extension manifest uses supported MV3 content injection', () => {
  assert.equal(manifest.manifest_version, 3);
  assert.deepEqual(manifest.content_scripts[0].matches, ['https://3rb.io/*', 'https://www.3rb.io/*']);
  assert.equal(manifest.content_scripts[0].js[0], 'content.js');
});
test('Neither extension nor userscript uses old Senpa connections, game sockets, or bot accounts', () => {
  for (const content of [js, script]) {
    assert.doesNotMatch(content, /senpa\.io|eu1\.senpa|WebSocket\s*\(|fetch\s*\(|XMLHttpRequest|antiCaptchaKey|enterpassword/i);
    assert.match(content, /onyx3rb-root/);
  }
});
test('Tampermonkey matches game domain and embeds panel code', () => {
  assert.match(script, /@match\s+https:\/\/3rb\.io\/\*/);
  assert.match(script, /onyx3rb-styles/);
  assert.match(script, /recordingStream/);
});
test('Readme truthfully describes limits', () => {
  const readme = read('README-AR.md');
  assert.match(readme, /لا يوجد.*بوتات/u);
  assert.match(readme, /شروط 3rb/);
});
