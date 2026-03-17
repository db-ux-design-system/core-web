import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as s,a}from"./tabs-DIExDTIa.js";import{D as c}from"./infotext-A6WPZZ3Y.js";import{a as m,D as t}from"./tab-list-BGvFD6G4.js";import"./index-D2E5Z_bU.js";import"./iframe-m6sI9Arv.js";import"./preload-helper--tLyh50B.js";import"./button-i9jA8ru0.js";import"./tooltip-CKflNb-s.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,j={title:"Components/DBTabs/Tab-Item-Width",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},tabItemWidth:{control:"select",options:["full","auto"]},tabItemAlignment:{control:"select",options:["start","center","end"]},behavior:{control:"select",options:["scrollbar","arrows"]},initialSelectedIndex:{control:"number"},initialSelectedMode:{control:"select",options:["auto","manually"]},name:{control:"text"},tabs:{control:"object"},arrowScrollDistance:{control:"number"},id:{control:"text"},autofocus:{control:"boolean"}}},l={args:{tabItemWidth:"auto",children:e.jsxs(e.Fragment,{children:[e.jsxs(m,{children:[e.jsx(t,{children:"Test 1"}),e.jsx(t,{children:"Test 2"}),e.jsx(t,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]})},render:n=>e.jsxs("div",{className:"fit-content-container",style:{width:"100%"},children:[e.jsx(c,{icon:"none",size:"small",semantic:"informational",children:"auto:"}),e.jsx(s,{...n})]})},r={args:{tabItemWidth:"full",children:e.jsxs(e.Fragment,{children:[e.jsxs(m,{children:[e.jsx(t,{children:"Test 1"}),e.jsx(t,{children:"Test 2"}),e.jsx(t,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]})},render:n=>e.jsxs("div",{className:"fit-content-container",style:{width:"100%"},children:[e.jsx(c,{icon:"none",size:"small",semantic:"informational",children:"full - alignment: start:"}),e.jsx(s,{...n})]})},i={args:{tabItemWidth:"full",tabItemAlignment:"center",children:e.jsxs(e.Fragment,{children:[e.jsxs(m,{children:[e.jsx(t,{children:"Test 1"}),e.jsx(t,{children:"Test 2"}),e.jsx(t,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]})},render:n=>e.jsxs("div",{className:"fit-content-container",style:{width:"100%"},children:[e.jsx(c,{icon:"none",size:"small",semantic:"informational",children:"full - alignment: center:"}),e.jsx(s,{...n})]})},o={args:{tabItemWidth:"full",tabItemAlignment:"end",children:e.jsxs(e.Fragment,{children:[e.jsxs(m,{children:[e.jsx(t,{children:"Test 1"}),e.jsx(t,{children:"Test 2"}),e.jsx(t,{children:"Test 3"})]}),e.jsx(a,{children:"Tab Panel 1"}),e.jsx(a,{children:"Tab Panel 2"}),e.jsx(a,{children:"Tab Panel 3"})]})},render:n=>e.jsxs("div",{className:"fit-content-container",style:{width:"100%"},children:[e.jsx(c,{icon:"none",size:"small",semantic:"informational",children:"full - alignment: end:"}),e.jsx(s,{...n})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "tabItemWidth": "auto",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '100%'
  }}><DBInfotext icon="none" size="small" semantic="informational">
                    auto:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "tabItemWidth": "full",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '100%'
  }}><DBInfotext icon="none" size="small" semantic="informational">
                    full - alignment: start:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "tabItemWidth": "full",
    "tabItemAlignment": "center",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '100%'
  }}><DBInfotext icon="none" size="small" semantic="informational">
                    full - alignment: center:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "tabItemWidth": "full",
    "tabItemAlignment": "end",
    "children": <><DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem><DBTabItem>Test 3</DBTabItem></DBTabList><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel><DBTabPanel>Tab Panel 3</DBTabPanel></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '100%'
  }}><DBInfotext icon="none" size="small" semantic="informational">
                    full - alignment: end:
                </DBInfotext><DBTabs {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const g=["auto","fullalignmentstart","fullalignmentcenter","fullalignmentend"];export{g as __namedExportsOrder,l as auto,j as default,i as fullalignmentcenter,o as fullalignmentend,r as fullalignmentstart};
