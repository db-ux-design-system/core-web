import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-B9gE3-RB.js";import{i,n as a,t as o}from"./apply-web-component-args-BifYIpws.js";var s=t({Text:()=>u,TextHeadline:()=>p,TextHeadlineTextlinkInlineCloseable:()=>g,TextIcon:()=>d,TextIconHeadlineTextlinkInlineCloseable:()=>_,TextPreviewImage:()=>f,TextTextlinkBlock:()=>m,TextTextlinkInline:()=>h,__namedExportsOrder:()=>v,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBNotification/Examples - Variant:Standalone`,component:`db-notification`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:c()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},u={args:{variant:`standalone`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`Text`)}</db-notification></div>`},d={args:{icon:`information_circle`,variant:`standalone`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`Text & Icon`)}</db-notification></div>`},f={args:{variant:`standalone`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`<img slot="image" alt="this is a fancy placeholder" src="/assets/images/placeholder.jpg" />Text & Preview Image`)}</db-notification></div>`},p={args:{headline:`Headline`,variant:`standalone`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`Text & Headline`)}</db-notification></div>`},m={args:{variant:`standalone`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`<db-link slot="link" href="#">Textlink</db-link>Text & Textlink Block`)}</db-notification></div>`},h={args:{linkVariant:`inline`,variant:`standalone`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`<db-link slot="link" href="#">Textlink</db-link>Text & Textlink Inline`)}</db-notification></div>`},g={args:{headline:`Headline`,linkVariant:`inline`,variant:`standalone`,closeable:!0},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`<db-link slot="link" href="#">Textlink</db-link>Text & Headline & Textlink Inline & Closeable`)}</db-notification></div>`},_={args:{icon:`information_circle`,headline:`Headline`,linkVariant:`inline`,variant:`standalone`,closeable:!0},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`<db-link slot="link" href="#">Textlink</db-link>Text & Icon & Headline & Textlink Inline & Closeable`)}</db-notification></div>`},v=[`Text`,`TextIcon`,`TextPreviewImage`,`TextHeadline`,`TextTextlinkBlock`,`TextTextlinkInline`,`TextHeadlineTextlinkInlineCloseable`,`TextIconHeadlineTextlinkInlineCloseable`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text\`)}</db-notification></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "variant": "standalone"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Icon\`)}</db-notification></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<img slot="image" alt="this is a fancy placeholder" src="/assets/images/placeholder.jpg" />Text & Preview Image\`)}</db-notification></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "variant": "standalone"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Headline\`)}</db-notification></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<db-link slot="link" href="#">Textlink</db-link>Text & Textlink Block\`)}</db-notification></div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "inline",
    "variant": "standalone"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<db-link slot="link" href="#">Textlink</db-link>Text & Textlink Inline\`)}</db-notification></div>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}})))()}export{_ as a,h as c,d as i,s as l,p as n,f as o,g as r,m as s,u as t,y as u};