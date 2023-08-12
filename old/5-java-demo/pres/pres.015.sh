# create a template
npx degit sveltejs/template addr
# copy sources
cp -v App.svelte addr/src
# run it
cd addr
npm install
npm run dev
# http://localhost:8080