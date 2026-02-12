import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./notification-CMgpyPCI.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./button-DnZnbJNC.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBNotification/Variant",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},delay:{control:"select",options:["none","slow","fast"]},animation:{control:"boolean"},width:{control:"select",options:["auto","fixed"]},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},t={args:{variant:"docked",headline:"Headline",icon:"information_circle",children:"(Default) Docked"},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{...o})})},r={args:{variant:"standalone",headline:"Headline",icon:"information_circle",children:"Standalone"},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{...o})})},n={args:{variant:"overlay",headline:"Headline",icon:"information_circle",children:"Overlay"},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{...o})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "docked",
    "headline": "Headline",
    "icon": "information_circle",
    "children": "(Default) Docked"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
    "headline": "Headline",
    "icon": "information_circle",
    "children": "Standalone"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "headline": "Headline",
    "icon": "information_circle",
    "children": "Overlay"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...n.parameters?.docs?.source}}};const v=["DefaultDocked","Standalone","Overlay"];export{t as DefaultDocked,n as Overlay,r as Standalone,v as __namedExportsOrder,h as default};
