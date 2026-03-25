import{j as e}from"./jsx-runtime-u17CrQMm.js";import{o as l}from"./data-ntzduIQ0.js";import{D as o}from"./table-Dvm4OQBk.js";import{D as s}from"./infotext-DTRuL2Hl.js";import"./index-D2E5Z_bU.js";import"./iframe-DwOpbq5K.js";import"./preload-helper-j823Xs5Z.js";import"./link-klnyuRyZ.js";const{fn:z}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBTable/Sticky Header",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},caption:{control:"text"},captionPlain:{control:"text"},data:{control:"object"},divider:{control:"select",options:["none","both","horizontal","vertical"]},showCaption:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large"]},variant:{control:"select",options:["joined","zebra","floating"]},mobileVariant:{control:"select",options:["table","list"]},stickyHeader:{control:"select",options:["none","both","horizontal","vertical"]},columnSizes:{control:"object"}}},a={args:{captionPlain:"(Default) None",data:l},render:i=>e.jsxs("div",{style:{inlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)",blockSize:"300px"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"(Default) None"}),e.jsx(o,{...i})]})},t={args:{captionPlain:"Both",stickyHeader:"both",data:l},render:i=>e.jsxs("div",{style:{inlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)",blockSize:"300px"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"Both"}),e.jsx(o,{...i})]})},n={args:{stickyHeader:"horizontal",captionPlain:"Horizontal",data:l},render:i=>e.jsxs("div",{style:{inlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)",blockSize:"300px"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"Horizontal"}),e.jsx(o,{...i})]})},r={args:{stickyHeader:"vertical",captionPlain:"Vertical",data:l},render:i=>e.jsxs("div",{style:{inlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)",blockSize:"300px"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"Vertical"}),e.jsx(o,{...i})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const D=["DefaultNone","Both","Horizontal","Vertical"];export{t as Both,a as DefaultNone,n as Horizontal,r as Vertical,D as __namedExportsOrder,u as default};
