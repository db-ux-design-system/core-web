import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./tooltip-D6POI3ol.js";import{D as a}from"./button-BuuoWBiT.js";import"./index-D2E5Z_bU.js";import"./iframe-B17vDKiL.js";import"./preload-helper-B3mKHU88.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBTooltip/Delay",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},showArrow:{control:"boolean"},emphasis:{control:"select",options:["weak","strong"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},width:{control:"select",options:["auto","fixed"]},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},variant:{control:"select",options:["description","label"]},autofocus:{control:"boolean"}}},e={args:{id:"tooltip-144",delay:"none",children:"Tooltip"},render:t=>o.jsxs(a,{children:["(Default) None",o.jsx(s,{...t})]})},r={args:{delay:"slow",id:"tooltip-15",children:"Tooltip"},render:t=>o.jsxs(a,{children:["Slow",o.jsx(s,{...t})]})},n={args:{delay:"fast",id:"tooltip-16",children:"Tooltip"},render:t=>o.jsxs(a,{children:["Fast",o.jsx(s,{...t})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-144",
    "delay": "none",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                (Default) None
                <DBTooltip {...properties} /></DBButton>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "id": "tooltip-15",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                Slow
                <DBTooltip {...properties} /></DBButton>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "id": "tooltip-16",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton>
                Fast
                <DBTooltip {...properties} /></DBButton>
}`,...n.parameters?.docs?.source}}};const h=["DefaultNone","Slow","Fast"];export{e as DefaultNone,n as Fast,r as Slow,h as __namedExportsOrder,g as default};
