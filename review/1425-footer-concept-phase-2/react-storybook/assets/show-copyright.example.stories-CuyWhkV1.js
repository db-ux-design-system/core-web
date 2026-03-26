import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./footer-Co2lzgaW.js";import"./index-D2E5Z_bU.js";import"./iframe-9N9Q8iiV.js";import"./preload-helper-Wao4K5wC.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBFooter/Show Copyright",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{showCopyright:{control:"boolean"},showMain:{control:"boolean"},showMeta:{control:"boolean"},width:{control:"select",options:["full","large","small"]},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{showCopyright:!0,children:r.jsxs(r.Fragment,{children:[r.jsx(r.Fragment,{children:props.main||"True"}),r.jsx(r.Fragment,{children:props.meta||"Meta Content"})]})},render:t=>r.jsx(s,{...t})},o={args:{showCopyright:!1,children:r.jsxs(r.Fragment,{children:[r.jsx(r.Fragment,{children:props.main||"False"}),r.jsx(r.Fragment,{children:props.meta||"Meta Content"})]})},render:t=>r.jsx(s,{...t})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "showCopyright": true,
    "children": <><>{props.main || "True"}</><>{props.meta || "Meta Content"}</></>
  },
  render: (properties: any) => <DBFooter {...properties} />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "showCopyright": false,
    "children": <><>{props.main || "False"}</><>{props.meta || "Meta Content"}</></>
  },
  render: (properties: any) => <DBFooter {...properties} />
}`,...o.parameters?.docs?.source}}};const d=["True","False"];export{o as False,e as True,d as __namedExportsOrder,m as default};
