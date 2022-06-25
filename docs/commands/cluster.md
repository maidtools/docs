# Cluster

## Import a Cluster via Cloud Provider

The following command will import your kubernetes cluster from a specific cloud provider:

> Supported Cloud Provider: `vultr`, `digitalocean`.

```shell
maid cluster:import vultr my-vultr-cluster \
    --ingress-controller=nginx --allow-install-or-upgrade=ingress-controller \
    --allow-install-or-upgrade=cert-manager \
    --api-key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

## Import a Cluster via Kubeconfig

> We only support K3s at the moment, other clusters work as well, but are not officially supported by us.

```shell
maid cluster:import k3s my-k3s-cluster \
    --ingress-controller=nginx --allow-install-or-upgrade=ingress-controller \
    --allow-install-or-upgrade=cert-manager \
    --kubeconfig=~/.kube/config
```