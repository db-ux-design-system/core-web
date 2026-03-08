import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./navigation-item-CIgotSvV.js";import"./index-D2E5Z_bU.js";import"./iframe-CiUFPK1z.js";import"./preload-helper-BVVqbGQe.js";import"./constants-C-ysBZRi.js";import"./floating-components-DAXMbqch.js";import"./button-B3gJE3R1.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBNavigationItem/Width",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},active:{control:"boolean"},showIcon:{control:"boolean"},width:{control:"select",options:["full","auto"]},wrap:{control:"boolean"},text:{control:"text"},subNavigationExpanded:{control:"boolean"},backButtonId:{control:"text"},backButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},o={args:{children:t.jsx("a",{href:"#",children:"(Default) Auto"})},render:r=>t.jsx("ul",{style:{width:"400px"},children:t.jsx(a,{...r})})},e={args:{width:"full",children:t.jsx("a",{href:"#",children:"Full"})},render:r=>t.jsx("ul",{style:{width:"400px"},children:t.jsx(a,{...r})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#">(Default) Auto</a>
  },
  render: (properties: any) => <ul style={{
    width: '400px'
  }}><DBNavigationItem {...properties} /></ul>
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "children": <a href="#">Full</a>
  },
  render: (properties: any) => <ul style={{
    width: '400px'
  }}><DBNavigationItem {...properties} /></ul>
}`,...e.parameters?.docs?.source}}};const x=["DefaultAuto","Full"];export{o as DefaultAuto,e as Full,x as __namedExportsOrder,h as default};
