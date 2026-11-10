import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BrqREugs.js";import{n as a,t as o}from"./table-hiWHRwKC.js";import{a as s,t as c}from"./data-C0P0p_BJ.js";var l=t({DefaultFalse:()=>p,True:()=>m,__namedExportsOrder:()=>h,default:()=>f}),u,d,f,p,m,h;function g(){return(g=e((()=>{r(),a(),s(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBTable/ShowCaption`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},p={args:{captionPlain:`(Default) False`,data:c},render:e=>(0,u.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,u.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) False`}),(0,u.jsx)(o,{...e})]})},m={args:{captionPlain:`True`,data:c,showCaption:!0},render:e=>(0,u.jsx)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:(0,u.jsx)(o,{...e})})},h=[`DefaultFalse`,`True`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}}})))()}export{l as i,m as n,g as r,p as t};