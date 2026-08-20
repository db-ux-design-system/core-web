import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./infotext-Cx1fOcBO.js";import{n as i,t as a}from"./table-u46xCw4P.js";import{a as o,t as s}from"./data-CA6wTzZB.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i(),o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTable/Density`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},d={args:{"data-density":`functional`,captionPlain:`Functional`,data:s},render:e=>(0,c.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,c.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`Functional`}),(0,c.jsx)(a,{...e})]})},f={args:{"data-density":`regular`,captionPlain:`(Default) Regular`,data:s},render:e=>(0,c.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,c.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) Regular`}),(0,c.jsx)(a,{...e})]})},p={args:{"data-density":`expressive`,captionPlain:`Expressive`,data:s},render:e=>(0,c.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,c.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`Expressive`}),(0,c.jsx)(a,{...e})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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