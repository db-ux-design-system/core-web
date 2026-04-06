import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./drawer-C7wJCXvH.js";import"./index-D2E5Z_bU.js";import"./iframe-BGst_xor.js";import"./preload-helper-Cj7qu-EO.js";import"./constants-C-ysBZRi.js";import"./button-CIKl4MoP.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBDrawer/Spacing",component:o,parameters:{layout:"centered"},tags:["autodocs"],args:{onClose:n()},argTypes:{open:{control:"boolean"},width:{control:"select",options:["full","auto"]},rounded:{control:"boolean"},spacing:{control:"select",options:["medium","small","large","none"]},backdrop:{control:"select",options:["none","strong","weak","invisible"]},direction:{control:"select",options:["left","right","up","down"]},variant:{control:"select",options:["modal","inside"]},position:{control:"select",options:["fixed","absolute"]},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},s={args:{open:!1,onClose:n(),children:"(Default) Medium"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})},a={args:{spacing:"small",open:!1,onClose:n(),children:"Small"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})},t={args:{spacing:"large",open:!1,onClose:n(),children:"Large"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})},p={args:{spacing:"none",open:!1,onClose:n(),children:"None"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "children": "(Default) Medium"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "small",
    "open": false,
    "onClose": fn(),
    "children": "Small"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "large",
    "open": false,
    "onClose": fn(),
    "children": "Large"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "none",
    "open": false,
    "onClose": fn(),
    "children": "None"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...p.parameters?.docs?.source}}};const w=["DefaultMedium","Small","Large","None"];export{s as DefaultMedium,t as Large,p as None,a as Small,w as __namedExportsOrder,D as default};
