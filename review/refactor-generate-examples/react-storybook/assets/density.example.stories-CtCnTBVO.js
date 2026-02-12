import{j as s}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./link-uXDym9Hz.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBLink/Density",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"select",options:["adaptive","brand","inline"]},disabled:{control:"boolean"},size:{control:"select",options:["medium","small"]},content:{control:"select",options:["external","internal"]},showIcon:{control:"boolean"},wrap:{control:"boolean"},text:{control:"text"},target:{control:"select",options:["_self","_blank","_parent","_top"]},rel:{control:"text"},hreflang:{control:"text"},referrerPolicy:{control:"select",options:["no-referrer","no-referrer-when-downgrade","origin","origin-when-cross-origin","same-origin","strict-origin","strict-origin-when-cross-origin","unsafe-url"]},role:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},r={args:{"data-density":"functional",href:"#",text:"Functional"},render:e=>s.jsx(n,{...e})},t={args:{"data-density":"regular",href:"#",text:"(Default) Regular"},render:e=>s.jsx(n,{...e})},o={args:{"data-density":"expressive",href:"#",text:"Expressive"},render:e=>s.jsx(n,{...e})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "href": "#",
    "text": "Functional"
  },
  render: (properties: any) => <DBLink {...properties} />
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "href": "#",
    "text": "(Default) Regular"
  },
  render: (properties: any) => <DBLink {...properties} />
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "href": "#",
    "text": "Expressive"
  },
  render: (properties: any) => <DBLink {...properties} />
}`,...o.parameters?.docs?.source}}};const m=["Functional","DefaultRegular","Expressive"];export{t as DefaultRegular,o as Expressive,r as Functional,m as __namedExportsOrder,u as default};
