import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d as r}from"./data-ntzduIQ0.js";import{D as i}from"./table-Dvm4OQBk.js";import{D as s}from"./infotext-DTRuL2Hl.js";import"./index-D2E5Z_bU.js";import"./iframe-DwOpbq5K.js";import"./preload-helper-j823Xs5Z.js";import"./link-klnyuRyZ.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,z={title:"Components/DBTable/Size",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},caption:{control:"text"},captionPlain:{control:"text"},data:{control:"object"},divider:{control:"select",options:["none","both","horizontal","vertical"]},showCaption:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large"]},variant:{control:"select",options:["joined","zebra","floating"]},mobileVariant:{control:"select",options:["table","list"]},stickyHeader:{control:"select",options:["none","both","horizontal","vertical"]},columnSizes:{control:"object"}}},n={args:{size:"x-small",captionPlain:"X-Small",data:r},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"X-Small"}),e.jsx(i,{...a})]})},t={args:{size:"small",captionPlain:"Small",data:r},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"Small"}),e.jsx(i,{...a})]})},l={args:{size:"medium",captionPlain:"(Default) Medium",data:r},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"(Default) Medium"}),e.jsx(i,{...a})]})},o={args:{size:"large",captionPlain:"Large",data:r},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(s,{semantic:"informational",size:"small",icon:"none",children:"Large"}),e.jsx(i,{...a})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "x-small",
    "captionPlain": "X-Small",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    X-Small
                </DBInfotext><DBTable {...properties} /></div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "captionPlain": "Small",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Small
                </DBInfotext><DBTable {...properties} /></div>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "captionPlain": "(Default) Medium",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Medium
                </DBInfotext><DBTable {...properties} /></div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "large",
    "captionPlain": "Large",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Large
                </DBInfotext><DBTable {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const S=["XSmall","Small","DefaultMedium","Large"];export{l as DefaultMedium,o as Large,t as Small,n as XSmall,S as __namedExportsOrder,z as default};
