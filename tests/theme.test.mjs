import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';

const layout = readFileSync(new URL('../src/app/layout.js', import.meta.url), 'utf8');
const script = layout.match(/__html: `([^`]+)`/)[1];

for (const [name, saved, systemDark, expected] of [
  ['system dark preference', null, true, 'dark'],
  ['system light preference', null, false, 'light'],
  ['saved light overrides system', 'light', true, 'light'],
  ['saved dark overrides system', 'dark', false, 'dark'],
  ['invalid preference falls back to system', 'invalid', true, 'dark'],
  ['blocked storage falls back to system', new Error('Storage blocked'), true, 'dark'],
]) {
  test(name, () => {
    const document = { documentElement: { dataset: {} } };
    runInNewContext(script, {
      document,
      window: { matchMedia: () => ({ matches: systemDark }) },
      localStorage: { getItem: () => { if (saved instanceof Error) throw saved; return saved; } },
    });
    assert.equal(document.documentElement.dataset.theme, expected);
  });
}
