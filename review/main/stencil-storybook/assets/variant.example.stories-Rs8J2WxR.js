import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-B4vbRiLP.js";import{n as i,t as a}from"./apply-web-component-args-nLpIKx2m.js";import{d as o,s}from"./data-IsZHFUvi.js";var c=t({DefaultFlat:()=>d,Spaced:()=>f,TableVariant2:()=>p,__namedExportsOrder:()=>m,default:()=>u}),l,u,d,f,p,m;function h(){return(h=e((()=>{r(),a(),s(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTable/Variant`,component:`db-table`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},d={args:{variant:`flat`,divider:`both`,captionPlain:`(Default) Flat`,data:o},render:({children:e,...t})=>n`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">(Default) Flat</db-infotext><db-table ${i(t)}></db-table></div>`},f={args:{variant:`zebra`,divider:`both`,captionPlain:`Zebra`,data:o},render:({children:e,...t})=>n`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">Zebra</db-infotext><db-table ${i(t)}></db-table></div>`},p={args:{variant:`spaced`,divider:`both`,captionPlain:`Spaced`,data:o},render:({children:e,...t})=>n`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">Spaced</db-infotext><db-table ${i(t)}></db-table></div>`},m=[`DefaultFlat`,`Spaced`,`TableVariant2`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "flat",
    "divider": "both",
    "captionPlain": "(Default) Flat",
    "data": subHeaderEmphasisWeakTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">(Default) Flat</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "zebra",
    "divider": "both",
    "captionPlain": "Zebra",
    "data": subHeaderEmphasisWeakTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">Zebra</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "divider": "both",
    "captionPlain": "Spaced",
    "data": subHeaderEmphasisWeakTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">Spaced</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...p.parameters?.docs?.source}}}})))()}export{c as a,h as i,f as n,p as r,d as t};