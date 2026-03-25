import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./notification-Cui1dnCa.js";import"./index-D2E5Z_bU.js";import"./iframe-DwOpbq5K.js";import"./preload-helper-j823Xs5Z.js";import"./constants-C-ysBZRi.js";import"./button-B-LSsBs2.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBNotification/Semantic",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{onClose:l()},argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},a={args:{headline:"Headline",children:"(Default) Adaptive"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{...r})})},i={args:{semantic:"neutral",headline:"Headline",children:"Neutral"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{...r})})},o={args:{semantic:"critical",headline:"Headline",children:"Critical"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{...r})})},n={args:{semantic:"informational",headline:"Headline",children:"Informational"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{...r})})},s={args:{semantic:"successful",headline:"Headline",children:"Successful"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{...r})})},c={args:{semantic:"warning",headline:"Headline",children:"Warning"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{...r})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "children": "(Default) Adaptive"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "neutral",
    "headline": "Headline",
    "children": "Neutral"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "headline": "Headline",
    "children": "Critical"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "informational",
    "headline": "Headline",
    "children": "Informational"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "successful",
    "headline": "Headline",
    "children": "Successful"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "warning",
    "headline": "Headline",
    "children": "Warning"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...c.parameters?.docs?.source}}};const v=["DefaultAdaptive","Neutral","Critical","Informational","Successful","Warning"];export{o as Critical,a as DefaultAdaptive,n as Informational,i as Neutral,s as Successful,c as Warning,v as __namedExportsOrder,g as default};
