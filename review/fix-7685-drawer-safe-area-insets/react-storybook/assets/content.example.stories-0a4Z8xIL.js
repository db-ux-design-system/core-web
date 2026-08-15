import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./infotext-a7Qr8wIL.js";import{a as i,c as a,d as o,f as s,i as c,l,m as u,n as d,o as f,p,r as m,s as h,t as g,u as _}from"./table-U5tIRm0b.js";import{a as v,t as y}from"./data-CA6wTzZB.js";var b,x,S,C,w,T;function E(){return(E=e((()=>{n(),a(),u(),f(),c(),s(),_(),d(),v(),b=t(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/DBTable/Content`,component:g,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},C={args:{captionPlain:`Data`,data:y},render:e=>(0,b.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,b.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`Data`}),(0,b.jsx)(g,{...e})]})},w={args:{captionPlain:`Composition`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m,{children:(0,b.jsxs)(l,{children:[(0,b.jsx)(o,{scope:`col`,children:`Comp A`}),(0,b.jsx)(o,{scope:`col`,children:`Comp B`}),(0,b.jsx)(o,{scope:`col`,children:`Comp C`})]})}),(0,b.jsxs)(h,{children:[(0,b.jsxs)(l,{children:[(0,b.jsx)(o,{scope:`row`,children:`Comp 1`}),(0,b.jsx)(p,{children:`Comp 2`}),(0,b.jsx)(p,{children:`Comp 3`})]}),(0,b.jsxs)(l,{children:[(0,b.jsx)(o,{scope:`row`,children:`Comp 4`}),(0,b.jsx)(p,{children:`Comp 5`}),(0,b.jsx)(p,{children:`Comp 6`})]}),(0,b.jsxs)(l,{children:[(0,b.jsx)(o,{scope:`row`,children:`Comp 7`}),(0,b.jsx)(p,{children:`Comp 8`}),(0,b.jsx)(p,{children:`Comp 9`})]})]}),(0,b.jsx)(i,{children:(0,b.jsxs)(l,{children:[(0,b.jsx)(o,{scope:`row`,children:`Comp Footer 1`}),(0,b.jsx)(p,{colSpan:`2`,children:`Comp Footer 2`})]})})]})},render:e=>(0,b.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,b.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`Composition`}),(0,b.jsx)(g,{...e})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Data`,`Composition`]})))()}E();export{w as Composition,C as Data,T as __namedExportsOrder,S as default};