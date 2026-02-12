import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as i,a}from"./tabs-zEP7Gohv.js";import{D as o}from"./infotext-CZi0xQss.js";import{a as c,D as t}from"./tab-list-CmpYvehF.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./button-DnZnbJNC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBTabs/Width",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},width:{control:"select",options:["full","auto"]},alignment:{control:"select",options:["start","center"]},behavior:{control:"select",options:["scrollbar","arrows"]},initialSelectedIndex:{control:"number"},initialSelectedMode:{control:"select",options:["auto","manually"]},name:{control:"text"},tabs:{control:"object"},arrowScrollDistance:{control:"number"},id:{control:"text"},autofocus:{control:"boolean"}}},s={args:{width:"auto",children:e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[e.jsx(t,{children:"Test 1"}),e.jsx(t,{children:"Test 2"}),e.jsx(t,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]})},render:n=>e.jsxs("div",{className:"fit-content-container",style:{width:"100%"},children:[e.jsx(o,{icon:"none",size:"small",semantic:"informational",children:"auto:"}),e.jsx(i,{...n})]})},l={args:{width:"full",children:e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[e.jsx(t,{children:"Test 1"}),e.jsx(t,{children:"Test 2"}),e.jsx(t,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]})},render:n=>e.jsxs("div",{className:"fit-content-container",style:{width:"100%"},children:[e.jsx(o,{icon:"none",size:"small",semantic:"informational",children:"full - alignment: start:"}),e.jsx(i,{...n})]})},r={args:{width:"full",alignment:"center",children:e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[e.jsx(t,{children:"Test 1"}),e.jsx(t,{children:"Test 2"}),e.jsx(t,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]})},render:n=>e.jsxs("div",{className:"fit-content-container",style:{width:"100%"},children:[e.jsx(o,{icon:"none",size:"small",semantic:"informational",children:"full - alignment: center:"}),e.jsx(i,{...n})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '100%'
  }}><DBInfotext icon="none" size="small" semantic="informational">
                    auto:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '100%'
  }}><DBInfotext icon="none" size="small" semantic="informational">
                    full - alignment: start:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "alignment": "center",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '100%'
  }}><DBInfotext icon="none" size="small" semantic="informational">
                    full - alignment: center:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...r.parameters?.docs?.source}}};const u=["auto","fullalignmentstart","fullalignmentcenter"];export{u as __namedExportsOrder,s as auto,f as default,r as fullalignmentcenter,l as fullalignmentstart};
