import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,o as n}from"./iframe-BQ22DlPQ.js";import{i as r,n as i,t as a}from"./apply-web-component-args-DgrL1IQb.js";var o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBNotification/Examples - Variant:Standalone`,component:`db-notification`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},c={args:{variant:`standalone`},render:({children:e,...n})=>t`<div style="width: 300px"><db-notification ${i(n)}>${r(`Text`)}</db-notification></div>`},l={args:{icon:`information_circle`,variant:`standalone`},render:({children:e,...n})=>t`<div style="width: 300px"><db-notification ${i(n)}>${r(`Text & Icon`)}</db-notification></div>`},u={args:{variant:`standalone`},render:({children:e,...n})=>t`<div style="width: 300px"><db-notification ${i(n)}>${r(`<img slot="image" alt="this is a fancy placeholder" src="/assets/images/placeholder.jpg" />Text & Preview Image`)}</db-notification></div>`},d={args:{headline:`Headline`,variant:`standalone`},render:({children:e,...n})=>t`<div style="width: 300px"><db-notification ${i(n)}>${r(`Text & Headline`)}</db-notification></div>`},f={args:{variant:`standalone`},render:({children:e,...n})=>t`<div style="width: 300px"><db-notification ${i(n)}>${r(`<db-link slot="link" href="#">Textlink</db-link>Text & Textlink Block`)}</db-notification></div>`},p={args:{linkVariant:`inline`,variant:`standalone`},render:({children:e,...n})=>t`<div style="width: 300px"><db-notification ${i(n)}>${r(`<db-link slot="link" href="#">Textlink</db-link>Text & Textlink Inline`)}</db-notification></div>`},m={args:{headline:`Headline`,linkVariant:`inline`,variant:`standalone`,closeable:!0},render:({children:e,...n})=>t`<div style="width: 300px"><db-notification ${i(n)}>${r(`<db-link slot="link" href="#">Textlink</db-link>Text & Headline & Textlink Inline & Closeable`)}</db-notification></div>`},h={args:{icon:`information_circle`,headline:`Headline`,linkVariant:`inline`,variant:`standalone`,closeable:!0},render:({children:e,...n})=>t`<div style="width: 300px"><db-notification ${i(n)}>${r(`<db-link slot="link" href="#">Textlink</db-link>Text & Icon & Headline & Textlink Inline & Closeable`)}</db-notification></div>`},g=[`Text`,`TextIcon`,`TextPreviewImage`,`TextHeadline`,`TextTextlinkBlock`,`TextTextlinkInline`,`TextHeadlineTextlinkInlineCloseable`,`TextIconHeadlineTextlinkInlineCloseable`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text\`)}</db-notification></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "variant": "standalone"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Icon\`)}</db-notification></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<img slot="image" alt="this is a fancy placeholder" src="/assets/images/placeholder.jpg" />Text & Preview Image\`)}</db-notification></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "variant": "standalone"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Headline\`)}</db-notification></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<db-link slot="link" href="#">Textlink</db-link>Text & Textlink Block\`)}</db-notification></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "inline",
    "variant": "standalone"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<db-link slot="link" href="#">Textlink</db-link>Text & Textlink Inline\`)}</db-notification></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "linkVariant": "inline",
    "variant": "standalone",
    "closeable": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<db-link slot="link" href="#">Textlink</db-link>Text & Headline & Textlink Inline & Closeable\`)}</db-notification></div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "headline": "Headline",
    "linkVariant": "inline",
    "variant": "standalone",
    "closeable": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<db-link slot="link" href="#">Textlink</db-link>Text & Icon & Headline & Textlink Inline & Closeable\`)}</db-notification></div>\`
}`,...h.parameters?.docs?.source}}}})))()}_();export{c as Text,d as TextHeadline,m as TextHeadlineTextlinkInlineCloseable,l as TextIcon,h as TextIconHeadlineTextlinkInlineCloseable,u as TextPreviewImage,f as TextTextlinkBlock,p as TextTextlinkInline,g as __namedExportsOrder,s as default};