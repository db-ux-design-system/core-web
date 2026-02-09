import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o,a as l,b as a}from"./tabs-ycKIAsJR.js";import{D as n}from"./tab-item-CDHNNIDd.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./button-CXbufVX4.js";import"./constants-BqjZCLvV.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBTabs/Orientation",component:o,render:s=>e.jsx(o,{...s,children:s.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"text"},width:{control:"text"},alignment:{control:"text"},behavior:{control:"text"},initialSelectedIndex:{control:"text"},initialSelectedMode:{control:"text"}}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(n,{children:"Test 1"}),e.jsx(n,{children:"Test 2"}),e.jsx(n,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]}),orientation:"horizontal"}},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(l,{children:[e.jsx(n,{children:"Test 1"}),e.jsx(n,{children:"Test 2"}),e.jsx(n,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]}),orientation:"vertical"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><DBTabList>
            <DBTabItem>Test 1</DBTabItem>
            <DBTabItem>Test 2</DBTabItem>
            <DBTabItem>Test 3</DBTabItem>
          </DBTabList>
          <DBTabPanel>Tab Panel 1</DBTabPanel>
          <DBTabPanel>Tab Panel 2</DBTabPanel>
          <DBTabPanel>Tab Panel 3</DBTabPanel></>,
    "orientation": "horizontal"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><DBTabList>
            <DBTabItem>Test 1</DBTabItem>
            <DBTabItem>Test 2</DBTabItem>
            <DBTabItem>Test 3</DBTabItem>
          </DBTabList>
          <DBTabPanel>Tab Panel 1</DBTabPanel>
          <DBTabPanel>Tab Panel 2</DBTabPanel>
          <DBTabPanel>Tab Panel 3</DBTabPanel></>,
    "orientation": "vertical"
  }
}`,...r.parameters?.docs?.source}}};const P=["horizontal","vertical"];export{P as __namedExportsOrder,x as default,t as horizontal,r as vertical};
