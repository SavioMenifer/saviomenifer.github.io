(()=>{var t={374:()=>{class t extends HTMLElement{connectedCallback(){this.videoId=this.getAttribute("videoid");let e=this.querySelector(".lty-playbtn");if(this.playLabel=e&&e.textContent.trim()||this.getAttribute("playlabel")||"Play",this.style.backgroundImage||(this.posterUrl=`https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg`,t.addPrefetch("preload",this.posterUrl,"image"),this.style.backgroundImage=`url("${this.posterUrl}")`),e||(e=document.createElement("button"),e.type="button",e.classList.add("lty-playbtn"),this.append(e)),!e.textContent){const t=document.createElement("span");t.className="lyt-visually-hidden",t.textContent=this.playLabel,e.append(t)}this.addEventListener("pointerover",t.warmConnections,{once:!0}),this.addEventListener("click",(t=>this.addIframe()))}static addPrefetch(t,e,n){const o=document.createElement("link");o.rel=t,o.href=e,n&&(o.as=n),document.head.append(o)}static warmConnections(){t.preconnected||(t.addPrefetch("preconnect","https://www.youtube-nocookie.com"),t.addPrefetch("preconnect","https://www.google.com"),t.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),t.addPrefetch("preconnect","https://static.doubleclick.net"),t.preconnected=!0)}addIframe(){const t=new URLSearchParams(this.getAttribute("params")||[]);t.append("autoplay","1");const e=document.createElement("iframe");e.width=560,e.height=315,e.title=this.playLabel,e.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",e.allowFullscreen=!0,e.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${t.toString()}`,this.append(e),this.classList.add("lyt-activated"),this.querySelector("iframe").focus()}}customElements.define("lite-youtube",t)}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}(()=>{"use strict";var t=function(){function t(){this._listeners={}}return t.prototype.addEventListener=function(t,e){var n=this._listeners;void 0===n[t]&&(n[t]=[]),-1===n[t].indexOf(e)&&n[t].push(e)},t.prototype.removeEventListener=function(t,e){var n=this._listeners[t];if(void 0!==n){var o=n.indexOf(e);-1!==o&&n.splice(o,1)}},t.prototype.dispatchEvent=function(t){var e=this._listeners[t.type];if(void 0!==e){t.target=this;for(var n=e.slice(0),o=0,r=n.length;o<r;o++)n[o].call(this,t)}},t}();function e(t){return"TouchEvent"in window&&t instanceof TouchEvent}var o={passive:!1},r=function(){function n(e){var n=this;this._isDragging=!1,this._eventDispatcher=new t,this._friction=.1,this._dragStartX=0,this._dragStartY=0,this._dragLastX=0,this._dragLastY=0,this._accumulatedX=0,this._accumulatedY=0,this._dragDeltaX=0,this._dragDeltaY=0,this._dragLastDeltaX=0,this._dragLastDeltaY=0,this._velocityX=0,this._velocityY=0,this._requestAnimationFrameId=-1,this._$el=e,this._updateVelocity=function(){if(!n._isDragging&&i(n._velocityX)&&i(n._velocityY))n._eventDispatcher.dispatchEvent({type:"inertiaend",deltaY:0,deltaX:0});else if(n._requestAnimationFrameId=requestAnimationFrame(n._updateVelocity),n._isDragging)n._dragLastDeltaX=n._dragDeltaX,n._dragLastDeltaY=n._dragDeltaY,n._dragDeltaX=n._dragLastX,n._dragDeltaY=n._dragLastY,n._velocityX=n._dragDeltaX-n._dragLastDeltaX,n._velocityY=n._dragDeltaY-n._dragLastDeltaY;else{var t=n._velocityX,e=n._velocityY;n._velocityX*=1-n._friction,n._velocityY*=1-n._friction,n._dragLastX+=t,n._dragLastY+=e,n._accumulatedX+=t,n._accumulatedY+=e,n._eventDispatcher.dispatchEvent({type:"inertiamove",dragStartX:n._dragStartX,dragStartY:n._dragStartY,deltaY:e,deltaX:t,accumulatedX:n._accumulatedX,accumulatedY:n._accumulatedY})}}.bind(this),this._onDragStart=this._handleDragStart.bind(this),this._onDragMove=this._handleDragMove.bind(this),this._onDragEnd=this._handleDragEnd.bind(this),this._$el.addEventListener("mousedown",this._onDragStart),this._$el.addEventListener("touchstart",this._onDragStart)}return Object.defineProperty(n.prototype,"friction",{set:function(t){this._friction=t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isDragging",{get:function(){return this._isDragging},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isInertiaMoving",{get:function(){return!(this._isDragging||i(this._velocityX)&&i(this._velocityY))},enumerable:!1,configurable:!0}),n.prototype.addEventListener=function(t,e){this._eventDispatcher.addEventListener(t,e)},n.prototype.removeEventListener=function(t,e){this._eventDispatcher.removeEventListener(t,e)},n.prototype.stop=function(){this._velocityX=0,this._velocityY=0,cancelAnimationFrame(this._requestAnimationFrameId)},n.prototype.forceDragEnd=function(){document.removeEventListener("mousemove",this._onDragMove),document.removeEventListener("touchmove",this._onDragMove,o),document.removeEventListener("mouseup",this._onDragEnd),document.removeEventListener("touchend",this._onDragEnd),this._isDragging=!1,this._eventDispatcher.dispatchEvent({type:"dragcancel",dragStartX:this._dragStartX,dragStartY:this._dragStartY,accumulatedX:this._accumulatedX,accumulatedY:this._accumulatedY})},n.prototype.destroy=function(){this.stop(),this.forceDragEnd(),this._$el.removeEventListener("mousedown",this._onDragStart),this._$el.removeEventListener("touchstart",this._onDragStart)},n.prototype._handleDragStart=function(t){if(!(t.target instanceof Element&&null!==t.target.getAttribute("data-ignore-dragging"))){document.removeEventListener("mousemove",this._onDragMove),document.removeEventListener("touchmove",this._onDragMove,o),document.removeEventListener("mouseup",this._onDragEnd),document.removeEventListener("touchend",this._onDragEnd);var n=e(t)?t.touches[0]:t;this._isDragging=!0,this._accumulatedX=0,this._accumulatedY=0,this._dragStartX=n.clientX,this._dragStartY=n.clientY,this._dragLastX=n.clientX,this._dragLastY=n.clientY,this._eventDispatcher.dispatchEvent({type:"dragstart",dragStartX:this._dragStartX,dragStartY:this._dragStartY,deltaY:0,deltaX:0,accumulatedX:this._accumulatedX,accumulatedY:this._accumulatedY}),this.stop(),this._updateVelocity(),document.addEventListener("mousemove",this._onDragMove),document.addEventListener("touchmove",this._onDragMove,o),document.addEventListener("mouseup",this._onDragEnd),document.addEventListener("touchend",this._onDragEnd)}},n.prototype._handleDragMove=function(t){t.preventDefault();var n=e(t)?t.touches[0]:t,o=n.clientX-this._dragLastX,r=n.clientY-this._dragLastY;this._accumulatedX+=o,this._accumulatedY+=r,this._dragLastX=n.clientX,this._dragLastY=n.clientY,this._eventDispatcher.dispatchEvent({type:"dragmove",dragStartX:this._dragStartX,dragStartY:this._dragStartY,deltaY:r,deltaX:o,accumulatedX:this._accumulatedX,accumulatedY:this._accumulatedY})},n.prototype._handleDragEnd=function(){this.forceDragEnd(),this._eventDispatcher.dispatchEvent({type:"dragend",dragStartX:this._dragStartX,dragStartY:this._dragStartY,deltaY:0,deltaX:0,accumulatedX:this._accumulatedX,accumulatedY:this._accumulatedY})},n}();function i(t){return Math.abs(t)<.001}const a=r;function s(t){return t.split("-")[0]}function l(t){return t.split("-")[1]}function c(t){return["top","bottom"].includes(s(t))?"x":"y"}function d(t){return"y"===t?"height":"width"}function u(t,e,n){let{reference:o,floating:r}=t;const i=o.x+o.width/2-r.width/2,a=o.y+o.height/2-r.height/2,u=c(e),f=d(u),h=o[f]/2-r[f]/2,m="x"===u;let g;switch(s(e)){case"top":g={x:i,y:o.y-r.height};break;case"bottom":g={x:i,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:a};break;case"left":g={x:o.x-r.width,y:a};break;default:g={x:o.x,y:o.y}}switch(l(e)){case"start":g[u]-=h*(n&&m?-1:1);break;case"end":g[u]+=h*(n&&m?-1:1)}return g}function f(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function h(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function m(t,e){var n;void 0===e&&(e={});const{x:o,y:r,platform:i,rects:a,elements:s,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:m=!1,padding:g=0}=e,p=f(g),y=s[m?"floating"===u?"reference":"floating":u],v=h(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(y)))||n?y:y.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(s.floating)),boundary:c,rootBoundary:d,strategy:l})),_=h(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===u?{...a.floating,x:o,y:r}:a.reference,offsetParent:await(null==i.getOffsetParent?void 0:i.getOffsetParent(s.floating)),strategy:l}):a[u]);return{top:v.top-_.top+p.top,bottom:_.bottom-v.bottom+p.bottom,left:v.left-_.left+p.left,right:_.right-v.right+p.right}}const g=Math.min,p=Math.max;function y(t,e,n){return p(t,g(e,n))}const v=t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:o=0}=null!=t?t:{},{x:r,y:i,placement:a,rects:s,platform:l}=e;if(null==n)return{};const u=f(o),h={x:r,y:i},m=c(a),g=d(m),p=await l.getDimensions(n),v="y"===m?"top":"left",_="y"===m?"bottom":"right",w=s.reference[g]+s.reference[m]-h[m]-s.floating[g],x=h[m]-s.reference[m],b=await(null==l.getOffsetParent?void 0:l.getOffsetParent(n)),L=b?"y"===m?b.clientHeight||0:b.clientWidth||0:0,E=w/2-x/2,D=u[v],X=L-p[g]-u[_],Y=L/2-p[g]/2+E,S=y(D,Y,X);return{data:{[m]:S,centerOffset:Y-S}}}}),_={left:"right",right:"left",bottom:"top",top:"bottom"};function w(t){return t.replace(/left|right|bottom|top/g,(t=>_[t]))}function x(t,e,n){void 0===n&&(n=!1);const o=l(t),r=c(t),i=d(r);let a="x"===r?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[i]>e.floating[i]&&(a=w(a)),{main:a,cross:w(a)}}const b={start:"end",end:"start"};function L(t){return t.replace(/start|end/g,(t=>b[t]))}const E=["top","right","bottom","left"].reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]),D=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,r,i,a;const{x:c,y:d,rects:u,middlewareData:f,placement:h,platform:g,elements:p}=e,{alignment:y=null,allowedPlacements:v=E,autoAlignment:_=!0,...w}=t,b=function(t,e,n){return(t?[...n.filter((e=>l(e)===t)),...n.filter((e=>l(e)!==t))]:n.filter((t=>s(t)===t))).filter((n=>!t||l(n)===t||!!e&&L(n)!==n))}(y,_,v),D=await m(e,w),X=null!=(n=null==(o=f.autoPlacement)?void 0:o.index)?n:0,Y=b[X];if(null==Y)return{};const{main:S,cross:R}=x(Y,u,await(null==g.isRTL?void 0:g.isRTL(p.floating)));if(h!==Y)return{x:c,y:d,reset:{placement:b[0]}};const A=[D[s(Y)],D[S],D[R]],T=[...null!=(r=null==(i=f.autoPlacement)?void 0:i.overflows)?r:[],{placement:Y,overflows:A}],P=b[X+1];if(P)return{data:{index:X+1,overflows:T},reset:{placement:P}};const C=T.slice().sort(((t,e)=>t.overflows[0]-e.overflows[0])),M=null==(a=C.find((t=>{let{overflows:e}=t;return e.every((t=>t<=0))})))?void 0:a.placement,O=null!=M?M:C[0].placement;return O!==h?{data:{index:X+1,overflows:T},reset:{placement:O}}:{}}}},X=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o,placement:r,rects:i,platform:a,elements:d}=e,u=function(t,e,n,o){void 0===o&&(o=!1);const r=s(t),i=l(t),a="x"===c(t),d=["left","top"].includes(r)?-1:1,u=o&&a?-1:1,f="function"==typeof n?n({...e,placement:t}):n;let{mainAxis:h,crossAxis:m,alignmentAxis:g}="number"==typeof f?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return i&&"number"==typeof g&&(m="end"===i?-1*g:g),a?{x:m*u,y:h*d}:{x:h*d,y:m*u}}(r,i,t,await(null==a.isRTL?void 0:a.isRTL(d.floating)));return{x:n+u.x,y:o+u.y,data:u}}}};const Y=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r}=e,{mainAxis:i=!0,crossAxis:a=!1,limiter:l={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...d}=t,u={x:n,y:o},f=await m(e,d),h=c(s(r)),g=function(t){return"x"===t?"y":"x"}(h);let p=u[h],v=u[g];if(i){const t="y"===h?"bottom":"right";p=y(p+f["y"===h?"top":"left"],p,p-f[t])}if(a){const t="y"===g?"bottom":"right";v=y(v+f["y"===g?"top":"left"],v,v-f[t])}const _=l.fn({...e,[h]:p,[g]:v});return{..._,data:{x:_.x-n,y:_.y-o}}}}};function S(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function R(t){if(null==t)return window;if(!S(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function A(t){return R(t).getComputedStyle(t)}function T(t){return S(t)?"":t?(t.nodeName||"").toLowerCase():""}function P(t){return t instanceof R(t).HTMLElement}function C(t){return t instanceof R(t).Element}function M(t){return"undefined"!=typeof ShadowRoot&&(t instanceof R(t).ShadowRoot||t instanceof ShadowRoot)}function O(t){const{overflow:e,overflowX:n,overflowY:o}=A(t);return/auto|scroll|overlay|hidden/.test(e+o+n)}function H(t){return["table","td","th"].includes(T(t))}function q(t){const e=navigator.userAgent.toLowerCase().includes("firefox"),n=A(t);return"none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||["transform","perspective"].includes(n.willChange)||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter}function I(){return!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}const W=Math.min,k=Math.max,V=Math.round;function j(t,e,n){var o,r,i,a;void 0===e&&(e=!1),void 0===n&&(n=!1);const s=t.getBoundingClientRect();let l=1,c=1;e&&P(t)&&(l=t.offsetWidth>0&&V(s.width)/t.offsetWidth||1,c=t.offsetHeight>0&&V(s.height)/t.offsetHeight||1);const d=C(t)?R(t):window,u=!I()&&n,f=(s.left+(u&&null!=(o=null==(r=d.visualViewport)?void 0:r.offsetLeft)?o:0))/l,h=(s.top+(u&&null!=(i=null==(a=d.visualViewport)?void 0:a.offsetTop)?i:0))/c,m=s.width/l,g=s.height/c;return{width:m,height:g,top:h,right:f+m,bottom:h+g,left:f,x:f,y:h}}function B(t){return(e=t,(e instanceof R(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function N(t){return C(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function $(t){return j(B(t)).left+N(t).scrollLeft}function F(t,e,n){const o=P(e),r=B(e),i=j(t,o&&function(t){const e=j(t);return V(e.width)!==t.offsetWidth||V(e.height)!==t.offsetHeight}(e),"fixed"===n);let a={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(o||!o&&"fixed"!==n)if(("body"!==T(e)||O(r))&&(a=N(e)),P(e)){const t=j(e,!0);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}else r&&(s.x=$(r));return{x:i.left+a.scrollLeft-s.x,y:i.top+a.scrollTop-s.y,width:i.width,height:i.height}}function U(t){return"html"===T(t)?t:t.assignedSlot||t.parentNode||(M(t)?t.host:null)||B(t)}function z(t){return P(t)&&"fixed"!==getComputedStyle(t).position?t.offsetParent:null}function G(t){const e=R(t);let n=z(t);for(;n&&H(n)&&"static"===getComputedStyle(n).position;)n=z(n);return n&&("html"===T(n)||"body"===T(n)&&"static"===getComputedStyle(n).position&&!q(n))?e:n||function(t){let e=U(t);for(M(e)&&(e=e.host);P(e)&&!["html","body"].includes(T(e));){if(q(e))return e;e=e.parentNode}return null}(t)||e}function J(t){if(P(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=j(t);return{width:e.width,height:e.height}}function K(t){const e=U(t);return["html","body","#document"].includes(T(e))?t.ownerDocument.body:P(e)&&O(e)?e:K(e)}function Q(t,e){var n;void 0===e&&(e=[]);const o=K(t),r=o===(null==(n=t.ownerDocument)?void 0:n.body),i=R(o),a=r?[i].concat(i.visualViewport||[],O(o)?o:[]):o,s=e.concat(a);return r?s:s.concat(Q(a))}function Z(t,e,n){return"viewport"===e?h(function(t,e){const n=R(t),o=B(t),r=n.visualViewport;let i=o.clientWidth,a=o.clientHeight,s=0,l=0;if(r){i=r.width,a=r.height;const t=I();(t||!t&&"fixed"===e)&&(s=r.offsetLeft,l=r.offsetTop)}return{width:i,height:a,x:s,y:l}}(t,n)):C(e)?function(t,e){const n=j(t,!1,"fixed"===e),o=n.top+t.clientTop,r=n.left+t.clientLeft;return{top:o,left:r,x:r,y:o,right:r+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e,n):h(function(t){var e;const n=B(t),o=N(t),r=null==(e=t.ownerDocument)?void 0:e.body,i=k(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=k(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0);let s=-o.scrollLeft+$(t);const l=-o.scrollTop;return"rtl"===A(r||n).direction&&(s+=k(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}(B(t)))}function tt(t){const e=Q(t),n=["absolute","fixed"].includes(A(t).position)&&P(t)?G(t):t;return C(n)?e.filter((t=>C(t)&&function(t,e){const n=null==e||null==e.getRootNode?void 0:e.getRootNode();if(null!=t&&t.contains(e))return!0;if(n&&M(n)){let n=e;do{if(n&&t===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(t,n)&&"body"!==T(t))):[]}const et={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const i=[..."clippingAncestors"===n?tt(e):[].concat(n),o],a=i[0],s=i.reduce(((t,n)=>{const o=Z(e,n,r);return t.top=k(o.top,t.top),t.right=W(o.right,t.right),t.bottom=W(o.bottom,t.bottom),t.left=k(o.left,t.left),t}),Z(e,a,r));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const r=P(n),i=B(n);if(n===i)return e;let a={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if((r||!r&&"fixed"!==o)&&(("body"!==T(n)||O(i))&&(a=N(n)),P(n))){const t=j(n,!0);s.x=t.x+n.clientLeft,s.y=t.y+n.clientTop}return{...e,x:e.x-a.scrollLeft+s.x,y:e.y-a.scrollTop+s.y}},isElement:C,getDimensions:J,getOffsetParent:G,getDocumentElement:B,getElementRects:t=>{let{reference:e,floating:n,strategy:o}=t;return{reference:F(e,G(n),o),floating:{...J(n),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===A(t).direction};function nt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}n(374);var ot,rt,it,at,st,lt=.1,ct=document.querySelector("#dragMe"),dt=document.querySelector("#container"),ut=document.querySelector(".tooltip-container"),ft=document.querySelector("#arrow"),ht=document.querySelector(".tooltip"),mt=document.querySelector(".tooltip-text"),gt=new a(ct),pt=!1,yt="fixed",vt=window.matchMedia("(min-width: 60em)");function _t(){ot=dt.getBoundingClientRect(),rt=ot.left,it=ot.top,at=window.innerWidth-ct.offsetWidth,st=window.innerHeight-ct.offsetHeight,yt=vt.matches?"sticky":"fixed",pt&&xt()}function wt(t){pt||(dt.style.position=yt,ct.style.transition="transform 0s",pt=!0);var e=ct.getBoundingClientRect(),n=t.deltaX+e.left,o=t.deltaY+e.top,r=1,i=1,a=0,s=0;"inertiamove"===t.type&&(n<0||n>at)&&(r=.8,a=n<0?0-n:n>at?at-n:0),"inertiamove"===t.type&&(o<0||o>st)&&(i=.8,s=o<0?0-o:o>st?st-o:0);var l=t.deltaX*r+a*lt+e.left-rt,c=t.deltaY*i+s*lt+e.top-it;ct.style.transform="translate( "+l+"px, "+c+"px )",bt(),Lt(l+rt,c+it)}function xt(){var t=ct.getBoundingClientRect(),e=t.left,n=t.top,o=e<0?0-e:e>at?at-e:0,r=n<0?0-n:n>st?st-n:0,i=o*lt+t.left-rt,a=r*lt+t.top-it;ct.style.transform="translate( "+i+"px, "+a+"px )",bt(),Lt(i+rt,a+it),function(t,e){var n=document.elementFromPoint(t,e);if(n&&"mii-slot"===n.className){var o=Et.getBoundingClientRect();ct.style.transition="transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",ct.style.transform="translate( "+(o.left-rt)+"px, "+(o.top-it)+"px )",dt.style.position="absolute",pt=!1}}(i+rt,a+it),(i<0||i>at||a<0||a>st)&&(Math.abs(o)>1||Math.abs(r)>1)&&requestAnimationFrame(xt)}function bt(){((t,e,n)=>(async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:a}=n,s=await(null==a.isRTL?void 0:a.isRTL(e));let l=await a.getElementRects({reference:t,floating:e,strategy:r}),{x:c,y:d}=u(l,o,s),f=o,h={};for(let n=0;n<i.length;n++){const{name:m,fn:g}=i[n],{x:p,y,data:v,reset:_}=await g({x:c,y:d,initialPlacement:o,placement:f,strategy:r,middlewareData:h,rects:l,platform:a,elements:{reference:t,floating:e}});c=null!=p?p:c,d=null!=y?y:d,h={...h,[m]:{...h[m],...v}},_&&("object"==typeof _&&(_.placement&&(f=_.placement),_.rects&&(l=!0===_.rects?await a.getElementRects({reference:t,floating:e,strategy:r}):_.rects),({x:c,y:d}=u(l,f,s))),n=-1)}return{x:c,y:d,placement:f,strategy:r,middlewareData:h}})(t,e,{platform:et,...n}))(ct,ut,{middleware:[Y(),D(),X(10),v({element:ft})]}).then((function(t){var e=t.x,n=t.y,o=t.placement,r=t.middlewareData;ut.style.transform="translate( "+e+"px, "+n+"px )";var i,a,s,l=r.arrow,c=l.x,d=l.y,u={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(ft.style,(s="-4px",(a=u)in(i={left:null!=c?"".concat(c,"px"):"",top:null!=d?"".concat(d,"px"):""})?Object.defineProperty(i,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[a]=s,i))}))}function Lt(t,e){var n=document.elementFromPoint(t,e),o=n?n.getAttribute("chat"):null;o?(mt.innerHTML=o,ht.style.transform="scale(1, 1)",ht.style.opacity="1"):(ht.style.transform="scale(0, 0)",ht.style.opacity="0")}window.onload=_t,window.onresize=_t,gt.addEventListener("dragmove",wt),gt.addEventListener("inertiamove",wt),gt.addEventListener("dragend",xt),gt.addEventListener("inertiaend",xt);var Et=document.querySelector(".mii-slot"),Dt=document.querySelector(".slider"),Xt={top:0,left:0,x:0,y:0},Yt=function(t){Dt.style.cursor="grabbing",Dt.style.userSelect="none",Xt={left:Dt.scrollLeft,top:Dt.scrollTop,x:t.clientX,y:t.clientY},document.addEventListener("mousemove",St),document.addEventListener("mouseup",Rt)},St=function(t){var e=t.clientX-Xt.x,n=t.clientY-Xt.y;Dt.scrollTop=Xt.top-n,Dt.scrollLeft=Xt.left-e},Rt=function t(){document.removeEventListener("mousemove",St),document.removeEventListener("mouseup",t),Dt.style.cursor="grab",Dt.style.removeProperty("user-select")};Dt&&document.addEventListener("DOMContentLoaded",(function(){var t,e=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return nt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?nt(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}(Dt.getElementsByTagName("img"));try{for(e.s();!(t=e.n()).done;){var n=t.value;n.setAttribute("draggable","false"),n.setAttribute("onmousedown","return false")}}catch(t){e.e(t)}finally{e.f()}Dt.addEventListener("mousedown",Yt)}))})()})();