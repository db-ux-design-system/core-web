import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./link-I3nqCvO0.js";import{n as a,t as o}from"./notification-BeT2-oID.js";var s=t({Text:()=>d,TextHeadline:()=>m,TextHeadlineTextlinkInlineCloseable:()=>v,TextHeadlineTimedCloseable:()=>S,TextIcon:()=>f,TextIconHeadlineTextlinkInlineCloseable:()=>y,TextIconHeadlineTimedCloseable:()=>C,TextPreviewImage:()=>p,TextTextlinkBlock:()=>g,TextTextlinkBlockTimed:()=>_,TextTextlinkInline:()=>h,TextTimed:()=>b,TextTimedCloseable:()=>x,__namedExportsOrder:()=>w,default:()=>u}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBNotification/Examples - Variant:Overlay`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},d={args:{variant:`overlay`,children:`Text`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},f={args:{icon:`information_circle`,variant:`overlay`,children:`Text & Icon`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},p={args:{variant:`overlay`,image:(0,c.jsx)(`img`,{src:`/assets/images/placeholder.jpg`,alt:`this is a fancy placeholder`}),children:`Text & Preview Image`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},m={args:{headline:`Headline`,variant:`overlay`,children:`Text & Headline`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},h={args:{variant:`overlay`,linkVariant:`inline`,link:(0,c.jsx)(i,{href:`#`,children:`Textlink`}),children:`Text & Textlink Inline`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},g={args:{variant:`overlay`,linkVariant:`block`,link:(0,c.jsx)(i,{href:`#`,children:`Textlink`}),children:`Text & Textlink Block`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},_={args:{variant:`overlay`,linkVariant:`block`,timestamp:`10 min ago`,link:(0,c.jsx)(i,{href:`#`,children:`Textlink`}),showTimestamp:!0,children:`Text & Textlink Block & Timed`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},v={args:{headline:`Headline`,variant:`overlay`,linkVariant:`inline`,link:(0,c.jsx)(i,{href:`#`,children:`Textlink`}),closeable:!0,children:`Text & Headline & Textlink Inline & Closeable`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},y={args:{icon:`information_circle`,headline:`Headline`,variant:`overlay`,linkVariant:`inline`,link:(0,c.jsx)(i,{href:`#`,children:`Textlink`}),closeable:!0,children:`Text & Icon & Headline & Textlink Inline & Closeable`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},b={args:{variant:`overlay`,timestamp:`10 min ago`,showTimestamp:!0,children:`Text & Timed`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},x={args:{variant:`overlay`,timestamp:`10 min ago`,closeable:!0,showTimestamp:!0,children:`Text & Timed & Closeable`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},S={args:{headline:`Headline`,variant:`overlay`,timestamp:`10 min ago`,closeable:!0,showTimestamp:!0,children:`Text & Headline & Timed & Closeable`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},C={args:{icon:`information_circle`,headline:`Headline`,variant:`overlay`,timestamp:`10 min ago`,closeable:!0,showTimestamp:!0,children:`Text & Icon & Headline & Timed & Closeable`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},w=[`Text`,`TextIcon`,`TextPreviewImage`,`TextHeadline`,`TextTextlinkInline`,`TextTextlinkBlock`,`TextTextlinkBlockTimed`,`TextHeadlineTextlinkInlineCloseable`,`TextIconHeadlineTextlinkInlineCloseable`,`TextTimed`,`TextTimedCloseable`,`TextHeadlineTimedCloseable`,`TextIconHeadlineTimedCloseable`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "children": "Text"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "variant": "overlay",
    "children": "Text & Icon"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "image": <img src="/assets/images/placeholder.jpg" alt="this is a fancy placeholder" />,
    "children": "Text & Preview Image"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "variant": "overlay",
    "children": "Text & Headline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "linkVariant": "inline",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Text & Textlink Inline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "linkVariant": "block",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Text & Textlink Block"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "timestamp": "10 min ago",
    "showTimestamp": true,
    "children": "Text & Timed"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}}})))()}export{f as a,p as c,h as d,b as f,T as h,S as i,g as l,s as m,m as n,y as o,x as p,v as r,C as s,d as t,_ as u};