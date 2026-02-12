import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./drawer-XRNJ70bH.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./button-DnZnbJNC.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,y={title:"Components/DBDrawer/Density",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean"},width:{control:"select",options:["full","auto"]},rounded:{control:"boolean"},spacing:{control:"select",options:["medium","small","large","none"]},backdrop:{control:"select",options:["none","strong","weak","invisible"]},direction:{control:"select",options:["left","right","up","down"]},variant:{control:"select",options:["modal","inside"]},position:{control:"select",options:["fixed","absolute"]},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},n={args:{"data-density":"functional",open:!1,onClose:a(),children:"Functional"},render:r=>e.jsxs("div",{"data-density":"functional",children:["Open DBDrawer by switching open property",e.jsx(s,{...r})]})},o={args:{"data-density":"regular",open:!1,onClose:a(),children:"(Default) Regular"},render:r=>e.jsxs("div",{"data-density":"regular",children:["Open DBDrawer by switching open property",e.jsx(s,{...r})]})},t={args:{"data-density":"expressive",open:!1,onClose:a(),children:"Expressive"},render:r=>e.jsxs("div",{"data-density":"expressive",children:["Open DBDrawer by switching open property",e.jsx(s,{...r})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "open": false,
    "onClose": fn(),
    "children": "Functional"
  },
  render: (properties: any) => <div data-density="functional">Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "open": false,
    "onClose": fn(),
    "children": "(Default) Regular"
  },
  render: (properties: any) => <div data-density="regular">Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "open": false,
    "onClose": fn(),
    "children": "Expressive"
  },
  render: (properties: any) => <div data-density="expressive">Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const g=["Functional","DefaultRegular","Expressive"];export{o as DefaultRegular,t as Expressive,n as Functional,g as __namedExportsOrder,y as default};
