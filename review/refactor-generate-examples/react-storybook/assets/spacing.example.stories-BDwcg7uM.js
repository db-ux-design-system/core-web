import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./drawer-XRNJ70bH.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./button-DnZnbJNC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBDrawer/Spacing",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean"},width:{control:"select",options:["full","auto"]},rounded:{control:"boolean"},spacing:{control:"select",options:["medium","small","large","none"]},backdrop:{control:"select",options:["none","strong","weak","invisible"]},direction:{control:"select",options:["left","right","up","down"]},variant:{control:"select",options:["modal","inside"]},position:{control:"select",options:["fixed","absolute"]},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},n={args:{open:!1,onClose:p(),children:"(Default) Medium"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})},s={args:{spacing:"small",open:!1,onClose:p(),children:"Small"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})},a={args:{spacing:"large",open:!1,onClose:p(),children:"Large"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})},t={args:{spacing:"none",open:!1,onClose:p(),children:"None"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "children": "(Default) Medium"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "small",
    "open": false,
    "onClose": fn(),
    "children": "Small"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "large",
    "open": false,
    "onClose": fn(),
    "children": "Large"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "none",
    "open": false,
    "onClose": fn(),
    "children": "None"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const w=["DefaultMedium","Small","Large","None"];export{n as DefaultMedium,a as Large,t as None,s as Small,w as __namedExportsOrder,D as default};
