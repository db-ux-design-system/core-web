import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as a,a as n}from"./tab-list-CmpYvehF.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBTabItem/Content Alignment Full Width",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},checked:{control:"boolean"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{label:"Left"},render:t=>r.jsx(n,{className:"w-full",children:r.jsx(a,{...t})})},o={args:{label:"Centered"},render:t=>r.jsx(n,{className:"w-full",children:r.jsx(a,{...t})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Left"
  },
  render: (properties: any) => <DBTabList className="w-full"><DBTabItem {...properties} /></DBTabList>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Centered"
  },
  render: (properties: any) => <DBTabList className="w-full"><DBTabItem {...properties} /></DBTabList>
}`,...o.parameters?.docs?.source}}};const b=["Left","Centered"];export{o as Centered,e as Left,b as __namedExportsOrder,d as default};
