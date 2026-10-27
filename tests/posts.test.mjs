import assert from 'node:assert/strict';
import { test } from 'node:test';
import { parsePost } from '../src/lib/posts.js';

test('parses frontmatter and keeps --- inside the body', () => {
  const { metadata, content } = parsePost('---\ntitle: "Hi: there"\ndate: 2024-02-28\ntags: [a, b]\n---\n\nIntro\n\n---\n\nMore');
  assert.deepEqual(metadata, { title: 'Hi: there', date: '2024-02-28', tags: ['a', 'b'] });
  assert.equal(content, 'Intro\n\n---\n\nMore');
});

test('handles CRLF line endings and missing frontmatter', () => {
  assert.equal(parsePost('---\r\ntitle: Win\r\n---\r\nBody').metadata.title, 'Win');
  assert.deepEqual(parsePost('Just text'), { metadata: {}, content: 'Just text' });
});
