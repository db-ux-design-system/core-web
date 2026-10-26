import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,o as n}from"./iframe-BcSuK5ji.js";import{n as r,t as i}from"./apply-web-component-args-DE1JAvvE.js";import{a,t as o}from"./data-C0P0p_BJ.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTable/Density`,component:`db-table`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},l={args:{"data-density":`functional`,captionPlain:`Functional`,data:o},render:({children:e,...n})=>t`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">Functional</db-infotext><db-table ${r(n)}></db-table></div>`},u={args:{"data-density":`regular`,captionPlain:`(Default) Regular`,data:o},render:({children:e,...n})=>t`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">(Default) Regular</db-infotext><db-table ${r(n)}></db-table></div>`},d={args:{"data-density":`expressive`,captionPlain:`Expressive`,data:o},render:({children:e,...n})=>t`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">Expressive</db-infotext><db-table ${r(n)}></db-table></div>`},f=[`Functional`,`Regular`,`Expressive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "captionPlain": "Functional",
    "data": defaultTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">Functional</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "captionPlain": "(Default) Regular",
    "data": defaultTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">(Default) Regular</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "captionPlain": "Expressive",
    "data": defaultTable
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="min-inline-size: 300px; display: flex; flex-direction: column; align-items: center; gap: var(--db-spacing-fixed-md)"><db-infotext semantic="informational" size="small" icon="none">Expressive</db-infotext><db-table \${spreadArgs(args)}></db-table></div>\`
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as Expressive,l as Functional,u as Regular,f as __namedExportsOrder,c as default};