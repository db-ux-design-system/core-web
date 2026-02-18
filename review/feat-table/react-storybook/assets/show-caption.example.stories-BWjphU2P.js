import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d as n}from"./data-B3NKhOWE.js";import{D as i}from"./table-BThojzWo.js";import{D as s}from"./infotext-CQyDUuLf.js";import"./index-cGbbigiG.js";import"./iframe-Bs-TlRno.js";import"./preload-helper-BD8fvMO7.js";import"./link-05_stA-g.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBTable/ShowCaption",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},a={args:{captionPlain:"(Default) False",data:n},render:r=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"(Default) False"}),e.jsx(i,{...r})]})},t={args:{captionPlain:"True",data:n,showCaption:!0},render:r=>e.jsx("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:e.jsx(i,{...r})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) False",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) False
                </DBInfotext><DBTable {...properties} /></div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "True",
    "data": defaultTable,
    "showCaption": true
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBTable {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const D=["DefaultFalse","True"];export{a as DefaultFalse,t as True,D as __namedExportsOrder,g as default};
