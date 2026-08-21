import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./infotext-BSAVmIMo.js";import{n as i,t as a}from"./table-DJey8-8a.js";import{a as o,o as s}from"./data-CA6wTzZB.js";var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),i(),o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTable/Sticky Header`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},d={args:{captionPlain:`(Default) None`,data:s},render:e=>(0,c.jsxs)(`div`,{style:{inlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`,blockSize:`300px`},children:[(0,c.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) None`}),(0,c.jsx)(a,{...e})]})},f={args:{captionPlain:`Both`,stickyHeader:`both`,data:s},render:e=>(0,c.jsxs)(`div`,{style:{inlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`,blockSize:`300px`},children:[(0,c.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`Both`}),(0,c.jsx)(a,{...e})]})},p={args:{stickyHeader:`horizontal`,captionPlain:`Horizontal`,data:s},render:e=>(0,c.jsxs)(`div`,{style:{inlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`,blockSize:`300px`},children:[(0,c.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`Horizontal`}),(0,c.jsx)(a,{...e})]})},m={args:{stickyHeader:`vertical`,captionPlain:`Vertical`,data:s},render:e=>(0,c.jsxs)(`div`,{style:{inlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`,blockSize:`300px`},children:[(0,c.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`Vertical`}),(0,c.jsx)(a,{...e})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`DefaultNone`,`Both`,`Horizontal`,`Vertical`]})))()}g();export{f as Both,d as DefaultNone,p as Horizontal,m as Vertical,h as __namedExportsOrder,u as default};