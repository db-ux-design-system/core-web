import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./notification-Bf9yCTz4.js";import"./index-D2E5Z_bU.js";import"./iframe-COlR4DG9.js";import"./preload-helper-DBseQLlf.js";import"./constants-C-ysBZRi.js";import"./button-X8B1aIga.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBNotification/Show Headline",component:a,parameters:{layout:"centered"},tags:["autodocs"],args:{onClose:n()},argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},e={args:{headline:"Headline",showHeadline:!0,children:"(Default) True"},render:r=>t.jsx("div",{style:{width:"300px"},children:t.jsx(a,{...r})})},o={args:{headline:"Headline",showHeadline:!1,children:"False"},render:r=>t.jsx("div",{style:{width:"300px"},children:t.jsx(a,{...r})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "showHeadline": true,
    "children": "(Default) True"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "showHeadline": false,
    "children": "False"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const h=["DefaultTrue","False"];export{e as DefaultTrue,o as False,h as __namedExportsOrder,u as default};
