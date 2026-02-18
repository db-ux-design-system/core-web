import{j as e}from"./jsx-runtime-u17CrQMm.js";import{d as t}from"./data-1Z1tDx00.js";import{D as i}from"./table-BAkpw8se.js";import{D as o}from"./infotext-CbYd44S3.js";import"./index-cGbbigiG.js";import"./iframe-DvGZfCot.js";import"./preload-helper-BD8fvMO7.js";import"./link-CIEx0Tvp.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,S={title:"Components/DBTable/Size",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},n={args:{size:"x-small",captionPlain:"X-Small",data:t},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(o,{semantic:"informational",size:"small",icon:"none",children:"X-Small"}),e.jsx(i,{...a})]})},l={args:{size:"small",captionPlain:"Small",data:t},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(o,{semantic:"informational",size:"small",icon:"none",children:"Small"}),e.jsx(i,{...a})]})},r={args:{size:"medium",captionPlain:"(Default) Medium",data:t},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(o,{semantic:"informational",size:"small",icon:"none",children:"(Default) Medium"}),e.jsx(i,{...a})]})},s={args:{size:"large",captionPlain:"Large",data:t},render:a=>e.jsxs("div",{style:{minInlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(o,{semantic:"informational",size:"small",icon:"none",children:"Large"}),e.jsx(i,{...a})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const z=["XSmall","Small","DefaultMedium","Large"];export{r as DefaultMedium,s as Large,l as Small,n as XSmall,z as __namedExportsOrder,S as default};
