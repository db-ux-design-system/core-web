import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d as l}from"./data-1Z1tDx00.js";import{D as i}from"./table-BAkpw8se.js";import{D as n}from"./infotext-CbYd44S3.js";import"./index-cGbbigiG.js";import"./iframe-DvGZfCot.js";import"./preload-helper-BD8fvMO7.js";import"./link-CIEx0Tvp.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBTable/Width",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},t={args:{width:"full",captionPlain:"(Default) Full",data:l},render:o=>e.jsxs("div",{style:{inlineSize:"300px",display:"flex",flexDirection:"column"},children:[e.jsx(n,{semantic:"informational",size:"small",icon:"none",children:"(Default) Full"}),e.jsx(i,{...o})]})},a={args:{width:"auto",captionPlain:"Auto",data:l},render:o=>e.jsxs("div",{style:{inlineSize:"300px",display:"flex",flexDirection:"column"},children:[e.jsx(n,{semantic:"informational",size:"small",icon:"none",children:"Auto"}),e.jsx(i,{...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const y=["DefaultFull","Auto"];export{a as Auto,t as DefaultFull,y as __namedExportsOrder,D as default};
