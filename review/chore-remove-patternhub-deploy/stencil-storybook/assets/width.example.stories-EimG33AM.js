import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BqvJLakp.js";import{n as i,t as a}from"./apply-web-component-args-BtUnDguQ.js";import{a as o,t as s}from"./data-C0P0p_BJ.js";var c=t({Auto:()=>f,DefaultFull:()=>d,__namedExportsOrder:()=>p,default:()=>u}),l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),o(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTable/Width`,component:`db-table`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},d={args:{width:`full`,captionPlain:`(Default) Full`,data:s},render:({children:e,...t})=>n`<div style="inline-size: 300px; display: flex; flex-direction: column"><db-infotext semantic="informational" size="small" icon="none">(Default) Full</db-infotext><db-table ${i(t)}></db-table></div>`},f={args:{width:`auto`,captionPlain:`Auto`,data:s},render:({children:e,...t})=>n`<div style="inline-size: 300px; display: flex; flex-direction: column"><db-infotext semantic="informational" size="small" icon="none">Auto</db-infotext><db-table ${i(t)}></db-table></div>`},p=[`DefaultFull`,`Auto`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "captionPlain": "(Default) Full",
    "data": defaultTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="inline-size: 300px; display: flex; flex-direction: column"><db-infotext semantic="informational" size="small" icon="none">(Default) Full</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "captionPlain": "Auto",
    "data": defaultTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="inline-size: 300px; display: flex; flex-direction: column"><db-infotext semantic="informational" size="small" icon="none">Auto</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...f.parameters?.docs?.source}}}})))()}export{c as i,d as n,m as r,f as t};