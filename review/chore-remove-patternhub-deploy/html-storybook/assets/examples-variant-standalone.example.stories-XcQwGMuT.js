import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./link-C4om2SrP.js";import{n as a,t as o}from"./notification-BtVMFtAK.js";var s=t({Text:()=>d,TextHeadline:()=>m,TextHeadlineTextlinkInlineCloseable:()=>_,TextIcon:()=>f,TextIconHeadlineTextlinkInlineCloseable:()=>v,TextPreviewImage:()=>p,TextTextlinkBlock:()=>h,TextTextlinkInline:()=>g,__namedExportsOrder:()=>y,default:()=>u}),c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBNotification/Examples - Variant:Standalone`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},d={args:{variant:`standalone`,children:`Text`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},f={args:{icon:`information_circle`,variant:`standalone`,children:`Text & Icon`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},p={args:{variant:`standalone`,image:(0,c.jsx)(`img`,{src:`/assets/images/placeholder.jpg`,alt:`this is a fancy placeholder`}),children:`Text & Preview Image`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},m={args:{headline:`Headline`,variant:`standalone`,children:`Text & Headline`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},h={args:{variant:`standalone`,link:(0,c.jsx)(i,{href:`#`,children:`Textlink`}),children:`Text & Textlink Block`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},g={args:{linkVariant:`inline`,variant:`standalone`,link:(0,c.jsx)(i,{href:`#`,children:`Textlink`}),children:`Text & Textlink Inline`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},_={args:{headline:`Headline`,linkVariant:`inline`,variant:`standalone`,link:(0,c.jsx)(i,{href:`#`,children:`Textlink`}),closeable:!0,children:`Text & Headline & Textlink Inline & Closeable`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},v={args:{icon:`information_circle`,headline:`Headline`,linkVariant:`inline`,variant:`standalone`,link:(0,c.jsx)(i,{href:`#`,children:`Textlink`}),closeable:!0,children:`Text & Icon & Headline & Textlink Inline & Closeable`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},y=[`Text`,`TextIcon`,`TextPreviewImage`,`TextHeadline`,`TextTextlinkBlock`,`TextTextlinkInline`,`TextHeadlineTextlinkInlineCloseable`,`TextIconHeadlineTextlinkInlineCloseable`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
    "children": "Text"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "variant": "standalone",
    "children": "Text & Icon"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
    "image": <img src="/assets/images/placeholder.jpg" alt="this is a fancy placeholder" />,
    "children": "Text & Preview Image"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "variant": "standalone",
    "children": "Text & Headline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Text & Textlink Block"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "inline",
    "variant": "standalone",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Text & Textlink Inline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}}})))()}export{v as a,g as c,f as i,s as l,m as n,p as o,_ as r,h as s,d as t,b as u};