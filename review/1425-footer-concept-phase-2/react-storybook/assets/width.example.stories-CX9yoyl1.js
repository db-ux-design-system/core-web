import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./footer-Co2lzgaW.js";import"./index-D2E5Z_bU.js";import"./iframe-9N9Q8iiV.js";import"./preload-helper-Wao4K5wC.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBFooter/Width",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{showCopyright:{control:"boolean"},showMain:{control:"boolean"},showMeta:{control:"boolean"},width:{control:"select",options:["full","large","small"]},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{width:"full",children:r.jsxs(r.Fragment,{children:[r.jsx(r.Fragment,{children:props.main||"Full"}),r.jsx(r.Fragment,{children:props.meta||"Meta Content"})]})},render:e=>r.jsx(a,{...e})},t={args:{width:"large",children:r.jsxs(r.Fragment,{children:[r.jsx(r.Fragment,{children:props.main||"Large"}),r.jsx(r.Fragment,{children:props.meta||"Meta Content"})]})},render:e=>r.jsx(a,{...e})},n={args:{width:"small",children:r.jsxs(r.Fragment,{children:[r.jsx(r.Fragment,{children:props.main||"Small"}),r.jsx(r.Fragment,{children:props.meta||"Meta Content"})]})},render:e=>r.jsx(a,{...e})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "children": <><>{props.main || "Full"}</><>{props.meta || "Meta Content"}</></>
  },
  render: (properties: any) => <DBFooter {...properties} />
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "large",
    "children": <><>{props.main || "Large"}</><>{props.meta || "Meta Content"}</></>
  },
  render: (properties: any) => <DBFooter {...properties} />
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "small",
    "children": <><>{props.main || "Small"}</><>{props.meta || "Meta Content"}</></>
  },
  render: (properties: any) => <DBFooter {...properties} />
}`,...n.parameters?.docs?.source}}};const g=["Full","Large","Small"];export{o as Full,t as Large,n as Small,g as __namedExportsOrder,d as default};
