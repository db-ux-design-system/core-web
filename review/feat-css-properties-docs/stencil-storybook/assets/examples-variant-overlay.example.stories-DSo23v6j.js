import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-Bx5_R3ll.js";import{i,n as a,t as o}from"./apply-web-component-args-K6-38IKB.js";var s=t({Text:()=>u,TextHeadline:()=>p,TextHeadlineTextlinkInlineCloseable:()=>_,TextHeadlineTimedCloseable:()=>x,TextIcon:()=>d,TextIconHeadlineTextlinkInlineCloseable:()=>v,TextIconHeadlineTimedCloseable:()=>S,TextPreviewImage:()=>f,TextTextlinkBlock:()=>h,TextTextlinkBlockTimed:()=>g,TextTextlinkInline:()=>m,TextTimed:()=>y,TextTimedCloseable:()=>b,__namedExportsOrder:()=>C,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBNotification/Examples - Variant:Overlay`,component:`db-notification`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:c()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},u={args:{variant:`overlay`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`Text`)}</db-notification></div>`},d={args:{icon:`information_circle`,variant:`overlay`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`Text & Icon`)}</db-notification></div>`},f={args:{variant:`overlay`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`<img slot="image" alt="this is a fancy placeholder" src="/assets/images/placeholder.jpg" />Text & Preview Image`)}</db-notification></div>`},p={args:{headline:`Headline`,variant:`overlay`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`Text & Headline`)}</db-notification></div>`},m={args:{variant:`overlay`,linkVariant:`inline`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`<db-link slot="link" href="#">Textlink</db-link>Text & Textlink Inline`)}</db-notification></div>`},h={args:{variant:`overlay`,linkVariant:`block`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`<db-link slot="link" href="#">Textlink</db-link>Text & Textlink Block`)}</db-notification></div>`},g={args:{variant:`overlay`,linkVariant:`block`,timestamp:`10 min ago`,showTimestamp:!0},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`<db-link slot="link" href="#">Textlink</db-link>Text & Textlink Block & Timed`)}</db-notification></div>`},_={args:{headline:`Headline`,variant:`overlay`,linkVariant:`inline`,closeable:!0},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`<db-link slot="link" href="#">Textlink</db-link>Text & Headline & Textlink Inline & Closeable`)}</db-notification></div>`},v={args:{icon:`information_circle`,headline:`Headline`,variant:`overlay`,linkVariant:`inline`,closeable:!0},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`<db-link slot="link" href="#">Textlink</db-link>Text & Icon & Headline & Textlink Inline & Closeable`)}</db-notification></div>`},y={args:{variant:`overlay`,timestamp:`10 min ago`,showTimestamp:!0},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`Text & Timed`)}</db-notification></div>`},b={args:{variant:`overlay`,timestamp:`10 min ago`,closeable:!0,showTimestamp:!0},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`Text & Timed & Closeable`)}</db-notification></div>`},x={args:{headline:`Headline`,variant:`overlay`,timestamp:`10 min ago`,closeable:!0,showTimestamp:!0},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`Text & Headline & Timed & Closeable`)}</db-notification></div>`},S={args:{icon:`information_circle`,headline:`Headline`,variant:`overlay`,timestamp:`10 min ago`,closeable:!0,showTimestamp:!0},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`Text & Icon & Headline & Timed & Closeable`)}</db-notification></div>`},C=[`Text`,`TextIcon`,`TextPreviewImage`,`TextHeadline`,`TextTextlinkInline`,`TextTextlinkBlock`,`TextTextlinkBlockTimed`,`TextHeadlineTextlinkInlineCloseable`,`TextIconHeadlineTextlinkInlineCloseable`,`TextTimed`,`TextTimedCloseable`,`TextHeadlineTimedCloseable`,`TextIconHeadlineTimedCloseable`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text\`)}</db-notification></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "variant": "overlay"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Icon\`)}</db-notification></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<img slot="image" alt="this is a fancy placeholder" src="/assets/images/placeholder.jpg" />Text & Preview Image\`)}</db-notification></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "variant": "overlay"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Headline\`)}</db-notification></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "linkVariant": "inline"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<db-link slot="link" href="#">Textlink</db-link>Text & Textlink Inline\`)}</db-notification></div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "linkVariant": "block"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<db-link slot="link" href="#">Textlink</db-link>Text & Textlink Block\`)}</db-notification></div>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "linkVariant": "block",
    "timestamp": "10 min ago",
    "showTimestamp": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<db-link slot="link" href="#">Textlink</db-link>Text & Textlink Block & Timed\`)}</db-notification></div>\`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "variant": "overlay",
    "linkVariant": "inline",
    "closeable": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<db-link slot="link" href="#">Textlink</db-link>Text & Headline & Textlink Inline & Closeable\`)}</db-notification></div>\`
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<db-link slot="link" href="#">Textlink</db-link>Text & Icon & Headline & Textlink Inline & Closeable\`)}</db-notification></div>\`
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "timestamp": "10 min ago",
    "showTimestamp": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Timed\`)}</db-notification></div>\`
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "timestamp": "10 min ago",
    "closeable": true,
    "showTimestamp": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Timed & Closeable\`)}</db-notification></div>\`
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Headline & Timed & Closeable\`)}</db-notification></div>\`
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`Text & Icon & Headline & Timed & Closeable\`)}</db-notification></div>\`
}`,...S.parameters?.docs?.source}}}})))()}export{d as a,f as c,m as d,y as f,w as h,x as i,h as l,s as m,p as n,v as o,b as p,_ as r,S as s,u as t,g as u};