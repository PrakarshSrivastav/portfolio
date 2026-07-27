import { pipeline } from '@huggingface/transformers';
import fs from 'fs';

const raw = fs.readFileSync('public/data/info.md', 'utf-8');
const chunks = raw.split(/^## /m).filter(Boolean).map(c => '## ' + c.trim());

const extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');

const embeddings = [];
for (const chunk of chunks) {
  const output = await extractor(chunk, { pooling: 'mean', normalize: true });
  embeddings.push({ text: chunk, vector: Array.from(output.data) });
}

fs.writeFileSync('public/data/embeddings.json', JSON.stringify(embeddings));
console.log(`Embedded ${chunks.length} chunks.`);