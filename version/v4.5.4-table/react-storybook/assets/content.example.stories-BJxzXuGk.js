import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d as c}from"./data-ntzduIQ0.js";import{D as i,a as p,b as o,c as a,d,e as l,f as m}from"./table-Dvm4OQBk.js";import{D as s}from"./infotext-DTRuL2Hl.js";import"./index-D2E5Z_bU.js";import"./iframe-DwOpbq5K.js";import"./preload-helper-j823Xs5Z.js";import"./link-klnyuRyZ.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBTable/Content",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},caption:{control:"text"},captionPlain:{control:"text"},data:{control:"object"},divider:{control:"select",options:["none","both","horizontal","vertical"]},showCaption:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large"]},variant:{control:"select",options:["joined","zebra","floating"]},mobileVariant:{control:"select",options:["table","list"]},stickyHeader:{control:"select",options:["none","both","horizontal","vertical"]},columnSizes:{control:"object"}}},t={args:{captionPlain:"Data",data:c},render:r=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"Data"}),e.jsx(i,{...r})]})},n={args:{captionPlain:"Composition",children:e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsxs(o,{children:[e.jsx(a,{scope:"col",children:"Comp A"}),e.jsx(a,{scope:"col",children:"Comp B"}),e.jsx(a,{scope:"col",children:"Comp C"})]})}),e.jsxs(d,{children:[e.jsxs(o,{children:[e.jsx(a,{scope:"row",children:"Comp 1"}),e.jsx(l,{children:"Comp 2"}),e.jsx(l,{children:"Comp 3"})]}),e.jsxs(o,{children:[e.jsx(a,{scope:"row",children:"Comp 4"}),e.jsx(l,{children:"Comp 5"}),e.jsx(l,{children:"Comp 6"})]}),e.jsxs(o,{children:[e.jsx(a,{scope:"row",children:"Comp 7"}),e.jsx(l,{children:"Comp 8"}),e.jsx(l,{children:"Comp 9"})]})]}),e.jsx(m,{children:e.jsxs(o,{children:[e.jsx(a,{scope:"row",children:"Comp Footer 1"}),e.jsx(l,{colSpan:"2",children:"Comp Footer 2"})]})})]})},render:r=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"Composition"}),e.jsx(i,{...r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const w=["Data","Composition"];export{n as Composition,t as Data,w as __namedExportsOrder,g as default};
