import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBNotification/Variant`,component:`db-notification`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},c={args:{variant:`docked`,headline:`Headline`,icon:`information_circle`},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`(Default) Docked`)}</db-notification></div>`},l={args:{variant:`standalone`,headline:`Headline`,icon:`information_circle`},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Standalone`)}</db-notification></div>`},u={args:{variant:`overlay`,headline:`Headline`,icon:`information_circle`},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Overlay`)}</db-notification></div>`},d=[`DefaultDocked`,`Standalone`,`Overlay`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "docked",
    "headline": "Headline",
    "icon": "information_circle"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Docked\`)}</db-notification></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
    "headline": "Headline",
    "icon": "information_circle"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Standalone\`)}</db-notification></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "headline": "Headline",
    "icon": "information_circle"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Overlay\`)}</db-notification></div>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as DefaultDocked,u as Overlay,l as Standalone,d as __namedExportsOrder,s as default};