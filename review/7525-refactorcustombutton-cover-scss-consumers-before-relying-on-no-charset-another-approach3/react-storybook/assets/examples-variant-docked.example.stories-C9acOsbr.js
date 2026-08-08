import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./link-DCDDw_mg.js";import{n as i,t as a}from"./notification-CPS7nvem.js";var o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBNotification/Examples - Variant:Docked`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},l={args:{children:`Text`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},u={args:{icon:`information_circle`,children:`Text & Icon`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},d={args:{image:(0,o.jsx)(`img`,{src:`/assets/images/placeholder.jpg`,alt:`this is a fancy placeholder`}),children:`Text & Preview Image`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},f={args:{headline:`Headline`,children:`Text & Headline`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},p={args:{link:(0,o.jsx)(r,{href:`#`,children:`Textlink`}),children:`Text & Textlink Block`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},m={args:{linkVariant:`inline`,link:(0,o.jsx)(r,{href:`#`,children:`Textlink`}),children:`Text & Textlink Inline`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},h={args:{headline:`Headline`,linkVariant:`inline`,link:(0,o.jsx)(r,{href:`#`,children:`Textlink`}),closeable:!0,children:`Text & Headline & Textlink Inline & Closeable`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},g={args:{icon:`information_circle`,headline:`Headline`,linkVariant:`inline`,link:(0,o.jsx)(r,{href:`#`,children:`Textlink`}),closeable:!0,children:`Text & Icon & Headline & Textlink Inline & Closeable`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(a,{...e})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "Text"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "children": "Text & Icon"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "image": <img src="/assets/images/placeholder.jpg" alt="this is a fancy placeholder" />,
    "children": "Text & Preview Image"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "children": "Text & Headline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Text & Textlink Block"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "inline",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Text & Textlink Inline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "linkVariant": "inline",
    "link": <DBLink href="#">Textlink</DBLink>,
    "closeable": true,
    "children": "Text & Headline & Textlink Inline & Closeable"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "headline": "Headline",
    "linkVariant": "inline",
    "link": <DBLink href="#">Textlink</DBLink>,
    "closeable": true,
    "children": "Text & Icon & Headline & Textlink Inline & Closeable"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...g.parameters?.docs?.source}}},_=[`Text`,`TextIcon`,`TextPreviewImage`,`TextHeadline`,`TextTextlinkBlock`,`TextTextlinkInline`,`TextHeadlineTextlinkInlineCloseable`,`TextIconHeadlineTextlinkInlineCloseable`]})))()}v();export{l as Text,f as TextHeadline,h as TextHeadlineTextlinkInlineCloseable,u as TextIcon,g as TextIconHeadlineTextlinkInlineCloseable,d as TextPreviewImage,p as TextTextlinkBlock,m as TextTextlinkInline,_ as __namedExportsOrder,c as default};