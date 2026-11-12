import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BnQ4OuDo.js";import{n as i,t as a}from"./apply-web-component-args-Df_OrMHU.js";import{c as o,s}from"./data-IsZHFUvi.js";var c=t({Both:()=>p,BothSpaced:()=>m,DefaultNone:()=>d,Horizontal:()=>h,HorizontalSpaced:()=>g,NoneSpaced:()=>f,Vertical:()=>_,VerticalSpaced:()=>v,__namedExportsOrder:()=>y,default:()=>u}),l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),a(),s(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTable/Sticky Header`,component:`db-table`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},d={args:{captionPlain:`(Default) None`,data:o},render:({children:e,...t})=>n`<div style="inline-size: 300px; display: block; text-align: center; block-size: 300px"><db-infotext semantic="informational" size="small" icon="none">(Default) None</db-infotext><db-table ${i(t)}></db-table></div>`},f={args:{variant:`spaced`,captionPlain:`None Spaced`,data:o},render:({children:e,...t})=>n`<div style="inline-size: 300px; display: block; text-align: center; block-size: 300px"><db-infotext semantic="informational" size="small" icon="none">None Spaced</db-infotext><db-table ${i(t)}></db-table></div>`},p={args:{captionPlain:`Both`,stickyHeader:`both`,data:o},render:({children:e,...t})=>n`<div style="inline-size: 300px; display: block; text-align: center; block-size: 300px"><db-infotext semantic="informational" size="small" icon="none">Both</db-infotext><db-table ${i(t)}></db-table></div>`},m={args:{variant:`spaced`,captionPlain:`Both Spaced`,stickyHeader:`both`,data:o},render:({children:e,...t})=>n`<div style="inline-size: 300px; display: block; text-align: center; block-size: 300px"><db-infotext semantic="informational" size="small" icon="none">Both Spaced</db-infotext><db-table ${i(t)}></db-table></div>`},h={args:{stickyHeader:`horizontal`,captionPlain:`Horizontal`,data:o},render:({children:e,...t})=>n`<div style="inline-size: 300px; display: block; text-align: center; block-size: 300px"><db-infotext semantic="informational" size="small" icon="none">Horizontal</db-infotext><db-table ${i(t)}></db-table></div>`},g={args:{variant:`spaced`,stickyHeader:`horizontal`,captionPlain:`Horizontal Spaced`,data:o},render:({children:e,...t})=>n`<div style="inline-size: 300px; display: block; text-align: center; block-size: 300px"><db-infotext semantic="informational" size="small" icon="none">Horizontal Spaced</db-infotext><db-table ${i(t)}></db-table></div>`},_={args:{stickyHeader:`vertical`,captionPlain:`Vertical`,data:o},render:({children:e,...t})=>n`<div style="inline-size: 300px; display: block; text-align: center; block-size: 300px"><db-infotext semantic="informational" size="small" icon="none">Vertical</db-infotext><db-table ${i(t)}></db-table></div>`},v={args:{variant:`spaced`,stickyHeader:`vertical`,captionPlain:`Vertical Spaced`,data:o},render:({children:e,...t})=>n`<div style="inline-size: 300px; display: block; text-align: center; block-size: 300px"><db-infotext semantic="informational" size="small" icon="none">Vertical Spaced</db-infotext><db-table ${i(t)}></db-table></div>`},y=[`DefaultNone`,`NoneSpaced`,`Both`,`BothSpaced`,`Horizontal`,`HorizontalSpaced`,`Vertical`,`VerticalSpaced`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) None",
    "data": overflowTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="inline-size: 300px; display: block; text-align: center; block-size: 300px"><db-infotext semantic="informational" size="small" icon="none">(Default) None</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "captionPlain": "None Spaced",
    "data": overflowTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="inline-size: 300px; display: block; text-align: center; block-size: 300px"><db-infotext semantic="informational" size="small" icon="none">None Spaced</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Both",
    "stickyHeader": "both",
    "data": overflowTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="inline-size: 300px; display: block; text-align: center; block-size: 300px"><db-infotext semantic="informational" size="small" icon="none">Both</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "captionPlain": "Both Spaced",
    "stickyHeader": "both",
    "data": overflowTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="inline-size: 300px; display: block; text-align: center; block-size: 300px"><db-infotext semantic="informational" size="small" icon="none">Both Spaced</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "stickyHeader": "horizontal",
    "captionPlain": "Horizontal",
    "data": overflowTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="inline-size: 300px; display: block; text-align: center; block-size: 300px"><db-infotext semantic="informational" size="small" icon="none">Horizontal</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "stickyHeader": "horizontal",
    "captionPlain": "Horizontal Spaced",
    "data": overflowTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="inline-size: 300px; display: block; text-align: center; block-size: 300px"><db-infotext semantic="informational" size="small" icon="none">Horizontal Spaced</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "stickyHeader": "vertical",
    "captionPlain": "Vertical",
    "data": overflowTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="inline-size: 300px; display: block; text-align: center; block-size: 300px"><db-infotext semantic="informational" size="small" icon="none">Vertical</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "stickyHeader": "vertical",
    "captionPlain": "Vertical Spaced",
    "data": overflowTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="inline-size: 300px; display: block; text-align: center; block-size: 300px"><db-infotext semantic="informational" size="small" icon="none">Vertical Spaced</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...v.parameters?.docs?.source}}}})))()}export{g as a,v as c,h as i,b as l,m as n,f as o,d as r,_ as s,p as t,c as u};