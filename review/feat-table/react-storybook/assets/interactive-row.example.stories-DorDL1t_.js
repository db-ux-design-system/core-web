import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s,a as c,b as l,c as a,d as D,e as t}from"./table-BThojzWo.js";import{D as B}from"./infotext-CQyDUuLf.js";import{D as n}from"./button-D1XiJ1Zo.js";import{D as i}from"./tooltip-DTxsROEm.js";import"./index-cGbbigiG.js";import"./iframe-Bs-TlRno.js";import"./preload-helper-BD8fvMO7.js";import"./link-05_stA-g.js";import"./constants-CD69XpC7.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,k={title:"Components/DBTable/Interactive Row",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},r={args:{captionPlain:"Joined",children:e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsxs(l,{children:[e.jsx(a,{children:"Comp A"}),e.jsx(a,{children:"Comp B"}),e.jsx(a,{noText:!0,children:"Action"})]})}),e.jsxs(D,{children:[e.jsxs(l,{interactive:!0,children:[e.jsx(a,{children:"Comp 1"}),e.jsx(t,{children:e.jsx(n,{children:"Click"})}),e.jsx(t,{horizontalAlignment:"end",children:e.jsxs("a",{href:"#","data-variant":"ghost","data-table-row-action":"true","data-no-text":"true","data-icon":"arrow_up_right",className:"db-button",children:["Open Link",e.jsx(i,{children:"Open Link"})]})})]}),e.jsxs(l,{interactive:!0,children:[e.jsx(a,{children:"Comp 4"}),e.jsx(t,{children:e.jsx(n,{children:"Click"})}),e.jsx(t,{horizontalAlignment:"end",children:e.jsxs("a",{href:"#","data-variant":"ghost","data-table-row-action":"true","data-no-text":"true","data-icon":"arrow_up_right",className:"db-button",children:["Open Link",e.jsx(i,{children:"Open Link"})]})})]}),e.jsxs(l,{interactive:!0,children:[e.jsx(a,{children:"Comp 7"}),e.jsx(t,{children:e.jsx(n,{children:"Click"})}),e.jsx(t,{horizontalAlignment:"end",children:e.jsxs("a",{href:"#","data-variant":"ghost","data-table-row-action":"true","data-no-text":"true","data-icon":"arrow_up_right",className:"db-button",children:["Open Link",e.jsx(i,{children:"Open Link"})]})})]})]})]})},render:d=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)",padding:"var(--db-spacing-fixed-md)"},children:[e.jsx(B,{semantic:"informational",size:"small",icon:"none",children:"Joined"}),e.jsx(s,{...d})]})},o={args:{variant:"floating",captionPlain:"Floating",children:e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsxs(l,{children:[e.jsx(a,{children:"Comp A"}),e.jsx(a,{children:"Comp B"}),e.jsx(a,{noText:!0,children:"Action"})]})}),e.jsxs(D,{children:[e.jsxs(l,{interactive:!0,children:[e.jsx(a,{children:"Comp 1"}),e.jsx(t,{children:e.jsx(n,{children:"Click"})}),e.jsx(t,{horizontalAlignment:"end",children:e.jsxs("a",{href:"#","data-variant":"ghost","data-table-row-action":"true","data-no-text":"true","data-icon":"arrow_up_right",className:"db-button",children:["Open Link",e.jsx(i,{children:"Open Link"})]})})]}),e.jsxs(l,{interactive:!0,children:[e.jsx(a,{children:"Comp 4"}),e.jsx(t,{children:e.jsx(n,{children:"Click"})}),e.jsx(t,{horizontalAlignment:"end",children:e.jsxs("a",{href:"#","data-variant":"ghost","data-table-row-action":"true","data-no-text":"true","data-icon":"arrow_up_right",className:"db-button",children:["Open Link",e.jsx(i,{children:"Open Link"})]})})]}),e.jsxs(l,{interactive:!0,children:[e.jsx(a,{children:"Comp 7"}),e.jsx(t,{children:e.jsx(n,{children:"Click"})}),e.jsx(t,{horizontalAlignment:"end",children:e.jsxs("a",{href:"#","data-variant":"ghost","data-table-row-action":"true","data-no-text":"true","data-icon":"arrow_up_right",className:"db-button",children:["Open Link",e.jsx(i,{children:"Open Link"})]})})]})]})]})},render:d=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)",padding:"var(--db-spacing-fixed-md)"},children:[e.jsx(B,{semantic:"informational",size:"small",icon:"none",children:"Floating"}),e.jsx(s,{...d})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Joined",
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell>Comp A</DBTableHeaderCell><DBTableHeaderCell>Comp B</DBTableHeaderCell><DBTableHeaderCell noText>Action</DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow interactive><DBTableHeaderCell>Comp 1</DBTableHeaderCell><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><a href="#" data-variant="ghost" data-table-row-action="true" data-no-text="true" data-icon="arrow_up_right" className="db-button">
                                    Open Link
                                    <DBTooltip>Open Link</DBTooltip></a></DBTableDataCell></DBTableRow><DBTableRow interactive><DBTableHeaderCell>Comp 4</DBTableHeaderCell><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><a href="#" data-variant="ghost" data-table-row-action="true" data-no-text="true" data-icon="arrow_up_right" className="db-button">
                                    Open Link
                                    <DBTooltip>Open Link</DBTooltip></a></DBTableDataCell></DBTableRow><DBTableRow interactive><DBTableHeaderCell>Comp 7</DBTableHeaderCell><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><a href="#" data-variant="ghost" data-table-row-action="true" data-no-text="true" data-icon="arrow_up_right" className="db-button">
                                    Open Link
                                    <DBTooltip>Open Link</DBTooltip></a></DBTableDataCell></DBTableRow></DBTableBody></>
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)',
    padding: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Joined
                </DBInfotext><DBTable {...properties} /></div>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "floating",
    "captionPlain": "Floating",
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell>Comp A</DBTableHeaderCell><DBTableHeaderCell>Comp B</DBTableHeaderCell><DBTableHeaderCell noText>Action</DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow interactive><DBTableHeaderCell>Comp 1</DBTableHeaderCell><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><a href="#" data-variant="ghost" data-table-row-action="true" data-no-text="true" data-icon="arrow_up_right" className="db-button">
                                    Open Link
                                    <DBTooltip>Open Link</DBTooltip></a></DBTableDataCell></DBTableRow><DBTableRow interactive><DBTableHeaderCell>Comp 4</DBTableHeaderCell><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><a href="#" data-variant="ghost" data-table-row-action="true" data-no-text="true" data-icon="arrow_up_right" className="db-button">
                                    Open Link
                                    <DBTooltip>Open Link</DBTooltip></a></DBTableDataCell></DBTableRow><DBTableRow interactive><DBTableHeaderCell>Comp 7</DBTableHeaderCell><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><a href="#" data-variant="ghost" data-table-row-action="true" data-no-text="true" data-icon="arrow_up_right" className="db-button">
                                    Open Link
                                    <DBTooltip>Open Link</DBTooltip></a></DBTableDataCell></DBTableRow></DBTableBody></>
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)',
    padding: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Floating
                </DBInfotext><DBTable {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const _=["Joined","Floating"];export{o as Floating,r as Joined,_ as __namedExportsOrder,k as default};
