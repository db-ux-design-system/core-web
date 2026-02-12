import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./tooltip-COrPM-Vv.js";import{D as n}from"./button-DnZnbJNC.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBTooltip/Width",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},showArrow:{control:"boolean"},emphasis:{control:"select",options:["weak","strong"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},width:{control:"select",options:["auto","fixed"]},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},variant:{control:"select",options:["description","label"]},autofocus:{control:"boolean"}}},t={args:{id:"tooltip-12",children:"Max width, lorem ipsum dolor sit amet, consetetur sadipscing"},render:r=>e.jsxs(n,{children:["(Default) Auto",e.jsx(s,{...r})]})},o={args:{width:"fixed",id:"tooltip-13",children:"Max width, lorem ipsum dolor sit amet, consetetur sadipscing"},render:r=>e.jsxs(n,{children:["Fixed",e.jsx(s,{...r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-12",
    "children": "Max width, lorem ipsum dolor sit amet, consetetur sadipscing"
  },
  render: (properties: any) => <DBButton>
                (Default) Auto
                <DBTooltip {...properties} /></DBButton>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "fixed",
    "id": "tooltip-13",
    "children": "Max width, lorem ipsum dolor sit amet, consetetur sadipscing"
  },
  render: (properties: any) => <DBButton>
                Fixed
                <DBTooltip {...properties} /></DBButton>
}`,...o.parameters?.docs?.source}}};const g=["DefaultAuto","Fixed"];export{t as DefaultAuto,o as Fixed,g as __namedExportsOrder,f as default};
