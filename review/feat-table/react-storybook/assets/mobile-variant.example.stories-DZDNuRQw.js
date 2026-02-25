import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d as n}from"./data-1Z1tDx00.js";import{D as o}from"./table-DLk6RAEb.js";import{D as l}from"./infotext-BY5SJ9Aq.js";import"./index-C0vvPcr0.js";import"./iframe-D80j_IDB.js";import"./preload-helper-BD8fvMO7.js";import"./link-CoBYe3sx.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBTable/Mobile Variant",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},caption:{control:"text"},captionPlain:{control:"text"},data:{control:"object"},divider:{control:"select",options:["none","both","horizontal","vertical"]},showCaption:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large"]},variant:{control:"select",options:["joined","zebra","floating"]},mobileVariant:{control:"select",options:["table","list"]},stickyHeader:{control:"select",options:["none","both","horizontal","vertical"]},columnSizes:{control:"object"}}},t={args:{mobileVariant:"table",captionPlain:"(Default) Table",data:n},render:i=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(l,{semantic:"informational",size:"small",icon:"none",children:"(Default) Table"}),e.jsx(o,{...i})]})},a={args:{mobileVariant:"list",captionPlain:"List",data:n},render:i=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(l,{semantic:"informational",size:"small",icon:"none",children:"List"}),e.jsx(o,{...i})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
