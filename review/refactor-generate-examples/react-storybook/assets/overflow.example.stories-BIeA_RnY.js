import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as l,a}from"./tabs-zEP7Gohv.js";import{D as i}from"./infotext-CZi0xQss.js";import{a as c,D as n}from"./tab-list-CmpYvehF.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./button-DnZnbJNC.js";const{fn:P}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBTabs/Overflow",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},width:{control:"select",options:["full","auto"]},alignment:{control:"select",options:["start","center"]},behavior:{control:"select",options:["scrollbar","arrows"]},initialSelectedIndex:{control:"number"},initialSelectedMode:{control:"select",options:["auto","manually"]},name:{control:"text"},tabs:{control:"object"},arrowScrollDistance:{control:"number"},id:{control:"text"},autofocus:{control:"boolean"}}},r={args:{width:"auto",children:e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[e.jsx(n,{children:"Test 1"}),e.jsx(n,{children:"Test 2"}),e.jsx(n,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]})},render:t=>e.jsxs("div",{className:"fit-content-container",style:{width:"300px"},children:[e.jsx(i,{icon:"none",size:"small",semantic:"informational",children:"no overflow:"}),e.jsx(l,{...t})]})},s={args:{behavior:"arrows",children:e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[e.jsx(n,{children:"Test 1"}),e.jsx(n,{children:"Test 2"}),e.jsx(n,{children:"Test 3"}),e.jsx(n,{children:"Test 4"}),e.jsx(n,{children:"Test 5"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"}),e.jsx(a,{children:"Tab Panel 4"}),e.jsx(a,{children:"Tab Panel 5"})]})},render:t=>e.jsxs("div",{className:"fit-content-container",style:{width:"300px"},children:[e.jsx(i,{icon:"none",size:"small",semantic:"informational",children:"with overflow - behavior: arrows:"}),e.jsx(l,{...t})]})},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[e.jsx(n,{children:"Test 1"}),e.jsx(n,{children:"Test 2"}),e.jsx(n,{children:"Test 3"}),e.jsx(n,{children:"Test 4"}),e.jsx(n,{children:"Test 5"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"}),e.jsx(a,{children:"Tab Panel 4"}),e.jsx(a,{children:"Tab Panel 5"})]})},render:t=>e.jsxs("div",{className:"fit-content-container",style:{width:"300px"},children:[e.jsx(i,{icon:"none",size:"small",semantic:"informational",children:"with overflow - behavior: scrollbar:"}),e.jsx(l,{...t})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '300px'
  }}><DBInfotext icon="none" size="small" semantic="informational">
                    no overflow:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "arrows",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem><DBTabItem>Test 5</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel><DBTabPanel>Tab Panel 5</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '300px'
  }}><DBInfotext icon="none" size="small" semantic="informational">
                    with overflow - behavior: arrows:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem><DBTabItem>Test 5</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel><DBTabPanel>Tab Panel 5</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '300px'
  }}><DBInfotext icon="none" size="small" semantic="informational">
                    with overflow - behavior: scrollbar:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const j=["nooverflow","withoverflowbehaviorarrows","withoverflowbehaviorscrollbar"];export{j as __namedExportsOrder,p as default,r as nooverflow,s as withoverflowbehaviorarrows,o as withoverflowbehaviorscrollbar};
