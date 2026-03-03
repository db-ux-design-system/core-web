import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./tooltip-DgY5Onit.js";import{D as n}from"./button-BK6yAmT2.js";import"./index-D2E5Z_bU.js";import"./iframe-C6zpIasT.js";import"./preload-helper--tLyh50B.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBTooltip/Show Arrow",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},showArrow:{control:"boolean"},emphasis:{control:"select",options:["weak","strong"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},width:{control:"select",options:["auto","fixed"]},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},variant:{control:"select",options:["description","label"]},autofocus:{control:"boolean"}}},o={args:{id:"tooltip-04",showArrow:!0,children:"Tooltip"},render:e=>r.jsxs(n,{children:["(Default) True",r.jsx(s,{...e})]})},t={args:{id:"tooltip-05",showArrow:!1,children:"Tooltip"},render:e=>r.jsxs(n,{children:["False",r.jsx(s,{...e})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const D=["DefaultTrue","False"];export{o as DefaultTrue,t as False,D as __namedExportsOrder,h as default};
