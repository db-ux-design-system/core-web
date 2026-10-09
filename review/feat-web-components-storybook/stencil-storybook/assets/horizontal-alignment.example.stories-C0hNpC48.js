import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";import{a,i as o,n as s,r as c}from"./data-CA6wTzZB.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i(),a(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTable/Horizontal Alignment`,component:`db-table`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},d={args:{captionPlain:`(Default) Start`,divider:`both`,data:o},render:({children:e,...n})=>t`<div><db-infotext semantic="informational" size="small" icon="none">(Default) Start</db-infotext><db-table ${r(n)}></db-table></div>`},f={args:{captionPlain:`Center`,divider:`both`,data:s},render:({children:e,...n})=>t`<div><db-infotext semantic="informational" size="small" icon="none">Center</db-infotext><db-table ${r(n)}></db-table></div>`},p={args:{captionPlain:`End`,divider:`both`,data:c},render:({children:e,...n})=>t`<div><db-infotext semantic="informational" size="small" icon="none">End</db-infotext><db-table ${r(n)}></db-table></div>`},m=[`DefaultStart`,`Center`,`End`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) Start",
    "divider": "both",
    "data": horizontalAlignmentStartTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">(Default) Start</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Center",
    "divider": "both",
    "data": horizontalAlignmentCenterTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">Center</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "End",
    "divider": "both",
    "data": horizontalAlignmentEndTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext semantic="informational" size="small" icon="none">End</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as Center,d as DefaultStart,p as End,m as __namedExportsOrder,u as default};