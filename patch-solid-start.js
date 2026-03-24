import fs from 'fs';
const file = 'node_modules/@solidjs/start/dist/router/lazyRoute.js';
if (fs.existsSync(file)) {
  let content = fs.readFileSync(file, 'utf8');
  // In Vite 6, manifest.inputs[src].import() no longer returns a Promise in dev mode.
  // This causes the DEV branch of lazyRoute to return empty components on the client,
  // producing hydration mismatches. We patch it to always use the production branch
  // (component.import()) which works correctly across both Vite 5 & 6.
  const devBranch = `if (import.meta.env.DEV) {`;
  if (content.includes(devBranch) && !content.includes('// PATCHED')) {
    content = content.replace(
      // Replace everything inside the if (import.meta.env.DEV) { ... } block
      // by negating the condition so it always falls through to the else (production) branch
      'if (import.meta.env.DEV) {',
      '// PATCHED: DEV branch disabled due to Vite 6 incompatibility\n            if (false) {'
    );
    fs.writeFileSync(file, content, 'utf8');
    console.log('Patched SolidStart lazyRoute.js successfully (disabled broken DEV branch).');
  } else if (content.includes('// PATCHED')) {
    console.log('SolidStart lazyRoute.js already patched.');
  }
}
