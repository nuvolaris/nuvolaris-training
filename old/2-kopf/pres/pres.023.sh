cat demo-deployment.yaml
kubectl apply -f demo-deployment.yaml
kubectl get deploy ; kubectl get po
kubectl delete deploy demo-deploy
kubectl get deploy ; kubectl get po
# kustomize
cat kustomization.yaml
cat patch.yaml
# prepare the customization
rm -Rvf deploy ; mkdir deploy
cp demo-deployment.yaml kustomization.yaml patch.yaml deploy
# apply the kustomization
kubectl apply -k deploy
kubectl get deploy ; kubectl get po 
kubectl delete -k deploy
kubectl get deploy ; kubectl get po 
