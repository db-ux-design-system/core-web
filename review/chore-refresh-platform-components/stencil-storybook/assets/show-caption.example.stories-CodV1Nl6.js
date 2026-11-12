import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BiF0E9FZ.js";import{n as i,t as a}from"./apply-web-component-args-lK3_lLW3.js";import{r as o,s}from"./data-IsZHFUvi.js";var c=t({DefaultFalse:()=>d,True:()=>f,__namedExportsOrder:()=>p,default:()=>u}),l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),s(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTable/ShowCaption`,component:`db-table`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},d={args:{captionPlain:`(Default) False`,data:o},render:({children:e,...t})=>n`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">(Default) False</db-infotext><db-table ${i(t)}></db-table></div>`},f={args:{captionPlain:`True`,data:o,showCaption:!0},render:({children:e,...t})=>n`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-table ${i(t)}></db-table></div>`},p=[`DefaultFalse`,`True`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) False",
    "data": defaultTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">(Default) False</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "True",
    "data": defaultTable,
    "showCaption": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...f.parameters?.docs?.source}}}})))()}export{c as i,f as n,m as r,d as t};