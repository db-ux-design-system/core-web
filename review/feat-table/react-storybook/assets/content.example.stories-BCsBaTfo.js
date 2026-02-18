import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d}from"./data-BskZDp9K.js";import{D as s,a as m,b as o,c as a,d as D,e as l,f as p}from"./table-CWfi-VJU.js";import{D as t}from"./infotext-h1B2lAH6.js";import"./index-cGbbigiG.js";import"./iframe-CgC83ROE.js";import"./preload-helper-BD8fvMO7.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBTable/Content",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},r={args:{captionPlain:"Data",data:d},render:i=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(t,{semantic:"informational",size:"small",icon:"none",children:"Data"}),e.jsx(s,{...i})]})},n={args:{captionPlain:"Composition",children:e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsxs(o,{children:[e.jsx(a,{children:"Comp A"}),e.jsx(a,{children:"Comp B"}),e.jsx(a,{children:"Comp C"})]})}),e.jsxs(D,{children:[e.jsxs(o,{children:[e.jsx(a,{children:"Comp 1"}),e.jsx(l,{children:"Comp 2"}),e.jsx(l,{children:"Comp 3"})]}),e.jsxs(o,{children:[e.jsx(a,{children:"Comp 4"}),e.jsx(l,{children:"Comp 5"}),e.jsx(l,{children:"Comp 6"})]}),e.jsxs(o,{children:[e.jsx(a,{children:"Comp 7"}),e.jsx(l,{children:"Comp 8"}),e.jsx(l,{children:"Comp 9"})]})]}),e.jsx(p,{children:e.jsxs(o,{children:[e.jsx(a,{children:"Comp Footer 1"}),e.jsx(l,{colSpan:"2",children:"Comp Footer 2"})]})})]})},render:i=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(t,{semantic:"informational",size:"small",icon:"none",children:"Composition"}),e.jsx(s,{...i})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Composition",
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell>Comp A</DBTableHeaderCell><DBTableHeaderCell>Comp B</DBTableHeaderCell><DBTableHeaderCell>Comp C</DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow><DBTableHeaderCell>Comp 1</DBTableHeaderCell><DBTableDataCell>Comp 2</DBTableDataCell><DBTableDataCell>Comp 3</DBTableDataCell></DBTableRow><DBTableRow><DBTableHeaderCell>Comp 4</DBTableHeaderCell><DBTableDataCell>Comp 5</DBTableDataCell><DBTableDataCell>Comp 6</DBTableDataCell></DBTableRow><DBTableRow><DBTableHeaderCell>Comp 7</DBTableHeaderCell><DBTableDataCell>Comp 8</DBTableDataCell><DBTableDataCell>Comp 9</DBTableDataCell></DBTableRow></DBTableBody><DBTableFooter><DBTableRow><DBTableHeaderCell>Comp Footer 1</DBTableHeaderCell><DBTableDataCell colSpan="2">
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
}`,...n.parameters?.docs?.source}}};const g=["Data","Composition"];export{n as Composition,r as Data,g as __namedExportsOrder,h as default};
