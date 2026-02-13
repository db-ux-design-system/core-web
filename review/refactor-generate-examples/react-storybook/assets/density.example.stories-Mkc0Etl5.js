import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./divider-DE-SyK2F.js";import{D as o}from"./infotext-C9RN_4lr.js";import"./index-cGbbigiG.js";import"./iframe-6D4xCEbg.js";import"./preload-helper-D8o24SmT.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBDivider/Density",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"select",options:["full","auto"]},variant:{control:"select",options:["horizontal","vertical"]},emphasis:{control:"select",options:["weak","strong"]},margin:{control:"select",options:["medium","small","large","none","_"]},id:{control:"text"},autofocus:{control:"boolean"}}},r={args:{width:"full"},render:t=>e.jsxs("div",{"data-density":"functional",style:{width:"200px"},children:[e.jsx(o,{size:"small",semantic:"informational",children:"Functional"}),e.jsx(i,{...t})]})},s={args:{width:"full"},render:t=>e.jsxs("div",{"data-density":"regular",style:{width:"200px"},children:[e.jsx(o,{size:"small",semantic:"informational",children:"(Default) Regular"}),e.jsx(i,{...t})]})},a={args:{width:"full"},render:t=>e.jsxs("div",{"data-density":"expressive",style:{width:"200px"},children:[e.jsx(o,{size:"small",semantic:"informational",children:"Expressive"}),e.jsx(i,{...t})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div data-density="functional" style={{
    width: '200px'
  }}><DBInfotext size="small" semantic="informational">
                    Functional
                </DBInfotext><DBDivider {...properties} /></div>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div data-density="regular" style={{
    width: '200px'
  }}><DBInfotext size="small" semantic="informational">
                    (Default) Regular
                </DBInfotext><DBDivider {...properties} /></div>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div data-density="expressive" style={{
    width: '200px'
  }}><DBInfotext size="small" semantic="informational">
                    Expressive
                </DBInfotext><DBDivider {...properties} /></div>
}`,...a.parameters?.docs?.source}}};const f=["Functional","DefaultRegular","Expressive"];export{s as DefaultRegular,a as Expressive,r as Functional,f as __namedExportsOrder,x as default};
