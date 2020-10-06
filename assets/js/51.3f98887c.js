(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{585:function(e,t,r){"use strict";r.r(t);var o=r(26),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"altcoins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#altcoins"}},[e._v("#")]),e._v(" Altcoins")]),e._v(" "),r("p",[e._v("Bitcoin is the only focus of the project and its core developers. However, opt-in integrations are available for several altcoins:")]),e._v(" "),r("ul",[r("li",[e._v("BGold (BTG) (also known as Bitcoin Gold)")]),e._v(" "),r("li",[e._v("BPlus (XBC) (also known as Bitcoin Plus)")]),e._v(" "),r("li",[e._v("Bitcore (BTX)")]),e._v(" "),r("li",[e._v("Dash (DASH)")]),e._v(" "),r("li",[e._v("Dogecoin (DOGE)")]),e._v(" "),r("li",[e._v("Feathercoin (FTC)")]),e._v(" "),r("li",[e._v("Groestlcoin (GRS)")]),e._v(" "),r("li",[e._v("Liquid Bitcoin (LBTC) (comes with Liquid Tether support USDt)")]),e._v(" "),r("li",[e._v("Litecoin (LTC)")]),e._v(" "),r("li",[e._v("Monacoin (MONA)")]),e._v(" "),r("li",[e._v("Monero (XMR)")]),e._v(" "),r("li",[e._v("Polis (POLIS)")]),e._v(" "),r("li",[e._v("Viacoin (VIA)")])]),e._v(" "),r("p",[e._v("Altcoins are maintained by their respective communities.")]),e._v(" "),r("p",[e._v("For more information, check the "),r("RouterLink",{attrs:{to:"/FAQ/FAQ-Altcoin/"}},[e._v("Altcoin FAQ page")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"how-can-i-add-an-altcoin-to-btcpayserver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-add-an-altcoin-to-btcpayserver"}},[e._v("#")]),e._v(" How can I add an altcoin to BTCPayServer?")]),e._v(" "),r("p",[e._v("The steps for having a coin added are:")]),e._v(" "),r("ol",[r("li",[e._v("Add support for your crypto to "),r("a",{attrs:{href:"https://github.com/MetacoSA/NBitcoin/tree/master/NBitcoin.Altcoins",target:"_blank",rel:"noopener noreferrer"}},[e._v("NBitcoin"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/dgarage/NBXplorer",target:"_blank",rel:"noopener noreferrer"}},[e._v("NBxplorer"),r("OutboundLink")],1),e._v(", and "),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver",target:"_blank",rel:"noopener noreferrer"}},[e._v("BTCPayServer"),r("OutboundLink")],1),e._v(". (Use examples from other coins)")]),e._v(" "),r("li",[e._v("Create your own docker image ("),r("a",{attrs:{href:"https://hub.docker.com/r/btcpayserver/bitcoin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example for BTC"),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("li",[e._v("Create a docker-compose fragment ("),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/docker-compose-generator/docker-fragments/bitcoin.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example for BTC"),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("li",[e._v("Add your CryptoDefinition ("),r("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/docker-compose-generator/src/CryptoDefinition.cs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example for BTC"),r("OutboundLink")],1),e._v(")")])]),e._v(" "),r("p",[e._v("When testing your coin, "),r("strong",[e._v("DO NOT USE "),r("code",[e._v("build.sh")])]),e._v(", since it uses a pre-built docker image.")]),e._v(" "),r("p",[e._v("Instead, install "),r("a",{attrs:{href:"https://www.microsoft.com/net/download/windows",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core 3.1 SDK"),r("OutboundLink")],1),e._v(" and run:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_CRYPTO1")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"EXAMPLE-COIN"')]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_SUBNAME")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"test"')]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" docker-compose-generator/src\ndotnet run\n")])])]),r("p",[e._v("This will generate your docker-compose in the "),r("code",[e._v("Generated")]),e._v(" folder, which you can then run and test.")]),e._v(" "),r("p",[e._v("Note: BTCPay developers do not implement alternative coins on request. Adding a new coin explicitly depends on the community and developers of those coins. Furthermore, BTCPay developers do not spend excessive time testing nor maintaining the altcoins. If you're submitting a PR for a new coin, make sure that your image works. If the altcoin integration is not actively maintained it will be removed from BTCPay.")])])}),[],!1,null,null,null);t.default=n.exports}}]);