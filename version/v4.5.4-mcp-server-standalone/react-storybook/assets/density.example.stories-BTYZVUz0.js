import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./tooltip-BxEldRjs.js";import{D as a}from"./button-CiQt8FXn.js";import"./index-D2E5Z_bU.js";import"./iframe-DqPoox06.js";import"./preload-helper-B2VkDja_.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBTooltip/Density",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},showArrow:{control:"boolean"},emphasis:{control:"select",options:["weak","strong"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},width:{control:"select",options:["auto","fixed"]},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},variant:{control:"select",options:["description","label"]},autofocus:{control:"boolean"}}},e={args:{id:"tooltip-01",children:"Tooltip"},render:o=>t.jsxs(a,{"data-density":"functional",children:["Functional",t.jsx(s,{...o})]})},r={args:{id:"tooltip-02",children:"Tooltip"},render:o=>t.jsxs(a,{"data-density":"regular",children:["(Default) Regular",t.jsx(s,{...o})]})},n={args:{id:"tooltip-03",children:"Tooltip"},render:o=>t.jsxs(a,{"data-density":"expressive",children:["Expressive",t.jsx(s,{...o})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-01",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton data-density="functional">
                Functional
                <DBTooltip {...properties} /></DBButton>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-02",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton data-density="regular">
                (Default) Regular
                <DBTooltip {...properties} /></DBButton>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-03",
    "children": "Tooltip"
  },
  render: (properties: any) => <DBButton data-density="expressive">
                Expressive
                <DBTooltip {...properties} /></DBButton>
}`,...n.parameters?.docs?.source}}};const f=["Functional","DefaultRegular","Expressive"];export{r as DefaultRegular,n as Expressive,e as Functional,f as __namedExportsOrder,x as default};
