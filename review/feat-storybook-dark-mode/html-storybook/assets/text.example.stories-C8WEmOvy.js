import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BrqREugs.js";import{c as a,d as o,f as s,i as c,l,m as u,n as d,p as f,r as p,s as m,t as h,u as g}from"./table-84tXUIo-.js";import{f as _,s as v}from"./data-IsZHFUvi.js";var y=t({Composition:()=>w,Data:()=>C,__namedExportsOrder:()=>T,default:()=>S}),b,x,S,C,w,T;function E(){return(E=e((()=>{r(),a(),u(),c(),s(),g(),d(),v(),b=n(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/DBTable/Text`,component:h,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},C={args:{captionPlain:`Data`,data:_},render:e=>(0,b.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,b.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`Data`}),(0,b.jsx)(h,{...e})]})},w={args:{captionPlain:`Composition`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p,{children:(0,b.jsxs)(l,{children:[(0,b.jsx)(o,{scope:`col`,text:`Comp A`}),(0,b.jsx)(o,{scope:`col`,children:`Comp B`})]})}),(0,b.jsxs)(m,{children:[(0,b.jsxs)(l,{children:[(0,b.jsx)(o,{scope:`row`,text:`Comp 1`}),(0,b.jsx)(f,{text:`Comp 2`})]}),(0,b.jsxs)(l,{children:[(0,b.jsx)(o,{scope:`row`,children:`Comp 3`}),(0,b.jsx)(f,{children:`Comp 4`})]})]})]})},render:e=>(0,b.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,b.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`Composition`}),(0,b.jsx)(h,{...e})]})},T=[`Data`,`Composition`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Data",
    "data": textTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Data
                </DBInfotext><DBTable {...properties} /></div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Composition",
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell scope="col" text="Comp A" /><DBTableHeaderCell scope="col">
                                Comp B
                            </DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow><DBTableHeaderCell scope="row" text="Comp 1" /><DBTableDataCell text="Comp 2" /></DBTableRow><DBTableRow><DBTableHeaderCell scope="row">
                                Comp 3
                            </DBTableHeaderCell><DBTableDataCell>Comp 4</DBTableDataCell></DBTableRow></DBTableBody></>
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Composition
                </DBInfotext><DBTable {...properties} /></div>
}`,...w.parameters?.docs?.source}}}})))()}export{y as i,C as n,E as r,w as t};