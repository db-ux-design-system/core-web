import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d as i}from"./data-ntzduIQ0.js";import{D as l}from"./table-Dvm4OQBk.js";import{D as n}from"./infotext-DTRuL2Hl.js";import"./index-D2E5Z_bU.js";import"./iframe-DwOpbq5K.js";import"./preload-helper-j823Xs5Z.js";import"./link-klnyuRyZ.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBTable/Width",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},caption:{control:"text"},captionPlain:{control:"text"},data:{control:"object"},divider:{control:"select",options:["none","both","horizontal","vertical"]},showCaption:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large"]},variant:{control:"select",options:["joined","zebra","floating"]},mobileVariant:{control:"select",options:["table","list"]},stickyHeader:{control:"select",options:["none","both","horizontal","vertical"]},columnSizes:{control:"object"}}},t={args:{width:"full",captionPlain:"(Default) Full",data:i},render:a=>e.jsxs("div",{style:{inlineSize:"300px",display:"flex",flexDirection:"column"},children:[e.jsx(n,{semantic:"informational",size:"small",icon:"none",children:"(Default) Full"}),e.jsx(l,{...a})]})},o={args:{width:"auto",captionPlain:"Auto",data:i},render:a=>e.jsxs("div",{style:{inlineSize:"300px",display:"flex",flexDirection:"column"},children:[e.jsx(n,{semantic:"informational",size:"small",icon:"none",children:"Auto"}),e.jsx(l,{...a})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const b=["DefaultFull","Auto"];export{o as Auto,t as DefaultFull,b as __namedExportsOrder,D as default};
