import{j as e}from"./jsx-runtime-u17CrQMm.js";import{o as l}from"./data-BskZDp9K.js";import{D as i}from"./table-CWfi-VJU.js";import{D as s}from"./infotext-h1B2lAH6.js";import"./index-cGbbigiG.js";import"./iframe-CgC83ROE.js";import"./preload-helper-BD8fvMO7.js";const{fn:z}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBTable/Sticky Header",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},n={args:{captionPlain:"(Default) None",data:l},render:a=>e.jsxs("div",{style:{inlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)",blockSize:"300px"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"(Default) None"}),e.jsx(i,{...a})]})},o={args:{captionPlain:"Both",stickyHeader:"both",data:l},render:a=>e.jsxs("div",{style:{inlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)",blockSize:"300px"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"Both"}),e.jsx(i,{...a})]})},r={args:{stickyHeader:"horizontal",captionPlain:"Horizontal",data:l},render:a=>e.jsxs("div",{style:{inlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)",blockSize:"300px"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"Horizontal"}),e.jsx(i,{...a})]})},t={args:{stickyHeader:"vertical",captionPlain:"Vertical",data:l},render:a=>e.jsxs("div",{style:{inlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)",blockSize:"300px"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"Vertical"}),e.jsx(i,{...a})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) None",
    "data": overflowTable
  },
  render: (properties: any) => <div style={{
    inlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)',
    blockSize: '300px'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) None
                </DBInfotext><DBTable {...properties} /></div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Both",
    "stickyHeader": "both",
    "data": overflowTable
  },
  render: (properties: any) => <div style={{
    inlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)',
    blockSize: '300px'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Both
                </DBInfotext><DBTable {...properties} /></div>
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "stickyHeader": "horizontal",
    "captionPlain": "Horizontal",
    "data": overflowTable
  },
  render: (properties: any) => <div style={{
    inlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)',
    blockSize: '300px'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Horizontal
                </DBInfotext><DBTable {...properties} /></div>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "stickyHeader": "vertical",
    "captionPlain": "Vertical",
    "data": overflowTable
  },
  render: (properties: any) => <div style={{
    inlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)',
    blockSize: '300px'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Vertical
                </DBInfotext><DBTable {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const u=["DefaultNone","Both","Horizontal","Vertical"];export{o as Both,n as DefaultNone,r as Horizontal,t as Vertical,u as __namedExportsOrder,D as default};
