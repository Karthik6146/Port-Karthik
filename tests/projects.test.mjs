import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { test } from 'node:test';

const projects = JSON.parse(readFileSync(new URL('../src/lib/projects.json', import.meta.url), 'utf8'));

test('projects have unique titles, valid links and local previews', () => {
  assert.equal(new Set(projects.map((p) => p.title)).size, projects.length);
  for (const project of projects) {
    assert.ok(project.description && project.stack.length);
    if (project.live) assert.equal(new URL(project.live).protocol, 'https:');
    if (project.code) {
      const url = new URL(project.code);
      assert.equal(url.host, 'github.com');
      assert.match(url.pathname, /^\/Karthik6146\/[^/]+$/);
    }
    if (project.thumbnail) assert.ok(existsSync(new URL(`../public${project.thumbnail}`, import.meta.url)));
    else assert.equal(project.preview, 'workspace');
  }
});

test('verified GitHub projects are included and the fork is labelled', () => {
  assert.ok(projects.some((p) => p.code === 'https://github.com/Karthik6146/Restaurant-Website'));
  const fork = projects.find((p) => p.code === 'https://github.com/Karthik6146/aiwebsite');
  assert.ok(fork);
  assert.match(fork.category, /Fork/);
  assert.equal(fork.live, undefined);
  assert.equal(projects.find((p) => p.title === 'DS Polypack').live, undefined);
  assert.ok(!projects.some((p) => p.code?.includes('Karthik6146AC') || p.code?.includes('KarthikShakayawar_SD')));
});

test('requested live projects use fresh screenshots', () => {
  for (const [title, file] of [['JoinCloud', 'joincloud'], ['Arevei Restaurant', 'restaurant'], ['Arevei', 'arevei']]) {
    const project = projects.find((p) => p.title === title);
    assert.ok(project?.live);
    assert.equal(project.thumbnail, `/projects/${file}-2026.jpg`);
    const bytes = readFileSync(new URL(`../public${project.thumbnail}`, import.meta.url));
    assert.deepEqual([...bytes.subarray(0, 3)], [0xff, 0xd8, 0xff]);
  }
});
