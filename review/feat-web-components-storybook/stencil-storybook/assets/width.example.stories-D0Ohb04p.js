import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";import{a,t as o}from"./data-CA6wTzZB.js";var s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTable/Width`,component:`db-table`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},l={args:{width:`full`,captionPlain:`(Default) Full`,data:o},render:({children:e,...n})=>t`<div><db-infotext semantic="informational" size="small" icon="none">(Default) Full</db-infotext><db-table ${r(n)}></db-table></div>`},u={args:{width:`auto`,captionPlain:`Auto`,data:o},render:({children:e,...n})=>t`<div><db-infotext semantic="informational" size="small" icon="none">Auto</db-infotext><db-table ${r(n)}></db-table></div>`},d=[`DefaultFull`,`Auto`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "captionPlain": "(Default) Full",
    "data": defaultTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">(Default) Full</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "captionPlain": "Auto",
    "data": defaultTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">Auto</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Auto,l as DefaultFull,d as __namedExportsOrder,c as default};