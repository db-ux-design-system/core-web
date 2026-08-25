import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./link-BqxKDH7q.js";import{n as i,t as a}from"./notification-DfKsux6-.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBNotification/Examples - Variant:Overlay`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},l={args:{variant:`overlay`,children:`Text`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},u={args:{icon:`information_circle`,variant:`overlay`,children:`Text & Icon`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},d={args:{variant:`overlay`,image:(0,o.jsx)(`img`,{src:`/assets/images/placeholder.jpg`,alt:`this is a fancy placeholder`}),children:`Text & Preview Image`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},f={args:{headline:`Headline`,variant:`overlay`,children:`Text & Headline`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},p={args:{variant:`overlay`,linkVariant:`inline`,link:(0,o.jsx)(r,{href:`#`,children:`Textlink`}),children:`Text & Textlink Inline`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},m={args:{variant:`overlay`,linkVariant:`block`,link:(0,o.jsx)(r,{href:`#`,children:`Textlink`}),children:`Text & Textlink Block`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},h={args:{variant:`overlay`,linkVariant:`block`,timestamp:`10 min ago`,link:(0,o.jsx)(r,{href:`#`,children:`Textlink`}),showTimestamp:!0,children:`Text & Textlink Block & Timed`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},g={args:{headline:`Headline`,variant:`overlay`,linkVariant:`inline`,link:(0,o.jsx)(r,{href:`#`,children:`Textlink`}),closeable:!0,children:`Text & Headline & Textlink Inline & Closeable`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},_={args:{icon:`information_circle`,headline:`Headline`,variant:`overlay`,linkVariant:`inline`,link:(0,o.jsx)(r,{href:`#`,children:`Textlink`}),closeable:!0,children:`Text & Icon & Headline & Textlink Inline & Closeable`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},v={args:{variant:`overlay`,timestamp:`10 min ago`,showTimestamp:!0,children:`Text & Timed`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},y={args:{variant:`overlay`,timestamp:`10 min ago`,closeable:!0,showTimestamp:!0,children:`Text & Timed & Closeable`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},b={args:{headline:`Headline`,variant:`overlay`,timestamp:`10 min ago`,closeable:!0,showTimestamp:!0,children:`Text & Headline & Timed & Closeable`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},x={args:{icon:`information_circle`,headline:`Headline`,variant:`overlay`,timestamp:`10 min ago`,closeable:!0,showTimestamp:!0,children:`Text & Icon & Headline & Timed & Closeable`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "children": "Text"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "variant": "overlay",
    "children": "Text & Icon"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "image": <img src="/assets/images/placeholder.jpg" alt="this is a fancy placeholder" />,
    "children": "Text & Preview Image"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "variant": "overlay",
    "children": "Text & Headline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "linkVariant": "inline",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Text & Textlink Inline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "linkVariant": "block",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Text & Textlink Block"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "timestamp": "10 min ago",
    "showTimestamp": true,
    "children": "Text & Timed"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Text`,`TextIcon`,`TextPreviewImage`,`TextHeadline`,`TextTextlinkInline`,`TextTextlinkBlock`,`TextTextlinkBlockTimed`,`TextHeadlineTextlinkInlineCloseable`,`TextIconHeadlineTextlinkInlineCloseable`,`TextTimed`,`TextTimedCloseable`,`TextHeadlineTimedCloseable`,`TextIconHeadlineTimedCloseable`]})))()}C();export{l as Text,f as TextHeadline,g as TextHeadlineTextlinkInlineCloseable,b as TextHeadlineTimedCloseable,u as TextIcon,_ as TextIconHeadlineTextlinkInlineCloseable,x as TextIconHeadlineTimedCloseable,d as TextPreviewImage,m as TextTextlinkBlock,h as TextTextlinkBlockTimed,p as TextTextlinkInline,v as TextTimed,y as TextTimedCloseable,S as __namedExportsOrder,c as default};