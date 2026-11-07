import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BzIHEy3h.js";import{n as a,t as o}from"./table-hiWHRwKC.js";import{a as s,i as c,n as l,r as u}from"./data-C0P0p_BJ.js";var d=t({Center:()=>g,DefaultStart:()=>h,End:()=>_,__namedExportsOrder:()=>v,default:()=>m}),f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),a(),s(),f=n(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBTable/Horizontal Alignment`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},h={args:{captionPlain:`(Default) Start`,divider:`both`,data:c},render:e=>(0,f.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,f.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) Start`}),(0,f.jsx)(o,{...e})]})},g={args:{captionPlain:`Center`,divider:`both`,data:l},render:e=>(0,f.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,f.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`Center`}),(0,f.jsx)(o,{...e})]})},_={args:{captionPlain:`End`,divider:`both`,data:u},render:e=>(0,f.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,f.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`End`}),(0,f.jsx)(o,{...e})]})},v=[`DefaultStart`,`Center`,`End`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}})))()}export{y as a,d as i,h as n,_ as r,g as t};