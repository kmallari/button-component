(this["webpackJsonpbutton-component"]=this["webpackJsonpbutton-component"]||[]).push([[0],[,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),s=t(5),o=t.n(s),r=(t(10),t(4),t(11),t(0)),l=function(e){var a=e.variant,t=void 0===a?"default":a,c=e.shadow,n=void 0!==c&&c,s=e.disabled,o=void 0!==s&&s,l=e.iconKey,d=void 0===l?"":l,i=e.iconPos,m=void 0===i?"left":i,j=e.size,b=void 0===j?"md":j,x=e.color,u=void 0===x?"default":x,h=e.text,g=void 0===h?"Button":h,f="";switch(b){case"sm":f="py-1 px-3";break;case"md":f="py-2 px-4";break;case"lg":f="py-3 px-5";break;default:f=""}var O="",p="shadow-lg";n||(p="shadow-none");var N,y="bg-".concat((O="primary"===u?{static:"blue-600",hover:"bg-blue-700",text:"text-white"}:"secondary"===u?{static:"gray-600",hover:"bg-gray-700",text:"text-white"}:"danger"===u?{static:"red-400",hover:"bg-red-500",text:"text-white"}:{static:"gray-300",hover:"bg-gray-400",text:"text-gray-900"}).static," hover:").concat(O.hover," ").concat(O.text," font-semibold ").concat(f," rounded-md transition-all font-sans font-thin flex ").concat(p),v="bg-transparent hover:bg-blue-100 hover:border-blue-500 text-blue-700 font-semibold ".concat(f," border border-blue-500 hover:border-transparent rounded-md transition-all flex ").concat(p),w="bg-transparent hover:bg-blue-100 text-blue-700 font-semibold ".concat(f," border hover:border-transparent rounded-md transition-all border-opacity-0 flex ").concat(p),B="",k="",C="";switch("cart"===d?B="add_shopping_cart":"ac"===d?B="ac_unit":"account"===d?B="manage_accounts":"apps"===d?B="apps":"cam"===d&&(B="camera_alt"),t){case"outline":o&&(v="bg-gray-100 text-gray-400 font-semibold ".concat(f," ").concat(p,"  border border-gray-300 rounded-md flex cursor-not-allowed")),k=v;break;case"text":o&&(w="bg-transparent ".concat(f," ").concat(p," text-gray-400 cursor-not-allowed font-semibold flex cursor-not-allowed")),k=w;break;default:o&&(y="bg-gray-200 rounded-md ".concat(f," ").concat(p,"  text-gray-400 cursor-not-allowed font-semibold flex cursor-not-allowed")),k=y}return"right"===m?C=B:N=B,Object(r.jsxs)("button",{className:k,children:[Object(r.jsx)("span",{className:"material-icons-round mr-2",children:N}),g,Object(r.jsx)("span",{className:"material-icons-round ml-2",children:C})]})};var d=function(){return Object(r.jsxs)("div",{className:"container mx-auto px-4",children:[Object(r.jsx)("h1",{className:"font-sans font-bold text-3xl mt-20 mb-6",children:"Buttons"}),Object(r.jsxs)("div",{className:"grid gap-5 grid-rows-6 md:grid-cols-3 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-6 md:gap-10",children:[Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:"<Button />"}),Object(r.jsx)(l,{shadow:!0,color:"default"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button variant="outline" />'}),Object(r.jsx)(l,{variant:"outline",size:"md"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button variant="text" />'}),Object(r.jsx)(l,{variant:"text"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:"<Button disableShadow />"}),Object(r.jsx)(l,{shadow:!1,color:"primary"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:"<Button disabled />"}),Object(r.jsx)(l,{disabled:!0})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button variant="text" disabled />'}),Object(r.jsx)(l,{variant:"text",disabled:!0})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button variant="outline" disabled />'}),Object(r.jsx)(l,{variant:"outline",disabled:!0})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button startIcon="cart" />'}),Object(r.jsx)(l,{iconKey:"cart",color:"primary"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button startIcon="cold" />'}),Object(r.jsx)(l,{iconKey:"ac",color:"primary"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button startIcon="account" />'}),Object(r.jsx)(l,{iconKey:"account",color:"primary"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button startIcon="apps" />'}),Object(r.jsx)(l,{iconKey:"apps",color:"primary"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button startIcon="camera" />'}),Object(r.jsx)(l,{iconKey:"cam",color:"primary"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button endIcon="cart" />'}),Object(r.jsx)(l,{iconKey:"cart",color:"primary",iconPos:"right"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button endIcon="cold" />'}),Object(r.jsx)(l,{iconKey:"ac",color:"primary",iconPos:"right"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button endIcon="account" />'}),Object(r.jsx)(l,{iconKey:"account",color:"primary",iconPos:"right"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button endIcon="apps" />'}),Object(r.jsx)(l,{iconKey:"apps",color:"primary",iconPos:"right"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button endIcon="camera" />'}),Object(r.jsx)(l,{iconKey:"cam",color:"primary",iconPos:"right"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button size="small" />'}),Object(r.jsx)(l,{size:"sm",color:"primary"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button size="medium" />'}),Object(r.jsx)(l,{size:"md",color:"primary"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button size="large" />'}),Object(r.jsx)(l,{size:"lg",color:"primary"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button color="primary" />'}),Object(r.jsx)(l,{color:"primary"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button color="default" />'}),Object(r.jsx)(l,{color:"default"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button color="secondary" />'}),Object(r.jsx)(l,{color:"secondary"})]}),Object(r.jsxs)("div",{className:"bg-gray-50 p-8 rounded-lg",children:[Object(r.jsx)("h2",{className:"font-mono font-normal",children:'<Button color="danger" />'}),Object(r.jsx)(l,{color:"danger"})]})]})]})},i=t(2),m=function(){var e=n.a.useState("default"),a=Object(i.a)(e,2),t=a[0],c=a[1],s=n.a.useState(!1),o=Object(i.a)(s,2),d=o[0],m=o[1],j=n.a.useState(!1),b=Object(i.a)(j,2),x=b[0],u=b[1],h=n.a.useState(""),g=Object(i.a)(h,2),f=g[0],O=g[1],p=n.a.useState("left"),N=Object(i.a)(p,2),y=N[0],v=N[1],w=n.a.useState("md"),B=Object(i.a)(w,2),k=B[0],C=B[1],S=n.a.useState(""),I=Object(i.a)(S,2),z=I[0],K=I[1],P=n.a.useState("Button"),D=Object(i.a)(P,2),F=D[0],T=D[1];return Object(r.jsxs)("div",{className:"",children:[Object(r.jsxs)("div",{className:"md:mt-20 flex flex-wrap md:w-3/5 justify-start mx-auto",children:[Object(r.jsxs)("div",{className:"bg-gray-50 rounded-lg p-6 m-4 ",children:[Object(r.jsx)("h2",{className:"font-sans font-bold text-xl ",children:"Variant"}),Object(r.jsxs)("div",{className:"flex flex-row items-center flex-wrap",children:[Object(r.jsx)("input",{type:"radio",id:"default",name:"variant",value:"default",className:"mr-2 form-radio h-3 w-3 text-orange-600",checked:"default"===t,onChange:function(e){c(e.target.value)}}),Object(r.jsx)("label",{for:"default",className:"mr-6",children:"Default"}),Object(r.jsx)("input",{type:"radio",id:"outline",name:"variant",value:"outline",className:"mr-2",checked:"outline"===t,onChange:function(e){c(e.target.value)}}),Object(r.jsx)("label",{for:"outline",className:"mr-6",children:"Outline"}),Object(r.jsx)("input",{type:"radio",id:"text",name:"variant",value:"text",className:"mr-2",checked:"text"===t,onChange:function(e){c(e.target.value)}}),Object(r.jsx)("label",{for:"text",children:"Text"})]})]}),Object(r.jsxs)("div",{className:"bg-gray-50 rounded-lg p-6 m-4 ",children:[Object(r.jsx)("h2",{className:"font-sans font-bold text-xl ",children:"Shadow"}),Object(r.jsxs)("div",{className:"flex flex-row items-center flex-wrap",children:[Object(r.jsx)("input",{type:"radio",id:"on",name:"shadow",value:"on",className:"mr-2",checked:!0===d,onChange:function(){m(!0)}}),Object(r.jsx)("label",{for:"on",className:"mr-6",children:"On"}),Object(r.jsx)("input",{type:"radio",id:"off",name:"shadow",value:"off",className:"mr-2",checked:!1===d,onChange:function(){m(!1)}}),Object(r.jsx)("label",{for:"off",className:"mr-6",children:"Off"})]})]}),Object(r.jsxs)("div",{className:"bg-gray-50 rounded-lg p-6 m-4 ",children:[Object(r.jsx)("h2",{className:"font-sans font-bold text-xl ",children:"Disabled"}),Object(r.jsxs)("div",{className:"flex flex-row items-center flex-wrap",children:[Object(r.jsx)("input",{type:"radio",id:"true",name:"disabled",value:"true",className:"mr-2",checked:!0===x,onChange:function(){u(!0)}}),Object(r.jsx)("label",{for:"true",className:"mr-6",children:"True"}),Object(r.jsx)("input",{type:"radio",id:"false",name:"disabled",value:"false",className:"mr-2",checked:!1===x,onChange:function(){u(!1)}}),Object(r.jsx)("label",{for:"false",className:"mr-6",children:"False"})]})]}),Object(r.jsxs)("div",{className:"bg-gray-50 rounded-lg p-6 m-4 ",children:[Object(r.jsx)("h2",{className:"font-sans font-bold text-xl ",children:"Icon"}),Object(r.jsxs)("div",{className:"flex flex-row items-center flex-wrap",children:[Object(r.jsx)("input",{type:"radio",id:"none",name:"icon",value:"",className:"mr-2",checked:""===f,onChange:function(e){O(e.target.value)}}),Object(r.jsx)("label",{for:"none",className:"mr-6",children:"None"}),Object(r.jsx)("input",{type:"radio",id:"cart",name:"icon",value:"cart",className:"mr-2",checked:"cart"===f,onChange:function(e){O(e.target.value)}}),Object(r.jsx)("label",{for:"cart",className:"mr-6",children:"Cart"}),Object(r.jsx)("input",{type:"radio",id:"ac",name:"icon",value:"ac",className:"mr-2",checked:"ac"===f,onChange:function(e){O(e.target.value)}}),Object(r.jsx)("label",{for:"ac",className:"mr-6",children:"Snow"}),Object(r.jsx)("input",{type:"radio",id:"account",name:"icon",value:"account",className:"mr-2",checked:"account"===f,onChange:function(e){O(e.target.value)}}),Object(r.jsx)("label",{for:"account",className:"mr-6",children:"Account"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"radio",id:"apps",name:"icon",value:"apps",className:"mr-2",checked:"apps"===f,onChange:function(e){O(e.target.value)}}),Object(r.jsx)("label",{for:"apps",className:"mr-6",children:"Apps"})]}),Object(r.jsx)("input",{type:"radio",id:"cam",name:"icon",value:"cam",className:"mr-2",checked:"cam"===f,onChange:function(e){O(e.target.value)}}),Object(r.jsx)("label",{for:"cam",className:"mr-6",children:"Camera"})]})]}),Object(r.jsxs)("div",{className:"bg-gray-50 rounded-lg p-6 m-4 ",children:[Object(r.jsx)("h2",{className:"font-sans font-bold text-xl ",children:"Icon Position"}),Object(r.jsxs)("div",{className:"flex flex-row items-center flex-wrap",children:[Object(r.jsx)("input",{type:"radio",id:"left",name:"icon-pos",value:"left",className:"mr-2",checked:"left"===y,onChange:function(){v("left")}}),Object(r.jsx)("label",{for:"left",className:"mr-6",children:"Left"}),Object(r.jsx)("input",{type:"radio",id:"right",name:"icon-pos",value:"right",className:"mr-2",checked:"right"===y,onChange:function(){v("right")}}),Object(r.jsx)("label",{for:"right",className:"mr-6",children:"Right"})]})]}),Object(r.jsxs)("div",{className:"bg-gray-50 rounded-lg p-6 m-4 ",children:[Object(r.jsx)("h2",{className:"font-sans font-bold text-xl ",children:"Button Size"}),Object(r.jsxs)("div",{className:"flex flex-row items-center flex-wrap",children:[Object(r.jsx)("input",{type:"radio",id:"sm",name:"size",value:"sm",className:"mr-2",checked:"sm"===k,onChange:function(){C("sm")}}),Object(r.jsx)("label",{for:"sm",className:"mr-6",children:"Small"}),Object(r.jsx)("input",{type:"radio",id:"md",name:"size",value:"md",className:"mr-2",checked:"md"===k,onChange:function(){C("md")}}),Object(r.jsx)("label",{for:"md",className:"mr-6",children:"Medium"}),Object(r.jsx)("input",{type:"radio",id:"lg",name:"size",value:"lg",className:"mr-2",checked:"lg"===k,onChange:function(){C("lg")}}),Object(r.jsx)("label",{for:"lg",className:"mr-6",children:"Large"})]})]}),Object(r.jsxs)("div",{className:"bg-gray-50 rounded-lg p-6 m-4 ",children:[Object(r.jsx)("h2",{className:"font-sans font-bold text-xl ",children:"Color"}),Object(r.jsxs)("div",{className:"flex flex-row items-center flex-wrap",children:[Object(r.jsx)("input",{type:"radio",id:"default-color",name:"color",value:"default-color",className:"mr-2",checked:""===z,onChange:function(){K("")}}),Object(r.jsx)("label",{for:"default-color",className:"mr-6",children:"Default"}),Object(r.jsx)("input",{type:"radio",id:"primary",name:"color",value:"primary",className:"mr-2",checked:"primary"===z,onChange:function(){K("primary")}}),Object(r.jsx)("label",{for:"primary",className:"mr-6",children:"Primary"}),Object(r.jsx)("input",{type:"radio",id:"secondary",name:"color",value:"secondary",className:"mr-2",checked:"secondary"===z,onChange:function(){K("secondary")}}),Object(r.jsx)("label",{for:"secondary",className:"mr-6",children:"Secondary"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"radio",id:"danger",name:"color",value:"danger",className:"mr-2",checked:"danger"===z,onChange:function(){K("danger")}}),Object(r.jsx)("label",{for:"danger",className:"mr-6",children:"Danger"})]})]})]}),Object(r.jsxs)("div",{className:"bg-gray-50 rounded-lg p-6 m-4 ",children:[Object(r.jsx)("h2",{className:"font-sans font-bold text-xl ",children:"Text on Button"}),Object(r.jsx)("div",{className:"flex flex-row items-center flex-wrap",children:Object(r.jsx)("input",{className:"appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs",type:"text",placeholder:l,onChange:function(e){T(e.target.value)}})})]})]}),Object(r.jsx)("div",{className:"justify-items-center grid bg-gray-50 p-10 w-5/6 md:w-1/4 rounded-lg mx-auto",children:Object(r.jsx)(l,{variant:t,shadow:d,disabled:x,iconKey:f,iconPos:y,size:k,color:z,text:F})})]})};var j=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{}),Object(r.jsx)("hr",{className:"mt-20 w-5/6 mx-auto"}),Object(r.jsx)(d,{})]})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,s=a.getLCP,o=a.getTTFB;t(e),c(e),n(e),s(e),o(e)}))};o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),b()}],[[13,1,2]]]);
//# sourceMappingURL=main.851b6d68.chunk.js.map