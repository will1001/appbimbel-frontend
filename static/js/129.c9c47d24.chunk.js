(this.webpackJsonpview=this.webpackJsonpview||[]).push([[129],{160:function(e,a,t){"use strict";var n=t(12),r=t(13),o=t(15),s=t(14),i=t(0),c=t.n(i),l=t(240),u=t.n(l),d=t(241),f=t.n(d),h=t(244),m=t.n(h),p=t(245),b=t.n(p),v=t(246),y=t.n(v);function w(e){switch(e){case"classic":return f.a;case"balloon":return b.a;case"inline":return m.a;case"document":return y.a;default:return f.a}}var g=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(u.a,{editor:w(this.props.editor),data:this.props.html,onInit:function(a){"document"===e.props.editor&&(document.querySelector(".document-editor__toolbar").appendChild(a.ui.view.toolbar.element),window.editor=a)},onChange:function(e,a){},onBlur:function(e){},onFocus:function(e){}})}}]),t}(c.a.Component);a.a=g},1914:function(e,a,t){"use strict";t.r(a);var n=t(12),r=t(13),o=t(15),s=t(14),i=t(0),c=t.n(i),l=t(64),u=t(63),d=t(65),f=t(26),h=t(160),m=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(f.a,null,c.a.createElement(l.a,null,c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement(d.a.Header,null,c.a.createElement(d.a.Title,{as:"h5"},"Inline Editor")),c.a.createElement(d.a.Body,null,c.a.createElement(h.a,{html:'<h3>Walking the capitals of Europe: Warsaw</h3>\n        <figure class="image image-style-side">\n            <img alt="Picture of the Warsaw Old Town." src="https://ckeditor.com/assets/images/bg/umbrellas-e935d5c582.jpg" />\n            <figcaption>Medieval Old Town square, destroyed in 1944 & rebuilt after WWII.</figcaption>\n        </figure>\n        <p>If you enjoyed my previous articles in which we discussed wandering around <a href="#!" target="_blank" rel="noopener">Copenhagen</a> and <a href="#!" target="_blank" rel="noopener">Vilnius</a>, you\u2019ll definitely love exploring <a href="https://en.wikipedia.org/wiki/Warsaw" target="_blank" rel="noopener">Warsaw</a>.</p>\n        <h3>Time to put comfy sandals on!</h3>\n        <p>Best time to visit the city is July and August, when it\u2019s cool enough to not break a sweat and hot enough to enjoy summer. The city which has quite a combination of both old and modern textures is located by the river of Vistula.</p>\n        <p>The historic <strong>Old Town</strong>, which was reconstructed after the World War II, with its late 18th century characteristics, is a must-see. You can start your walk from the <strong>Nowy \u015awiat Street</strong> which will take you straight to the Old Town.</p>\n        <p>Then you can go to the <strong>Powi\u015ble</strong> area and take a walk on the newly renovated promenade on the riverfront. There are also lots of cafes, bars and restaurants where you can shake off the exhaustion of the day. On Sundays, there are many parks where you can enjoy nature or listen to pianists from around the world playing Chopin.</p>\n        <p>For museum lovers, you can add these to your list:</p>\n        <ul>\n            <li>POLIN</li>\n            <li>Warsaw Uprising Museum</li>\n            <li>Fryderyk Chopin Museum</li>\n        </ul>\n        <h3>Next destination</h3>\n        <p>We will go to Berlin and have a night\'s walk in the city that never sleeps! Make sure you subscribe to our newsletter!</p>',editor:"inline"}))))))}}]),t}(c.a.Component);a.default=m},59:function(e,a,t){"use strict";var n=t(0),r=t.n(n).a.createContext(null);r.displayName="CardContext",a.a=r},60:function(e,a,t){"use strict";var n=t(55),r=t(0),o=t.n(r),s=t(54),i=t.n(s);a.a=function(e){return o.a.forwardRef((function(a,t){return o.a.createElement("div",Object(n.a)({},a,{ref:t,className:i()(a.className,e)}))}))}},63:function(e,a,t){"use strict";var n=t(55),r=t(56),o=t(54),s=t.n(o),i=t(0),c=t.n(i),l=t(57),u=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,a){var t=e.bsPrefix,o=e.className,i=e.as,d=void 0===i?"div":i,f=Object(r.a)(e,["bsPrefix","className","as"]),h=Object(l.a)(t,"col"),m=[],p=[];return u.forEach((function(e){var a,t,n,r=f[e];if(delete f[e],"object"===typeof r&&null!=r){var o=r.span;a=void 0===o||o,t=r.offset,n=r.order}else a=r;var s="xs"!==e?"-"+e:"";a&&m.push(!0===a?""+h+s:""+h+s+"-"+a),null!=n&&p.push("order"+s+"-"+n),null!=t&&p.push("offset"+s+"-"+t)})),m.length||m.push(h),c.a.createElement(d,Object(n.a)({},f,{ref:a,className:s.a.apply(void 0,[o].concat(m,p))}))}));d.displayName="Col",a.a=d},64:function(e,a,t){"use strict";var n=t(55),r=t(56),o=t(54),s=t.n(o),i=t(0),c=t.n(i),l=t(57),u=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,a){var t=e.bsPrefix,o=e.className,i=e.noGutters,d=e.as,f=void 0===d?"div":d,h=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),m=Object(l.a)(t,"row"),p=m+"-cols",b=[];return u.forEach((function(e){var a,t=h[e];delete h[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&b.push(""+p+n+"-"+a)})),c.a.createElement(f,Object(n.a)({ref:a},h,{className:s.a.apply(void 0,[o,m,i&&"no-gutters"].concat(b))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},65:function(e,a,t){"use strict";var n=t(55),r=t(56),o=t(54),s=t.n(o),i=t(0),c=t.n(i),l=t(57),u=t(61),d=t(60),f=t(59),h=c.a.forwardRef((function(e,a){var t=e.bsPrefix,o=e.className,i=e.variant,u=e.as,d=void 0===u?"img":u,f=Object(r.a)(e,["bsPrefix","className","variant","as"]),h=Object(l.a)(t,"card-img");return c.a.createElement(d,Object(n.a)({ref:a,className:s()(i?h+"-"+i:h,o)},f))}));h.displayName="CardImg",h.defaultProps={variant:null};var m=h,p=Object(d.a)("h5"),b=Object(d.a)("h6"),v=Object(u.a)("card-body"),y=Object(u.a)("card-title",{Component:p}),w=Object(u.a)("card-subtitle",{Component:b}),g=Object(u.a)("card-link",{Component:"a"}),O=Object(u.a)("card-text",{Component:"p"}),j=Object(u.a)("card-header"),x=Object(u.a)("card-footer"),k=Object(u.a)("card-img-overlay"),N=c.a.forwardRef((function(e,a){var t=e.bsPrefix,o=e.className,u=e.bg,d=e.text,h=e.border,m=e.body,p=e.children,b=e.as,y=void 0===b?"div":b,w=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(l.a)(t,"card"),O=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return c.a.createElement(f.a.Provider,{value:O},c.a.createElement(y,Object(n.a)({ref:a},w,{className:s()(o,g,u&&"bg-"+u,d&&"text-"+d,h&&"border-"+h)}),m?c.a.createElement(v,null,p):p))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=m,N.Title=y,N.Subtitle=w,N.Body=v,N.Link=g,N.Text=O,N.Header=j,N.Footer=x,N.ImgOverlay=k;a.a=N}}]);
//# sourceMappingURL=129.c9c47d24.chunk.js.map