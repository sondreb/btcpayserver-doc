(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{641:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"minimal-manual-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minimal-manual-setup"}},[t._v("#")]),t._v(" Minimal manual setup")]),t._v(" "),s("p",[t._v("The process is basically the following:")]),t._v(" "),s("ol",[s("li",[t._v("Download and sync "),s("a",{attrs:{href:"https://bitcoincore.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bitcoin Core"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Clone and run "),s("a",{attrs:{href:"https://github.com/dgarage/NBxplorer",target:"_blank",rel:"noopener noreferrer"}},[t._v("NBXplorer"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Clone and run "),s("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver",target:"_blank",rel:"noopener noreferrer"}},[t._v("BTCPay Server"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Take a look at our video to learn more:")]),t._v(" "),s("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/Xo_vApXTZBU/hqdefault.jpg)"},attrs:{href:"http://www.youtube.com/watch?v=Xo_vApXTZBU","data-id":"Xo_vApXTZBU"}},[s("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/Xo_vApXTZBU?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),s("h2",{attrs:{id:"warning-not-recommended-to-use-in-production"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#warning-not-recommended-to-use-in-production"}},[t._v("#")]),t._v(" Warning: Not recommended to use in production")]),t._v(" "),s("p",[t._v("Manual installation is NOT recommended in production. It should be only used for learning purpose.")]),t._v(" "),s("p",[t._v("Instead you should use the "),s("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker deployment"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("The docker deployment will provide you easy update system and make sure that all moving parts are wired correctly without any technical knowledge. It will also setup HTTPS for you.")]),t._v(" "),s("h2",{attrs:{id:"typical-manual-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typical-manual-installation"}},[t._v("#")]),t._v(" Typical manual installation")]),t._v(" "),s("p",[t._v("This steps have been done on Ubuntu 18.04, adapt for your own install.")]),t._v(" "),s("h3",{attrs:{id:"1-install-bitcoin-core-0191"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1-install-bitcoin-core-0191"}},[t._v("#")]),t._v(" 1) Install Bitcoin Core 0.19.1")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BITCOIN_VERSION")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.19.1"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BITCOIN_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://bitcoin.org/bin/bitcoin-core-0.19.1/bitcoin-0.19.1-x86_64-linux-gnu.tar.gz"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BITCOIN_SHA256")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5fcac9416e486d4960e1a946145566350ca670f9aaba99de6542080851122e4c"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install bitcoin binaries")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /tmp\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -O bitcoin.tar.gz "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$BITCOIN_URL")]),t._v('"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$BITCOIN_SHA256")]),t._v(' bitcoin.tar.gz"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" sha256sum -c - "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" bin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xzvf bitcoin.tar.gz -C /usr/local/bin --strip-components"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bitcoin-'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$BITCOIN_VERSION")]),t._v('/bin/bitcoin-cli"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bitcoin-'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$BITCOIN_VERSION")]),t._v('/bin/bitcoind"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" bitcoin.tar.gz\n")])])]),s("h3",{attrs:{id:"2-install-net-core-sdk-31"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#2-install-net-core-sdk-31"}},[t._v("#")]),t._v(" 2) Install .NET Core SDK 3.1")]),t._v(" "),s("p",[t._v("On my ubuntu 18.04 (See "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/core/install/linux-package-manager-ubuntu-1804",target:"_blank",rel:"noopener noreferrer"}},[t._v("these instructions"),s("OutboundLink")],1),t._v(" or "),s("a",{attrs:{href:"https://dotnet.microsoft.com/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(" for different OS).")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" dpkg -i packages-microsoft-prod.deb\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" apt-transport-https\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y dotnet-sdk-3.1\n")])])]),s("h3",{attrs:{id:"3-install-nbxplorer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#3-install-nbxplorer"}},[t._v("#")]),t._v(" 3) Install NBXplorer")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/dgarage/NBXplorer\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" NBXplorer\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout latest\n./build.sh\n")])])]),s("h3",{attrs:{id:"4-install-btcpayserver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#4-install-btcpayserver"}},[t._v("#")]),t._v(" 4) Install BTCPayServer")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/btcpayserver/btcpayserver\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" btcpayserver\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout latest\n./build.sh\n")])])]),s("h3",{attrs:{id:"5-run-bitcoind"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#5-run-bitcoind"}},[t._v("#")]),t._v(" 5) Run bitcoind")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("bitcoind\n")])])]),s("h3",{attrs:{id:"6-run-nbxplorer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#6-run-nbxplorer"}},[t._v("#")]),t._v(" 6) Run NBXplorer")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/NBXplorer\n./run.sh\n")])])]),s("h3",{attrs:{id:"7-run-btcpayserver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#7-run-btcpayserver"}},[t._v("#")]),t._v(" 7) Run BTCPayServer")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/btcpayserver\n./run.sh --port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(" --bind "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0\n")])])]),s("p",[t._v("Now you can browse your server on port 8080.")]),t._v(" "),s("h2",{attrs:{id:"additional-links"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#additional-links"}},[t._v("#")]),t._v(" Additional links")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ManualDeploymentExtended/"}},[t._v("Extended Manual Deployment")])],1),t._v(" "),s("li",[s("a",{attrs:{href:"https://freedomnode.com/blog/114/how-to-setup-btc-and-lightning-payment-gateway-with-btcpayserver-on-linux-manual-install",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Setup BTC and Lightning Payment Gateway with BTCPayServer on Linux [Manual Install]"),s("OutboundLink")],1),t._v(" from freedomnode.com.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);