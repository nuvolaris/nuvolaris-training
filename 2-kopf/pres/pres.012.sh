# check
cd lab
kubectl get nodes
kubectl apply -f demo-ns.yaml
kubectl config set-context --current --namespace demo
# create crd and instance
kubectl apply -f demo-crd.yaml
kubectl get crd
kubectl apply -f demo-obj.yaml
kubectl -n demo get sam
# cleanup
kubectl -n demo delete sam/obj
kubectl -n demo get sam
