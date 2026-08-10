import{n as e}from"./iframe-DiGpxR6U.js";import{n as t,t as n}from"./infotext-DtkEUiVC.js";import{n as r,t as i}from"./table-6-cLVH1s.js";import{a,t as o}from"./data-CA6wTzZB.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p;function m(){return(m=s((()=>{t(),r(),a(),c=e(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTable/Mobile Variant`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},d={args:{mobileVariant:`table`,captionPlain:`(Default) Table`,data:o},render:e=>(0,c.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,c.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) Table`}),(0,c.jsx)(i,{...e})]})},f={args:{mobileVariant:`list`,captionPlain:`List`,data:o},render:e=>(0,c.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,c.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`List`}),(0,c.jsx)(i,{...e})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "mobileVariant": "table",
    "captionPlain": "(Default) Table",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Table
                </DBInfotext><DBTable {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "mobileVariant": "list",
    "captionPlain": "List",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    List
                </DBInfotext><DBTable {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p=[`DefaultTable`,`List`]})))()}m();export{d as DefaultTable,f as List,p as __namedExportsOrder,u as default};