import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./tooltip-DgY5Onit.js";import{D as n}from"./button-BK6yAmT2.js";import"./index-D2E5Z_bU.js";import"./iframe-C6zpIasT.js";import"./preload-helper--tLyh50B.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBTooltip/Width",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},showArrow:{control:"boolean"},emphasis:{control:"select",options:["weak","strong"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},width:{control:"select",options:["auto","fixed"]},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},variant:{control:"select",options:["description","label"]},autofocus:{control:"boolean"}}},t={args:{id:"tooltip-12",children:"Max width, lorem ipsum dolor sit amet, consetetur sadipscing"},render:r=>e.jsxs(n,{children:["(Default) Auto",e.jsx(s,{...r})]})},o={args:{width:"fixed",id:"tooltip-13",children:"Max width, lorem ipsum dolor sit amet, consetetur sadipscing"},render:r=>e.jsxs(n,{children:["Fixed",e.jsx(s,{...r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const f=["DefaultAuto","Fixed"];export{t as DefaultAuto,o as Fixed,f as __namedExportsOrder,h as default};
