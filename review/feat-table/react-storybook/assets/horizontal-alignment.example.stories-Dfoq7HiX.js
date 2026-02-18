import{j as e}from"./jsx-runtime-u17CrQMm.js";import{h as s,a as l,b as d}from"./data-1Z1tDx00.js";import{D as r}from"./table-BAkpw8se.js";import{D as o}from"./infotext-CbYd44S3.js";import"./index-cGbbigiG.js";import"./iframe-DvGZfCot.js";import"./preload-helper-BD8fvMO7.js";import"./link-CIEx0Tvp.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBTable/Horizontal Alignment",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},a={args:{captionPlain:"(Default) Start",divider:"both",data:s},render:n=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(o,{semantic:"informational",size:"small",icon:"none",children:"(Default) Start"}),e.jsx(r,{...n})]})},t={args:{captionPlain:"Center",divider:"both",data:l},render:n=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(o,{semantic:"informational",size:"small",icon:"none",children:"Center"}),e.jsx(r,{...n})]})},i={args:{captionPlain:"End",divider:"both",data:d},render:n=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(o,{semantic:"informational",size:"small",icon:"none",children:"End"}),e.jsx(r,{...n})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) Start",
    "divider": "both",
    "data": horizontalAlignmentStartTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Start
                </DBInfotext><DBTable {...properties} /></div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Center",
    "divider": "both",
    "data": horizontalAlignmentCenterTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Center
                </DBInfotext><DBTable {...properties} /></div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "End",
    "divider": "both",
    "data": horizontalAlignmentEndTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    End
                </DBInfotext><DBTable {...properties} /></div>
}`,...i.parameters?.docs?.source}}};const h=["DefaultStart","Center","End"];export{t as Center,a as DefaultStart,i as End,h as __namedExportsOrder,v as default};
