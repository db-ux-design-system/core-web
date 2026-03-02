import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./badge-B_qIGzWJ.js";import{D as s}from"./icon-Bk6_5d4D.js";import"./index-D2E5Z_bU.js";import"./iframe-CRg3iEU0.js";import"./preload-helper-DVaPbv4K.js";import"./constants-C-ysBZRi.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBBadge/Content",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},size:{control:"select",options:["small","medium"]},placement:{control:"select",options:["inline","corner-top-left","corner-top-right","corner-center-left","corner-center-right","corner-bottom-left","corner-bottom-right"]},label:{control:"text"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},r={args:{children:"(Default) Text"},render:e=>n.jsx(a,{...e})},o={args:{},render:e=>n.jsx(a,{...e})},t={args:{semantic:"critical",emphasis:"strong",children:n.jsx(s,{icon:"x_placeholder",children:"Icon - Small"})},render:e=>n.jsx(a,{...e})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) Text"
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  render: (properties: any) => <DBBadge {...properties} />
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "emphasis": "strong",
    "children": <DBIcon icon="x_placeholder">Icon - Small</DBIcon>
  },
  render: (properties: any) => <DBBadge {...properties} />
}`,...t.parameters?.docs?.source}}};const D=["DefaultText","DotSmall","IconSmall"];export{r as DefaultText,o as DotSmall,t as IconSmall,D as __namedExportsOrder,x as default};
