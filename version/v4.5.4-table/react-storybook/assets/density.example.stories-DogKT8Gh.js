import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d as r}from"./data-ntzduIQ0.js";import{D as o}from"./table-Dvm4OQBk.js";import{D as s}from"./infotext-DTRuL2Hl.js";import"./index-D2E5Z_bU.js";import"./iframe-DwOpbq5K.js";import"./preload-helper-j823Xs5Z.js";import"./link-klnyuRyZ.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBTable/Density",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},caption:{control:"text"},captionPlain:{control:"text"},data:{control:"object"},divider:{control:"select",options:["none","both","horizontal","vertical"]},showCaption:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large"]},variant:{control:"select",options:["joined","zebra","floating"]},mobileVariant:{control:"select",options:["table","list"]},stickyHeader:{control:"select",options:["none","both","horizontal","vertical"]},columnSizes:{control:"object"}}},n={args:{"data-density":"functional",captionPlain:"Functional",data:r},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"Functional"}),e.jsx(o,{...a})]})},t={args:{"data-density":"regular",captionPlain:"(Default) Regular",data:r},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"(Default) Regular"}),e.jsx(o,{...a})]})},i={args:{"data-density":"expressive",captionPlain:"Expressive",data:r},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"Expressive"}),e.jsx(o,{...a})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const D=["Functional","Regular","Expressive"];export{i as Expressive,n as Functional,t as Regular,D as __namedExportsOrder,v as default};
