import{i as e}from"./preload-helper-CtT_CFBH.js";import{t}from"./jsx-runtime-DyloabBV.js";import{c as n,f as r,ft as i,g as a,m as o,o as s,t as c,u as l,v as u}from"./src-BdfmDaxr.js";import{a as d,t as f}from"./data-BjuiTcxN.js";var p,m,h,g,_,v;e((()=>{c(),d(),p=t(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/DBTable/Content`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},g={args:{captionPlain:`Data`,data:f},render:e=>(0,p.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,p.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`Data`}),(0,p.jsx)(s,{...e})]})},_={args:{captionPlain:`Composition`,children:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n,{children:(0,p.jsxs)(o,{children:[(0,p.jsx)(a,{scope:`col`,children:`Comp A`}),(0,p.jsx)(a,{scope:`col`,children:`Comp B`}),(0,p.jsx)(a,{scope:`col`,children:`Comp C`})]})}),(0,p.jsxs)(r,{children:[(0,p.jsxs)(o,{children:[(0,p.jsx)(a,{scope:`row`,children:`Comp 1`}),(0,p.jsx)(u,{children:`Comp 2`}),(0,p.jsx)(u,{children:`Comp 3`})]}),(0,p.jsxs)(o,{children:[(0,p.jsx)(a,{scope:`row`,children:`Comp 4`}),(0,p.jsx)(u,{children:`Comp 5`}),(0,p.jsx)(u,{children:`Comp 6`})]}),(0,p.jsxs)(o,{children:[(0,p.jsx)(a,{scope:`row`,children:`Comp 7`}),(0,p.jsx)(u,{children:`Comp 8`}),(0,p.jsx)(u,{children:`Comp 9`})]})]}),(0,p.jsx)(l,{children:(0,p.jsxs)(o,{children:[(0,p.jsx)(a,{scope:`row`,children:`Comp Footer 1`}),(0,p.jsx)(u,{colSpan:`2`,children:`Comp Footer 2`})]})})]})},render:e=>(0,p.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,p.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`Composition`}),(0,p.jsx)(s,{...e})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Data`,`Composition`]}))();export{_ as Composition,g as Data,v as __namedExportsOrder,h as default};