import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./navigation-item-CgYwv9u5.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./floating-components-BNmGdAgy.js";import"./button-DnZnbJNC.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBNavigationItem/Width",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},active:{control:"boolean"},showIcon:{control:"boolean"},width:{control:"select",options:["full","auto"]},wrap:{control:"boolean"},text:{control:"text"},subNavigationExpanded:{control:"boolean"},backButtonId:{control:"text"},backButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},o={args:{children:t.jsx("a",{href:"#",children:"(Default) Auto"})},render:r=>t.jsx("ul",{style:{width:"400px"},children:t.jsx(a,{...r})})},e={args:{width:"full",children:t.jsx("a",{href:"#",children:"Full"})},render:r=>t.jsx("ul",{style:{width:"400px"},children:t.jsx(a,{...r})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
