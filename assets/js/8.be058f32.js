(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{489:function(t,e,a){t.exports=a.p+"assets/img/Shopify1.f6a4a95c.png"},490:function(t,e,a){t.exports=a.p+"assets/img/Shopify2.fa63fe52.png"},491:function(t,e,a){t.exports=a.p+"assets/img/Shopify3.fca104bd.png"},492:function(t,e,a){t.exports=a.p+"assets/img/Shopify4.978c6974.png"},493:function(t,e,a){t.exports=a.p+"assets/img/Shopify5.e64cd444.png"},494:function(t,e,a){t.exports=a.p+"assets/img/Shopify5a.07953c20.png"},495:function(t,e,a){t.exports=a.p+"assets/img/Shopify6.a364c388.png"},496:function(t,e,a){t.exports=a.p+"assets/img/Shopify7.6fc61247.png"},497:function(t,e,a){t.exports=a.p+"assets/img/Shopify8.910659ee.png"},498:function(t,e,a){t.exports=a.p+"assets/img/Shopify9.49665ca0.png"},499:function(t,e,a){t.exports=a.p+"assets/img/Shopify10.f6360c10.png"},654:function(t,e,a){"use strict";a.r(e);var i=a(26),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"btcpay-server-and-shopify-integration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-server-and-shopify-integration"}},[t._v("#")]),t._v(" BTCPay Server and Shopify Integration")]),t._v(" "),i("p",[t._v("The following document guides you through setting up BTCPay Server with "),i("a",{attrs:{href:"https://www.shopify.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Shopify"),i("OutboundLink")],1),t._v(".")]),t._v(" "),i("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/0Z8vraKab64/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=0Z8vraKab64","data-id":"0Z8vraKab64"}},[i("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/0Z8vraKab64?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),i("h2",{attrs:{id:"prerequisites"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites:")]),t._v(" "),i("ul",[i("li",[t._v("Shopify account")]),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/Deployment/"}},[t._v("BTCPay Server")]),t._v(" self-hosted or run by a "),i("RouterLink",{attrs:{to:"/ThirdPartyHosting/"}},[t._v("third-party host")]),t._v(" v1.0.5.6 or later.")],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/CreateStore/"}},[t._v("Created BTCPay Server store")]),t._v(" with "),i("RouterLink",{attrs:{to:"/WalletSetup/"}},[t._v("wallet set up")])],1)]),t._v(" "),i("h2",{attrs:{id:"setting-up-btcpay-server-with-shopify"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-btcpay-server-with-shopify"}},[t._v("#")]),t._v(" Setting up BTCPay Server with Shopify")]),t._v(" "),i("ol",[i("li",[t._v("In your Shopify, go to Apps > Manage Private apps (at the bottom of the page) and "),i("code",[t._v("Create a private app")]),t._v(". If private apps are disabled, enable private apps development.")]),t._v(" "),i("li",[t._v("Fill in required  details (name and email) and click on the "),i("code",[t._v("Show inactive Admin API permissions")])]),t._v(" "),i("li",[t._v("Give "),i("code",[t._v("Read and write")]),t._v(" permission tp "),i("code",[t._v("Orders")]),t._v(" and "),i("code",[t._v("Save")])])]),t._v(" "),i("figure",[i("img",{attrs:{src:a(489),alt:"Shopify Setup 1"}})]),t._v(" "),i("figure",[i("img",{attrs:{src:a(490),alt:"Shopify Setup 2"}})]),t._v(" "),i("figure",[i("img",{attrs:{src:a(491),alt:"Shopify Setup 3"}})]),t._v(" "),i("figure",[i("img",{attrs:{src:a(492),alt:"Shopify Setup 4"}})]),t._v(" "),i("ol",{attrs:{start:"4"}},[i("li",[t._v("Copy the "),i("code",[t._v("Example URL")]),t._v(" from the Admin API section.")]),t._v(" "),i("li",[t._v("In your BTCPay Server go to Store > Settings > "),i("code",[t._v("Integrations")])]),t._v(" "),i("li",[t._v("Paste the "),i("code",[t._v("Example URL")]),t._v(" from Shopify and click "),i("code",[t._v("Connect to Shopify")])])]),t._v(" "),i("figure",[i("img",{attrs:{src:a(493),alt:"Shopify Setup 5"}})]),t._v(" "),i("figure",[i("img",{attrs:{src:a(494),alt:"Shopify Setup 5a"}})]),t._v(" "),i("ol",{attrs:{start:"7"}},[i("li",[t._v("On the BTCPay Server Integration page, copy the script shown in the yellow box. Go back to Shopify Settings > Checkout > Order processing > "),i("code",[t._v("Additional Scripts")]),t._v(" and paste the script (including the opening and closing tag "),i("code",[t._v("<\/script>")]),t._v(" ).")])]),t._v(" "),i("figure",[i("img",{attrs:{src:a(495),alt:"Shopify Setup 6"}})]),t._v(" "),i("figure",[i("img",{attrs:{src:a(496),alt:"Shopify Setup 7"}})]),t._v(" "),i("figure",[i("img",{attrs:{src:a(497),alt:"Shopify Setup 8"}})]),t._v(" "),i("ol",{attrs:{start:"7"}},[i("li",[t._v("Finally, in Shopify Settings > Payment Providers > Manual Payment Methods add a "),i("code",[t._v("Custom payment methods")]),t._v(" named  "),i("code",[t._v("Bitcoin with BTCPay Server")]),t._v(" and "),i("code",[t._v("Activate")]),t._v(" it.")])]),t._v(" "),i("figure",[i("img",{attrs:{src:a(498),alt:"Shopify Setup 9"}})]),t._v(" "),i("figure",[i("img",{attrs:{src:a(499),alt:"Shopify Setup 10"}})]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("Custom Payment method name "),i("strong",[t._v("must")]),t._v(" contain at least one of the following words: "),i("code",[t._v("bitcoin")]),t._v(", "),i("code",[t._v("btcpayserver")]),t._v(", "),i("code",[t._v("btcpay server")]),t._v(" or "),i("code",[t._v("btc")]),t._v(" to work.")])])])}),[],!1,null,null,null);e.default=o.exports}}]);