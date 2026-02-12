import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./link-uXDym9Hz.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBLink/Size",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"select",options:["adaptive","brand","inline"]},disabled:{control:"boolean"},size:{control:"select",options:["medium","small"]},content:{control:"select",options:["external","internal"]},showIcon:{control:"boolean"},wrap:{control:"boolean"},text:{control:"text"},target:{control:"select",options:["_self","_blank","_parent","_top"]},rel:{control:"text"},hreflang:{control:"text"},referrerPolicy:{control:"select",options:["no-referrer","no-referrer-when-downgrade","origin","origin-when-cross-origin","same-origin","strict-origin","strict-origin-when-cross-origin","unsafe-url"]},role:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},e={args:{href:"#",text:"(Default) Medium"},render:o=>n.jsx(t,{...o})},r={args:{href:"#",size:"small",text:"Small"},render:o=>n.jsx(t,{...o})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "text": "(Default) Medium"
  },
  render: (properties: any) => <DBLink {...properties} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "size": "small",
    "text": "Small"
  },
  render: (properties: any) => <DBLink {...properties} />
}`,...r.parameters?.docs?.source}}};const d=["DefaultMedium","Small"];export{e as DefaultMedium,r as Small,d as __namedExportsOrder,m as default};
