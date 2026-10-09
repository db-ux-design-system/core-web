import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";import{a,o}from"./data-CA6wTzZB.js";var s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTable/Sticky Header`,component:`db-table`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},l={args:{captionPlain:`(Default) None`,data:o},render:({children:e,...n})=>t`<div><db-infotext semantic="informational" size="small" icon="none">(Default) None</db-infotext><db-table ${r(n)}></db-table></div>`},u={args:{variant:`spaced`,captionPlain:`None Spaced`,data:o},render:({children:e,...n})=>t`<div><db-infotext semantic="informational" size="small" icon="none">None Spaced</db-infotext><db-table ${r(n)}></db-table></div>`},d={args:{captionPlain:`Both`,stickyHeader:`both`,data:o},render:({children:e,...n})=>t`<div><db-infotext semantic="informational" size="small" icon="none">Both</db-infotext><db-table ${r(n)}></db-table></div>`},f={args:{variant:`spaced`,captionPlain:`Both Spaced`,stickyHeader:`both`,data:o},render:({children:e,...n})=>t`<div><db-infotext semantic="informational" size="small" icon="none">Both Spaced</db-infotext><db-table ${r(n)}></db-table></div>`},p={args:{stickyHeader:`horizontal`,captionPlain:`Horizontal`,data:o},render:({children:e,...n})=>t`<div><db-infotext semantic="informational" size="small" icon="none">Horizontal</db-infotext><db-table ${r(n)}></db-table></div>`},m={args:{variant:`spaced`,stickyHeader:`horizontal`,captionPlain:`Horizontal Spaced`,data:o},render:({children:e,...n})=>t`<div><db-infotext semantic="informational" size="small" icon="none">Horizontal Spaced</db-infotext><db-table ${r(n)}></db-table></div>`},h={args:{stickyHeader:`vertical`,captionPlain:`Vertical`,data:o},render:({children:e,...n})=>t`<div><db-infotext semantic="informational" size="small" icon="none">Vertical</db-infotext><db-table ${r(n)}></db-table></div>`},g={args:{variant:`spaced`,stickyHeader:`vertical`,captionPlain:`Vertical Spaced`,data:o},render:({children:e,...n})=>t`<div><db-infotext semantic="informational" size="small" icon="none">Vertical Spaced</db-infotext><db-table ${r(n)}></db-table></div>`},_=[`DefaultNone`,`NoneSpaced`,`Both`,`BothSpaced`,`Horizontal`,`HorizontalSpaced`,`Vertical`,`VerticalSpaced`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) None",
    "data": overflowTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">(Default) None</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "captionPlain": "None Spaced",
    "data": overflowTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">None Spaced</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Both",
    "stickyHeader": "both",
    "data": overflowTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">Both</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "captionPlain": "Both Spaced",
    "stickyHeader": "both",
    "data": overflowTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">Both Spaced</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "stickyHeader": "horizontal",
    "captionPlain": "Horizontal",
    "data": overflowTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">Horizontal</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "stickyHeader": "horizontal",
    "captionPlain": "Horizontal Spaced",
    "data": overflowTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">Horizontal Spaced</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "stickyHeader": "vertical",
    "captionPlain": "Vertical",
    "data": overflowTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">Vertical</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "stickyHeader": "vertical",
    "captionPlain": "Vertical Spaced",
    "data": overflowTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">Vertical Spaced</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...g.parameters?.docs?.source}}}})))()}v();export{d as Both,f as BothSpaced,l as DefaultNone,p as Horizontal,m as HorizontalSpaced,u as NoneSpaced,h as Vertical,g as VerticalSpaced,_ as __namedExportsOrder,c as default};