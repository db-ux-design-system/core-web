import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./drawer-C1zHgR-W.js";import"./index-D2E5Z_bU.js";import"./iframe-COlR4DG9.js";import"./preload-helper-DBseQLlf.js";import"./constants-C-ysBZRi.js";import"./button-X8B1aIga.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBDrawer/Density",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{onClose:a()},argTypes:{open:{control:"boolean"},width:{control:"select",options:["full","auto"]},rounded:{control:"boolean"},spacing:{control:"select",options:["medium","small","large","none"]},backdrop:{control:"select",options:["none","strong","weak","invisible"]},direction:{control:"select",options:["left","right","up","down"]},variant:{control:"select",options:["modal","inside"]},position:{control:"select",options:["fixed","absolute"]},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},o={args:{open:!1,onClose:a(),children:"Functional"},render:r=>e.jsxs("div",{"data-density":"functional",children:["Open DBDrawer by switching open property",e.jsx(t,{...r})]})},n={args:{open:!1,onClose:a(),children:"(Default) Regular"},render:r=>e.jsxs("div",{"data-density":"regular",children:["Open DBDrawer by switching open property",e.jsx(t,{...r})]})},s={args:{open:!1,onClose:a(),children:"Expressive"},render:r=>e.jsxs("div",{"data-density":"expressive",children:["Open DBDrawer by switching open property",e.jsx(t,{...r})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "children": "Expressive"
  },
  render: (properties: any) => <div data-density="expressive">Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...s.parameters?.docs?.source}}};const g=["Functional","DefaultRegular","Expressive"];export{n as DefaultRegular,s as Expressive,o as Functional,g as __namedExportsOrder,D as default};
