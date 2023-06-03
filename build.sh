npm run-script generate-locals
npm run-script generate-redirects
cp contents/README.md build/
node tests/post-build.js
