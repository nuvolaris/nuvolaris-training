# cleanup
nuv action list | awk '/private/{ print $1}' | xargs -L1 nuv action delete
nuv action list
# bundling the frontend
nuv bundle addr/public
nuv project deploy
# access the app
nuv action list
nuv url address/app
curl $(nuv url address/app)
