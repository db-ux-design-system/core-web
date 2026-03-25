import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o,a as c,b as a,c as l,d as s,e as d}from"./table-Dvm4OQBk.js";import{D as m}from"./infotext-DTRuL2Hl.js";import{D as p}from"./button-B-LSsBs2.js";import"./index-D2E5Z_bU.js";import"./iframe-DwOpbq5K.js";import"./preload-helper-j823Xs5Z.js";import"./link-klnyuRyZ.js";const{fn:C}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBTable/Vertical Alignment",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},caption:{control:"text"},captionPlain:{control:"text"},data:{control:"object"},divider:{control:"select",options:["none","both","horizontal","vertical"]},showCaption:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large"]},variant:{control:"select",options:["joined","zebra","floating"]},mobileVariant:{control:"select",options:["table","list"]},stickyHeader:{control:"select",options:["none","both","horizontal","vertical"]},columnSizes:{control:"object"}}},t={args:{captionPlain:"Start",divider:"both",children:e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsxs(a,{children:[e.jsx(l,{scope:"col",verticalAlignment:"start",children:"Header A"}),e.jsx(l,{scope:"col",verticalAlignment:"start",children:"Header B"})]})}),e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(l,{scope:"row",verticalAlignment:"start",children:"Comp 1"}),e.jsx(d,{verticalAlignment:"start",children:e.jsx(p,{children:"Click"})})]})})]})},render:n=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(m,{semantic:"informational",size:"small",icon:"none",children:"Start"}),e.jsx(o,{...n})]})},r={args:{captionPlain:"(Default) Center",divider:"both",children:e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsxs(a,{children:[e.jsx(l,{scope:"col",verticalAlignment:"center",children:"Header A"}),e.jsx(l,{scope:"col",verticalAlignment:"center",children:"Header B"})]})}),e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(l,{scope:"row",verticalAlignment:"center",children:"Comp 1"}),e.jsx(d,{verticalAlignment:"center",children:e.jsx(p,{children:"Click"})})]})})]})},render:n=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(m,{semantic:"informational",size:"small",icon:"none",children:"(Default) Center"}),e.jsx(o,{...n})]})},i={args:{captionPlain:"End",divider:"both",children:e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsxs(a,{children:[e.jsx(l,{scope:"col",verticalAlignment:"end",children:"Header A"}),e.jsx(l,{scope:"col",verticalAlignment:"end",children:"Header B"})]})}),e.jsx(s,{children:e.jsxs(a,{children:[e.jsx(l,{scope:"row",verticalAlignment:"end",children:"Comp 1"}),e.jsx(d,{verticalAlignment:"end",children:e.jsx(p,{children:"Click"})})]})})]})},render:n=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(m,{semantic:"informational",size:"small",icon:"none",children:"End"}),e.jsx(o,{...n})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Start",
    "divider": "both",
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell scope="col" verticalAlignment="start">
                                Header A
                            </DBTableHeaderCell><DBTableHeaderCell scope="col" verticalAlignment="start">
                                Header B
                            </DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow><DBTableHeaderCell scope="row" verticalAlignment="start">
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) Center",
    "divider": "both",
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell scope="col" verticalAlignment="center">
                                Header A
                            </DBTableHeaderCell><DBTableHeaderCell scope="col" verticalAlignment="center">
                                Header B
                            </DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow><DBTableHeaderCell scope="row" verticalAlignment="center">
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "End",
    "divider": "both",
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell scope="col" verticalAlignment="end">
                                Header A
                            </DBTableHeaderCell><DBTableHeaderCell scope="col" verticalAlignment="end">
                                Header B
                            </DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow><DBTableHeaderCell scope="row" verticalAlignment="end">
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
}`,...i.parameters?.docs?.source}}};const j=["Start","DefaultCenter","End"];export{r as DefaultCenter,i as End,t as Start,j as __namedExportsOrder,f as default};
