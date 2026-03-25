import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as d,a as s,b as l,c as a,d as p,e as t}from"./table-Dvm4OQBk.js";import{D}from"./infotext-DTRuL2Hl.js";import{D as n}from"./button-B-LSsBs2.js";import{D as o}from"./tooltip-DrU8665T.js";import"./index-D2E5Z_bU.js";import"./iframe-DwOpbq5K.js";import"./preload-helper-j823Xs5Z.js";import"./link-klnyuRyZ.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,k={title:"Components/DBTable/Interactive Row",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},caption:{control:"text"},captionPlain:{control:"text"},data:{control:"object"},divider:{control:"select",options:["none","both","horizontal","vertical"]},showCaption:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large"]},variant:{control:"select",options:["joined","zebra","floating"]},mobileVariant:{control:"select",options:["table","list"]},stickyHeader:{control:"select",options:["none","both","horizontal","vertical"]},columnSizes:{control:"object"}}},i={args:{captionPlain:"Joined",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsxs(l,{children:[e.jsx(a,{scope:"col",children:"Comp A"}),e.jsx(a,{scope:"col",children:"Comp B"}),e.jsx(a,{scope:"col",noText:!0,children:"Action"})]})}),e.jsxs(p,{children:[e.jsxs(l,{interactive:!0,children:[e.jsx(a,{scope:"row",children:"Comp 1"}),e.jsx(t,{children:e.jsx(n,{children:"Click"})}),e.jsx(t,{horizontalAlignment:"end",children:e.jsxs("a",{href:"#","data-variant":"ghost","data-table-row-action":"true","data-no-text":"true","data-icon":"arrow_up_right",className:"db-button",children:["Open Link",e.jsx(o,{children:"Open Link"})]})})]}),e.jsxs(l,{interactive:!0,children:[e.jsx(a,{scope:"row",children:"Comp 4"}),e.jsx(t,{children:e.jsx(n,{children:"Click"})}),e.jsx(t,{horizontalAlignment:"end",children:e.jsxs("a",{href:"#","data-variant":"ghost","data-table-row-action":"true","data-no-text":"true","data-icon":"arrow_up_right",className:"db-button",children:["Open Link",e.jsx(o,{children:"Open Link"})]})})]}),e.jsxs(l,{interactive:!0,children:[e.jsx(a,{scope:"row",children:"Comp 7"}),e.jsx(t,{children:e.jsx(n,{children:"Click"})}),e.jsx(t,{horizontalAlignment:"end",children:e.jsxs("a",{href:"#","data-variant":"ghost","data-table-row-action":"true","data-no-text":"true","data-icon":"arrow_up_right",className:"db-button",children:["Open Link",e.jsx(o,{children:"Open Link"})]})})]})]})]})},render:c=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)",padding:"var(--db-spacing-fixed-md)"},children:[e.jsx(D,{semantic:"informational",size:"small",icon:"none",children:"Joined"}),e.jsx(d,{...c})]})},r={args:{variant:"floating",captionPlain:"Floating",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsxs(l,{children:[e.jsx(a,{scope:"col",children:"Comp A"}),e.jsx(a,{scope:"col",children:"Comp B"}),e.jsx(a,{scope:"col",noText:!0,children:"Action"})]})}),e.jsxs(p,{children:[e.jsxs(l,{interactive:!0,children:[e.jsx(a,{scope:"row",children:"Comp 1"}),e.jsx(t,{children:e.jsx(n,{children:"Click"})}),e.jsx(t,{horizontalAlignment:"end",children:e.jsxs("a",{href:"#","data-variant":"ghost","data-table-row-action":"true","data-no-text":"true","data-icon":"arrow_up_right",className:"db-button",children:["Open Link",e.jsx(o,{children:"Open Link"})]})})]}),e.jsxs(l,{interactive:!0,children:[e.jsx(a,{scope:"row",children:"Comp 4"}),e.jsx(t,{children:e.jsx(n,{children:"Click"})}),e.jsx(t,{horizontalAlignment:"end",children:e.jsxs("a",{href:"#","data-variant":"ghost","data-table-row-action":"true","data-no-text":"true","data-icon":"arrow_up_right",className:"db-button",children:["Open Link",e.jsx(o,{children:"Open Link"})]})})]}),e.jsxs(l,{interactive:!0,children:[e.jsx(a,{scope:"row",children:"Comp 7"}),e.jsx(t,{children:e.jsx(n,{children:"Click"})}),e.jsx(t,{horizontalAlignment:"end",children:e.jsxs("a",{href:"#","data-variant":"ghost","data-table-row-action":"true","data-no-text":"true","data-icon":"arrow_up_right",className:"db-button",children:["Open Link",e.jsx(o,{children:"Open Link"})]})})]})]})]})},render:c=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)",padding:"var(--db-spacing-fixed-md)"},children:[e.jsx(D,{semantic:"informational",size:"small",icon:"none",children:"Floating"}),e.jsx(d,{...c})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Joined",
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell scope="col">
                                Comp A
                            </DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Comp B
                            </DBTableHeaderCell><DBTableHeaderCell scope="col" noText>
                                Action
                            </DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow interactive><DBTableHeaderCell scope="row">
                                Comp 1
                            </DBTableHeaderCell><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><a href="#" data-variant="ghost" data-table-row-action="true" data-no-text="true" data-icon="arrow_up_right" className="db-button">
                                    Open Link
                                    <DBTooltip>Open Link</DBTooltip></a></DBTableDataCell></DBTableRow><DBTableRow interactive><DBTableHeaderCell scope="row">
                                Comp 4
                            </DBTableHeaderCell><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><a href="#" data-variant="ghost" data-table-row-action="true" data-no-text="true" data-icon="arrow_up_right" className="db-button">
                                    Open Link
                                    <DBTooltip>Open Link</DBTooltip></a></DBTableDataCell></DBTableRow><DBTableRow interactive><DBTableHeaderCell scope="row">
                                Comp 7
                            </DBTableHeaderCell><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><a href="#" data-variant="ghost" data-table-row-action="true" data-no-text="true" data-icon="arrow_up_right" className="db-button">
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
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "floating",
    "captionPlain": "Floating",
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell scope="col">
                                Comp A
                            </DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Comp B
                            </DBTableHeaderCell><DBTableHeaderCell scope="col" noText>
                                Action
                            </DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow interactive><DBTableHeaderCell scope="row">
                                Comp 1
                            </DBTableHeaderCell><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><a href="#" data-variant="ghost" data-table-row-action="true" data-no-text="true" data-icon="arrow_up_right" className="db-button">
                                    Open Link
                                    <DBTooltip>Open Link</DBTooltip></a></DBTableDataCell></DBTableRow><DBTableRow interactive><DBTableHeaderCell scope="row">
                                Comp 4
                            </DBTableHeaderCell><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><a href="#" data-variant="ghost" data-table-row-action="true" data-no-text="true" data-icon="arrow_up_right" className="db-button">
                                    Open Link
                                    <DBTooltip>Open Link</DBTooltip></a></DBTableDataCell></DBTableRow><DBTableRow interactive><DBTableHeaderCell scope="row">
                                Comp 7
                            </DBTableHeaderCell><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><a href="#" data-variant="ghost" data-table-row-action="true" data-no-text="true" data-icon="arrow_up_right" className="db-button">
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
}`,...r.parameters?.docs?.source}}};const _=["Joined","Floating"];export{r as Floating,i as Joined,_ as __namedExportsOrder,k as default};
