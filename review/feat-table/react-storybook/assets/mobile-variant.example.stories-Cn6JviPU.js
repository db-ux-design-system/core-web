import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d as r}from"./data-BskZDp9K.js";import{D as n}from"./table-CWfi-VJU.js";import{D as s}from"./infotext-h1B2lAH6.js";import"./index-cGbbigiG.js";import"./iframe-CgC83ROE.js";import"./preload-helper-BD8fvMO7.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBTable/Mobile Variant",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},a={args:{mobileVariant:"table",captionPlain:"(Default) Table",data:r},render:t=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"(Default) Table"}),e.jsx(n,{...t})]})},i={args:{mobileVariant:"list",captionPlain:"List",data:r},render:t=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"List"}),e.jsx(n,{...t})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const u=["DefaultTable","List"];export{a as DefaultTable,i as List,u as __namedExportsOrder,b as default};
