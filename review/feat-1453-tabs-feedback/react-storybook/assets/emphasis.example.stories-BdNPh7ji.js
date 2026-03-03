import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./tooltip-DgY5Onit.js";import{D as s}from"./button-BK6yAmT2.js";import"./index-D2E5Z_bU.js";import"./iframe-C6zpIasT.js";import"./preload-helper--tLyh50B.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBTooltip/Emphasis",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},showArrow:{control:"boolean"},emphasis:{control:"select",options:["weak","strong"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},width:{control:"select",options:["auto","fixed"]},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},variant:{control:"select",options:["description","label"]},autofocus:{control:"boolean"}}},o={args:{id:"tooltip-06",children:"Tooltip"},render:r=>e.jsxs(s,{children:["(Default) Weak",e.jsx(n,{...r})]})},t={args:{emphasis:"strong",id:"tooltip-07",children:"Tooltip"},render:r=>e.jsxs(s,{children:["Strong",e.jsx(n,{...r})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const f=["DefaultWeak","Strong"];export{o as DefaultWeak,t as Strong,f as __namedExportsOrder,D as default};
