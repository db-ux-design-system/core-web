import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./popover-DNl23aon.js";import{D as s}from"./button-DnZnbJNC.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBPopover/Width",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},spacing:{control:"select",options:["medium","small","large","none"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},gap:{control:"boolean"},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},width:{control:"select",options:["auto","fixed"]},open:{control:"boolean"},autofocus:{control:"boolean"}}},o={args:{id:"popover-17",trigger:e.jsx(s,{children:"(Default) Auto"}),children:"Max width, lorem ipsum dolor sit amet, consetetur sadipscing"},render:r=>e.jsx(n,{...r})},t={args:{width:"fixed",id:"popover-18",trigger:e.jsx(s,{children:"Fixed"}),children:"Max width, lorem ipsum dolor sit amet, consetetur sadipscing"},render:r=>e.jsx(n,{...r})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-17",
    "trigger": <DBButton>(Default) Auto</DBButton>,
    "children": "Max width, lorem ipsum dolor sit amet, consetetur sadipscing"
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "fixed",
    "id": "popover-18",
    "trigger": <DBButton>Fixed</DBButton>,
    "children": "Max width, lorem ipsum dolor sit amet, consetetur sadipscing"
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...t.parameters?.docs?.source}}};const f=["DefaultAuto","Fixed"];export{o as DefaultAuto,t as Fixed,f as __namedExportsOrder,x as default};
