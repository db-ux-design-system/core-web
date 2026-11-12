import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BYLdompv.js";import{n as i,t as a}from"./apply-web-component-args-CTUelvRL.js";import{a as o,i as s,o as c,s as l}from"./data-IsZHFUvi.js";var u=t({Center:()=>m,DefaultStart:()=>p,End:()=>h,__namedExportsOrder:()=>g,default:()=>f}),d,f,p,m,h,g;function _(){return(_=e((()=>{r(),a(),l(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBTable/Horizontal Alignment`,component:`db-table`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},p={args:{captionPlain:`(Default) Start`,divider:`both`,data:c},render:({children:e,...t})=>n`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">(Default) Start</db-infotext><db-table ${i(t)}></db-table></div>`},m={args:{captionPlain:`Center`,divider:`both`,data:s},render:({children:e,...t})=>n`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">Center</db-infotext><db-table ${i(t)}></db-table></div>`},h={args:{captionPlain:`End`,divider:`both`,data:o},render:({children:e,...t})=>n`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">End</db-infotext><db-table ${i(t)}></db-table></div>`},g=[`DefaultStart`,`Center`,`End`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) Start",
    "divider": "both",
    "data": horizontalAlignmentStartTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">(Default) Start</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Center",
    "divider": "both",
    "data": horizontalAlignmentCenterTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">Center</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "End",
    "divider": "both",
    "data": horizontalAlignmentEndTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">End</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...h.parameters?.docs?.source}}}})))()}export{_ as a,u as i,p as n,h as r,m as t};