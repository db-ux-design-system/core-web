import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBNotification/Examples - Variant:Docked`,component:`db-notification`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},c={args:{},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text`)}</db-notification></div>`},l={args:{icon:`information_circle`},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Icon`)}</db-notification></div>`},u={args:{},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Preview Image`)}</db-notification></div>`},d={args:{headline:`Headline`},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Headline`)}</db-notification></div>`},f={args:{},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Textlink Block`)}</db-notification></div>`},p={args:{linkVariant:`inline`},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Textlink Inline`)}</db-notification></div>`},m={args:{headline:`Headline`,linkVariant:`inline`,closeable:!0},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Headline & Textlink Inline & Closeable`)}</db-notification></div>`},h={args:{icon:`information_circle`,headline:`Headline`,linkVariant:`inline`,closeable:!0},render:({children:e,...n})=>t`<div><db-notification ${i(n)}>${r(`Text & Icon & Headline & Textlink Inline & Closeable`)}</db-notification></div>`},g=[`Text`,`TextIcon`,`TextPreviewImage`,`TextHeadline`,`TextTextlinkBlock`,`TextTextlinkInline`,`TextHeadlineTextlinkInlineCloseable`,`TextIconHeadlineTextlinkInlineCloseable`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text\`)}</db-notification></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Icon\`)}</db-notification></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Preview Image\`)}</db-notification></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Headline\`)}</db-notification></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Textlink Block\`)}</db-notification></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "inline"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Textlink Inline\`)}</db-notification></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "linkVariant": "inline",
    "closeable": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Headline & Textlink Inline & Closeable\`)}</db-notification></div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "headline": "Headline",
    "linkVariant": "inline",
    "closeable": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Icon & Headline & Textlink Inline & Closeable\`)}</db-notification></div>\`
}`,...h.parameters?.docs?.source}}}})))()}_();export{c as Text,d as TextHeadline,m as TextHeadlineTextlinkInlineCloseable,l as TextIcon,h as TextIconHeadlineTextlinkInlineCloseable,u as TextPreviewImage,f as TextTextlinkBlock,p as TextTextlinkInline,g as __namedExportsOrder,s as default};