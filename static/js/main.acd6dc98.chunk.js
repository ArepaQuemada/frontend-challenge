(this["webpackJsonpfrontend-challenge"]=this["webpackJsonpfrontend-challenge"]||[]).push([[0],{125:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),o=t.n(c),l=(t(92),t(16)),i=t(11),m=t(155),s=t(157),u=t(158),p=t(166),d=t(165),b=t(159),f=t(64),E=t.n(f),x=t(66),g=t.n(x),v=t(67),h=t.n(v),j=t(65),O=t.n(j),y=t(60),C=t.n(y),N=Object(m.a)((function(e){var a;return{root:{padding:"20px"},boxContainer:(a={},Object(i.a)(a,e.breakpoints.down("sm"),{flexDirection:"column"}),Object(i.a)(a,e.breakpoints.up("sm"),{flexDirection:"row",justifyContent:"center"}),a),boxNumber:{borderRadius:"50%",width:"17px",height:"17px",textAlign:"center",backgroundColor:e.palette.secondary.main,color:e.palette.primary.light,fontSize:"10px"},menu:Object(i.a)({},e.breakpoints.up("md"),{display:"none"}),person:Object(i.a)({verticalAlign:"middle"},e.breakpoints.down("md"),{display:"none"}),cartIcon:Object(i.a)({},e.breakpoints.up("md"),{order:2}),input:Object(i.a)({},e.breakpoints.up("md"),{order:1}),text:{fontSize:"13px",lineHeight:"18px"}}}));function k(e){var a=e.itemsCart,t=N();return r.a.createElement(s.a,{className:t.root},r.a.createElement(u.a,{container:!0,alignItems:"center"},r.a.createElement(u.a,{item:!0,xs:4,sm:1},r.a.createElement(E.a,{fontSize:"large",className:t.menu})),r.a.createElement(u.a,{item:!0,xs:4,sm:2},r.a.createElement("img",{src:C.a,alt:"logo.svg"})),r.a.createElement(u.a,{item:!0,xs:4,sm:4,className:t.cartIcon},r.a.createElement(p.a,{display:"flex",justifyContent:"center"},r.a.createElement(p.a,{className:t.person},r.a.createElement(O.a,null),r.a.createElement("span",{className:t.text},"Minha Conta")),r.a.createElement(g.a,null),r.a.createElement(p.a,{className:t.boxNumber},r.a.createElement("span",null,a)))),r.a.createElement(u.a,{item:!0,xs:12,md:5,order:-1,className:t.input},r.a.createElement(d.a,{fullWidth:!0,label:"O que est\xe1 procurando?",InputProps:{endAdornment:r.a.createElement(b.a,{position:"start"},r.a.createElement(h.a,{fontSize:"large"}))}}))))}var w=t(68),S=t.n(w),F=(t(97),t(69)),I=t.n(F),z=t(70),W=t.n(z),P=t(160),A=t(129),R=Object(m.a)((function(e){return{root:{zIndex:5,color:e.palette.primary.light,padding:"20px"},image:{opacity:"0.55"}}}));function q(){var e=R(),a=Object(P.a)("(min-width:960px)")?W.a:I.a,t=r.a.createElement(S.a,null,r.a.createElement("div",{className:"awssld__content"},r.a.createElement("div",{className:e.root},r.a.createElement(A.a,{variant:"h5"},"Ol\xe1, o que voc\xea est\xe1 buscando?"),r.a.createElement(A.a,{variant:"h4"},"Criar ou migrar seu e-commerce?")),r.a.createElement("img",{src:a,className:e.image,alt:"banner.jpg"})),r.a.createElement("div",null,"2"),r.a.createElement("div",null,"3"));return r.a.createElement(r.a.Fragment,null,t)}var D=t(161),M=t(162),T=t(163),B=t(167),G=t(71),J=t.n(G),$=t(72),_=t.n($),H=Object(m.a)((function(e){return{root:Object(i.a)({width:"160px",flexGrow:1,borderRadius:"0%",border:"none",boxShadow:"none"},e.breakpoints.up("md"),{padding:"20px"}),media:{height:"135px"},price:{fontWeight:"bolder",fontSize:"18px"},button:{"&:hover":{backgroundColor:e.palette.primary.main,opacity:"0.8"}}}}));function L(e){var a=e.item,t=H(),c=Object(n.useContext)(ce),o=Object(l.a)(c,2),i=o[0],m=o[1],s=a.imageUrl,u=Object(l.a)(a.installments,1)[0],d=(u=void 0===u?{}:u).quantity,b=(u.value,a.listPrice,a.price),f=(a.productId,a.productName),E=a.stars;return r.a.createElement(D.a,{className:t.root},r.a.createElement(M.a,{className:t.media,image:s}),r.a.createElement(T.a,null,r.a.createElement(A.a,{variant:"caption"},f),r.a.createElement(p.a,null,[1,2,3,4,5].map((function(e,a){return a<E?r.a.createElement(J.a,{color:"secondary",fontSize:"small"}):r.a.createElement(_.a,{color:"secondary",fontSize:"small"})}))),r.a.createElement(A.a,{className:t.price},"por R$ ",b),r.a.createElement(A.a,null,"ou em ",d,"x de R$ 28,87"),r.a.createElement(B.a,{variant:"contained",color:"primary",onClick:function(){m(i+1)},className:t.button},"COMPRAR")))}var U=t(40),V=t.n(U),K=t(73),Q=t(74),X=t.n(Q);t(116),t(117);var Y=t(75),Z=Object(m.a)((function(e){return{root:Object(i.a)({padding:"20px"},e.breakpoints.down("md"),{paddingTop:"10px",paddingLeft:"10px"}),background:{backgroundColor:e.palette.primary.main},carouselContainer:{display:"flex"}}}));function ee(){var e=Z(),a=(function(e){var a=Object(n.useState)(null),t=Object(l.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var a=Object(K.a)(V.a.mark((function a(){var t;return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,X.a.get(e);case 2:t=a.sent,c(t);case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),r}("https://corebiz-test.herokuapp.com/api/v1/products")||{}).data,t=void 0===a?[]:a,c=function(e,a){var t=0,n=[],r=[];return e.forEach((function(e){n.push(e),++t===a&&(t=0,r.push({array:n}),n=[])})),r},o=c(t,Object(P.a)("(max-width:600px)")?2:4);return r.a.createElement(s.a,{className:e.root,maxWidth:"md"},r.a.createElement(A.a,{variant:"h5"},"Mais Vendidos"),r.a.createElement(Y.Carousel,{showStatus:!1},o.map((function(a,t){return r.a.createElement("div",{className:e.carouselContainer},a.array.map((function(e,a){return r.a.createElement(L,{item:e,key:a})})))}))))}var ae=t(76),te=t.n(ae),ne=Object(m.a)((function(e){return{root:{backgroundColor:e.palette.primary.light},boxItem:Object(i.a)({},e.breakpoints.down("sm"),{width:"100%"}),boxContainer:Object(i.a)({padding:"16px"},e.breakpoints.up("md"),{textAlign:"center"}),buttonContainer:Object(i.a)({},e.breakpoints.up("md"),{marginBottom:"20px"}),button:{"&:hover":{backgroundColor:e.palette.primary.main,opacity:"0.7"}}}}));function re(){var e=ne(),a=Object(P.a)("(max-width:960px)"),t=Object(n.useState)(null),c=Object(l.a)(t,2),o=c[0],i=c[1],m=Object(n.useState)(null),u=Object(l.a)(m,2),b=u[0],f=u[1];Object(n.useEffect)((function(){i(!1),f(!1)}),[]);return r.a.createElement(s.a,{className:e.root,disableGutters:!0,maxWidth:!0},r.a.createElement(p.a,{className:e.boxContainer},r.a.createElement(A.a,{variant:"h6"},"Participe de nossas news com promo\xe7\xf5es e novidades!"),r.a.createElement(p.a,{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"},r.a.createElement(p.a,{className:e.boxItem},r.a.createElement(d.a,{label:"Digite seu nome",variant:"outlined",type:"text",fullWidth:a,error:o,onChange:function(e){var a=!e.target.value;i(a)},helperText:"Preencha com seu nome completo"})),r.a.createElement(p.a,{className:e.boxItem},r.a.createElement(d.a,{label:"Digite seu email",variant:"outlined",type:"email",fullWidth:a,error:b,onChange:function(e){var a=!te.a.validate(e.target.value);f(a)},helperText:"Preencha com um e-mail v\xe1lido"})),r.a.createElement(p.a,{className:"".concat(e.boxItem," ").concat(e.buttonContainer)},r.a.createElement(B.a,{className:e.button,variant:"contained",color:"primary",fullWidth:a,size:"large",disabled:o||b},"Eu quero!")))))}var ce=r.a.createContext("");var oe=function(){var e=Object(n.useState)(0),a=Object(l.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:"App"},r.a.createElement(ce.Provider,{value:[t,c]},r.a.createElement(k,{itemsCart:t}),r.a.createElement(q,null),r.a.createElement(ee,null),r.a.createElement(re,null)))},le=t(77),ie=t(164),me=Object(le.a)({palette:{primary:{main:"#000000",light:"#F2F2F2",dark:"#FFFFFF"},secondary:{main:"#F8475F"}}});o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie.a,{theme:me},r.a.createElement(oe,null))),document.getElementById("root"))},60:function(e,a,t){e.exports=t.p+"static/media/logo.db8102f4.svg"},69:function(e,a,t){e.exports=t.p+"static/media/mobile-banner.303001bb.jpg"},70:function(e,a,t){e.exports=t.p+"static/media/desktop-banner.cfc6af47.jpg"},87:function(e,a,t){e.exports=t(125)},92:function(e,a,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.acd6dc98.chunk.js.map