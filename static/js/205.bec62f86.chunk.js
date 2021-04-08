(this.webpackJsonpview=this.webpackJsonpview||[]).push([[205],{1752:function(e,a,t){"use strict";t.r(a);var n=t(12),r=t(13),l=t(15),o=t(14),i=t(1),c=t(0),s=t.n(c),u=t(64),m=t(63),d=t(65),b=t(198),p=t(321),h=t(584),f=t.n(h),v=t(591),g=t(26),E=t(405),j=t(1064),y=t(1075),C=t(1085),D=t.n(C),O=t(1086),k=t.n(O),w=t(1087),S=t.n(w),N=t(1088),L=t.n(N),R=t(1089),T=t.n(R),B=t(1090),F=t.n(B),I=t(1091),G=t.n(I),H=t(1092),V=t.n(H),A=t(1093),P=t.n(A),x=t(1094),J=t.n(x),z=t(1095),W=t.n(z),Z=function(e){var a=e.appearance,t=e.children,n=(e.transitionDuration,e.transitionState),r=e.onDismiss,l=e.animation,o=function(e){switch(e){case"fade":return y.Fade;case"flip":return y.Flip;case"rotate":return y.Rotate;case"zoom":return y.Zoom;case"bounce":return y.Bounce;case"roll":return y.Roll;case"light-speed":return y.LightSpeed;case"jump":return D.a;case"flash":return k.a;case"head-shake":return S.a;case"jello":return L.a;case"pulse":return T.a;case"rubber-band":return F.a;case"shake":return G.a;case"spin":return V.a;case"swing":return P.a;case"tada":return J.a;case"wobble":return W.a;default:return y.Slide}}(l.type),i=l.direction;return s.a.createElement(o,{left:"left"===i,right:"right"===i,top:"top"===i,bottom:"bottom"===i,when:"entered"===n},s.a.createElement(E.a,{variant:a,dismissible:!0,onClose:r},t))};var M=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(g.a,null,s.a.createElement(j.ToastProvider,{components:{Toast:Z},placement:this.props.notification.placement,animation:this.props.notification.animation},s.a.createElement(j.ToastConsumer,null,(function(a){var t=a.add;return s.a.createElement("span",{onClick:function(){return t(e.props.notification.message,{appearance:e.props.notification.variant,autoDismiss:e.props.notification.autoDismiss})}},e.props.children)}))))}}]),t}(s.a.Component),q=[{value:"inverse",label:"Inverse",color:"#333"},{value:"primary",label:"Primary",color:"#04a9f5"},{value:"info",label:"Info",color:"#3ebfea"},{value:"success",label:"Success",color:"#1de9b6"},{value:"warning",label:"Warning",color:"#f4c22b"},{value:"danger",label:"Danger",color:"#f44236"},{value:"dark",label:"Dark",color:"#c7cbce"},{value:"light",label:"Light",color:"#f2f2f2"}],K=[{value:"top-left",label:"Top Left"},{value:"top-right",label:"Top Right"},{value:"top-center",label:"Top Center"},{value:"bottom-left",label:"Bottom Left"},{value:"bottom-right",label:"Bottom Right"},{value:"bottom-center",label:"Bottom Center"}],Q=[{value:"fade",label:"Fade"},{value:"flip",label:"Flip"},{value:"rotate",label:"Rotate"},{value:"zoom",label:"Zoom"},{value:"bounce",label:"Bounce"},{value:"slide",label:"Slide"},{value:"roll",label:"Roll"},{value:"light-speed",label:"Light Speed"},{value:"jump",label:"Jump"},{value:"flash",label:"Flash"},{value:"head-shake",label:"Head Shake"},{value:"jello",label:"Jello"},{value:"pulse",label:"Pulse"},{value:"rubber-band",label:"Rubber Band"},{value:"shake",label:"Shake"},{value:"spin",label:"Spin"},{value:"swing",label:"Swing"},{value:"tada",label:"Tada"},{value:"wobble",label:"Wobble"}],U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#ccc";return{alignItems:"center",display:"flex",":before":{backgroundColor:e,borderRadius:10,content:'" "',display:"block",marginRight:8,height:10,width:10}}},X={control:function(e){return Object(i.a)(Object(i.a)({},e),{},{backgroundColor:"white"})},option:function(e,a){var t=a.data,n=a.isDisabled,r=a.isFocused,l=a.isSelected,o=f()(t.color);return Object(i.a)(Object(i.a)({},e),{},{backgroundColor:n?null:l?t.color:r?o.alpha(.1).css():null,color:n?"#ccc":l?f.a.contrast(o,"white")>2?"white":"black":t.color,cursor:n?"not-allowed":"default"})},input:function(e){return Object(i.a)(Object(i.a)({},e),U())},placeholder:function(e){return Object(i.a)(Object(i.a)({},e),U())},singleValue:function(e,a){var t=a.data;return Object(i.a)(Object(i.a)({},e),U(t.color))}},Y=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=a.call.apply(a,[this].concat(l))).state={variant:"inverse",placement:"top-right",autoDismiss:!0,animation:{type:"slide",direction:"top"},message:"Bootstrap Growl Turning standard Bootstrap alerts into awesome notification"},e.animationDirectionHandler=function(a){e.setState(Object(i.a)(Object(i.a)({},e.state),{},{animation:Object(i.a)(Object(i.a)({},e.state.animation),{},{direction:a})}))},e.handleChange=function(a){e.setState({message:a.target.value})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(g.a,null,s.a.createElement(u.a,null,s.a.createElement(m.a,null,s.a.createElement(d.a,null,s.a.createElement(d.a.Header,null,s.a.createElement(d.a.Title,{as:"h5"},"Growl Notification")),s.a.createElement(d.a.Body,null,s.a.createElement(u.a,{className:"justify-content-md-center"},s.a.createElement(m.a,{sm:12,md:7},s.a.createElement(b.a.Group,{controlId:"formPosition"},s.a.createElement(b.a.Label,null,"Position Variant"),s.a.createElement(v.a,{defaultValue:K[1],label:"Select Position",options:K,onChange:function(a){var t=a.value;return e.setState({placement:t})}})),s.a.createElement(b.a.Group,{controlId:"formColor"},s.a.createElement(b.a.Label,null,"Color Variant"),s.a.createElement(v.a,{defaultValue:q[0],label:"Select Variant",options:q,styles:X,onChange:function(a){var t=a.value;return e.setState({variant:t})}})),s.a.createElement(b.a.Group,{controlId:"formAnimation"},s.a.createElement(b.a.Label,null,"Animation Type"),s.a.createElement(v.a,{defaultValue:Q[5],label:"Select Variant",options:Q,onChange:function(a){var t=a.value;return e.setState(Object(i.a)(Object(i.a)({},e.state),{},{animation:Object(i.a)(Object(i.a)({},e.state.animation),{},{type:t})}))}})),s.a.createElement(b.a.Group,{controlId:"formDirectionRight"},s.a.createElement(b.a.Label,null,"Animation Direction")),s.a.createElement(b.a.Group,{controlId:"formDirectionRight"},s.a.createElement("div",{className:"radio radio-primary d-inline"},s.a.createElement("input",{type:"radio",name:"rdoDirection",id:"directionNone",checked:"none"===this.state.animation.direction,onChange:function(a){a.value;return e.animationDirectionHandler("none")}}),s.a.createElement("label",{htmlFor:"directionNone",className:"cr"},"None")),s.a.createElement("div",{className:"radio radio-primary d-inline"},s.a.createElement("input",{type:"radio",name:"rdoDirection",id:"directionRight",checked:"right"===this.state.animation.direction,onChange:function(a){a.value;return e.animationDirectionHandler("right")}}),s.a.createElement("label",{htmlFor:"directionRight",className:"cr"},"Right")),s.a.createElement("div",{className:"radio radio-primary d-inline"},s.a.createElement("input",{type:"radio",name:"rdoDirection",id:"directionLeft",checked:"left"===this.state.animation.direction,onChange:function(a){a.value;return e.animationDirectionHandler("left")}}),s.a.createElement("label",{htmlFor:"directionLeft",className:"cr"},"Left")),s.a.createElement("div",{className:"radio radio-primary d-inline"},s.a.createElement("input",{type:"radio",name:"rdoDirection",id:"directionTop",checked:"top"===this.state.animation.direction,onChange:function(a){a.value;return e.animationDirectionHandler("top")}}),s.a.createElement("label",{htmlFor:"directionTop",className:"cr"},"Top")),s.a.createElement("div",{className:"radio radio-primary d-inline"},s.a.createElement("input",{type:"radio",name:"rdoDirection",id:"directionBottom",checked:"bottom"===this.state.animation.direction,onChange:function(a){a.value;return e.animationDirectionHandler("bottom")}}),s.a.createElement("label",{htmlFor:"directionBottom",className:"cr"},"Bottom"))),s.a.createElement(b.a.Group,{controlId:"formBasicEmail"},s.a.createElement("div",{className:"switch switch-primary d-inline m-r-10"},s.a.createElement("input",{type:"checkbox",id:"icon-colored",checked:this.state.autoDismiss,onChange:function(){return e.setState((function(e){return{autoDismiss:!e.autoDismiss}}))}}),s.a.createElement("label",{htmlFor:"icon-colored",className:"cr"})),s.a.createElement(b.a.Label,null,"Auto Dismiss")),s.a.createElement(b.a.Group,{controlId:"exampleForm.ControlTextarea1"},s.a.createElement(b.a.Label,null,"Message"),s.a.createElement(b.a.Control,{as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),s.a.createElement(M,{notification:this.state},s.a.createElement(p.a,null,"Add Notification")))))))))}}]),t}(s.a.Component);a.default=Y}}]);
//# sourceMappingURL=205.bec62f86.chunk.js.map