import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o,a as T,b as a}from"./tabs-ycKIAsJR.js";import{D as t}from"./tab-item-CDHNNIDd.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./button-CXbufVX4.js";import"./constants-BqjZCLvV.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,P={title:"Components/DBTabs/Overflow",component:o,render:r=>e.jsx(o,{...r,children:r.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"text"},width:{control:"text"},alignment:{control:"text"},behavior:{control:"text"},initialSelectedIndex:{control:"text"},initialSelectedMode:{control:"text"}}},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(T,{children:[e.jsx(t,{children:"Test 1"}),e.jsx(t,{children:"Test 2"}),e.jsx(t,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]}),width:"auto"},decorators:[r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{})})]},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(T,{children:[e.jsx(t,{children:"Test 1"}),e.jsx(t,{children:"Test 2"}),e.jsx(t,{children:"Test 3"}),e.jsx(t,{children:"Test 4"}),e.jsx(t,{children:"Test 5"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"}),e.jsx(a,{children:"Tab Panel 4"}),e.jsx(a,{children:"Tab Panel 5"})]}),behavior:"arrows"},decorators:[r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{})})]},l={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(T,{children:[e.jsx(t,{children:"Test 1"}),e.jsx(t,{children:"Test 2"}),e.jsx(t,{children:"Test 3"}),e.jsx(t,{children:"Test 4"}),e.jsx(t,{children:"Test 5"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"}),e.jsx(a,{children:"Tab Panel 4"}),e.jsx(a,{children:"Tab Panel 5"})]})},decorators:[r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{})})]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><DBTabList>
            <DBTabItem>Test 1</DBTabItem>
            <DBTabItem>Test 2</DBTabItem>
            <DBTabItem>Test 3</DBTabItem>
          </DBTabList>
          <DBTabPanel>Tab Panel 1</DBTabPanel>
          <DBTabPanel>Tab Panel 2</DBTabPanel>
          <DBTabPanel>Tab Panel 3</DBTabPanel></>,
    "width": "auto"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><DBTabList>
            <DBTabItem>Test 1</DBTabItem>
            <DBTabItem>Test 2</DBTabItem>
            <DBTabItem>Test 3</DBTabItem>
            <DBTabItem>Test 4</DBTabItem>
            <DBTabItem>Test 5</DBTabItem>
          </DBTabList>
          <DBTabPanel>Tab Panel 1</DBTabPanel>
          <DBTabPanel>Tab Panel 2</DBTabPanel>
          <DBTabPanel>Tab Panel 3</DBTabPanel>
          <DBTabPanel>Tab Panel 4</DBTabPanel>
          <DBTabPanel>Tab Panel 5</DBTabPanel></>,
    "behavior": "arrows"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><DBTabList>
            <DBTabItem>Test 1</DBTabItem>
            <DBTabItem>Test 2</DBTabItem>
            <DBTabItem>Test 3</DBTabItem>
            <DBTabItem>Test 4</DBTabItem>
            <DBTabItem>Test 5</DBTabItem>
          </DBTabList>
          <DBTabPanel>Tab Panel 1</DBTabPanel>
          <DBTabPanel>Tab Panel 2</DBTabPanel>
          <DBTabPanel>Tab Panel 3</DBTabPanel>
          <DBTabPanel>Tab Panel 4</DBTabPanel>
          <DBTabPanel>Tab Panel 5</DBTabPanel></>
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};const j=["nooverflow","withoverflowbehaviorarrows","withoverflowbehaviorscrollbar"];export{j as __namedExportsOrder,P as default,n as nooverflow,s as withoverflowbehaviorarrows,l as withoverflowbehaviorscrollbar};
