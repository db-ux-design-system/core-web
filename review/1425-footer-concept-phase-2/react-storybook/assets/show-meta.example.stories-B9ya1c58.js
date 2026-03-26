import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./footer-Co2lzgaW.js";import"./index-D2E5Z_bU.js";import"./iframe-9N9Q8iiV.js";import"./preload-helper-Wao4K5wC.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBFooter/Show Meta",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{showCopyright:{control:"boolean"},showMain:{control:"boolean"},showMeta:{control:"boolean"},width:{control:"select",options:["full","large","small"]},id:{control:"text"},autofocus:{control:"boolean"}}},r={args:{showMeta:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(e.Fragment,{children:props.main||"True"}),e.jsx(e.Fragment,{children:props.meta||"Meta Content"})]})},render:t=>e.jsx(s,{...t})},o={args:{showMeta:!1,children:e.jsx(e.Fragment,{children:props.main||"False"})},render:t=>e.jsx(s,{...t})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "showMeta": true,
    "children": <><>{props.main || "True"}</><>{props.meta || "Meta Content"}</></>
  },
  render: (properties: any) => <DBFooter {...properties} />
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "showMeta": false,
    "children": <>{props.main || "False"}</>
  },
  render: (properties: any) => <DBFooter {...properties} />
}`,...o.parameters?.docs?.source}}};const d=["True","False"];export{o as False,r as True,d as __namedExportsOrder,m as default};
