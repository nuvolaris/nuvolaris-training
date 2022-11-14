# creating address
cat address/Create.java
nuv package update address -p postgres "$POSTGRES"
nuv action update address/Create address/Create.java --main=Create
nuv action list
# initialize table
echo "\dt" | psql address
nuv invoke address/Create
echo "\dt" | psql address
oc get pod
