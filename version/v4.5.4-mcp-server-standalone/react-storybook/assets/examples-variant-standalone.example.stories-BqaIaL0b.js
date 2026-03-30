import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./notification-C5EJTcra.js";import{D as p}from"./link-Dj2NNXFv.js";import"./index-D2E5Z_bU.js";import"./iframe-DqPoox06.js";import"./preload-helper-B2VkDja_.js";import"./constants-C-ysBZRi.js";import"./button-CiQt8FXn.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,y={title:"Components/DBNotification/Examples - Variant:Standalone",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{onClose:x()},argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},r={args:{variant:"standalone",children:"Text"},render:n=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...n})})},t={args:{icon:"information_circle",variant:"standalone",children:"Text & Icon"},render:n=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...n})})},a={args:{variant:"standalone",image:e.jsx("img",{src:"/assets/images/placeholder.jpg",alt:"this is a fancy placeholder"}),children:"Text & Preview Image"},render:n=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...n})})},o={args:{headline:"Headline",variant:"standalone",children:"Text & Headline"},render:n=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...n})})},l={args:{variant:"standalone",link:e.jsx(p,{href:"#",children:"Textlink"}),children:"Text & Textlink Block"},render:n=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...n})})},s={args:{linkVariant:"inline",variant:"standalone",link:e.jsx(p,{href:"#",children:"Textlink"}),children:"Text & Textlink Inline"},render:n=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...n})})},c={args:{headline:"Headline",linkVariant:"inline",variant:"standalone",link:e.jsx(p,{href:"#",children:"Textlink"}),closeable:!0,children:"Text & Headline & Textlink Inline & Closeable"},render:n=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...n})})},d={args:{icon:"information_circle",headline:"Headline",linkVariant:"inline",variant:"standalone",link:e.jsx(p,{href:"#",children:"Textlink"}),closeable:!0,children:"Text & Icon & Headline & Textlink Inline & Closeable"},render:n=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...n})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
    "children": "Text"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "variant": "standalone",
    "children": "Text & Icon"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
    "image": <img src="/assets/images/placeholder.jpg" alt="this is a fancy placeholder" />,
    "children": "Text & Preview Image"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "variant": "standalone",
    "children": "Text & Headline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Text & Textlink Block"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "inline",
    "variant": "standalone",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Text & Textlink Inline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "linkVariant": "inline",
    "variant": "standalone",
    "link": <DBLink href="#">Textlink</DBLink>,
    "closeable": true,
    "children": "Text & Headline & Textlink Inline & Closeable"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "headline": "Headline",
    "linkVariant": "inline",
    "variant": "standalone",
    "link": <DBLink href="#">Textlink</DBLink>,
    "closeable": true,
    "children": "Text & Icon & Headline & Textlink Inline & Closeable"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...d.parameters?.docs?.source}}};const B=["Text","TextIcon","TextPreviewImage","TextHeadline","TextTextlinkBlock","TextTextlinkInline","TextHeadlineTextlinkInlineCloseable","TextIconHeadlineTextlinkInlineCloseable"];export{r as Text,o as TextHeadline,c as TextHeadlineTextlinkInlineCloseable,t as TextIcon,d as TextIconHeadlineTextlinkInlineCloseable,a as TextPreviewImage,l as TextTextlinkBlock,s as TextTextlinkInline,B as __namedExportsOrder,y as default};
