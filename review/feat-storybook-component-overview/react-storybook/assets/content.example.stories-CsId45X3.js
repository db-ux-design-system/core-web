import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BzIHEy3h.js";import{a,c as o,d as s,f as c,i as l,l as u,m as d,n as f,o as p,p as m,r as h,s as g,t as _,u as v}from"./table-hiWHRwKC.js";import{a as y,t as b}from"./data-C0P0p_BJ.js";var x=t({Composition:()=>E,Data:()=>T,__namedExportsOrder:()=>D,default:()=>w}),S,C,w,T,E,D;function O(){return(O=e((()=>{r(),o(),d(),p(),l(),c(),v(),f(),y(),S=n(),{fn:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/DBTable/Content`,component:_,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},T={args:{captionPlain:`Data`,data:b},render:e=>(0,S.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,S.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`Data`}),(0,S.jsx)(_,{...e})]})},E={args:{captionPlain:`Composition`,children:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(h,{children:(0,S.jsxs)(u,{children:[(0,S.jsx)(s,{scope:`col`,children:`Comp A`}),(0,S.jsx)(s,{scope:`col`,children:`Comp B`}),(0,S.jsx)(s,{scope:`col`,children:`Comp C`})]})}),(0,S.jsxs)(g,{children:[(0,S.jsxs)(u,{children:[(0,S.jsx)(s,{scope:`row`,children:`Comp 1`}),(0,S.jsx)(m,{children:`Comp 2`}),(0,S.jsx)(m,{children:`Comp 3`})]}),(0,S.jsxs)(u,{children:[(0,S.jsx)(s,{scope:`row`,children:`Comp 4`}),(0,S.jsx)(m,{children:`Comp 5`}),(0,S.jsx)(m,{children:`Comp 6`})]}),(0,S.jsxs)(u,{children:[(0,S.jsx)(s,{scope:`row`,children:`Comp 7`}),(0,S.jsx)(m,{children:`Comp 8`}),(0,S.jsx)(m,{children:`Comp 9`})]})]}),(0,S.jsx)(a,{children:(0,S.jsxs)(u,{children:[(0,S.jsx)(s,{scope:`row`,children:`Comp Footer 1`}),(0,S.jsx)(m,{colSpan:`2`,children:`Comp Footer 2`})]})})]})},render:e=>(0,S.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,S.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`Composition`}),(0,S.jsx)(_,{...e})]})},D=[`Data`,`Composition`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Data",
    "data": defaultTable
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Composition",
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell scope="col">
                                Comp A
                            </DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Comp B
                            </DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Comp C
                            </DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow><DBTableHeaderCell scope="row">
                                Comp 1
                            </DBTableHeaderCell><DBTableDataCell>Comp 2</DBTableDataCell><DBTableDataCell>Comp 3</DBTableDataCell></DBTableRow><DBTableRow><DBTableHeaderCell scope="row">
                                Comp 4
                            </DBTableHeaderCell><DBTableDataCell>Comp 5</DBTableDataCell><DBTableDataCell>Comp 6</DBTableDataCell></DBTableRow><DBTableRow><DBTableHeaderCell scope="row">
                                Comp 7
                            </DBTableHeaderCell><DBTableDataCell>Comp 8</DBTableDataCell><DBTableDataCell>Comp 9</DBTableDataCell></DBTableRow></DBTableBody><DBTableFooter><DBTableRow><DBTableHeaderCell scope="row">
                                Comp Footer 1
                            </DBTableHeaderCell><DBTableDataCell colSpan="2">
                                Comp Footer 2
                            </DBTableDataCell></DBTableRow></DBTableFooter></>
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
}`,...E.parameters?.docs?.source}}}})))()}export{O as i,T as n,x as r,E as t};