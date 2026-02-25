import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s,a as n}from"./tabs-Dg7ppO8g.js";import{D as i}from"./infotext-DXXyYRXe.js";import{a as l,D as a}from"./tab-list-BniPzJQx.js";import"./index-C0vvPcr0.js";import"./iframe-DVMbI4cI.js";import"./preload-helper--tLyh50B.js";import"./button-DxqrW5J1.js";import"./tooltip-BGzVZ2uL.js";import"./constants-C-ysBZRi.js";import"./document-scroll-listener-C19Ex2M_.js";import"./floating-components-BNmGdAgy.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,I={title:"Components/DBTabs/Orientation",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},width:{control:"select",options:["full","auto"]},contentAlignment:{control:"select",options:["start","center"]},behavior:{control:"select",options:["scrollbar","arrows"]},initialSelectedIndex:{control:"number"},initialSelectedMode:{control:"select",options:["auto","manually"]},name:{control:"text"},tabs:{control:"object"},arrowScrollDistance:{control:"number"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{orientation:"horizontal",children:e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(a,{children:"Test 1"}),e.jsx(a,{children:"Test 2"}),e.jsx(a,{children:"Test 3"})]}),e.jsx(n,{children:"Tab Panel 1"}),e.jsx(n,{children:"Tab Panel 2"}),e.jsx(n,{children:"Tab Panel 3"})]})},render:r=>e.jsxs("div",{className:"fit-content-container",children:[e.jsx(i,{icon:"none",size:"small",semantic:"informational",children:"horizontal:"}),e.jsx(s,{...r})]})},o={args:{orientation:"vertical",children:e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(a,{children:"Test 1"}),e.jsx(a,{children:"Test 2"}),e.jsx(a,{children:"Test 3"})]}),e.jsx(n,{children:"Tab Panel 1"}),e.jsx(n,{children:"Tab Panel 2"}),e.jsx(n,{children:"Tab Panel 3"})]})},render:r=>e.jsxs("div",{className:"fit-content-container",children:[e.jsx(i,{icon:"none",size:"small",semantic:"informational",children:"vertical:"}),e.jsx(s,{...r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const u=["horizontal","vertical"];export{u as __namedExportsOrder,I as default,t as horizontal,o as vertical};
