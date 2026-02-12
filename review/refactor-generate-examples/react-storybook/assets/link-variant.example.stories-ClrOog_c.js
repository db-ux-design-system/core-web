import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./notification-CMgpyPCI.js";import{D as r}from"./link-uXDym9Hz.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./button-DnZnbJNC.js";const{fn:k}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBNotification/Link Variant",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},delay:{control:"select",options:["none","slow","fast"]},animation:{control:"boolean"},width:{control:"select",options:["auto","fixed"]},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},t={args:{linkVariant:"block",link:o.jsx(r,{href:"#",children:"Textlink"}),children:"(Default) Block"},render:n=>o.jsx("div",{style:{width:"300px"},children:o.jsx(i,{...n})})},e={args:{linkVariant:"inline",link:o.jsx(r,{href:"#",children:"Textlink"}),children:"Inline"},render:n=>o.jsx("div",{style:{width:"300px"},children:o.jsx(i,{...n})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "block",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "(Default) Block"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "inline",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Inline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...e.parameters?.docs?.source}}};const u=["DefaultBlock","Inline"];export{t as DefaultBlock,e as Inline,u as __namedExportsOrder,f as default};
