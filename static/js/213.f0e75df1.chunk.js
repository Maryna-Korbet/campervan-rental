"use strict";(self.webpackChunkcampervan_rental=self.webpackChunkcampervan_rental||[]).push([[213],{9354:function(e,n,t){t(2791);var r=t(4420),c=t(6419),i=t(8266),a=t(8522),l=t(6282),u=t(184);n.Z=function(e){var n=e.loadedCount,t=(0,r.v9)(c.OG),s=(0,r.v9)(i.C);return(0,u.jsx)(l.n,{children:t.slice(0,n).map((function(e){return(0,u.jsx)(a.Z,{advert:e,isFavorite:s.includes(e._id)},e._id)}))})}},6213:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(9439),c=t(2791),i=t(4420),a=t(6419),l=t(8522),u=t(9354),s=t(3433),o=t(184),d=function(e){var n=e.onSearch,t=(0,c.useState)(""),i=(0,r.Z)(t,2),a=i[0],l=i[1],u=(0,c.useState)([]),d=(0,r.Z)(u,2),h=d[0],x=d[1],p=(0,c.useState)(""),f=(0,r.Z)(p,2),j=f[0],v=f[1],k=(0,c.useState)(""),y=(0,r.Z)(k,2),m=y[0],C=y[1],b=function(e){h.includes(e)?x(h.filter((function(n){return n!==e}))):x([].concat((0,s.Z)(h),[e]))};return(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n({filterText:a,selectedEquipment:h,selectedType:j,selectedTransmission:m})},children:[(0,o.jsx)("div",{children:(0,o.jsx)("input",{type:"text",placeholder:"Search by location",value:a,onChange:function(e){return l(e.target.value)}})}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("label",{children:[(0,o.jsx)("input",{type:"checkbox",checked:h.includes("airConditioner"),onChange:function(){return b("airConditioner")}}),"Air Conditioner"]}),(0,o.jsxs)("label",{children:[(0,o.jsx)("input",{type:"checkbox",checked:"automatic"===m,onChange:function(){var e;C((e="automatic")===m?"":e)}}),"Transmission"]}),(0,o.jsxs)("label",{children:[(0,o.jsx)("input",{type:"checkbox",checked:h.includes("kitchen"),onChange:function(){return b("kitchen")}}),"Kitchen"]}),(0,o.jsxs)("label",{children:[(0,o.jsx)("input",{type:"checkbox",checked:h.includes("TV"),onChange:function(){return b("TV")}}),"TV"]}),(0,o.jsxs)("label",{children:[(0,o.jsx)("input",{type:"checkbox",checked:h.includes("shower"),onChange:function(){return b("shower")}}),"Shower"]})]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("label",{children:[(0,o.jsx)("input",{type:"radio",name:"type",value:"alcove",checked:"alcove"===j,onChange:function(){return v("alcove")}}),"Alcove"]}),(0,o.jsxs)("label",{children:[(0,o.jsx)("input",{type:"radio",name:"type",value:"fullyIntegrated",checked:"fullyIntegrated"===j,onChange:function(){return v("fullyIntegrated")}}),"Fully Integrated"]}),(0,o.jsxs)("label",{children:[(0,o.jsx)("input",{type:"radio",name:"type",value:"panelTruck",checked:"panelTruck"===j,onChange:function(){return v("panelTruck")}}),"Panel Truck"]})]}),(0,o.jsx)("button",{type:"submit",children:"Search"})]})},h=t(5553),x=t(7805),p=t(6282),f=function(){var e=(0,i.v9)(a.OG),n=(0,c.useState)([]),t=(0,r.Z)(n,2),s=t[0],f=t[1],j=(0,i.v9)(a.xU),v=(0,i.v9)(a.N8),k=(0,c.useState)(4),y=(0,r.Z)(k,2),m=y[0],C=y[1];return(0,o.jsxs)(x._z,{children:[(0,o.jsx)("h1",{hidden:!0,children:"Catalog Page"}),(0,o.jsx)("div",{children:j&&!v&&(0,o.jsx)(h.Z,{color:"primary",sx:{mt:1}})}),(0,o.jsx)(d,{onSearch:function(n){var t=n.filterText,r=n.selectedEquipment,c=n.selectedType,i=n.selectedTransmission,a=e.filter((function(e){var n=e.location.toLowerCase().includes(t.toLowerCase()),a=0===r.length||r.every((function(n){return e.details[n]})),l=!c||e.form===c,u=!i||e.transmission===i;return n&&a&&l&&u}));f(a)}}),0===s.length?(0,o.jsx)(u.Z,{loadedCount:m}):(0,o.jsx)(p.n,{children:s.slice(0,m).map((function(e){return(0,o.jsx)(l.Z,{advert:e},e._id)}))}),!j&&!v&&s.length>m&&(0,o.jsx)("div",{children:(0,o.jsx)(x.nw,{type:"button",onClick:function(){C((function(e){return e+4}))},children:"Load more"})})]})}}}]);
//# sourceMappingURL=213.f0e75df1.chunk.js.map