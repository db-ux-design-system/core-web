import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as T,a as i,b as a}from"./tabs-ycKIAsJR.js";import{D as t}from"./tab-item-CDHNNIDd.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./button-CXbufVX4.js";import"./constants-BqjZCLvV.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,P={title:"Components/DBTabs/Width",component:T,render:r=>e.jsx(T,{...r,children:r.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"text"},width:{control:"text"},alignment:{control:"text"},behavior:{control:"text"},initialSelectedIndex:{control:"text"},initialSelectedMode:{control:"text"}}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(t,{children:"Test 1"}),e.jsx(t,{children:"Test 2"}),e.jsx(t,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]}),width:"auto"},decorators:[r=>e.jsx("div",{style:{width:"100%"},children:e.jsx(r,{})})]},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(t,{children:"Test 1"}),e.jsx(t,{children:"Test 2"}),e.jsx(t,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]}),width:"full"},decorators:[r=>e.jsx("div",{style:{width:"100%"},children:e.jsx(r,{})})]},l={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(t,{children:"Test 1"}),e.jsx(t,{children:"Test 2"}),e.jsx(t,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]}),width:"full",alignment:"center"},decorators:[r=>e.jsx("div",{style:{width:"100%"},children:e.jsx(r,{})})]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    width: '100%'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><DBTabList>
            <DBTabItem>Test 1</DBTabItem>
            <DBTabItem>Test 2</DBTabItem>
            <DBTabItem>Test 3</DBTabItem>
          </DBTabList>
          <DBTabPanel>Tab Panel 1</DBTabPanel>
          <DBTabPanel>Tab Panel 2</DBTabPanel>
          <DBTabPanel>Tab Panel 3</DBTabPanel></>,
    "width": "full"
  },
  decorators: [Story => <div style={{
    width: '100%'
  }}>
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><DBTabList>
            <DBTabItem>Test 1</DBTabItem>
            <DBTabItem>Test 2</DBTabItem>
            <DBTabItem>Test 3</DBTabItem>
          </DBTabList>
          <DBTabPanel>Tab Panel 1</DBTabPanel>
          <DBTabPanel>Tab Panel 2</DBTabPanel>
          <DBTabPanel>Tab Panel 3</DBTabPanel></>,
    "width": "full",
    "alignment": "center"
  },
  decorators: [Story => <div style={{
    width: '100%'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};const j=["auto","fullalignmentstart","fullalignmentcenter"];export{j as __namedExportsOrder,s as auto,P as default,l as fullalignmentcenter,n as fullalignmentstart};
