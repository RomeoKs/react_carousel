(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var i=a(4),n=a.n(i),s=a(2),c=a(1),l=(a(9),a(10),a(0)),r=function(e){var t=e.images,a=Object(c.useState)(1),i=Object(s.a)(a,2),n=i[0],r=i[1],u=Object(c.useState)(130),b=Object(s.a)(u,2),j=b[0],m=b[1],o=Object(c.useState)(3),d=Object(s.a)(o,2),p=d[0],h=d[1],O=Object(c.useState)(3),x=Object(s.a)(O,2),_=x[0],v=x[1],g=Object(c.useState)(300),N=Object(s.a)(g,2),f=N[0],y=N[1],C=Object(c.useState)(!1),S=Object(s.a)(C,2),F=S[0],I=S[1],k=Object(c.useState)(0),w=Object(s.a)(k,2),R=w[0],T=w[1],W=Object(c.useState)(p*j),E=Object(s.a)(W,2),A=E[0],D=E[1];Object(c.useEffect)((function(){var e=document.querySelector(".toolTip");if(e){var t=document.querySelector("#itemWidth"),a=(Number(t.value)-Number(t.min))/(Number(t.max)-Number(t.min))*(Number(t.clientWidth)-Number(e.clientWidth));e.style.left="".concat(a,"px"),e.style.top="-".concat(e.clientHeight,"px")}}),[n]),Object(c.useEffect)((function(){D(p*j),T(0)}),[p,j]),Object(c.useEffect)((function(){F&&T(0)}),[F]);var J=function(e){I(JSON.parse(e.target.value))},M=t.length*j-p*j,q={width:"".concat(A,"px"),height:"".concat(j,"px"),transform:"translateX(".concat(R,"px)"),transition:"all ".concat(f,"ms")},B={width:"".concat(j,"px")},H=Math.abs(R)===Number(M),X=0===R;return Object(l.jsxs)("div",{className:"Carousel",children:[Object(l.jsxs)("div",{className:"Carousel__container",children:[Object(l.jsx)("button",{type:"button",className:"button button-prev",onClick:function(){T((function(e){var t=e+_*j;return F&&t>0?-M:Math.min(0,t)}))},disabled:!F&&X,children:"<"}),Object(l.jsx)("div",{className:"Carousel__list",children:Object(l.jsx)("ul",{className:"Carousel__items",style:q,children:t.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("img",{src:e,alt:"1",style:B})},e)}))})}),Object(l.jsx)("button",{type:"button",className:"button button-next","data-cy":"next",onClick:function(){T((function(e){var t=e-_*j;return F?t<-M?M=0:t>0?-M:t:Math.max(-M,t)}))},disabled:!F&&H,children:">"})]}),Object(l.jsxs)("div",{className:"inputs inputs__container",children:[Object(l.jsxs)("label",{htmlFor:"itemWidth",className:"inputs__labels",children:[Object(l.jsx)("div",{className:"input__labels-title",children:"Item width (px):"}),Object(l.jsx)("div",{className:"input__labels-min",children:100}),Object(l.jsxs)("div",{className:"input__labels-slider",children:[Object(l.jsx)("input",{type:"range",id:"itemWidth",min:"100",max:"160",value:j,onChange:function(e){var t=e.target.value,a=parseInt(t,10);m(Number(e.target.value)),r(a)}}),Object(l.jsx)("div",{className:"toolTip",children:j})]}),Object(l.jsx)("div",{className:"input__labels-max",children:160})]}),Object(l.jsxs)("label",{htmlFor:"itemNumber",className:"inputs__labels",children:[Object(l.jsx)("div",{className:"input__labels-title",children:"Items in frame:"}),Object(l.jsx)("div",{className:"input__labels-min",children:1}),Object(l.jsxs)("div",{className:"input__labels-slider",children:[Object(l.jsx)("input",{type:"range",id:"itemNumber",min:"1",max:"5",value:p,onChange:function(e){var t=e.target.value,a=parseInt(t,10);h(Number(e.target.value)),r(a)}}),Object(l.jsx)("div",{className:"toolTip",children:p})]}),Object(l.jsx)("div",{className:"input__labels-max",children:5})]}),Object(l.jsxs)("label",{htmlFor:"stepId",className:"inputs__labels",children:[Object(l.jsx)("div",{className:"input__labels-title",children:"Step:"}),Object(l.jsx)("div",{className:"input__labels-min",children:1}),Object(l.jsx)("input",{type:"range",id:"stepId",min:"1",max:p,value:_,onChange:function(e){v(Number(e.target.value))}}),Object(l.jsx)("div",{className:"input__labels-max",children:p})]}),Object(l.jsxs)("label",{htmlFor:"animationDuration",className:"inputs__labels",children:[Object(l.jsx)("div",{className:"input__labels-title",children:"Animation Duration (ms):"}),Object(l.jsx)("div",{className:"input__labels-min",children:"0.1s"}),Object(l.jsx)("input",{type:"range",id:"animationDuration",min:"100",max:"1000",value:f,onChange:function(e){y(Number(e.target.value))}}),Object(l.jsx)("div",{className:"input__labels-max",children:"1s"})]}),Object(l.jsxs)("div",{className:"inputs__container-radio",children:[Object(l.jsx)("div",{className:"input__labels-title",children:"Infinite rotation:"}),Object(l.jsxs)("label",{htmlFor:"infiniteRotationTrue",children:[Object(l.jsx)("input",{type:"radio",name:"infiniteRotation",id:"infiniteRotationTrue",value:"true",checked:!0===F,onChange:J}),"Yes"]}),Object(l.jsxs)("label",{htmlFor:"infiniteRotationFalse",children:[Object(l.jsx)("input",{type:"radio",name:"infiniteRotation",id:"infiniteRotationFalse",value:"false",checked:!1===F,onChange:J}),"No"]})]})]})]})},u=function(){var e=Object(c.useState)(["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]),t=Object(s.a)(e,1)[0];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("h1",{className:"App__title","data-cy":"title",children:["Carousel with ",t.length," images"]}),Object(l.jsx)(r,{images:t})]})};n.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.289430ec.chunk.js.map