(this["webpackJsonpmrp-app"]=this["webpackJsonpmrp-app"]||[]).push([[144],{550:function(e,a,t){"use strict";t.r(a);var c=t(1),r=(t(551),t(73)),n=t(17),s=t(2),o=t(0),l=t.n(o);a.default=function(){var e=Object(o.useState)(),a=Object(c.a)(e,2),t=a[0],u=a[1],p=Object(r.g)(),m=Object(n.a)().websiteId;return Object(o.useEffect)((function(){window.klevu_webstorePopularTerms&&!t&&u(window.klevu_webstorePopularTerms)}),[t]),l.a.createElement(l.a.Fragment,null,t&&l.a.createElement("div",{className:"popular-searches-col col"},l.a.createElement("div",{className:"heading"},l.a.createElement(s.u,{className:"heading-4"},"Popular Searches")),l.a.createElement("div",{className:"popular-searches-items"},t&&t.map((function(e,a){return l.a.createElement(s.t,{key:"popular_term_".concat(a),className:"custom-hover",detail:!1,button:!0,onClick:function(){return p.push("/".concat(m,"/search/?q=").concat(e))}},l.a.createElement(s.M,{className:"body-copy2-dark-grey"},e))})))))}},551:function(e,a,t){}}]);