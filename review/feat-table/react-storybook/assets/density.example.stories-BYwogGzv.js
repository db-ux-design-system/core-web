import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d as s}from"./data-BskZDp9K.js";import{D as r}from"./table-CWfi-VJU.js";import{D as o}from"./infotext-h1B2lAH6.js";import"./index-cGbbigiG.js";import"./iframe-CgC83ROE.js";import"./preload-helper-BD8fvMO7.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBTable/Density",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},n={args:{"data-density":"functional",captionPlain:"Functional",data:s},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(o,{semantic:"informational",size:"small",icon:"none",children:"Functional"}),e.jsx(r,{...a})]})},i={args:{"data-density":"regular",captionPlain:"(Default) Regular",data:s},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(o,{semantic:"informational",size:"small",icon:"none",children:"(Default) Regular"}),e.jsx(r,{...a})]})},t={args:{"data-density":"expressive",captionPlain:"Expressive",data:s},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(o,{semantic:"informational",size:"small",icon:"none",children:"Expressive"}),e.jsx(r,{...a})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "captionPlain": "Functional",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Functional
                </DBInfotext><DBTable {...properties} /></div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "captionPlain": "(Default) Regular",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Regular
                </DBInfotext><DBTable {...properties} /></div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "captionPlain": "Expressive",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Expressive
                </DBInfotext><DBTable {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const D=["Functional","Regular","Expressive"];export{t as Expressive,n as Functional,i as Regular,D as __namedExportsOrder,g as default};
