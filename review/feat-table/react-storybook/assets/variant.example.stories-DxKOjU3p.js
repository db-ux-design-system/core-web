import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as o}from"./data-B3NKhOWE.js";import{D as t}from"./table-BThojzWo.js";import{D as s}from"./infotext-CQyDUuLf.js";import"./index-cGbbigiG.js";import"./iframe-Bs-TlRno.js";import"./preload-helper-BD8fvMO7.js";import"./link-05_stA-g.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBTable/Variant",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},i={args:{variant:"joined",divider:"both",captionPlain:"(Default) Joined",data:o},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"(Default) Joined"}),e.jsx(t,{...a})]})},n={args:{variant:"zebra",divider:"both",captionPlain:"Zebra",data:o},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"Zebra"}),e.jsx(t,{...a})]})},r={args:{variant:"floating",divider:"both",captionPlain:"Floating",data:o},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"Floating"}),e.jsx(t,{...a})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "joined",
    "divider": "both",
    "captionPlain": "(Default) Joined",
    "data": subHeaderEmphasisWeakTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Joined
                </DBInfotext><DBTable {...properties} /></div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "zebra",
    "divider": "both",
    "captionPlain": "Zebra",
    "data": subHeaderEmphasisWeakTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Zebra
                </DBInfotext><DBTable {...properties} /></div>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "floating",
    "divider": "both",
    "captionPlain": "Floating",
    "data": subHeaderEmphasisWeakTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Floating
                </DBInfotext><DBTable {...properties} /></div>
}`,...r.parameters?.docs?.source}}};const v=["DefaultJoined","Floating","TableVariant2"];export{i as DefaultJoined,n as Floating,r as TableVariant2,v as __namedExportsOrder,u as default};
