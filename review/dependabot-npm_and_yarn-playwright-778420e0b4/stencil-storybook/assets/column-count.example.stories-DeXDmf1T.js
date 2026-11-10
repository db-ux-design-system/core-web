import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{l as t,o as n}from"./iframe-C7jFjcqB.js";import{n as r,t as i}from"./apply-web-component-args-DhX42D7y.js";import{n as a,s as o,t as s}from"./data-DTwDjW8k.js";var c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTable/Column Count`,component:`db-table`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},u={args:{"data-testid":`table-20-columns`,captionPlain:`Columns 20`,data:s,showCaption:!0},render:({children:e,...n})=>t`<div style="inline-size: 100%; display: flex; flex-direction: column"><db-infotext semantic="informational" size="small" icon="none">Columns 20</db-infotext><db-table ${r(n)}></db-table></div>`},d={args:{"data-testid":`table-21-columns`,captionPlain:`Columns 21`,data:a,showCaption:!0},render:({children:e,...n})=>t`<div style="inline-size: 100%; display: flex; flex-direction: column; --db-table-columns: 21"><db-infotext semantic="informational" size="small" icon="none">Columns 21</db-infotext><db-table ${r(n)}></db-table></div>`},f=[`Columns20`,`Columns21`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as Columns20,d as Columns21,f as __namedExportsOrder,l as default};