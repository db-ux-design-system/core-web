import{i as e}from"./preload-helper-BM_bMsPK.js";import{t}from"./iframe-CaUiIjdj.js";import{ft as n,o as r,t as i}from"./src-4Kk_1E5j.js";import{a,i as o,n as s,r as c}from"./data-GXW4URpi.js";var l,u,d,f,p,m,h;e((()=>{i(),a(),l=t(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/DBTable/Horizontal Alignment`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},f={args:{captionPlain:`(Default) Start`,divider:`both`,data:o},render:e=>(0,l.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,l.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) Start`}),(0,l.jsx)(r,{...e})]})},p={args:{captionPlain:`Center`,divider:`both`,data:s},render:e=>(0,l.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,l.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`Center`}),(0,l.jsx)(r,{...e})]})},m={args:{captionPlain:`End`,divider:`both`,data:c},render:e=>(0,l.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,l.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`End`}),(0,l.jsx)(r,{...e})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) Start",
    "divider": "both",
    "data": horizontalAlignmentStartTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Start
                </DBInfotext><DBTable {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Center",
    "divider": "both",
    "data": horizontalAlignmentCenterTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Center
                </DBInfotext><DBTable {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "End",
    "divider": "both",
    "data": horizontalAlignmentEndTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    End
                </DBInfotext><DBTable {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h=[`DefaultStart`,`Center`,`End`]}))();export{p as Center,f as DefaultStart,m as End,h as __namedExportsOrder,d as default};