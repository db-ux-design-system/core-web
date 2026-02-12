import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./notification-CMgpyPCI.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./button-DnZnbJNC.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBNotification/Density",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},delay:{control:"select",options:["none","slow","fast"]},animation:{control:"boolean"},width:{control:"select",options:["auto","fixed"]},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},t={args:{"data-density":"functional",headline:"Headline",icon:"information_circle",children:"functional"},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{...o})})},r={args:{"data-density":"regular",headline:"Headline",icon:"information_circle",children:"regular (Default)"},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{...o})})},i={args:{"data-density":"expressive",headline:"Headline",icon:"information_circle",children:"expressive"},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{...o})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "headline": "Headline",
    "icon": "information_circle",
    "children": "functional"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "headline": "Headline",
    "icon": "information_circle",
    "children": "regular (Default)"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "headline": "Headline",
    "icon": "information_circle",
    "children": "expressive"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...i.parameters?.docs?.source}}};const x=["functional","regularDefault","expressive"];export{x as __namedExportsOrder,f as default,i as expressive,t as functional,r as regularDefault};
