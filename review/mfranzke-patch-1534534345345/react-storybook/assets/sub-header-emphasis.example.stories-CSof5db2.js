import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BrqREugs.js";import{n as a,t as o}from"./table-84tXUIo-.js";import{d as s,l as c,s as l,u}from"./data-IsZHFUvi.js";var d=t({DefaultNone:()=>h,Strong:()=>_,Weak:()=>g,__namedExportsOrder:()=>v,default:()=>m}),f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),a(),l(),f=n(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBTable/SubHeaderEmphasis`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},h={args:{captionPlain:`(Default) None`,data:c},render:e=>(0,f.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,f.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) None`}),(0,f.jsx)(o,{...e})]})},g={args:{captionPlain:`Weak`,data:s},render:e=>(0,f.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,f.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`Weak`}),(0,f.jsx)(o,{...e})]})},_={args:{captionPlain:`Strong`,data:u},render:e=>(0,f.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,f.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`Strong`}),(0,f.jsx)(o,{...e})]})},v=[`DefaultNone`,`Weak`,`Strong`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}})))()}export{d as a,y as i,_ as n,g as r,h as t};