# cleanup
kubectl delete -f demo-obj.yaml
poetry run kopf run -n demo demo2.py
# switch terminal
cat demo-obj.yaml
kubectl apply -f demo-obj.yaml
# checking if it worked
cat deploy/patch.yaml
kubectl get deploy ; kubectl get po
