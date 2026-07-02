import{i as e}from"./preload-helper-CM4FCymY.js";import{t}from"./jsx-runtime-BsocWiGC.js";import{ft as n,o as r,t as i}from"./src-BJE6ra9b.js";import{a,t as o}from"./data-DHidjMF9.js";var s,c,l,u,d,f;e((()=>{i(),a(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTable/ShowCaption`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},u={args:{captionPlain:`(Default) False`,data:o},render:e=>(0,s.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,s.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) False`}),(0,s.jsx)(r,{...e})]})},d={args:{captionPlain:`True`,data:o,showCaption:!0},render:e=>(0,s.jsx)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:(0,s.jsx)(r,{...e})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) False",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) False
                </DBInfotext><DBTable {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "True",
    "data": defaultTable,
    "showCaption": true
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBTable {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f=[`DefaultFalse`,`True`]}))();export{u as DefaultFalse,d as True,f as __namedExportsOrder,l as default};