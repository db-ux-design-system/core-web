import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./divider-DAwGuVq7.js";import{D as a}from"./infotext-CZi0xQss.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBDivider/Emphasis",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"select",options:["full","auto"]},variant:{control:"select",options:["horizontal","vertical"]},emphasis:{control:"select",options:["weak","strong"]},margin:{control:"select",options:["medium","small","large","none","_"]},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{width:"full"},render:o=>e.jsxs("div",{style:{width:"200px"},children:[e.jsx(a,{size:"small",semantic:"informational",children:"(Default) Weak"}),e.jsx(s,{...o})]})},r={args:{emphasis:"strong",width:"full"},render:o=>e.jsxs("div",{style:{width:"200px"},children:[e.jsx(a,{size:"small",semantic:"informational",children:"Strong"}),e.jsx(s,{...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBInfotext size="small" semantic="informational">
                    (Default) Weak
                </DBInfotext><DBDivider {...properties} /></div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "width": "full"
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBInfotext size="small" semantic="informational">
                    Strong
                </DBInfotext><DBDivider {...properties} /></div>
}`,...r.parameters?.docs?.source}}};const u=["DefaultWeak","Strong"];export{t as DefaultWeak,r as Strong,u as __namedExportsOrder,f as default};
