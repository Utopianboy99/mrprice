(this["webpackJsonpmrp-app"]=this["webpackJsonpmrp-app"]||[]).push([[237],{382:function(t,n,i){"use strict";i.r(n),i.d(n,"ion_ripple_effect",(function(){return o}));var e=i(20),a=i(107),o=(i(34),function(){function t(t){Object(a.l)(this,t),this.type="bounded"}return t.prototype.addRipple=function(t,n){return Object(e.a)(this,void 0,void 0,(function(){var i=this;return Object(e.c)(this,(function(e){return[2,new Promise((function(e){Object(a.g)((function(){var o=i.el.getBoundingClientRect(),f=o.width,l=o.height,u=Math.sqrt(f*f+l*l),m=Math.max(l,f),p=i.unbounded?m:u+s,d=Math.floor(m*c),b=p/d,y=t-o.left,w=n-o.top;i.unbounded&&(y=.5*f,w=.5*l);var h=y-.5*d,g=w-.5*d,k=.5*f-y,v=.5*l-w;Object(a.m)((function(){var t=document.createElement("div");t.classList.add("ripple-effect");var n=t.style;n.top=g+"px",n.left=h+"px",n.width=n.height=d+"px",n.setProperty("--final-scale",""+b),n.setProperty("--translate-end",k+"px, "+v+"px"),(i.el.shadowRoot||i.el).appendChild(t),setTimeout((function(){e((function(){r(t)}))}),325)}))}))}))]}))}))},Object.defineProperty(t.prototype,"unbounded",{get:function(){return"unbounded"===this.type},enumerable:!0,configurable:!0}),t.prototype.render=function(){var t,n=Object(a.d)(this);return Object(a.i)(a.a,{role:"presentation",class:(t={},t[n]=!0,t.unbounded=this.unbounded,t)})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(a.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;animation:rippleAnimation 225ms forwards,fadeInAnimation 75ms forwards;will-change:transform,opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:fadeOutAnimation .15s forwards;animation:fadeOutAnimation .15s forwards}@-webkit-keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@keyframes rippleAnimation{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@-webkit-keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@keyframes fadeInAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@-webkit-keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}@keyframes fadeOutAnimation{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"},enumerable:!0,configurable:!0}),t}()),r=function(t){t.classList.add("fade-out"),setTimeout((function(){t.remove()}),200)},s=10,c=.5}}]);