(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{434:function(e,s,a){"use strict";a.r(s);var t=a(65),i=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"dns-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-management"}},[e._v("#")]),e._v(" DNS Management")]),e._v(" "),a("h2",{attrs:{id:"creating-dns-zones"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-dns-zones"}},[e._v("#")]),e._v(" Creating DNS Zones")]),e._v(" "),a("p",[e._v("The following commands are used to create DNS zones:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("maid domain example.com\n")])])]),a("blockquote",[a("p",[e._v("After creating the DNS zone, the domain must be changed to the nameservers "),a("code",[e._v("ns1.bitinflow.com")]),e._v(" and "),a("code",[e._v("ns2.bitinflow.com")]),e._v(". If you want to continue to use your own DNS server, then you must add all DNS records from "),a("code",[e._v("record:list")]),e._v(" (which could change over time).")])]),e._v(" "),a("h2",{attrs:{id:"list-dns-zones"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-dns-zones"}},[e._v("#")]),e._v(" List DNS Zones")]),e._v(" "),a("p",[e._v("The following commands are used to list DNS zones:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("maid domain:list\n")])])]),a("p",[e._v("The following is an example of a project where the "),a("code",[e._v("positive-mite-zem35d.maid.build")]),e._v(" domain has been assigned:")]),e._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("+---------------------------------+-------------------+-------------------+-------------+\n| name                            | primary_ns        | secondary_ns      | verified_at |\n+---------------------------------+-------------------+-------------------+-------------+\n| positive-mite-zem35d.maid.build | ns1.bitinflow.com | ns2.bitinflow.com | 1651950973  |\n+---------------------------------+-------------------+-------------------+-------------+\n")])])]),a("h2",{attrs:{id:"create-dns-records"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-dns-records"}},[e._v("#")]),e._v(" Create DNS Records")]),e._v(" "),a("blockquote",[a("p",[e._v('The record command functions as an "UPSERT" operation. If an existing record exists with the given type and name, its value will be updated to the given value. If no record exists with the given type or name, the record will be created.')])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("maid record example.com CNAME foo another-example.com\n")])])]),a("blockquote",[a("p",[e._v("Subdomains starting with "),a("code",[e._v("*.ingress")]),e._v(" are currently reserved for the Ingress Controller and cannot be created, edited or deleted.")])]),e._v(" "),a("h2",{attrs:{id:"list-dns-records"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-dns-records"}},[e._v("#")]),e._v(" List DNS Records")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("maid record:list example.com\n")])])]),a("p",[e._v("The following example shows a listing of domain records of "),a("code",[e._v("positive-mite-zem35d.maid.build")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v('+-------------------------------------------+-------+-------------------------------------------------------------------------------+-------+\n| name                                      | type  | content                                                                       | ttl   |\n+-------------------------------------------+-------+-------------------------------------------------------------------------------+-------+\n| positive-mite-zem35d.maid.build           | SOA   | ns1.bitinflow.com hostmaster.bitinflow.com 2022050726 28800 7200 604800 86400 | 86400 |\n| positive-mite-zem35d.maid.build           | NS    | ns1.bitinflow.com                                                             | 300   |\n| positive-mite-zem35d.maid.build           | NS    | ns2.bitinflow.com                                                             | 300   |\n| ingress.positive-mite-zem35d.maid.build   | A     | 192.248.183.183                                                               | 60    |\n| *.ingress.positive-mite-zem35d.maid.build | CNAME | ingress.positive-mite-zem35d.maid.build                                       | 60    |\n| foo.positive-mite-zem35d.maid.build       | TXT   | "another-example.com"                                                         | 300   |\n+-------------------------------------------+-------+-------------------------------------------------------------------------------+-------+\n')])])]),a("h2",{attrs:{id:"delete-dns-records"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-dns-records"}},[e._v("#")]),e._v(" Delete DNS Records")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("maid record:delete positive-mite-zem35d.maid.build A www\n")])])]),a("h2",{attrs:{id:"delete-dns-zones"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-dns-zones"}},[e._v("#")]),e._v(" Delete DNS Zones")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("maid domain:delete example.com\n")])])])])}),[],!1,null,null,null);s.default=i.exports}}]);