import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BQPE-Z7b.js";import{n as i,t as a}from"./apply-web-component-args-B09ukjNm.js";import{r as o,s}from"./data-DTwDjW8k.js";var c=t({DefaultTable:()=>d,List:()=>f,__namedExportsOrder:()=>p,default:()=>u}),l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),s(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTable/Mobile Variant`,component:`db-table`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},d={args:{mobileVariant:`table`,captionPlain:`(Default) Table`,data:o},render:({children:e,...t})=>n`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">(Default) Table</db-infotext><db-table ${i(t)}></db-table></div>`},f={args:{mobileVariant:`list`,captionPlain:`List`,data:o},render:({children:e,...t})=>n`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">List</db-infotext><db-table ${i(t)}></db-table></div>`},p=[`DefaultTable`,`List`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "mobileVariant": "table",
    "captionPlain": "(Default) Table",
    "data": defaultTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">(Default) Table</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "mobileVariant": "list",
    "captionPlain": "List",
    "data": defaultTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">List</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...f.parameters?.docs?.source}}}})))()}export{c as i,f as n,m as r,d as t};