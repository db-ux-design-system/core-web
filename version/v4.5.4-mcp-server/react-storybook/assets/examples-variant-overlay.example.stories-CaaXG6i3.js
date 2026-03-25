import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./notification-C3jxd6Jr.js";import{D as a}from"./link-CtSzD-42.js";import"./index-D2E5Z_bU.js";import"./iframe-BhiBouzR.js";import"./preload-helper-BHRuClfA.js";import"./constants-C-ysBZRi.js";import"./button-CMF91ZdE.js";const{fn:k}=__STORYBOOK_MODULE_TEST__,H={title:"Components/DBNotification/Examples - Variant:Overlay",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{onClose:k()},argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},t={args:{variant:"overlay",children:"Text"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...r})})},n={args:{icon:"information_circle",variant:"overlay",children:"Text & Icon"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...r})})},o={args:{variant:"overlay",image:e.jsx("img",{src:"/assets/images/placeholder.jpg",alt:"this is a fancy placeholder"}),children:"Text & Preview Image"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...r})})},s={args:{headline:"Headline",variant:"overlay",children:"Text & Headline"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...r})})},l={args:{variant:"overlay",linkVariant:"inline",link:e.jsx(a,{href:"#",children:"Textlink"}),children:"Text & Textlink Inline"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...r})})},d={args:{variant:"overlay",linkVariant:"block",link:e.jsx(a,{href:"#",children:"Textlink"}),children:"Text & Textlink Block"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...r})})},c={args:{variant:"overlay",linkVariant:"block",timestamp:"10 min ago",link:e.jsx(a,{href:"#",children:"Textlink"}),showTimestamp:!0,children:"Text & Textlink Block & Timed"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...r})})},p={args:{headline:"Headline",variant:"overlay",linkVariant:"inline",link:e.jsx(a,{href:"#",children:"Textlink"}),closeable:!0,children:"Text & Headline & Textlink Inline & Closeable"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...r})})},m={args:{icon:"information_circle",headline:"Headline",variant:"overlay",linkVariant:"inline",link:e.jsx(a,{href:"#",children:"Textlink"}),closeable:!0,children:"Text & Icon & Headline & Textlink Inline & Closeable"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...r})})},x={args:{variant:"overlay",timestamp:"10 min ago",showTimestamp:!0,children:"Text & Timed"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...r})})},T={args:{variant:"overlay",timestamp:"10 min ago",closeable:!0,showTimestamp:!0,children:"Text & Timed & Closeable"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...r})})},h={args:{headline:"Headline",variant:"overlay",timestamp:"10 min ago",closeable:!0,showTimestamp:!0,children:"Text & Headline & Timed & Closeable"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...r})})},v={args:{icon:"information_circle",headline:"Headline",variant:"overlay",timestamp:"10 min ago",closeable:!0,showTimestamp:!0,children:"Text & Icon & Headline & Timed & Closeable"},render:r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...r})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "children": "Text"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "variant": "overlay",
    "children": "Text & Icon"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "image": <img src="/assets/images/placeholder.jpg" alt="this is a fancy placeholder" />,
    "children": "Text & Preview Image"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "variant": "overlay",
    "children": "Text & Headline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "linkVariant": "inline",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Text & Textlink Inline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "linkVariant": "block",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Text & Textlink Block"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "linkVariant": "block",
    "timestamp": "10 min ago",
    "link": <DBLink href="#">Textlink</DBLink>,
    "showTimestamp": true,
    "children": "Text & Textlink Block & Timed"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "variant": "overlay",
    "linkVariant": "inline",
    "link": <DBLink href="#">Textlink</DBLink>,
    "closeable": true,
    "children": "Text & Headline & Textlink Inline & Closeable"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "headline": "Headline",
    "variant": "overlay",
    "linkVariant": "inline",
    "link": <DBLink href="#">Textlink</DBLink>,
    "closeable": true,
    "children": "Text & Icon & Headline & Textlink Inline & Closeable"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "timestamp": "10 min ago",
    "showTimestamp": true,
    "children": "Text & Timed"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "timestamp": "10 min ago",
    "closeable": true,
    "showTimestamp": true,
    "children": "Text & Timed & Closeable"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...T.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "variant": "overlay",
    "timestamp": "10 min ago",
    "closeable": true,
    "showTimestamp": true,
    "children": "Text & Headline & Timed & Closeable"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "headline": "Headline",
    "variant": "overlay",
    "timestamp": "10 min ago",
    "closeable": true,
    "showTimestamp": true,
    "children": "Text & Icon & Headline & Timed & Closeable"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...v.parameters?.docs?.source}}};const I=["Text","TextIcon","TextPreviewImage","TextHeadline","TextTextlinkInline","TextTextlinkBlock","TextTextlinkBlockTimed","TextHeadlineTextlinkInlineCloseable","TextIconHeadlineTextlinkInlineCloseable","TextTimed","TextTimedCloseable","TextHeadlineTimedCloseable","TextIconHeadlineTimedCloseable"];export{t as Text,s as TextHeadline,p as TextHeadlineTextlinkInlineCloseable,h as TextHeadlineTimedCloseable,n as TextIcon,m as TextIconHeadlineTextlinkInlineCloseable,v as TextIconHeadlineTimedCloseable,o as TextPreviewImage,d as TextTextlinkBlock,c as TextTextlinkBlockTimed,l as TextTextlinkInline,x as TextTimed,T as TextTimedCloseable,I as __namedExportsOrder,H as default};
