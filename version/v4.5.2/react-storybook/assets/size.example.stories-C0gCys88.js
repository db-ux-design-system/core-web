import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./drawer-7URLM_qF.js";import"./index-D2E5Z_bU.js";import"./iframe-DoczXm3P.js";import"./preload-helper-Bhe8V244.js";import"./constants-C-ysBZRi.js";import"./button-CBczwwny.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBDrawer/Size",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean"},width:{control:"select",options:["full","auto"]},rounded:{control:"boolean"},spacing:{control:"select",options:["medium","small","large","none"]},backdrop:{control:"select",options:["none","strong","weak","invisible"]},direction:{control:"select",options:["left","right","up","down"]},variant:{control:"select",options:["modal","inside"]},position:{control:"select",options:["fixed","absolute"]},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},e={args:{open:!1,onClose:s(),children:"(Default) Medium"},render:n=>r.jsxs("div",{children:["Open DBDrawer by switching open property",r.jsx(t,{...n})]})},o={args:{width:"full",open:!1,onClose:s(),children:"Full"},render:n=>r.jsxs("div",{children:["Open DBDrawer by switching open property",r.jsx(t,{...n})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "children": "(Default) Medium"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "open": false,
    "onClose": fn(),
    "children": "Full"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const D=["DefaultMedium","Full"];export{e as DefaultMedium,o as Full,D as __namedExportsOrder,m as default};
