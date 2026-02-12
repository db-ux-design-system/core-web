import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./notification-CMgpyPCI.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./button-DnZnbJNC.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBNotification/Semantic",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},delay:{control:"select",options:["none","slow","fast"]},animation:{control:"boolean"},width:{control:"select",options:["auto","fixed"]},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},i={args:{headline:"Headline",children:"(Default) Adaptive"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{...r})})},a={args:{semantic:"neutral",headline:"Headline",children:"Neutral"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{...r})})},o={args:{semantic:"critical",headline:"Headline",children:"Critical"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{...r})})},n={args:{semantic:"informational",headline:"Headline",children:"Informational"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{...r})})},s={args:{semantic:"successful",headline:"Headline",children:"Successful"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{...r})})},c={args:{semantic:"warning",headline:"Headline",children:"Warning"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{...r})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "children": "(Default) Adaptive"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "neutral",
    "headline": "Headline",
    "children": "Neutral"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const v=["DefaultAdaptive","Neutral","Critical","Informational","Successful","Warning"];export{o as Critical,i as DefaultAdaptive,n as Informational,a as Neutral,s as Successful,c as Warning,v as __namedExportsOrder,g as default};
