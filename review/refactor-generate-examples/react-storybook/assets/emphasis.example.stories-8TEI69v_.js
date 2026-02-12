import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./tooltip-COrPM-Vv.js";import{D as s}from"./button-DnZnbJNC.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBTooltip/Emphasis",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},showArrow:{control:"boolean"},emphasis:{control:"select",options:["weak","strong"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},width:{control:"select",options:["auto","fixed"]},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},variant:{control:"select",options:["description","label"]},autofocus:{control:"boolean"}}},o={args:{id:"tooltip-06",children:"Tooltip"},render:r=>e.jsxs(s,{children:["(Default) Weak",e.jsx(n,{...r})]})},t={args:{emphasis:"strong",id:"tooltip-07",children:"Tooltip"},render:r=>e.jsxs(s,{children:["Strong",e.jsx(n,{...r})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-06",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                (Default) Weak
                <DBTooltip {...properties} /></DBButton>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "id": "tooltip-07",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                Strong
                <DBTooltip {...properties} /></DBButton>
}`,...t.parameters?.docs?.source}}};const h=["DefaultWeak","Strong"];export{o as DefaultWeak,t as Strong,h as __namedExportsOrder,f as default};
