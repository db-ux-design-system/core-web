import{i as e}from"./preload-helper-wCOmrLM_.js";import{t}from"./jsx-runtime-CvoV0cl1.js";import{ft as n,o as r,t as i}from"./src-CRw6x36k.js";import{a,t as o}from"./data-DiCCJnJR.js";var s,c,l,u,d,f,p,m;e((()=>{i(),a(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTable/Size`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},u={args:{size:`x-small`,captionPlain:`X-Small`,data:o},render:e=>(0,s.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,s.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`X-Small`}),(0,s.jsx)(r,{...e})]})},d={args:{size:`small`,captionPlain:`Small`,data:o},render:e=>(0,s.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,s.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`Small`}),(0,s.jsx)(r,{...e})]})},f={args:{size:`medium`,captionPlain:`(Default) Medium`,data:o},render:e=>(0,s.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,s.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) Medium`}),(0,s.jsx)(r,{...e})]})},p={args:{size:`large`,captionPlain:`Large`,data:o},render:e=>(0,s.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,s.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`Large`}),(0,s.jsx)(r,{...e})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "x-small",
    "captionPlain": "X-Small",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    X-Small
                </DBInfotext><DBTable {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "captionPlain": "Small",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Small
                </DBInfotext><DBTable {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "captionPlain": "(Default) Medium",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Medium
                </DBInfotext><DBTable {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "large",
    "captionPlain": "Large",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Large
                </DBInfotext><DBTable {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m=[`XSmall`,`Small`,`DefaultMedium`,`Large`]}))();export{f as DefaultMedium,p as Large,d as Small,u as XSmall,m as __namedExportsOrder,l as default};