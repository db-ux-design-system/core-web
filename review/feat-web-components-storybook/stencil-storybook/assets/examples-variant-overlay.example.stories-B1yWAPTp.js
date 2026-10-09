import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBNotification/Examples - Variant:Overlay`,component:`db-notification`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},c={args:{variant:`overlay`},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text`)}</db-notification></div>`},l={args:{icon:`information_circle`,variant:`overlay`},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Icon`)}</db-notification></div>`},u={args:{variant:`overlay`},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Preview Image`)}</db-notification></div>`},d={args:{headline:`Headline`,variant:`overlay`},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Headline`)}</db-notification></div>`},f={args:{variant:`overlay`,linkVariant:`inline`},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Textlink Inline`)}</db-notification></div>`},p={args:{variant:`overlay`,linkVariant:`block`},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Textlink Block`)}</db-notification></div>`},m={args:{variant:`overlay`,linkVariant:`block`,timestamp:`10 min ago`,showTimestamp:!0},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Textlink Block & Timed`)}</db-notification></div>`},h={args:{headline:`Headline`,variant:`overlay`,linkVariant:`inline`,closeable:!0},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Headline & Textlink Inline & Closeable`)}</db-notification></div>`},g={args:{icon:`information_circle`,headline:`Headline`,variant:`overlay`,linkVariant:`inline`,closeable:!0},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Icon & Headline & Textlink Inline & Closeable`)}</db-notification></div>`},_={args:{variant:`overlay`,timestamp:`10 min ago`,showTimestamp:!0},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Timed`)}</db-notification></div>`},v={args:{variant:`overlay`,timestamp:`10 min ago`,closeable:!0,showTimestamp:!0},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Timed & Closeable`)}</db-notification></div>`},y={args:{headline:`Headline`,variant:`overlay`,timestamp:`10 min ago`,closeable:!0,showTimestamp:!0},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Headline & Timed & Closeable`)}</db-notification></div>`},b={args:{icon:`information_circle`,headline:`Headline`,variant:`overlay`,timestamp:`10 min ago`,closeable:!0,showTimestamp:!0},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Icon & Headline & Timed & Closeable`)}</db-notification></div>`},x=[`Text`,`TextIcon`,`TextPreviewImage`,`TextHeadline`,`TextTextlinkInline`,`TextTextlinkBlock`,`TextTextlinkBlockTimed`,`TextHeadlineTextlinkInlineCloseable`,`TextIconHeadlineTextlinkInlineCloseable`,`TextTimed`,`TextTimedCloseable`,`TextHeadlineTimedCloseable`,`TextIconHeadlineTimedCloseable`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text\`)}</db-notification></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "variant": "overlay"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Icon\`)}</db-notification></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Preview Image\`)}</db-notification></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "variant": "overlay"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Headline\`)}</db-notification></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "linkVariant": "inline"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Textlink Inline\`)}</db-notification></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "linkVariant": "block"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Textlink Block\`)}</db-notification></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "linkVariant": "block",
    "timestamp": "10 min ago",
    "showTimestamp": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Textlink Block & Timed\`)}</db-notification></div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "variant": "overlay",
    "linkVariant": "inline",
    "closeable": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Headline & Textlink Inline & Closeable\`)}</db-notification></div>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "headline": "Headline",
    "variant": "overlay",
    "linkVariant": "inline",
    "closeable": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Icon & Headline & Textlink Inline & Closeable\`)}</db-notification></div>\`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "timestamp": "10 min ago",
    "showTimestamp": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Timed\`)}</db-notification></div>\`
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "timestamp": "10 min ago",
    "closeable": true,
    "showTimestamp": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Timed & Closeable\`)}</db-notification></div>\`
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "variant": "overlay",
    "timestamp": "10 min ago",
    "closeable": true,
    "showTimestamp": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Headline & Timed & Closeable\`)}</db-notification></div>\`
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "headline": "Headline",
    "variant": "overlay",
    "timestamp": "10 min ago",
    "closeable": true,
    "showTimestamp": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Icon & Headline & Timed & Closeable\`)}</db-notification></div>\`
}`,...b.parameters?.docs?.source}}}})))()}S();export{c as Text,d as TextHeadline,h as TextHeadlineTextlinkInlineCloseable,y as TextHeadlineTimedCloseable,l as TextIcon,g as TextIconHeadlineTextlinkInlineCloseable,b as TextIconHeadlineTimedCloseable,u as TextPreviewImage,p as TextTextlinkBlock,m as TextTextlinkBlockTimed,f as TextTextlinkInline,_ as TextTimed,v as TextTimedCloseable,x as __namedExportsOrder,s as default};