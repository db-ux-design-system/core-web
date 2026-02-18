import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d as r}from"./data-1Z1tDx00.js";import{D as n}from"./table-BAkpw8se.js";import{D as s}from"./infotext-CbYd44S3.js";import"./index-cGbbigiG.js";import"./iframe-DvGZfCot.js";import"./preload-helper-BD8fvMO7.js";import"./link-CIEx0Tvp.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBTable/Mobile Variant",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},a={args:{mobileVariant:"table",captionPlain:"(Default) Table",data:r},render:t=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"(Default) Table"}),e.jsx(n,{...t})]})},i={args:{mobileVariant:"list",captionPlain:"List",data:r},render:t=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"List"}),e.jsx(n,{...t})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const D=["DefaultTable","List"];export{a as DefaultTable,i as List,D as __namedExportsOrder,u as default};
