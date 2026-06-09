import{i as e}from"./preload-helper-DaTYyH6d.js";import{t}from"./iframe-BTHN2odS.js";import{ft as n,o as r,t as i}from"./src-CH-c_ClK.js";import{a,o}from"./data-BKyyEfnz.js";var s,c,l,u,d,f,p,m;e((()=>{i(),a(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTable/Sticky Header`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},u={args:{captionPlain:`(Default) None`,data:o},render:e=>(0,s.jsxs)(`div`,{style:{inlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`,blockSize:`300px`},children:[(0,s.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) None`}),(0,s.jsx)(r,{...e})]})},d={args:{captionPlain:`Both`,stickyHeader:`both`,data:o},render:e=>(0,s.jsxs)(`div`,{style:{inlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`,blockSize:`300px`},children:[(0,s.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`Both`}),(0,s.jsx)(r,{...e})]})},f={args:{stickyHeader:`horizontal`,captionPlain:`Horizontal`,data:o},render:e=>(0,s.jsxs)(`div`,{style:{inlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`,blockSize:`300px`},children:[(0,s.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`Horizontal`}),(0,s.jsx)(r,{...e})]})},p={args:{stickyHeader:`vertical`,captionPlain:`Vertical`,data:o},render:e=>(0,s.jsxs)(`div`,{style:{inlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`,blockSize:`300px`},children:[(0,s.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`Vertical`}),(0,s.jsx)(r,{...e})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) None",
    "data": overflowTable
  },
  render: (properties: any) => <div style={{
    inlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)',
    blockSize: '300px'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) None
                </DBInfotext><DBTable {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Both",
    "stickyHeader": "both",
    "data": overflowTable
  },
  render: (properties: any) => <div style={{
    inlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)',
    blockSize: '300px'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Both
                </DBInfotext><DBTable {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "stickyHeader": "horizontal",
    "captionPlain": "Horizontal",
    "data": overflowTable
  },
  render: (properties: any) => <div style={{
    inlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)',
    blockSize: '300px'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Horizontal
                </DBInfotext><DBTable {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "stickyHeader": "vertical",
    "captionPlain": "Vertical",
    "data": overflowTable
  },
  render: (properties: any) => <div style={{
    inlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)',
    blockSize: '300px'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Vertical
                </DBInfotext><DBTable {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m=[`DefaultNone`,`Both`,`Horizontal`,`Vertical`]}))();export{d as Both,u as DefaultNone,f as Horizontal,p as Vertical,m as __namedExportsOrder,l as default};