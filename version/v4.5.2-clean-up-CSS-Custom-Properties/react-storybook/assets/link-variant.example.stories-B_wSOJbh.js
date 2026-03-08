import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./notification-DXlySq6e.js";import{D as i}from"./link-CGySmcf9.js";import"./index-D2E5Z_bU.js";import"./iframe-CiUFPK1z.js";import"./preload-helper-BVVqbGQe.js";import"./constants-C-ysBZRi.js";import"./button-B3gJE3R1.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBNotification/Link Variant",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},e={args:{linkVariant:"block",link:o.jsx(i,{href:"#",children:"Textlink"}),children:"(Default) Block"},render:n=>o.jsx("div",{style:{width:"300px"},children:o.jsx(r,{...n})})},t={args:{linkVariant:"inline",link:o.jsx(i,{href:"#",children:"Textlink"}),children:"Inline"},render:n=>o.jsx("div",{style:{width:"300px"},children:o.jsx(r,{...n})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "block",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "(Default) Block"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "inline",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Inline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const u=["DefaultBlock","Inline"];export{e as DefaultBlock,t as Inline,u as __namedExportsOrder,f as default};
