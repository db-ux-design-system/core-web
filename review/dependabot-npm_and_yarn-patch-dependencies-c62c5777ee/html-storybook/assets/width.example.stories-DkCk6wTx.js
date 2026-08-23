import{n as e}from"./iframe-B0DhEXS_.js";import{n as t,t as n}from"./infotext-DzdDzjzW.js";import{n as r,t as i}from"./table-BNnGlq9w.js";import{a,t as o}from"./data-CA6wTzZB.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p;function m(){return(m=s((()=>{t(),r(),a(),c=e(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTable/Width`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},d={args:{width:`full`,captionPlain:`(Default) Full`,data:o},render:e=>(0,c.jsxs)(`div`,{style:{inlineSize:`300px`,display:`flex`,flexDirection:`column`},children:[(0,c.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) Full`}),(0,c.jsx)(i,{...e})]})},f={args:{width:`auto`,captionPlain:`Auto`,data:o},render:e=>(0,c.jsxs)(`div`,{style:{inlineSize:`300px`,display:`flex`,flexDirection:`column`},children:[(0,c.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`Auto`}),(0,c.jsx)(i,{...e})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "captionPlain": "(Default) Full",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    inlineSize: '300px',
    display: 'flex',
    flexDirection: 'column'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Full
                </DBInfotext><DBTable {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "captionPlain": "Auto",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    inlineSize: '300px',
    display: 'flex',
    flexDirection: 'column'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Auto
                </DBInfotext><DBTable {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p=[`DefaultFull`,`Auto`]})))()}m();export{f as Auto,d as DefaultFull,p as __namedExportsOrder,u as default};