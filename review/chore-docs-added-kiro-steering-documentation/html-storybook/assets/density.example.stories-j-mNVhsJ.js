import{n as e}from"./iframe-COXIPNAI.js";import{n as t,t as n}from"./infotext-J3yPKrDF.js";import{n as r,t as i}from"./table-Bf7FHH9t.js";import{a,t as o}from"./data-CA6wTzZB.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p,m;function h(){return(h=s((()=>{t(),r(),a(),c=e(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTable/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},d={args:{"data-density":`functional`,captionPlain:`Functional`,data:o},render:e=>(0,c.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,c.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`Functional`}),(0,c.jsx)(i,{...e})]})},f={args:{"data-density":`regular`,captionPlain:`(Default) Regular`,data:o},render:e=>(0,c.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,c.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) Regular`}),(0,c.jsx)(i,{...e})]})},p={args:{"data-density":`expressive`,captionPlain:`Expressive`,data:o},render:e=>(0,c.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,c.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`Expressive`}),(0,c.jsx)(i,{...e})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "captionPlain": "Functional",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Functional
                </DBInfotext><DBTable {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "captionPlain": "(Default) Regular",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Regular
                </DBInfotext><DBTable {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "captionPlain": "Expressive",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Expressive
                </DBInfotext><DBTable {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m=[`Functional`,`Regular`,`Expressive`]})))()}h();export{p as Expressive,d as Functional,f as Regular,m as __namedExportsOrder,u as default};