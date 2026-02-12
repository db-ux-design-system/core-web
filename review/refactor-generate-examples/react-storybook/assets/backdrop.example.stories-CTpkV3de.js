import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./drawer-XRNJ70bH.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./button-DnZnbJNC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBDrawer/Backdrop",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean"},width:{control:"select",options:["full","auto"]},rounded:{control:"boolean"},spacing:{control:"select",options:["medium","small","large","none"]},backdrop:{control:"select",options:["none","strong","weak","invisible"]},direction:{control:"select",options:["left","right","up","down"]},variant:{control:"select",options:["modal","inside"]},position:{control:"select",options:["fixed","absolute"]},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},n={args:{backdrop:"strong",open:!1,onClose:p(),children:"(Default) Strong"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})},s={args:{backdrop:"weak",open:!1,onClose:p(),children:"Weak"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})},t={args:{backdrop:"invisible",open:!1,onClose:p(),children:"Invisible"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})},a={args:{backdrop:"none",open:!1,onClose:p(),children:"No Backdrop"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "strong",
    "open": false,
    "onClose": fn(),
    "children": "(Default) Strong"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "weak",
    "open": false,
    "onClose": fn(),
    "children": "Weak"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "invisible",
    "open": false,
    "onClose": fn(),
    "children": "Invisible"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "none",
    "open": false,
    "onClose": fn(),
    "children": "No Backdrop"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...a.parameters?.docs?.source}}};const b=["DefaultStrong","Weak","Invisible","NoBackdrop"];export{n as DefaultStrong,t as Invisible,a as NoBackdrop,s as Weak,b as __namedExportsOrder,u as default};
