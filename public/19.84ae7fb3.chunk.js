(this["webpackJsonpmrp-app"]=this["webpackJsonpmrp-app"]||[]).push([[19],{487:function(e,t,a){"use strict";var n=a(156),r=a(73),c=a(62),o=a(0),l=a.n(o),i=l.a.lazy((function(){return Promise.resolve().then(a.bind(null,139))})),s=l.a.lazy((function(){return Promise.resolve().then(a.bind(null,54))}));t.a=l.a.memo((function(e){var t=e.identifier,a=e.pageBuilder,u=void 0===a||a,m=t||"unknown",f=Object(c.c)({identifier:t}),d=f.data,g=f.error,p=f.loading,b=Object(r.h)(),h=Object(o.useRef)(null),v=Object(o.useCallback)((function(e){if(e&&b.hash&&document.querySelector(b.hash)){var t=document.querySelector(b.hash);h.current=setTimeout((function(){var e=t.getBoundingClientRect().top+window.pageYOffset+-100;window.scrollTo({top:e,behavior:"smooth"})}),100)}}),[b.hash]);if(Object(o.useEffect)((function(){return function(){h.current&&clearTimeout(h.current)}}),[]),p)return l.a.createElement(l.a.Fragment,null);if(g)return l.a.createElement(i,{error:g,messageFormat:"Unable to load CMS page '".concat(m,"': {error}")});if(!d||!d.cmsPage)return l.a.createElement(i,{error:new Error("Unable to load CMS page '".concat(m,"'"))});var E=d.cmsPage;return l.a.createElement(l.a.Fragment,null,l.a.createElement(n.a,null,d&&d.cmsPage.metaTitle&&l.a.createElement("title",null,"".concat(d.cmsPage.metaTitle))),l.a.createElement("div",{className:"cms-page-container",ref:v},u&&null!==E.contentJson?l.a.createElement("div",{className:"cms-page"},l.a.createElement(o.Suspense,{fallback:l.a.Fragment},l.a.createElement(s,{data:E.contentJson}))):l.a.createElement("div",{className:"cms-page",dangerouslySetInnerHTML:{__html:E.content||""}})))}))},580:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(487),c=a(0),o=a.n(c),l=a(14),i=a(90),s=a(148);t.default=function(){var e=Object(l.a)().config,t=Object(s.a)(),a=t.emitNostoViewNotFound,c=t.getNostoPlacementsForPageTag;return Object(i.a)((function(){a()})),o.a.createElement("div",{className:"page"},o.a.createElement("div",{className:"error-404-content"},n.a.NOT_FOUND,o.a.createElement(r.a,{identifier:e.cms.core.pageNotFound}),c("not-found")))}}}]);