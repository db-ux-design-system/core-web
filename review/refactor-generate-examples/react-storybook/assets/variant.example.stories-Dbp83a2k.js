import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./divider-DAwGuVq7.js";import{D as i}from"./infotext-CZi0xQss.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBDivider/Variant",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"select",options:["full","auto"]},variant:{control:"select",options:["horizontal","vertical"]},emphasis:{control:"select",options:["weak","strong"]},margin:{control:"select",options:["medium","small","large","none","_"]},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{width:"full"},render:a=>t.jsxs("div",{style:{width:"200px"},children:[t.jsx(i,{size:"small",semantic:"informational",children:"(Default) Adaptive - Horizontal"}),t.jsx(o,{...a})]})},r={args:{variant:"vertical",width:"full"},render:a=>t.jsxs("div",{style:{height:"100px"},children:[t.jsx(i,{size:"small",semantic:"informational",children:"Adaptive - Vertical"}),t.jsx(o,{...a})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBInfotext size="small" semantic="informational">
                    (Default) Adaptive - Horizontal
                </DBInfotext><DBDivider {...properties} /></div>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "vertical",
    "width": "full"
  },
  render: (properties: any) => <div style={{
    height: '100px'
  }}><DBInfotext size="small" semantic="informational">
                    Adaptive - Vertical
                </DBInfotext><DBDivider {...properties} /></div>
}`,...r.parameters?.docs?.source}}};const v=["DefaultAdaptiveHorizontal","AdaptiveVertical"];export{r as AdaptiveVertical,e as DefaultAdaptiveHorizontal,v as __namedExportsOrder,f as default};
