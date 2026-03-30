import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./drawer-D0zfLjSB.js";import"./index-D2E5Z_bU.js";import"./iframe-DqPoox06.js";import"./preload-helper-B2VkDja_.js";import"./constants-C-ysBZRi.js";import"./button-CiQt8FXn.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBDrawer/Direction",component:o,parameters:{layout:"centered"},tags:["autodocs"],args:{onClose:n()},argTypes:{open:{control:"boolean"},width:{control:"select",options:["full","auto"]},rounded:{control:"boolean"},spacing:{control:"select",options:["medium","small","large","none"]},backdrop:{control:"select",options:["none","strong","weak","invisible"]},direction:{control:"select",options:["left","right","up","down"]},variant:{control:"select",options:["modal","inside"]},position:{control:"select",options:["fixed","absolute"]},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},t={args:{open:!1,onClose:n(),children:"(Default) Right"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})},s={args:{direction:"left",open:!1,onClose:n(),children:"Left"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})},i={args:{direction:"up",open:!1,onClose:n(),children:"Up"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})},p={args:{direction:"down",open:!1,onClose:n(),children:"Down"},render:r=>e.jsxs("div",{children:["Open DBDrawer by switching open property",e.jsx(o,{...r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "children": "(Default) Right"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "left",
    "open": false,
    "onClose": fn(),
    "children": "Left"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "up",
    "open": false,
    "onClose": fn(),
    "children": "Up"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "down",
    "open": false,
    "onClose": fn(),
    "children": "Down"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...p.parameters?.docs?.source}}};const w=["DefaultRight","Left","Up","Down"];export{t as DefaultRight,p as Down,s as Left,i as Up,w as __namedExportsOrder,g as default};
