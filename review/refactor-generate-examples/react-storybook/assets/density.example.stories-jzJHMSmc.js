import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./drawer-CajJcFZp.js";import"./index-cGbbigiG.js";import"./iframe-6D4xCEbg.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./button-DcJZ2vgj.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBDrawer/Density",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean"},width:{control:"select",options:["full","auto"]},rounded:{control:"boolean"},spacing:{control:"select",options:["medium","small","large","none"]},backdrop:{control:"select",options:["none","strong","weak","invisible"]},direction:{control:"select",options:["left","right","up","down"]},variant:{control:"select",options:["modal","inside"]},position:{control:"select",options:["fixed","absolute"]},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},o={args:{open:!1,onClose:a(),children:"Functional"},render:r=>e.jsxs("div",{"data-density":"functional",children:["Open DBDrawer by switching open property",e.jsx(s,{...r})]})},n={args:{open:!1,onClose:a(),children:"(Default) Regular"},render:r=>e.jsxs("div",{"data-density":"regular",children:["Open DBDrawer by switching open property",e.jsx(s,{...r})]})},t={args:{open:!1,onClose:a(),children:"Expressive"},render:r=>e.jsxs("div",{"data-density":"expressive",children:["Open DBDrawer by switching open property",e.jsx(s,{...r})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "children": "Functional"
  },
  render: (properties: any) => <div data-density="functional">Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "children": "(Default) Regular"
  },
  render: (properties: any) => <div data-density="regular">Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "children": "Expressive"
  },
  render: (properties: any) => <div data-density="expressive">Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const g=["Functional","DefaultRegular","Expressive"];export{n as DefaultRegular,t as Expressive,o as Functional,g as __namedExportsOrder,D as default};
