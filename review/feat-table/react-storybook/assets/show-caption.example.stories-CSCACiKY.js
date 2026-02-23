import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d as i}from"./data-1Z1tDx00.js";import{D as n}from"./table-BtlIDbiQ.js";import{D as r}from"./infotext-urAj125x.js";import"./index-cGbbigiG.js";import"./iframe-CNbshHf4.js";import"./preload-helper-BD8fvMO7.js";import"./link-Cfey56Jy.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBTable/ShowCaption",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},caption:{control:"text"},captionPlain:{control:"text"},data:{control:"object"},divider:{control:"select",options:["none","both","horizontal","vertical"]},showCaption:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large"]},variant:{control:"select",options:["joined","zebra","floating"]},mobileVariant:{control:"select",options:["table","list"]},stickyHeader:{control:"select",options:["none","both","horizontal","vertical"]},columnSizes:{control:"object"}}},t={args:{captionPlain:"(Default) False",data:i},render:o=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(r,{semantic:"informational",size:"small",icon:"none",children:"(Default) False"}),e.jsx(n,{...o})]})},a={args:{captionPlain:"True",data:i,showCaption:!0},render:o=>e.jsx("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:e.jsx(n,{...o})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const D=["DefaultFalse","True"];export{t as DefaultFalse,a as True,D as __namedExportsOrder,g as default};
