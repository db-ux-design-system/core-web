import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,o as n}from"./iframe-ugiHh9Ej.js";import{n as r,t as i}from"./apply-web-component-args-2krFUbQw.js";import{r as a,s as o}from"./data-DTwDjW8k.js";var s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTable/Mobile Variant`,component:`db-table`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},l={args:{mobileVariant:`table`,captionPlain:`(Default) Table`,data:a},render:({children:e,...n})=>t`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">(Default) Table</db-infotext><db-table ${r(n)}></db-table></div>`},u={args:{mobileVariant:`list`,captionPlain:`List`,data:a},render:({children:e,...n})=>t`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">List</db-infotext><db-table ${r(n)}></db-table></div>`},d=[`DefaultTable`,`List`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "mobileVariant": "table",
    "captionPlain": "(Default) Table",
    "data": defaultTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">(Default) Table</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "mobileVariant": "list",
    "captionPlain": "List",
    "data": defaultTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">List</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultTable,u as List,d as __namedExportsOrder,c as default};