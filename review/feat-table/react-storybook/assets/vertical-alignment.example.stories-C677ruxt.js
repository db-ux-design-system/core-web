import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as d,a as s,b as a,c as l,d as c,e as o}from"./table-BThojzWo.js";import{D as m}from"./infotext-CQyDUuLf.js";import{D}from"./button-D1XiJ1Zo.js";import"./index-cGbbigiG.js";import"./iframe-Bs-TlRno.js";import"./preload-helper-BD8fvMO7.js";import"./link-05_stA-g.js";const{fn:C}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBTable/Vertical Alignment",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},r={args:{captionPlain:"Start",divider:"both",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(l,{verticalAlignment:"start",children:"Header A"}),e.jsx(l,{verticalAlignment:"start",children:"Header B"})]})}),e.jsx(c,{children:e.jsxs(a,{children:[e.jsx(l,{verticalAlignment:"start",children:"Comp 1"}),e.jsx(o,{verticalAlignment:"start",children:e.jsx(D,{children:"Click"})})]})})]})},render:n=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(m,{semantic:"informational",size:"small",icon:"none",children:"Start"}),e.jsx(d,{...n})]})},i={args:{captionPlain:"(Default) Center",divider:"both",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(l,{verticalAlignment:"center",children:"Header A"}),e.jsx(l,{verticalAlignment:"center",children:"Header B"})]})}),e.jsx(c,{children:e.jsxs(a,{children:[e.jsx(l,{verticalAlignment:"center",children:"Comp 1"}),e.jsx(o,{verticalAlignment:"center",children:e.jsx(D,{children:"Click"})})]})})]})},render:n=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(m,{semantic:"informational",size:"small",icon:"none",children:"(Default) Center"}),e.jsx(d,{...n})]})},t={args:{captionPlain:"End",divider:"both",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(l,{verticalAlignment:"end",children:"Header A"}),e.jsx(l,{verticalAlignment:"end",children:"Header B"})]})}),e.jsx(c,{children:e.jsxs(a,{children:[e.jsx(l,{verticalAlignment:"end",children:"Comp 1"}),e.jsx(o,{verticalAlignment:"end",children:e.jsx(D,{children:"Click"})})]})})]})},render:n=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(m,{semantic:"informational",size:"small",icon:"none",children:"End"}),e.jsx(d,{...n})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Start",
    "divider": "both",
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell verticalAlignment="start">
                                Header A
                            </DBTableHeaderCell><DBTableHeaderCell verticalAlignment="start">
                                Header B
                            </DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow><DBTableHeaderCell verticalAlignment="start">
                                Comp 1
                            </DBTableHeaderCell><DBTableDataCell verticalAlignment="start"><DBButton>Click</DBButton></DBTableDataCell></DBTableRow></DBTableBody></>
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Start
                </DBInfotext><DBTable {...properties} /></div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) Center",
    "divider": "both",
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell verticalAlignment="center">
                                Header A
                            </DBTableHeaderCell><DBTableHeaderCell verticalAlignment="center">
                                Header B
                            </DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow><DBTableHeaderCell verticalAlignment="center">
                                Comp 1
                            </DBTableHeaderCell><DBTableDataCell verticalAlignment="center"><DBButton>Click</DBButton></DBTableDataCell></DBTableRow></DBTableBody></>
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Center
                </DBInfotext><DBTable {...properties} /></div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "End",
    "divider": "both",
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell verticalAlignment="end">
                                Header A
                            </DBTableHeaderCell><DBTableHeaderCell verticalAlignment="end">
                                Header B
                            </DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow><DBTableHeaderCell verticalAlignment="end">
                                Comp 1
                            </DBTableHeaderCell><DBTableDataCell verticalAlignment="end"><DBButton>Click</DBButton></DBTableDataCell></DBTableRow></DBTableBody></>
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
}`,...t.parameters?.docs?.source}}};const j=["Start","DefaultCenter","End"];export{i as DefaultCenter,t as End,r as Start,j as __namedExportsOrder,f as default};
