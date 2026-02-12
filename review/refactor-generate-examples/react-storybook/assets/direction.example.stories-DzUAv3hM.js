import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./drawer-XRNJ70bH.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./button-DnZnbJNC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,w={title:"Components/DBDrawer/Direction",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean"},width:{control:"select",options:["full","auto"]},rounded:{control:"boolean"},spacing:{control:"select",options:["medium","small","large","none"]},backdrop:{control:"select",options:["none","strong","weak","invisible"]},direction:{control:"select",options:["left","right","up","down"]},variant:{control:"select",options:["modal","inside"]},position:{control:"select",options:["fixed","absolute"]},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},n={args:{open:!1,onClose:p(),children:"(Default) Right"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})},t={args:{direction:"left",open:!1,onClose:p(),children:"Left"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})},s={args:{direction:"up",open:!1,onClose:p(),children:"Up"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})},i={args:{direction:"down",open:!1,onClose:p(),children:"Down"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "children": "(Default) Right"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "left",
    "open": false,
    "onClose": fn(),
    "children": "Left"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "up",
    "open": false,
    "onClose": fn(),
    "children": "Up"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "down",
    "open": false,
    "onClose": fn(),
    "children": "Down"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...i.parameters?.docs?.source}}};const f=["DefaultRight","Left","Up","Down"];export{n as DefaultRight,i as Down,t as Left,s as Up,f as __namedExportsOrder,w as default};
