import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s,a}from"./tabs-zEP7Gohv.js";import{D as i}from"./infotext-CZi0xQss.js";import{a as l,D as n}from"./tab-list-CmpYvehF.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./button-DnZnbJNC.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBTabs/Orientation",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},width:{control:"select",options:["full","auto"]},alignment:{control:"select",options:["start","center"]},behavior:{control:"select",options:["scrollbar","arrows"]},initialSelectedIndex:{control:"number"},initialSelectedMode:{control:"select",options:["auto","manually"]},name:{control:"text"},tabs:{control:"object"},arrowScrollDistance:{control:"number"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{orientation:"horizontal",children:e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(n,{children:"Test 1"}),e.jsx(n,{children:"Test 2"}),e.jsx(n,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]})},render:r=>e.jsxs("div",{className:"fit-content-container",children:[e.jsx(i,{icon:"none",size:"small",semantic:"informational",children:"horizontal:"}),e.jsx(s,{...r})]})},o={args:{orientation:"vertical",children:e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(n,{children:"Test 1"}),e.jsx(n,{children:"Test 2"}),e.jsx(n,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]})},render:r=>e.jsxs("div",{className:"fit-content-container",children:[e.jsx(i,{icon:"none",size:"small",semantic:"informational",children:"vertical:"}),e.jsx(s,{...r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    horizontal:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "vertical",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    vertical:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const j=["horizontal","vertical"];export{j as __namedExportsOrder,h as default,t as horizontal,o as vertical};
