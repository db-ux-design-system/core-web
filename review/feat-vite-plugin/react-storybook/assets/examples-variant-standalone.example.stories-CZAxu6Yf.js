import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{g as n,p as r,t as i}from"./src-C7TXoUjo.js";var a,o,s,c,l,u,d,f,p,m,h,g;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBNotification/Examples - Variant:Standalone`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},c={args:{variant:`standalone`,children:`Text`},render:e=>(0,a.jsx)(`div`,{style:{width:`300px`},children:(0,a.jsx)(r,{...e})})},l={args:{icon:`information_circle`,variant:`standalone`,children:`Text & Icon`},render:e=>(0,a.jsx)(`div`,{style:{width:`300px`},children:(0,a.jsx)(r,{...e})})},u={args:{variant:`standalone`,image:(0,a.jsx)(`img`,{src:`/assets/images/placeholder.jpg`,alt:`this is a fancy placeholder`}),children:`Text & Preview Image`},render:e=>(0,a.jsx)(`div`,{style:{width:`300px`},children:(0,a.jsx)(r,{...e})})},d={args:{headline:`Headline`,variant:`standalone`,children:`Text & Headline`},render:e=>(0,a.jsx)(`div`,{style:{width:`300px`},children:(0,a.jsx)(r,{...e})})},f={args:{variant:`standalone`,link:(0,a.jsx)(n,{href:`#`,children:`Textlink`}),children:`Text & Textlink Block`},render:e=>(0,a.jsx)(`div`,{style:{width:`300px`},children:(0,a.jsx)(r,{...e})})},p={args:{linkVariant:`inline`,variant:`standalone`,link:(0,a.jsx)(n,{href:`#`,children:`Textlink`}),children:`Text & Textlink Inline`},render:e=>(0,a.jsx)(`div`,{style:{width:`300px`},children:(0,a.jsx)(r,{...e})})},m={args:{headline:`Headline`,linkVariant:`inline`,variant:`standalone`,link:(0,a.jsx)(n,{href:`#`,children:`Textlink`}),closeable:!0,children:`Text & Headline & Textlink Inline & Closeable`},render:e=>(0,a.jsx)(`div`,{style:{width:`300px`},children:(0,a.jsx)(r,{...e})})},h={args:{icon:`information_circle`,headline:`Headline`,linkVariant:`inline`,variant:`standalone`,link:(0,a.jsx)(n,{href:`#`,children:`Textlink`}),closeable:!0,children:`Text & Icon & Headline & Textlink Inline & Closeable`},render:e=>(0,a.jsx)(`div`,{style:{width:`300px`},children:(0,a.jsx)(r,{...e})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
    "children": "Text"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "variant": "standalone",
    "children": "Text & Icon"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
    "image": <img src="/assets/images/placeholder.jpg" alt="this is a fancy placeholder" />,
    "children": "Text & Preview Image"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "variant": "standalone",
    "children": "Text & Headline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Text & Textlink Block"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "inline",
    "variant": "standalone",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Text & Textlink Inline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Text`,`TextIcon`,`TextPreviewImage`,`TextHeadline`,`TextTextlinkBlock`,`TextTextlinkInline`,`TextHeadlineTextlinkInlineCloseable`,`TextIconHeadlineTextlinkInlineCloseable`]}))();export{c as Text,d as TextHeadline,m as TextHeadlineTextlinkInlineCloseable,l as TextIcon,h as TextIconHeadlineTextlinkInlineCloseable,u as TextPreviewImage,f as TextTextlinkBlock,p as TextTextlinkInline,g as __namedExportsOrder,s as default};