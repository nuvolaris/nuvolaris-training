ssh -L8080:127.0.0.1:8080 devkit
echo "drop table addr;" | psql address
source nuv.src
nuv action list | awk '/private/{ print $1}' | xargs -L1 nuv action delete
nuv package delete address
rm -Rvf addr
oc login -u nuvolaris -p s3cr3t
oc project nuvolaris
oc get pod
