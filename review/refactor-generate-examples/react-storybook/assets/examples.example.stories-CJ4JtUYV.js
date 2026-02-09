import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r,a as i,b as a}from"./tabs-ycKIAsJR.js";import{D as n}from"./tab-item-CDHNNIDd.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./button-CXbufVX4.js";import"./constants-BqjZCLvV.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBTabs/Examples",component:r,render:l=>e.jsx(r,{...l,children:l.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"text"},width:{control:"text"},alignment:{control:"text"},behavior:{control:"text"},initialSelectedIndex:{control:"text"},initialSelectedMode:{control:"text"}}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(n,{children:"Test 1"}),e.jsx(n,{children:"Test 2"}),e.jsx(n,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]}),initialSelectedIndex:1}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(n,{children:"Test 1"}),e.jsx(n,{children:"Test 2"}),e.jsx(n,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]}),initialSelectedMode:"manually"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><DBTabList>
            <DBTabItem>Test 1</DBTabItem>
            <DBTabItem>Test 2</DBTabItem>
            <DBTabItem>Test 3</DBTabItem>
          </DBTabList>
          <DBTabPanel>Tab Panel 1</DBTabPanel>
          <DBTabPanel>Tab Panel 2</DBTabPanel>
          <DBTabPanel>Tab Panel 3</DBTabPanel></>,
    "initialSelectedIndex": 1
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><DBTabList>
            <DBTabItem>Test 1</DBTabItem>
            <DBTabItem>Test 2</DBTabItem>
            <DBTabItem>Test 3</DBTabItem>
          </DBTabList>
          <DBTabPanel>Tab Panel 1</DBTabPanel>
          <DBTabPanel>Tab Panel 2</DBTabPanel>
          <DBTabPanel>Tab Panel 3</DBTabPanel></>,
    "initialSelectedMode": "manually"
  }
}`,...s.parameters?.docs?.source}}};const P=["SecondTestselected","nothingselected"];export{t as SecondTestselected,P as __namedExportsOrder,h as default,s as nothingselected};
