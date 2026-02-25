import{j as e}from"./jsx-runtime-u17CrQMm.js";import{h as l,a as s,b as c}from"./data-1Z1tDx00.js";import{D as o}from"./table-BZZVeQ_0.js";import{D as r}from"./infotext-CH3ddunZ.js";import"./index-C0vvPcr0.js";import"./iframe-DCUsnbc3.js";import"./preload-helper-BD8fvMO7.js";import"./link-Z_Zmu-jw.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBTable/Horizontal Alignment",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},caption:{control:"text"},captionPlain:{control:"text"},data:{control:"object"},divider:{control:"select",options:["none","both","horizontal","vertical"]},showCaption:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large"]},variant:{control:"select",options:["joined","zebra","floating"]},mobileVariant:{control:"select",options:["table","list"]},stickyHeader:{control:"select",options:["none","both","horizontal","vertical"]},columnSizes:{control:"object"}}},t={args:{captionPlain:"(Default) Start",divider:"both",data:l},render:n=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(r,{semantic:"informational",size:"small",icon:"none",children:"(Default) Start"}),e.jsx(o,{...n})]})},a={args:{captionPlain:"Center",divider:"both",data:s},render:n=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(r,{semantic:"informational",size:"small",icon:"none",children:"Center"}),e.jsx(o,{...n})]})},i={args:{captionPlain:"End",divider:"both",data:c},render:n=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(r,{semantic:"informational",size:"small",icon:"none",children:"End"}),e.jsx(o,{...n})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const h=["DefaultStart","Center","End"];export{a as Center,t as DefaultStart,i as End,h as __namedExportsOrder,v as default};
