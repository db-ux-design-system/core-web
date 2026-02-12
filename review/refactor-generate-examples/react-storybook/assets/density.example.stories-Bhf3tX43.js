import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o,a}from"./tabs-zEP7Gohv.js";import{D as l}from"./infotext-CZi0xQss.js";import{a as c,D as n}from"./tab-list-CmpYvehF.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./button-DnZnbJNC.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBTabs/Density",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},width:{control:"select",options:["full","auto"]},alignment:{control:"select",options:["start","center"]},behavior:{control:"select",options:["scrollbar","arrows"]},initialSelectedIndex:{control:"number"},initialSelectedMode:{control:"select",options:["auto","manually"]},name:{control:"text"},tabs:{control:"object"},arrowScrollDistance:{control:"number"},id:{control:"text"},autofocus:{control:"boolean"}}},s={args:{"data-density":"functional",children:e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[e.jsx(n,{children:"Test 1"}),e.jsx(n,{children:"Test 2"}),e.jsx(n,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]})},render:t=>e.jsxs("div",{className:"fit-content-container",children:[e.jsx(l,{icon:"none",size:"small",semantic:"informational",children:"Functional:"}),e.jsx(o,{...t})]})},r={args:{"data-density":"regular",children:e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[e.jsx(n,{children:"Test 1"}),e.jsx(n,{children:"Test 2"}),e.jsx(n,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]})},render:t=>e.jsxs("div",{className:"fit-content-container",children:[e.jsx(l,{icon:"none",size:"small",semantic:"informational",children:"(Default) Regular:"}),e.jsx(o,{...t})]})},i={args:{"data-density":"expressive",children:e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[e.jsx(n,{children:"Test 1"}),e.jsx(n,{children:"Test 2"}),e.jsx(n,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]})},render:t=>e.jsxs("div",{className:"fit-content-container",children:[e.jsx(l,{icon:"none",size:"small",semantic:"informational",children:"Expressive:"}),e.jsx(o,{...t})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Functional:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    (Default) Regular:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Expressive:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...i.parameters?.docs?.source}}};const P=["Functional","DefaultRegular","Expressive"];export{r as DefaultRegular,i as Expressive,s as Functional,P as __namedExportsOrder,u as default};
