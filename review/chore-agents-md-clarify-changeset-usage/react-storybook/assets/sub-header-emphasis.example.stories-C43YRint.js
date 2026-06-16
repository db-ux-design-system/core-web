import{i as e}from"./preload-helper-9oXfHX_f.js";import{t}from"./jsx-runtime-Cm1I5TCE.js";import{ft as n,o as r,t as i}from"./src-cNtVIovF.js";import{a,c as o,l as s,s as c}from"./data-IS7OyOCj.js";var l,u,d,f,p,m,h;e((()=>{i(),a(),l=t(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/DBTable/SubHeaderEmphasis`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},f={args:{captionPlain:`(Default) None`,data:c},render:e=>(0,l.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,l.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) None`}),(0,l.jsx)(r,{...e})]})},p={args:{captionPlain:`Weak`,data:s},render:e=>(0,l.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,l.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`Weak`}),(0,l.jsx)(r,{...e})]})},m={args:{captionPlain:`Strong`,data:o},render:e=>(0,l.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,l.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`Strong`}),(0,l.jsx)(r,{...e})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`DefaultNone`,`Weak`,`Strong`]}))();export{f as DefaultNone,m as Strong,p as Weak,h as __namedExportsOrder,d as default};