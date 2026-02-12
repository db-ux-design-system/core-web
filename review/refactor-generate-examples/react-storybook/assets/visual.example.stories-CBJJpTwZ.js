import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./notification-CMgpyPCI.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./button-DnZnbJNC.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBNotification/Visual",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},delay:{control:"select",options:["none","slow","fast"]},animation:{control:"boolean"},width:{control:"select",options:["auto","fixed"]},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},e={args:{icon:"information_circle",children:"(Default) Icon"},render:r=>o.jsx("div",{style:{width:"300px"},children:o.jsx(a,{...r})})},t={args:{image:o.jsx("img",{src:"/assets/images/placeholder.jpg",alt:"this is a fancy placeholder"}),children:"Image"},render:r=>o.jsx("div",{style:{width:"300px"},children:o.jsx(a,{...r})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "children": "(Default) Icon"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "image": <img src="/assets/images/placeholder.jpg" alt="this is a fancy placeholder" />,
    "children": "Image"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const u=["DefaultIcon","Image"];export{e as DefaultIcon,t as Image,u as __namedExportsOrder,f as default};
