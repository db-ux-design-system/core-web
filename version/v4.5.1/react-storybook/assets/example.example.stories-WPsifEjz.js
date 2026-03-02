import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./drawer-FtC4f-ut.js";import"./index-D2E5Z_bU.js";import"./iframe-D7o_mymi.js";import"./preload-helper-DYrPA5AR.js";import"./constants-C-ysBZRi.js";import"./button-DTf9InGf.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBDrawer/Example",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean"},width:{control:"select",options:["full","auto"]},rounded:{control:"boolean"},spacing:{control:"select",options:["medium","small","large","none"]},backdrop:{control:"select",options:["none","strong","weak","invisible"]},direction:{control:"select",options:["left","right","up","down"]},variant:{control:"select",options:["modal","inside"]},position:{control:"select",options:["fixed","absolute"]},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},e={args:{variant:"modal",open:!1,onClose:s(),children:"(Default) As modal"},render:r=>n.jsxs("div",{children:["Open DBDrawer by switching open property",n.jsx(t,{...r})]})},o={args:{variant:"inside",open:!1,onClose:s(),children:"Inside"},render:r=>n.jsxs("div",{children:["Open DBDrawer by switching open property",n.jsx(t,{...r})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "modal",
    "open": false,
    "onClose": fn(),
    "children": "(Default) As modal"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "inside",
    "open": false,
    "onClose": fn(),
    "children": "Inside"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const D=["DefaultAsmodal","Inside"];export{e as DefaultAsmodal,o as Inside,D as __namedExportsOrder,u as default};
