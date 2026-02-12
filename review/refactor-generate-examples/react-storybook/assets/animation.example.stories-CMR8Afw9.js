import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./tooltip-COrPM-Vv.js";import{D as s}from"./button-DnZnbJNC.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,T={title:"Components/DBTooltip/Animation",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},showArrow:{control:"boolean"},emphasis:{control:"select",options:["weak","strong"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},width:{control:"select",options:["auto","fixed"]},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},variant:{control:"select",options:["description","label"]},autofocus:{control:"boolean"}}},o={args:{id:"tooltip-14",animation:!0,children:"Tooltip"},render:r=>e.jsxs(s,{children:["(Default) True",e.jsx(n,{...r})]})},t={args:{id:"tooltip-17",animation:!1,children:"Tooltip"},render:r=>e.jsxs(s,{children:["False",e.jsx(n,{...r})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-14",
    "animation": true,
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                (Default) True
                <DBTooltip {...properties} /></DBButton>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-17",
    "animation": false,
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                False
                <DBTooltip {...properties} /></DBButton>
}`,...t.parameters?.docs?.source}}};const B=["DefaultTrue","False"];export{o as DefaultTrue,t as False,B as __namedExportsOrder,T as default};
