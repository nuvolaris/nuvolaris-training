# Init

## cleanup
cd ../demo
rm -Rvf addr
wsk action update addr/delall delall.js
wsk action invoke addr/delall -r
wsk action list | awk '/private/ { print $1 }' | xargs -L1 wsk action delete 
wsk package delete addr

## create packages and actions

wsk package list
wsk action list

code -a ping.js
wsk package update addr -p redis redis://redis
wsk action update addr/ping ping.js
wsk action invoke addr/ping -r

## get set and del
code -a get.js
code -a set.js
code -a del.js

## check we are ready
wsk action update addr/set set.js --web=true
wsk action update addr/get get.js --web=true
wsk action update addr/del del.js --web=true

# Test the actions

wsk action invoke addr/set -p name Michele -p company Nimbella -p phone 392 -r
wsk action invoke addr/get -p name Michele -r
wsk action invoke addr/del -p name Michele -r
wsk action invoke addr/get -p name Michele -r

# Get all data
code -a all.js
wsk action update addr/all all.js --web=true
wsk action invoke addr/all -r
wsk action invoke addr/set -p name Michele -p company Nimbella -p phone 392 -r
wsk action invoke addr/all -r
wsk action invoke addr/set -p name Mirella -p company Sciabarra -p phone 328 -r
wsk action invoke addr/all -r

# Create svelte app
## IN ANOTHER TERMINAL **
cd nuvolaris-training/3-crud-demo/demo
npx degit sveltejs/template addr
cd addr
npm install
npm run dev
## BACK TO THE FIRST ##

# Create a Svelte app
code -a App1.svelte
code -a App2.svelte
cat App1.svelte App2.svelte >addr/src/App.svelte

# Add an entry
code -a App2a.svelte
code -a App1a.svelte
cat App1.svelte App1a.svelte App2.svelte App2a.svelte >addr/src/App.svelte

# Remove an entry
code -a App1b.svelte
code -a App2b.svelte
cat App1.svelte App1a.svelte App1b.svelte App2.svelte App2a.svelte App2b.svelte >addr/src/App.svelte


