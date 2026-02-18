import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d as s}from"./data-BskZDp9K.js";import{D as a}from"./table-CWfi-VJU.js";import{D as l}from"./infotext-h1B2lAH6.js";import"./index-cGbbigiG.js";import"./iframe-CgC83ROE.js";import"./preload-helper-BD8fvMO7.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBTable/Divider",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},n={args:{divider:"none",captionPlain:"None",data:s},render:i=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(l,{semantic:"informational",size:"small",icon:"none",children:"None"}),e.jsx(a,{...i})]})},r={args:{divider:"both",captionPlain:"Both",data:s},render:i=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(l,{semantic:"informational",size:"small",icon:"none",children:"Both"}),e.jsx(a,{...i})]})},t={args:{divider:"horizontal",captionPlain:"(Default) Horizontal",data:s},render:i=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(l,{semantic:"informational",size:"small",icon:"none",children:"(Default) Horizontal"}),e.jsx(a,{...i})]})},o={args:{divider:"vertical",captionPlain:"Vertical",data:s},render:i=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(l,{semantic:"informational",size:"small",icon:"none",children:"Vertical"}),e.jsx(a,{...i})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "divider": "none",
    "captionPlain": "None",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    None
                </DBInfotext><DBTable {...properties} /></div>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "divider": "both",
    "captionPlain": "Both",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Both
                </DBInfotext><DBTable {...properties} /></div>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "divider": "horizontal",
    "captionPlain": "(Default) Horizontal",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Horizontal
                </DBInfotext><DBTable {...properties} /></div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "divider": "vertical",
    "captionPlain": "Vertical",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Vertical
                </DBInfotext><DBTable {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const v=["None","Both","DefaultHorizontal","Vertical"];export{r as Both,t as DefaultHorizontal,n as None,o as Vertical,v as __namedExportsOrder,D as default};
