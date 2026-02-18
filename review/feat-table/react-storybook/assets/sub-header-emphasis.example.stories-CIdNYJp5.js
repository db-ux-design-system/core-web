import{j as e}from"./jsx-runtime-u17CrQMm.js";import{s as o,c as l,e as m}from"./data-BskZDp9K.js";import{D as r}from"./table-CWfi-VJU.js";import{D as t}from"./infotext-h1B2lAH6.js";import"./index-cGbbigiG.js";import"./iframe-CgC83ROE.js";import"./preload-helper-BD8fvMO7.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBTable/SubHeaderEmphasis",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},n={args:{captionPlain:"(Default) None",data:o},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(t,{semantic:"informational",size:"small",icon:"none",children:"(Default) None"}),e.jsx(r,{...a})]})},i={args:{captionPlain:"Weak",data:l},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(t,{semantic:"informational",size:"small",icon:"none",children:"Weak"}),e.jsx(r,{...a})]})},s={args:{captionPlain:"Strong",data:m},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(t,{semantic:"informational",size:"small",icon:"none",children:"Strong"}),e.jsx(r,{...a})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) None",
    "data": subHeaderEmphasisNoneTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) None
                </DBInfotext><DBTable {...properties} /></div>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Weak",
    "data": subHeaderEmphasisWeakTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Weak
                </DBInfotext><DBTable {...properties} /></div>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Strong",
    "data": subHeaderEmphasisStrongTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Strong
                </DBInfotext><DBTable {...properties} /></div>
}`,...s.parameters?.docs?.source}}};const S=["DefaultNone","Weak","Strong"];export{n as DefaultNone,s as Strong,i as Weak,S as __namedExportsOrder,b as default};
