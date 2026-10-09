import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";import{a,t as o}from"./data-CA6wTzZB.js";var s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTable/Size`,component:`db-table`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},l={args:{size:`x-small`,captionPlain:`X-Small`,data:o},render:({children:e,...n})=>t`<div><db-infotext semantic="informational" size="small" icon="none">X-Small</db-infotext><db-table ${r(n)}></db-table></div>`},u={args:{size:`small`,captionPlain:`Small`,data:o},render:({children:e,...n})=>t`<div><db-infotext semantic="informational" size="small" icon="none">Small</db-infotext><db-table ${r(n)}></db-table></div>`},d={args:{size:`medium`,captionPlain:`(Default) Medium`,data:o},render:({children:e,...n})=>t`<div><db-infotext semantic="informational" size="small" icon="none">(Default) Medium</db-infotext><db-table ${r(n)}></db-table></div>`},f={args:{size:`large`,captionPlain:`Large`,data:o},render:({children:e,...n})=>t`<div><db-infotext semantic="informational" size="small" icon="none">Large</db-infotext><db-table ${r(n)}></db-table></div>`},p=[`XSmall`,`Small`,`DefaultMedium`,`Large`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "x-small",
    "captionPlain": "X-Small",
    "data": defaultTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">X-Small</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "captionPlain": "Small",
    "data": defaultTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">Small</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "captionPlain": "(Default) Medium",
    "data": defaultTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">(Default) Medium</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "large",
    "captionPlain": "Large",
    "data": defaultTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">Large</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as DefaultMedium,f as Large,u as Small,l as XSmall,p as __namedExportsOrder,c as default};