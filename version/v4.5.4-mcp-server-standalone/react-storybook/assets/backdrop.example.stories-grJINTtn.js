import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./drawer-D0zfLjSB.js";import"./index-D2E5Z_bU.js";import"./iframe-DqPoox06.js";import"./preload-helper-B2VkDja_.js";import"./constants-C-ysBZRi.js";import"./button-CiQt8FXn.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBDrawer/Backdrop",component:o,parameters:{layout:"centered"},tags:["autodocs"],args:{onClose:n()},argTypes:{open:{control:"boolean"},width:{control:"select",options:["full","auto"]},rounded:{control:"boolean"},spacing:{control:"select",options:["medium","small","large","none"]},backdrop:{control:"select",options:["none","strong","weak","invisible"]},direction:{control:"select",options:["left","right","up","down"]},variant:{control:"select",options:["modal","inside"]},position:{control:"select",options:["fixed","absolute"]},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},s={args:{backdrop:"strong",open:!1,onClose:n(),children:"(Default) Strong"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})},t={args:{backdrop:"weak",open:!1,onClose:n(),children:"Weak"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})},a={args:{backdrop:"invisible",open:!1,onClose:n(),children:"Invisible"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})},p={args:{backdrop:"none",open:!1,onClose:n(),children:"No Backdrop"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "strong",
    "open": false,
    "onClose": fn(),
    "children": "(Default) Strong"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "weak",
    "open": false,
    "onClose": fn(),
    "children": "Weak"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "invisible",
    "open": false,
    "onClose": fn(),
    "children": "Invisible"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "none",
    "open": false,
    "onClose": fn(),
    "children": "No Backdrop"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...p.parameters?.docs?.source}}};const b=["DefaultStrong","Weak","Invisible","NoBackdrop"];export{s as DefaultStrong,a as Invisible,p as NoBackdrop,t as Weak,b as __namedExportsOrder,u as default};
