import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r,a as n}from"./tabs-zEP7Gohv.js";import{D as l}from"./infotext-CZi0xQss.js";import{a as i,D as a}from"./tab-list-CmpYvehF.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./button-DnZnbJNC.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBTabs/Examples",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},width:{control:"select",options:["full","auto"]},alignment:{control:"select",options:["start","center"]},behavior:{control:"select",options:["scrollbar","arrows"]},initialSelectedIndex:{control:"number"},initialSelectedMode:{control:"select",options:["auto","manually"]},name:{control:"text"},tabs:{control:"object"},arrowScrollDistance:{control:"number"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{initialSelectedIndex:1,children:e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(a,{children:"Test 1"}),e.jsx(a,{children:"Test 2"}),e.jsx(a,{children:"Test 3"})]}),e.jsx(n,{children:"Tab Panel 1"}),e.jsx(n,{children:"Tab Panel 2"}),e.jsx(n,{children:"Tab Panel 3"})]})},render:o=>e.jsxs("div",{className:"fit-content-container",children:[e.jsx(l,{icon:"none",size:"small",semantic:"informational",children:"2nd tab selected:"}),e.jsx(r,{...o})]})},s={args:{initialSelectedMode:"manually",children:e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(a,{children:"Test 1"}),e.jsx(a,{children:"Test 2"}),e.jsx(a,{children:"Test 3"})]}),e.jsx(n,{children:"Tab Panel 1"}),e.jsx(n,{children:"Tab Panel 2"}),e.jsx(n,{children:"Tab Panel 3"})]})},render:o=>e.jsxs("div",{className:"fit-content-container",children:[e.jsx(l,{icon:"none",size:"small",semantic:"informational",children:"nothing selected:"}),e.jsx(r,{...o})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "initialSelectedIndex": 1,
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    2nd tab selected:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "initialSelectedMode": "manually",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    nothing selected:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...s.parameters?.docs?.source}}};const j=["SecondTestselected","nothingselected"];export{t as SecondTestselected,j as __namedExportsOrder,h as default,s as nothingselected};
