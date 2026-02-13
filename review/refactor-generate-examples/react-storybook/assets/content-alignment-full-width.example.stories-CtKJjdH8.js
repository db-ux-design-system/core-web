import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as a,a as s}from"./tab-list-EaQHpgKR.js";import"./index-cGbbigiG.js";import"./iframe-BxDBuP78.js";import"./preload-helper-D8o24SmT.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBTabItem/Content Alignment Full Width",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},checked:{control:"boolean"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{label:"Left"},render:r=>t.jsx(s,{style:{blockSize:"100%"},children:t.jsx(a,{...r})})},o={args:{label:"Centered"},render:r=>t.jsx(s,{style:{blockSize:"100%"},children:t.jsx(a,{...r})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Left"
  },
  render: (properties: any) => <DBTabList style={{
    blockSize: '100%'
  }}><DBTabItem {...properties} /></DBTabList>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Centered"
  },
  render: (properties: any) => <DBTabList style={{
    blockSize: '100%'
  }}><DBTabItem {...properties} /></DBTabList>
}`,...o.parameters?.docs?.source}}};const m=["Left","Centered"];export{o as Centered,e as Left,m as __namedExportsOrder,d as default};
