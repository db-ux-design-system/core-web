import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d as l}from"./data-BskZDp9K.js";import{D as i}from"./table-CWfi-VJU.js";import{D as n}from"./infotext-h1B2lAH6.js";import"./index-cGbbigiG.js";import"./iframe-CgC83ROE.js";import"./preload-helper-BD8fvMO7.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBTable/Width",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},t={args:{width:"full",captionPlain:"(Default) Full",data:l},render:o=>e.jsxs("div",{style:{inlineSize:"300px",display:"flex",flexDirection:"column"},children:[e.jsx(n,{semantic:"informational",size:"small",icon:"none",children:"(Default) Full"}),e.jsx(i,{...o})]})},a={args:{width:"auto",captionPlain:"Auto",data:l},render:o=>e.jsxs("div",{style:{inlineSize:"300px",display:"flex",flexDirection:"column"},children:[e.jsx(n,{semantic:"informational",size:"small",icon:"none",children:"Auto"}),e.jsx(i,{...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "captionPlain": "(Default) Full",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    inlineSize: '300px',
    display: 'flex',
    flexDirection: 'column'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Full
                </DBInfotext><DBTable {...properties} /></div>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "captionPlain": "Auto",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    inlineSize: '300px',
    display: 'flex',
    flexDirection: 'column'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Auto
                </DBInfotext><DBTable {...properties} /></div>
}`,...a.parameters?.docs?.source}}};const D=["DefaultFull","Auto"];export{a as Auto,t as DefaultFull,D as __namedExportsOrder,x as default};
