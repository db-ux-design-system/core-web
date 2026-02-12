import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./tooltip-COrPM-Vv.js";import{D as n}from"./button-DnZnbJNC.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBTooltip/Show Arrow",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},showArrow:{control:"boolean"},emphasis:{control:"select",options:["weak","strong"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},width:{control:"select",options:["auto","fixed"]},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},variant:{control:"select",options:["description","label"]},autofocus:{control:"boolean"}}},o={args:{id:"tooltip-04",showArrow:!0,children:"Tooltip"},render:e=>r.jsxs(n,{children:["(Default) True",r.jsx(s,{...e})]})},t={args:{id:"tooltip-05",showArrow:!1,children:"Tooltip"},render:e=>r.jsxs(n,{children:["False",r.jsx(s,{...e})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-04",
    "showArrow": true,
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                (Default) True
                <DBTooltip {...properties} /></DBButton>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-05",
    "showArrow": false,
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                False
                <DBTooltip {...properties} /></DBButton>
}`,...t.parameters?.docs?.source}}};const T=["DefaultTrue","False"];export{o as DefaultTrue,t as False,T as __namedExportsOrder,D as default};
