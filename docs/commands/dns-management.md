# DNS Management

## Creating DNS Zones

The following commands are used to create DNS zones:

```shell
maid domain example.com
```

> After creating the DNS zone, the domain must be changed to the nameservers `ns1.bitinflow.com` and `ns2.bitinflow.com`. If you want to continue to use your own DNS server, then you must add all DNS records from `record:list` (which could change over time).

## List DNS Zones

The following commands are used to list DNS zones:

```shell
maid domain:list
```

The following is an example of a project where the `positive-mite-zem35d.maid.build` domain has been assigned:

```plain
+---------------------------------+-------------------+-------------------+-------------+
| name                            | primary_ns        | secondary_ns      | verified_at |
+---------------------------------+-------------------+-------------------+-------------+
| positive-mite-zem35d.maid.build | ns1.bitinflow.com | ns2.bitinflow.com | 1651950973  |
+---------------------------------+-------------------+-------------------+-------------+
```

## Create DNS Records

> The record command functions as an "UPSERT" operation. If an existing record exists with the given type and name, its value will be updated to the given value. If no record exists with the given type or name, the record will be created.

```shell
maid record example.com CNAME foo another-example.com
```

> Subdomains starting with `*.ingress` are currently reserved for the Ingress Controller and cannot be created, edited or deleted.

## List DNS Records

```shell
maid record:list example.com
```

The following example shows a listing of domain records of `positive-mite-zem35d.maid.build`:

```plain
+-------------------------------------------+-------+-------------------------------------------------------------------------------+-------+
| name                                      | type  | content                                                                       | ttl   |
+-------------------------------------------+-------+-------------------------------------------------------------------------------+-------+
| positive-mite-zem35d.maid.build           | SOA   | ns1.bitinflow.com hostmaster.bitinflow.com 2022050726 28800 7200 604800 86400 | 86400 |
| positive-mite-zem35d.maid.build           | NS    | ns1.bitinflow.com                                                             | 300   |
| positive-mite-zem35d.maid.build           | NS    | ns2.bitinflow.com                                                             | 300   |
| ingress.positive-mite-zem35d.maid.build   | A     | 192.248.183.183                                                               | 60    |
| *.ingress.positive-mite-zem35d.maid.build | CNAME | ingress.positive-mite-zem35d.maid.build                                       | 60    |
| foo.positive-mite-zem35d.maid.build       | TXT   | "another-example.com"                                                         | 300   |
+-------------------------------------------+-------+-------------------------------------------------------------------------------+-------+
```

## Delete DNS Records

```shell
maid record:delete positive-mite-zem35d.maid.build A www
```

## Delete DNS Zones

```shell
maid domain:delete example.com
```
