import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./infotext-C5sjHRRN.js";import{n as i,t as a}from"./table-Bfuva0PZ.js";import{a as o,c as s,l as c,s as l}from"./data-CA6wTzZB.js";var u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),i(),o(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBTable/SubHeaderEmphasis`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},p={args:{captionPlain:`(Default) None`,data:l},render:e=>(0,u.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,u.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) None`}),(0,u.jsx)(a,{...e})]})},m={args:{captionPlain:`Weak`,data:c},render:e=>(0,u.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,u.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`Weak`}),(0,u.jsx)(a,{...e})]})},h={args:{captionPlain:`Strong`,data:s},render:e=>(0,u.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,u.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`Strong`}),(0,u.jsx)(a,{...e})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) None",
    "data": subHeaderEmphasisNoneTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) None
                </DBInfotext><DBTable {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Weak",
    "data": subHeaderEmphasisWeakTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Weak
                </DBInfotext><DBTable {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Strong",
    "data": subHeaderEmphasisStrongTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Strong
                </DBInfotext><DBTable {...properties} /></div>
}`,...h.parameters?.docs?.source}}},g=[`DefaultNone`,`Weak`,`Strong`]})))()}_();export{p as DefaultNone,h as Strong,m as Weak,g as __namedExportsOrder,f as default};