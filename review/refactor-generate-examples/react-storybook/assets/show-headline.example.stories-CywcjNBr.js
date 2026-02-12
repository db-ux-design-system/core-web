import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./notification-CMgpyPCI.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./button-DnZnbJNC.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBNotification/Show Headline",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},delay:{control:"select",options:["none","slow","fast"]},animation:{control:"boolean"},width:{control:"select",options:["auto","fixed"]},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},e={args:{headline:"Headline",showHeadline:!0,children:"(Default) True"},render:r=>t.jsx("div",{style:{width:"300px"},children:t.jsx(n,{...r})})},o={args:{headline:"Headline",showHeadline:!1,children:"False"},render:r=>t.jsx("div",{style:{width:"300px"},children:t.jsx(n,{...r})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
