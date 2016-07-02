function TodoStore(){this.items=localStorage.todoItems?JSON.parse(localStorage.todoItems):[],this.add=function(t){this.items.push(t),this.updateLocalStorage()},this.remove=function(t){this.items.splice(t,1),this.updateLocalStorage()},this.edit=function(t,e){this.items[e]=t,this.updateLocalStorage()},this.updateLocalStorage=function(){localStorage.todoItems=JSON.stringify(this.items)}}!function(t,e){"use strict";function n(t,e,n){var r={};return r[t.key]=e,t.pos&&(r[t.pos]=n),r}function r(t,e){for(var n,r=e.length,i=t.length;r>i;)n=e[--r],e.splice(r,1),n.unmount()}function i(t,e){Object.keys(t.tags).forEach(function(n){var r=t.tags[n];A(r)?g(r,function(t){M(t,n,e)}):M(r,n,e)})}function o(t,e,n){var r,i=t._root;for(t._virts=[];i;)r=i.nextSibling,n?e.insertBefore(i,n._root):e.appendChild(i),t._virts.push(i),i=r}function a(t,e,n,r){for(var i,o=t._root,a=0;r>a;a++)i=o.nextSibling,e.insertBefore(o,n._root),o=i}function u(t,e,u){b(t,"each");var s,c=typeof _(t,"no-reorder")!==et||b(t,"no-reorder"),f=E(t),p=Q[f]||{tmpl:m(t)},d=ot.test(f),g=t.parentNode,h=document.createTextNode(""),v=C(t),y="option"===f.toLowerCase(),x=[],w=[],S="VIRTUAL"==t.tagName;u=ft.loopKeys(u),g.insertBefore(h,t),e.one("before-mount",function(){t.parentNode.removeChild(t),g.stub&&(g=e.root)}).on("update",function(){var m=ft(u.val,e),b=document.createDocumentFragment();A(m)||(s=m||!1,m=s?Object.keys(m).map(function(t){return n(u,t,m[t])}):[]);for(var _=0,C=m.length;C>_;_++){var k=m[_],M=c&&typeof k==nt&&!s,N=w.indexOf(k),L=~N&&M?N:_,E=x[L];k=!s&&u.key?n(u,k,_):k,!M&&!E||M&&!~N||!E?(E=new l(p,{parent:e,isLoop:!0,hasImpl:!!Q[f],root:d?g:t.cloneNode(),item:k},t.innerHTML),E.mount(),S&&(E._root=E.root.firstChild),_!=x.length&&x[_]?(S?o(E,g,x[_]):g.insertBefore(E.root,x[_].root),w.splice(_,0,k)):S?o(E,b):b.appendChild(E.root),x.splice(_,0,E),L=_):E.update(k,!0),L!==_&&M&&x[_]&&(S?a(E,g,x[_],t.childNodes.length):g.insertBefore(E.root,x[_].root),u.pos&&(E[u.pos]=_),x.splice(_,0,x.splice(L,1)[0]),w.splice(_,0,w.splice(L,1)[0]),!v&&E.tags&&i(E,_)),E._item=k,T(E,"_parent",e)}if(r(m,x),y){if(g.appendChild(b),ct&&!g.multiple)for(var O=0;O<g.length;O++)if(g[O].__riot1374){g.selectedIndex=O,delete g[O].__riot1374;break}}else g.insertBefore(b,h);v&&(e.tags[f]=x),w=m.slice()})}function s(t,e,n,r){$(t,function(t){if(1==t.nodeType){if(t.isLoop=t.isLoop||t.parentNode&&t.parentNode.isLoop||_(t,"each")?1:0,n){var i=C(t);i&&!t.isLoop&&n.push(N(i,{root:t,parent:e},t.innerHTML,e))}t.isLoop&&!r||K(t,e,[])}})}function c(t,e,n){function r(t,e,r){ft.hasExpr(e)&&n.push(O({dom:t,expr:e},r))}$(t,function(t){var n,i=t.nodeType;return 3==i&&"STYLE"!=t.parentNode.tagName&&r(t,t.nodeValue),1==i?(n=_(t,"each"))?(u(t,e,n),!1):(g(t.attributes,function(e){var n=e.name,i=n.split("__")[1];return r(t,e.value,{attr:i||n,bool:i}),i?(b(t,n),!1):void 0}),!C(t)&&void 0):void 0})}function l(t,n,r){function i(){var t=_&&y?p:v||p;g(N.attributes,function(e){var n=e.value;m[w(e.name)]=ft.hasExpr(n)?ft(n,t):n}),g(Object.keys($),function(e){m[w(e)]=ft($[e],t)})}function o(t){for(var e in C)typeof p[e]!==rt&&R(p,e)&&(p[e]=t[e])}function a(){p.parent&&y&&g(Object.keys(p.parent),function(t){var e=!at.test(t)&&I(H,t);(typeof p[t]===rt||e)&&(e||H.push(t),p[t]=p.parent[t])})}function u(t){p.update(t,!0)}function l(t){if(g(M,function(e){e[t?"mount":"unmount"]()}),v){var e=t?"on":"off";y?v[e]("unmount",p.unmount):v[e]("update",u)[e]("unmount",p.unmount)}}var f,p=U.observable(this),m=q(n.opts)||{},v=n.parent,y=n.isLoop,_=n.hasImpl,C=P(n.item),k=[],M=[],N=n.root,E=N.tagName.toLowerCase(),$={},H=[];t.name&&N._tag&&N._tag.unmount(!0),this.isMounted=!1,N.isLoop=y,N._tag=this,T(this,"_riot_id",++Z),O(this,{parent:v,root:N,opts:m},C),T(this,"tags",{}),g(N.attributes,function(t){var e=t.value;ft.hasExpr(e)&&($[t.name]=e)}),f=pt(t.tmpl,r),T(this,"update",function(t,e){return t=P(t),a(),t&&x(C)&&(o(t),C=t),O(p,t),i(),p.trigger("update",t),d(k,p),e&&p.parent?p.parent.one("updated",function(){p.trigger("updated")}):gt(function(){p.trigger("updated")}),this}),T(this,"mixin",function(){return g(arguments,function(t){var e;t=typeof t===et?U.mixin(t):t,h(t)?(e=new t,t=t.prototype):e=t,g(Object.getOwnPropertyNames(t),function(t){"init"!=t&&(p[t]=h(e[t])?e[t].bind(p):e[t])}),e.init&&e.init.bind(p)()}),this}),T(this,"mount",function(){i();var e=U.mixin(Y);if(e)for(var n in e)e.hasOwnProperty(n)&&p.mixin(e[n]);if(t.fn&&t.fn.call(p,m),c(f,p,k),l(!0),t.attrs&&j(t.attrs,function(t,e){S(N,t,e)}),(t.attrs||_)&&c(p.root,p,k),p.parent&&!y||p.update(C),p.trigger("before-mount"),y&&!_)N=f.firstChild;else{for(;f.firstChild;)N.appendChild(f.firstChild);N.stub&&(N=v.root)}T(p,"root",N),y&&s(p.root,p.parent,null,!0),!p.parent||p.parent.isMounted?(p.isMounted=!0,p.trigger("mount")):p.parent.one("mount",function(){D(p.root)||(p.parent.isMounted=p.isMounted=!0,p.trigger("mount"))})}),T(this,"unmount",function(t){var n,r=N,i=r.parentNode,o=J.indexOf(p);if(p.trigger("before-unmount"),~o&&J.splice(o,1),i){if(v)n=L(v),A(n.tags[E])?g(n.tags[E],function(t,e){t._riot_id==p._riot_id&&n.tags[E].splice(e,1)}):n.tags[E]=e;else for(;r.firstChild;)r.removeChild(r.firstChild);t?(b(i,tt),b(i,W)):i.removeChild(r)}this._virts&&g(this._virts,function(t){t.parentNode&&t.parentNode.removeChild(t)}),p.trigger("unmount"),l(),p.off("*"),p.isMounted=!1,delete N._tag}),s(f,this,M)}function f(e,n,r,i){r[e]=function(e){var o,a=i._parent,u=i._item;if(!u)for(;a&&!u;)u=a._item,a=a._parent;e=e||t.event,R(e,"currentTarget")&&(e.currentTarget=r),R(e,"target")&&(e.target=e.srcElement),R(e,"which")&&(e.which=e.charCode||e.keyCode),e.item=u,n.call(i,e)===!0||/radio|check/.test(r.type)||(e.preventDefault&&e.preventDefault(),e.returnValue=!1),e.preventUpdate||(o=u?L(a):i,o.update())}}function p(t,e,n){t&&(t.insertBefore(n,e),t.removeChild(e))}function d(t,e){g(t,function(t,n){var r=t.dom,i=t.attr,o=ft(t.expr,e),a=t.dom.parentNode;if(t.bool?o=!!o:null==o&&(o=""),t.value!==o){if(t.value=o,!i)return o+="",void(a&&("TEXTAREA"===a.tagName?(a.value=o,st||(r.nodeValue=o)):r.nodeValue=o));if("value"===i)return void(r.value=o);if(b(r,i),h(o))f(i,o,r,e);else if("if"==i){var u=t.stub,s=function(){p(u.parentNode,u,r)},c=function(){p(r.parentNode,r,u)};o?u&&(s(),r.inStub=!1,D(r)||$(r,function(t){t._tag&&!t._tag.isMounted&&(t._tag.isMounted=!!t._tag.trigger("mount"))})):(u=t.stub=u||document.createTextNode(""),r.parentNode?c():(e.parent||e).one("updated",c),r.inStub=!0)}else"show"===i?r.style.display=o?"":"none":"hide"===i?r.style.display=o?"none":"":t.bool?(r[i]=o,o&&S(r,i,i),ct&&"selected"===i&&"OPTION"===r.tagName&&(r.__riot1374=o)):(0===o||o&&typeof o!==nt)&&(z(i,X)&&i!=W&&(i=i.slice(X.length)),S(r,i,o))}})}function g(t,e){for(var n,r=t?t.length:0,i=0;r>i;i++)n=t[i],null!=n&&e(n,i)===!1&&i--;return t}function h(t){return typeof t===it||!1}function m(t){if(t.outerHTML)return t.outerHTML;var e=H("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}function v(t,e){if(typeof t.innerHTML!=rt)t.innerHTML=e;else{var n=(new DOMParser).parseFromString(e,"application/xml");t.appendChild(t.ownerDocument.importNode(n.documentElement,!0))}}function y(t){return~ut.indexOf(t)}function x(t){return t&&typeof t===nt}function b(t,e){t.removeAttribute(e)}function w(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})}function _(t,e){return t.getAttribute(e)}function S(t,e,n){t.setAttribute(e,n)}function C(t){return t.tagName&&Q[_(t,tt)||_(t,W)||t.tagName.toLowerCase()]}function k(t,e,n){var r=n.tags[e];r?(A(r)||r!==t&&(n.tags[e]=[r]),I(n.tags[e],t)||n.tags[e].push(t)):n.tags[e]=t}function M(t,e,n){var r,i=t.parent;i&&(r=i.tags[e],A(r)?r.splice(n,0,r.splice(r.indexOf(t),1)[0]):k(t,e,i))}function N(t,e,n,r){var i=new l(t,e,n),o=E(e.root),a=L(r);return i.parent=a,i._parent=r,k(i,o,a),a!==r&&k(i,o,r),e.root.innerHTML="",i}function L(t){for(var e=t;!C(e.root)&&e.parent;)e=e.parent;return e}function T(t,e,n,r){return Object.defineProperty(t,e,O({value:n,enumerable:!1,writable:!1,configurable:!0},r)),t}function E(t){var e=C(t),n=_(t,"name"),r=n&&!ft.hasExpr(n)?n:e?e.name:t.tagName.toLowerCase();return r}function O(t){for(var e,n=arguments,r=1;r<n.length;++r)if(e=n[r])for(var i in e)R(t,i)&&(t[i]=e[i]);return t}function I(t,e){return~t.indexOf(e)}function A(t){return Array.isArray(t)||t instanceof Array}function R(t,e){var n=Object.getOwnPropertyDescriptor(t,e);return typeof t[e]===rt||n&&n.writable}function P(t){if(!(t instanceof l||t&&typeof t.trigger==it))return t;var e={};for(var n in t)at.test(n)||(e[n]=t[n]);return e}function $(t,e){if(t){if(e(t)===!1)return;for(t=t.firstChild;t;)$(t,e),t=t.nextSibling}}function j(t,e){for(var n,r=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;n=r.exec(t);)e(n[1].toLowerCase(),n[2]||n[3]||n[4])}function D(t){for(;t;){if(t.inStub)return!0;t=t.parentNode}return!1}function H(t,e){return e?document.createElementNS("http://www.w3.org/2000/svg","svg"):document.createElement(t)}function F(t,e){return(e||document).querySelectorAll(t)}function B(t,e){return(e||document).querySelector(t)}function q(t){function e(){}return e.prototype=t,new e}function V(t){return _(t,"id")||_(t,"name")}function K(t,e,n){var r,i=V(t),o=function(o){I(n,i)||(r=A(o),o?(!r||r&&!I(o,t))&&(r?o.push(t):e[i]=[o,t]):e[i]=t)};i&&(ft.hasExpr(i)?e.one("mount",function(){i=V(t),o(e[i])}):o(e[i]))}function z(t,e){return t.slice(0,e.length)===e}function G(t,e,n){var r=Q[e],i=t._innerHTML=t._innerHTML||t.innerHTML;return t.innerHTML="",r&&t&&(r=new l(r,{root:t,opts:n},i)),r&&r.mount&&(r.mount(),I(J,r)||J.push(r)),r}var U={version:"v2.4.1",settings:{}},Z=0,J=[],Q={},Y="__global_mixin",X="riot-",W=X+"tag",tt="data-is",et="string",nt="object",rt="undefined",it="function",ot=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,at=/^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|parent|opts|trigger|o(?:n|ff|ne))$/,ut=["altGlyph","animate","animateColor","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","filter","font","foreignObject","g","glyph","glyphRef","image","line","linearGradient","marker","mask","missing-glyph","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tref","tspan","use"],st=0|(t&&t.document||{}).documentMode,ct=t&&!!t.InstallTrigger;U.observable=function(t){function e(t,e){for(var n,r,i=t.split(" "),o=i.length,a=0;o>a;a++)n=i[a],r=n.indexOf("."),n&&e(~r?n.substring(0,r):n,a,~r?n.slice(r+1):null)}t=t||{};var n={},r=Array.prototype.slice;return Object.defineProperties(t,{on:{value:function(r,i){return"function"!=typeof i?t:(e(r,function(t,e,r){(n[t]=n[t]||[]).push(i),i.typed=e>0,i.ns=r}),t)},enumerable:!1,writable:!1,configurable:!1},off:{value:function(r,i){return"*"!=r||i?e(r,function(t,e,r){if(i||r)for(var o,a=n[t],u=0;o=a&&a[u];++u)(o==i||r&&o.ns==r)&&a.splice(u--,1);else delete n[t]}):n={},t},enumerable:!1,writable:!1,configurable:!1},one:{value:function(e,n){function r(){t.off(e,r),n.apply(t,arguments)}return t.on(e,r)},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(i){for(var o,a=arguments.length-1,u=new Array(a),s=0;a>s;s++)u[s]=arguments[s+1];return e(i,function(e,i,a){o=r.call(n[e]||[],0);for(var s,c=0;s=o[c];++c)s.busy||(s.busy=1,a&&s.ns!=a||s.apply(t,s.typed?[e].concat(u):u),o[c]!==s&&c--,s.busy=0);n["*"]&&"*"!=e&&t.trigger.apply(t,["*",e].concat(u))}),t},enumerable:!1,writable:!1,configurable:!1}}),t},function(e){function n(t){return t.split(/[\/?#]/)}function r(t,e){var n=new RegExp("^"+e[C](/\*/g,"([^/?#]+?)")[C](/\.\./,".*")+"$"),r=t.match(n);return r?r.slice(1):void 0}function i(t,e){var n;return function(){clearTimeout(n),n=setTimeout(t,e)}}function o(t){g=i(f,1),T[_](k,g),T[_](M,g),E[_](R,p),t&&f(!0)}function a(){this.$=[],e.observable(this),$.on("stop",this.s.bind(this)),$.on("emit",this.e.bind(this))}function u(t){return t[C](/^\/|\/$/,"")}function s(t){return"string"==typeof t}function c(t){return(t||I.href)[C](x,"")}function l(t){return"#"==h[0]?(t||I.href||"").split(h)[1]||"":(I?c(t):t||"")[C](h,"")}function f(t){var e=0==H;if(!(H>=L)&&(H++,D.push(function(){var e=l();(t||e!=m)&&($[N]("emit",e),m=e)}),e)){for(;D.length;)D[0](),D.shift();H=0}}function p(t){if(!(1!=t.which||t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){for(var e=t.target;e&&"A"!=e.nodeName;)e=e.parentNode;!e||"A"!=e.nodeName||e[S]("download")||!e[S]("href")||e.target&&"_self"!=e.target||-1==e.href.indexOf(I.href.match(x)[0])||(e.href==I.href||e.href.split("#")[0]!=I.href.split("#")[0]&&("#"==h||0===c(e.href).indexOf(h))&&d(l(e.href),e.title||E.title))&&t.preventDefault()}}function d(t,e,n){return O?(t=h+u(t),e=e||E.title,n?O.replaceState(null,e,t):O.pushState(null,e,t),E.title=e,j=!1,f(),j):$[N]("emit",l(t))}var g,h,m,v,y,x=/^.+?\/\/+[^\/]+/,b="EventListener",w="remove"+b,_="add"+b,S="hasAttribute",C="replace",k="popstate",M="hashchange",N="trigger",L=3,T="undefined"!=typeof t&&t,E="undefined"!=typeof document&&document,O=T&&history,I=T&&(O.location||T.location),A=a.prototype,R=E&&E.ontouchstart?"touchstart":"click",P=!1,$=e.observable(),j=!1,D=[],H=0;A.m=function(t,e,n){!s(t)||e&&!s(e)?e?this.r(t,e):this.r("@",t):d(t,e,n||!1)},A.s=function(){this.off("*"),this.$=[]},A.e=function(t){this.$.concat("@").some(function(e){var n=("@"==e?v:y)(u(t),u(e));return"undefined"!=typeof n?(this[N].apply(null,[e].concat(n)),j=!0):void 0},this)},A.r=function(t,e){"@"!=t&&(t="/"+u(t),this.$.push(t)),this.on(t,e)};var F=new a,B=F.m.bind(F);B.create=function(){var t=new a,e=t.m.bind(t);return e.stop=t.s.bind(t),e},B.base=function(t){h=t||"#",m=l()},B.exec=function(){f(!0)},B.parser=function(t,e){t||e||(v=n,y=r),t&&(v=t),e&&(y=e)},B.query=function(){var t={},e=I.href||m;return e[C](/[?&](.+?)=([^&]*)/g,function(e,n,r){t[n]=r}),t},B.stop=function(){P&&(T&&(T[w](k,g),T[w](M,g),E[w](R,p)),$[N]("stop"),P=!1)},B.start=function(t){P||(T&&("complete"==document.readyState?o(t):T[_]("load",function(){setTimeout(function(){o(t)},1)})),P=!0)},B.base(),B.parser(),e.route=B}(U);var lt=function(t){function e(t){return t}function n(t,e){return e||(e=v),new RegExp(t.source.replace(/{/g,e[2]).replace(/}/g,e[3]),t.global?c:"")}function r(t){if(t===g)return h;var e=t.split(" ");if(2!==e.length||/[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(t))throw new Error('Unsupported brackets "'+t+'"');return e=e.concat(t.replace(/(?=[[\]()*+?.^$|])/g,"\\").split(" ")),e[4]=n(e[1].length>1?/{[\S\s]*?}/:h[4],e),e[5]=n(t.length>3?/\\({|})/g:h[5],e),e[6]=n(h[6],e),e[7]=RegExp("\\\\("+e[3]+")|([[({])|("+e[3]+")|"+p,c),e[8]=t,e}function i(t){return t instanceof RegExp?u(t):v[t]}function o(t){(t||(t=g))!==v[8]&&(v=r(t),u=t===g?e:n,v[9]=u(h[9])),m=t}function a(t){var e;t=t||{},e=t.brackets,Object.defineProperty(t,"brackets",{set:o,get:function(){return m},enumerable:!0}),s=t,o(e)}var u,s,c="g",l=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,f=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,p=f.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,d={"(":RegExp("([()])|"+p,c),"[":RegExp("([[\\]])|"+p,c),"{":RegExp("([{}])|"+p,c)},g="{ }",h=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+p,c),g,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],m=t,v=[];return i.split=function(t,e,n){function r(t){e||a?c.push(t&&t.replace(n[5],"$1")):c.push(t)}function i(t,e,n){var r,i=d[e];for(i.lastIndex=n,n=1;(r=i.exec(t))&&(!r[1]||(r[1]===e?++n:--n)););return n?t.length:i.lastIndex}n||(n=v);var o,a,u,s,c=[],l=n[6];for(a=u=l.lastIndex=0;o=l.exec(t);){if(s=o.index,a){if(o[2]){l.lastIndex=i(t,o[2],l.lastIndex);continue}if(!o[3])continue}o[1]||(r(t.slice(u,s)),u=l.lastIndex,l=n[6+(a^=1)],l.lastIndex=u)}return t&&u<t.length&&r(t.slice(u)),c},i.hasExpr=function(t){return v[4].test(t)},i.loopKeys=function(t){var e=t.match(v[9]);return e?{key:e[1],pos:e[2],val:v[0]+e[3].trim()+v[1]}:{val:t.trim()}},i.array=function(t){return t?r(t):v},Object.defineProperty(i,"settings",{set:a,get:function(){return s}}),i.settings="undefined"!=typeof U&&U.settings||{},i.set=o,i.R_STRINGS=f,i.R_MLCOMMS=l,i.S_QBLOCKS=p,i}(),ft=function(){function e(t,e){return t?(u[t]||(u[t]=r(t))).call(e,n):t}function n(t,n){e.errorHandler&&(t.riotData={tagName:n&&n.root&&n.root.tagName,_riot_id:n&&n._riot_id},e.errorHandler(t))}function r(t){var e=i(t);return"try{return "!==e.slice(0,11)&&(e="return "+e),new Function("E",e+";")}function i(t){var e,n=[],r=lt.split(t.replace(f,'"'),1);if(r.length>2||r[0]){var i,a,u=[];for(i=a=0;i<r.length;++i)e=r[i],e&&(e=1&i?o(e,1,n):'"'+e.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(u[a++]=e);e=2>a?u[0]:"["+u.join(",")+'].join("")'}else e=o(r[1],0,n);return n[0]&&(e=e.replace(p,function(t,e){return n[e].replace(/\r/g,"\\r").replace(/\n/g,"\\n")})),e}function o(t,e,n){function r(e,n){var r,i=1,o=d[e];for(o.lastIndex=n.lastIndex;r=o.exec(t);)if(r[0]===e)++i;else if(!--i)break;n.lastIndex=i?t.length:o.lastIndex}if(t=t.replace(l,function(t,e){return t.length>2&&!e?s+(n.push(t)-1)+"~":t}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var i,o=[],u=0;t&&(i=t.match(c))&&!i.index;){var f,p,g=/,|([[{(])|$/g;for(t=RegExp.rightContext,f=i[2]?n[i[2]].slice(1,-1).trim().replace(/\s+/g," "):i[1];p=(i=g.exec(t))[1];)r(p,g);p=t.slice(0,i.index),t=RegExp.rightContext,o[u++]=a(p,1,f)}t=u?u>1?"["+o.join(",")+'].join(" ").trim()':o[0]:a(t,e)}return t}function a(t,e,n){var r;return t=t.replace(h,function(t,e,n,i,o){return n&&(i=r?0:i+t.length,"this"!==n&&"global"!==n&&"window"!==n?(t=e+'("'+n+g+n,i&&(r="."===(o=o[i])||"("===o||"["===o)):i&&(r=!m.test(o.slice(i)))),t}),r&&(t="try{return "+t+"}catch(e){E(e,this)}"),n?t=(r?"function(){"+t+"}.call(this)":"("+t+")")+'?"'+n+'":""':e&&(t="function(v){"+(r?t.replace("return ","v="):"v=("+t+")")+';return v||v===0?v:""}.call(this)'),t}var u={};e.haveRaw=lt.hasRaw,e.hasExpr=lt.hasExpr,e.loopKeys=lt.loopKeys,e.errorHandler=null;var s="⁗",c=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,l=RegExp(lt.S_QBLOCKS,"g"),f=/\u2057/g,p=/\u2057(\d+)~/g,d={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},g='"in this?this:'+("object"!=typeof t?"global":"window")+").",h=/[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,m=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;return e.parse=function(t){return t},e.version=lt.version="v2.4.0",e}(),pt=function ht(){function ht(n,r){var i=n&&n.match(/^\s*<([-\w]+)/),o=i&&i[1].toLowerCase(),a=H("div",y(o));return n=e(n,r),u.test(o)?a=t(a,n,o):v(a,n),a.stub=!0,a}function t(t,e,n){var r="o"===n[0],i=r?"select>":"table>";if(t.innerHTML="<"+i+e.trim()+"</"+i,i=t.firstChild,r)i.selectedIndex=-1;else{var o=a[n];o&&1===i.childElementCount&&(i=B(o,i))}return i}function e(t,e){if(!n.test(t))return t;var a={};return e=e&&e.replace(i,function(t,e,n){return a[e]=a[e]||n,""}).trim(),t.replace(o,function(t,e,n){return a[e]||n||""}).replace(r,function(t,n){return e||n||""})}var n=/<yield\b/i,r=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi,i=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,o=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,a={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},u=st&&10>st?ot:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;return ht}(),dt=function(e){if(!t)return{add:function(){},inject:function(){}};var n=function(){var t=H("style");S(t,"type","text/css");var e=B("style[type=riot]");return e?(e.id&&(t.id=e.id),e.parentNode.replaceChild(t,e)):document.getElementsByTagName("head")[0].appendChild(t),t}(),r=n.styleSheet,i="";return Object.defineProperty(e,"styleNode",{value:n,writable:!0}),{add:function(t){i+=t},inject:function(){i&&(r?r.cssText+=i:n.innerHTML+=i,i="")}}}(U),gt=function(t){var e=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame;if(!e||/iP(ad|hone|od).*OS 6/.test(t.navigator.userAgent)){var n=0;e=function(t){var e=Date.now(),r=Math.max(16-(e-n),0);setTimeout(function(){t(n=e+r)},r)}}return e}(t||{});U.util={brackets:lt,tmpl:ft},U.mixin=function(){var t={},e=t[Y]={},n=0;return function(r,i,o){if(x(r))return void U.mixin("__unnamed_"+n++,r,!0);var a=o?e:t;if(!i){if(typeof a[r]===rt)throw new Error("Unregistered mixin: "+r);return a[r]}h(i)?(O(i.prototype,a[r]||{}),a[r]=i):a[r]=O(a[r]||{},i)}}(),U.tag=function(t,e,n,r,i){return h(r)&&(i=r,/^[\w\-]+\s?=/.test(n)?(r=n,n=""):r=""),n&&(h(n)?i=n:dt.add(n)),t=t.toLowerCase(),Q[t]={name:t,tmpl:e,attrs:r,fn:i},t},U.tag2=function(t,e,n,r,i){return n&&dt.add(n),Q[t]={name:t,tmpl:e,attrs:r,fn:i},t},U.mount=function(t,e,n){function r(t){var e="";return g(t,function(t){/[^-\w]/.test(t)||(t=t.trim().toLowerCase(),e+=",["+tt+'="'+t+'"],['+W+'="'+t+'"]')}),e}function i(){var t=Object.keys(Q);return t+r(t)}function o(t){if(t.tagName){var r=_(t,tt)||_(t,W);e&&r!==e&&(r=e,S(t,tt,e),S(t,W,e));var i=G(t,r||t.tagName.toLowerCase(),n);i&&s.push(i)}else t.length&&g(t,o)}var a,u,s=[];if(dt.inject(),x(e)&&(n=e,e=0),typeof t===et?("*"===t?t=u=i():t+=r(t.split(/, */)),a=t?F(t):[]):a=t,"*"===e){if(e=u||i(),a.tagName)a=F(e,a);else{var c=[];g(a,function(t){c.push(F(e,t))}),a=c}e=0}return o(a),s},U.update=function(){return g(J,function(t){t.update()})},U.vdom=J,U.Tag=l,typeof exports===nt?module.exports=U:typeof define===it&&typeof define.amd!==rt?define(function(){return U}):t.riot=U}("undefined"!=typeof window?window:void 0),riot.tag2("auto-complete-input",'<p> <input type="text" oninput="{change}" value="{query}"> </p>',"","",function(t){var e=this;this.parent.on("resultsFiltered",function(t){e.query=t,e.update()}),this.change=function(t){riot.route(t.target.value)}.bind(this)}),riot.tag2("google","<auto-complete-input></auto-complete-input> <results></results>","","",function(t){}),riot.tag2("page","<h1>{item.title}</h1> <h2>{item.link}</h2> <p>{item.desc}</p>","","",function(t){this.item=googleData[this.opts.index]}),riot.tag2("result",'<div onclick="{goToDetails}"> <h2 class="title">{item.title}</h2> <span class="link"><a href="http://{item.link}">{item.link}</a></span> <p class="desc">{item.desc}</p> </div>','result .title,[riot-tag="result"] .title,[data-is="result"] .title{ color:blue; font-size: 20px; margin-bottom: 0; } result .link a,[riot-tag="result"] .link a,[data-is="result"] .link a{ color:green; font-size: 10px; display: block; text-decoration: none; } result .desc,[riot-tag="result"] .desc,[data-is="result"] .desc{ color:black; font-style:italic; font-size: 15px; }',"",function(t){this.item=this.opts.result,this.goToDetails=function(){riot.route("page/"+this.opts.index)}.bind(this)}),riot.tag2("results",'<div each="{result in filteredResults}"> <result result="{result}" index="{result.index}"></result> </div>',"","",function(t){this.filteredResults=[];var e=this;String.prototype.contains=function(t){return this.toString().toLowerCase().indexOf(t.toLowerCase())!=-1},googleData=googleData.map(function(t,e){return t.index=e,t}),this.parent.on("inputChanged",function(t){t?e.filteredResults=googleData.filter(function(e){return e.title.contains(t)||e.desc.contains(t)||e.link.contains(t)}):e.filteredResults=[],e.parent.trigger("resultsFiltered",t),e.update()})}),riot.tag2("todo",'<div> <input type="text" name="todoinput" onkeydown="{addIfEnter}"> <ul> <li each="{todo, i in todoStore.items}" onclick="{showInInput}" data-index="{i}"> <span if="{!editMode}">{todo}</span> <input if="{editMode}" value="{todo}"> <a onclick="{remove}" data-index="{i}">x</a> </li> </ul> <input type="text" ng-model="fuck">{fuck -10} </div>',"","",function(t){this.todoStore=new TodoStore,this.addIfEnter=function(t){var e=13==t.keyCode;return e&&(this.todoStore.add(this.todoinput.value),this.todoinput.value=""),!0}.bind(this),this.remove=function(t){this.todoStore.remove(t.target.dataset.index)}.bind(this),this.showInInput=function(t){console.log(this.todoStore.items[t.item.i].editMode)}.bind(this),this.edit=function(t){}.bind(this)});var mixins={preventNonNumbers:function(t){t.target.value=t.target.value.replace(/\D/g,"")},phoneMask:function(t){var e=t.target.value,n=function(t){return!/^[0-9\/]{0,}$/.test(t)},r=function(t){return/^[0-9]{2}$/.test(t)},i=function(t){return/^[0-9]{2}\/[0-9]{2}$/.test(t)},o=function(e){return t.target.value.replace(/\D/g,"").length>8},a=function(t){var e=t.replace(/\D/g,"");return e[0]>3||(e.slice(0,2)>31||(e[2]>1||(e.slice(2,4)>12||e.slice(4,8)>(new Date).getFullYear())))},u=function(t){return mixins.phoneMaskPrevoiusValue=mixins.phoneMaskPrevoiusValue||t,t.length<mixins.phoneMaskPrevoiusValue.length},s=function(){t.target.value=mixins.phoneMaskPrevoiusValue||""},c=function(){t.target.value=t.target.value+"/"};n(e)||o()||a(e)?s():u(e)||(r(e)&&c(),i(e)&&c()),mixins.phoneMaskPrevoiusValue=t.target.value},ngModel:function(){var t=this;document.querySelectorAll("[ng-model]").forEach(function(e){var n=e.getAttribute("ng-model");t[n]=null,e.oninput=function(e){t[n]=e.target.value,t.update()}})}};riot.route.start(!0);var currentPage=null,riotMount=riot.mount;riot.mount=function(){var t=riotMount.apply(this,arguments);return currentPage=t[0],activateMixins(),t},riot.route("page/*",function(t){riot.mount("main","page",{index:t})}),riot.route("todo",function(){riot.mount("main","todo")}),riot.route(function(t){currentPage&&"google"==currentPage.opts.riotTag||riot.mount("main","google",{query:t}),currentPage.trigger("inputChanged",t)});var activateMixins=function(){currentPage.mixin(mixins),currentPage.ngModel()},googleData=[{title:"Egypt",desc:"mother of the world",link:"www.egypt.eg"},{title:"Dubai",desc:"capital of beauty",link:"www.dubai.ae"},{title:"Cairo",desc:"The most crowded ever",link:"www.cairo.eg"},{title:"Sharja",desc:"Cheap place",link:"www.sharja.ae"},{title:"Russia",desc:"mother Russia",link:"www.russia.ra"},{title:"Alexandria",desc:"I love you, I miss you",link:"www.Alex.al"},{title:"Israil",desc:"may Allah destroy it",link:"www.Israil.il"}];