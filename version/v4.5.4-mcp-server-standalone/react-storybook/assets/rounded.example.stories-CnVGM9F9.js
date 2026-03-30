import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./drawer-D0zfLjSB.js";import"./index-D2E5Z_bU.js";import"./iframe-DqPoox06.js";import"./preload-helper-B2VkDja_.js";import"./constants-C-ysBZRi.js";import"./button-CiQt8FXn.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBDrawer/Rounded",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{onClose:s()},argTypes:{open:{control:"boolean"},width:{control:"select",options:["full","auto"]},rounded:{control:"boolean"},spacing:{control:"select",options:["medium","small","large","none"]},backdrop:{control:"select",options:["none","strong","weak","invisible"]},direction:{control:"select",options:["left","right","up","down"]},variant:{control:"select",options:["modal","inside"]},position:{control:"select",options:["fixed","absolute"]},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},e={args:{rounded:!1,open:!1,onClose:s(),children:"(Default) False"},render:n=>r.jsxs("div",{children:["Open DBDrawer by switching open property",r.jsx(t,{...n})]})},o={args:{rounded:!0,open:!1,onClose:s(),children:"True"},render:n=>r.jsxs("div",{children:["Open DBDrawer by switching open property",r.jsx(t,{...n})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "rounded": false,
    "open": false,
    "onClose": fn(),
    "children": "(Default) False"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "rounded": true,
    "open": false,
    "onClose": fn(),
    "children": "True"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const D=["DefaultFalse","True"];export{e as DefaultFalse,o as True,D as __namedExportsOrder,m as default};
