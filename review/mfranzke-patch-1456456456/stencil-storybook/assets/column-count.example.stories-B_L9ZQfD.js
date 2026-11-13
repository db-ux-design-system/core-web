import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-D7ZhsNxW.js";import{n as i,t as a}from"./apply-web-component-args-DqcWTDo5.js";import{n as o,s,t as c}from"./data-IsZHFUvi.js";var l=t({Columns20:()=>f,Columns21:()=>p,__namedExportsOrder:()=>m,default:()=>d}),u,d,f,p,m;function h(){return(h=e((()=>{r(),a(),s(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/DBTable/Column Count`,component:`db-table`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},f={args:{"data-testid":`table-20-columns`,captionPlain:`Columns 20`,data:c,showCaption:!0},render:({children:e,...t})=>n`<div style="inline-size: 100%; display: flex; flex-direction: column"><db-infotext semantic="informational" size="small" icon="none">Columns 20</db-infotext><db-table ${i(t)}></db-table></div>`},p={args:{"data-testid":`table-21-columns`,captionPlain:`Columns 21`,data:o,showCaption:!0},render:({children:e,...t})=>n`<div style="inline-size: 100%; display: flex; flex-direction: column; --db-table-columns: 21"><db-infotext semantic="informational" size="small" icon="none">Columns 21</db-infotext><db-table ${i(t)}></db-table></div>`},m=[`Columns20`,`Columns21`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "table-20-columns",
    "captionPlain": "Columns 20",
    "data": columnCount20Table,
    "showCaption": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="inline-size: 100%; display: flex; flex-direction: column"><db-infotext semantic="informational" size="small" icon="none">Columns 20</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "table-21-columns",
    "captionPlain": "Columns 21",
    "data": columnCount21Table,
    "showCaption": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="inline-size: 100%; display: flex; flex-direction: column; --db-table-columns: 21"><db-infotext semantic="informational" size="small" icon="none">Columns 21</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...p.parameters?.docs?.source}}}})))()}export{h as i,p as n,l as r,f as t};