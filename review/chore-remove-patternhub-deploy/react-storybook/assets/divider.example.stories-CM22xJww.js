import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BrqREugs.js";import{n as a,t as o}from"./table-hiWHRwKC.js";import{a as s,t as c}from"./data-C0P0p_BJ.js";var l=t({Both:()=>m,DefaultHorizontal:()=>h,None:()=>p,Vertical:()=>g,__namedExportsOrder:()=>_,default:()=>f}),u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),a(),s(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBTable/Divider`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},p={args:{divider:`none`,captionPlain:`None`,data:c},render:e=>(0,u.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,u.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`None`}),(0,u.jsx)(o,{...e})]})},m={args:{divider:`both`,captionPlain:`Both`,data:c},render:e=>(0,u.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,u.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`Both`}),(0,u.jsx)(o,{...e})]})},h={args:{divider:`horizontal`,captionPlain:`(Default) Horizontal`,data:c},render:e=>(0,u.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,u.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) Horizontal`}),(0,u.jsx)(o,{...e})]})},g={args:{divider:`vertical`,captionPlain:`Vertical`,data:c},render:e=>(0,u.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,u.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`Vertical`}),(0,u.jsx)(o,{...e})]})},_=[`None`,`Both`,`DefaultHorizontal`,`Vertical`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "divider": "none",
    "captionPlain": "None",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    None
                </DBInfotext><DBTable {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "divider": "both",
    "captionPlain": "Both",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Both
                </DBInfotext><DBTable {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "divider": "horizontal",
    "captionPlain": "(Default) Horizontal",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Horizontal
                </DBInfotext><DBTable {...properties} /></div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "divider": "vertical",
    "captionPlain": "Vertical",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Vertical
                </DBInfotext><DBTable {...properties} /></div>
}`,...g.parameters?.docs?.source}}}})))()}export{l as a,g as i,h as n,v as o,p as r,m as t};