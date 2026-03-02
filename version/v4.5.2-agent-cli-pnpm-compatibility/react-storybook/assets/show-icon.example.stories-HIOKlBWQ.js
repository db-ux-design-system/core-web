import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./notification-B14VXvtk.js";import"./index-D2E5Z_bU.js";import"./iframe-CRg3iEU0.js";import"./preload-helper-DVaPbv4K.js";import"./constants-C-ysBZRi.js";import"./button-Bnbtwp3T.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBNotification/Show Icon",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},o={args:{icon:"information_circle",showIcon:!0,children:"(Default) True"},render:r=>t.jsx("div",{style:{width:"300px"},children:t.jsx(n,{...r})})},e={args:{icon:"information_circle",showIcon:!1,children:"False"},render:r=>t.jsx("div",{style:{width:"300px"},children:t.jsx(n,{...r})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "showIcon": true,
    "children": "(Default) True"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "showIcon": false,
    "children": "False"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...e.parameters?.docs?.source}}};const f=["DefaultTrue","False"];export{o as DefaultTrue,e as False,f as __namedExportsOrder,u as default};
