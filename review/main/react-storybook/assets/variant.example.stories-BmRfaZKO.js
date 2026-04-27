import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{p as n,t as r}from"./src-Dg0IbgPT.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBNotification/Variant`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:a()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},s={args:{variant:`docked`,headline:`Headline`,icon:`information_circle`,children:`(Default) Docked`},render:e=>(0,i.jsx)(`div`,{style:{width:`300px`},children:(0,i.jsx)(n,{...e})})},c={args:{variant:`standalone`,headline:`Headline`,icon:`information_circle`,children:`Standalone`},render:e=>(0,i.jsx)(`div`,{style:{width:`300px`},children:(0,i.jsx)(n,{...e})})},l={args:{variant:`overlay`,headline:`Headline`,icon:`information_circle`,children:`Overlay`},render:e=>(0,i.jsx)(`div`,{style:{width:`300px`},children:(0,i.jsx)(n,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "docked",
    "headline": "Headline",
    "icon": "information_circle",
    "children": "(Default) Docked"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
    "headline": "Headline",
    "icon": "information_circle",
    "children": "Standalone"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "headline": "Headline",
    "icon": "information_circle",
    "children": "Overlay"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u=[`DefaultDocked`,`Standalone`,`Overlay`]}))();export{s as DefaultDocked,l as Overlay,c as Standalone,u as __namedExportsOrder,o as default};