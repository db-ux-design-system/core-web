import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./notification-tGFgZ1cG.js";import"./index-C0vvPcr0.js";import"./iframe-bSjRYqH6.js";import"./preload-helper-CkzXfqio.js";import"./constants-C-ysBZRi.js";import"./button-JGQhS6CI.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBNotification/Variant",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},t={args:{variant:"docked",headline:"Headline",icon:"information_circle",children:"(Default) Docked"},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{...o})})},r={args:{variant:"standalone",headline:"Headline",icon:"information_circle",children:"Standalone"},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{...o})})},a={args:{variant:"overlay",headline:"Headline",icon:"information_circle",children:"Overlay"},render:o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(n,{...o})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "headline": "Headline",
    "icon": "information_circle",
    "children": "Overlay"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...a.parameters?.docs?.source}}};const x=["DefaultDocked","Standalone","Overlay"];export{t as DefaultDocked,a as Overlay,r as Standalone,x as __namedExportsOrder,h as default};
