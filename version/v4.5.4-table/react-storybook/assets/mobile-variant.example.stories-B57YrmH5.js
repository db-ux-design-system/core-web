import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d as n}from"./data-ntzduIQ0.js";import{D as o}from"./table-Dvm4OQBk.js";import{D as l}from"./infotext-DTRuL2Hl.js";import"./index-D2E5Z_bU.js";import"./iframe-DwOpbq5K.js";import"./preload-helper-j823Xs5Z.js";import"./link-klnyuRyZ.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBTable/Mobile Variant",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},caption:{control:"text"},captionPlain:{control:"text"},data:{control:"object"},divider:{control:"select",options:["none","both","horizontal","vertical"]},showCaption:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large"]},variant:{control:"select",options:["joined","zebra","floating"]},mobileVariant:{control:"select",options:["table","list"]},stickyHeader:{control:"select",options:["none","both","horizontal","vertical"]},columnSizes:{control:"object"}}},t={args:{mobileVariant:"table",captionPlain:"(Default) Table",data:n},render:i=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(l,{semantic:"informational",size:"small",icon:"none",children:"(Default) Table"}),e.jsx(o,{...i})]})},a={args:{mobileVariant:"list",captionPlain:"List",data:n},render:i=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(l,{semantic:"informational",size:"small",icon:"none",children:"List"}),e.jsx(o,{...i})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "mobileVariant": "table",
    "captionPlain": "(Default) Table",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Table
                </DBInfotext><DBTable {...properties} /></div>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "mobileVariant": "list",
    "captionPlain": "List",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    List
                </DBInfotext><DBTable {...properties} /></div>
}`,...a.parameters?.docs?.source}}};const g=["DefaultTable","List"];export{t as DefaultTable,a as List,g as __namedExportsOrder,u as default};
