# install and run kopf
poetry install
poetry run kopf
# run demo1.py
cat demo1.py
# run the operator specifying the namespace
poetry run kopf run -n demo demo1.py
# new terminal
kubectl apply -f demo-obj.yaml
kubectl -n demo get sam
kubectl delete -f demo-obj.yaml
