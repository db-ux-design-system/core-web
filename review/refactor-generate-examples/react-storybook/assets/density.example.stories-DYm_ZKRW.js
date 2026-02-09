import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./accordion-of7eecmQ.js";import{D as n}from"./accordion-item-DLiO14lO.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBAccordion/Density",component:a,render:i=>e.jsx(a,{...i,children:i.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["multiple","single"]},variant:{control:"select",options:["divider","card"]},initOpenIndex:{control:"object"},name:{control:"text"},id:{control:"text"}}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{headlinePlain:"Item 1",children:"Content 1"}),e.jsx(n,{headlinePlain:"Item 2",children:"Content 2"}),e.jsx(n,{headlinePlain:"Item 3",children:"Content 3"})]}),"data-density":"functional"}},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{headlinePlain:"Item 1",children:"Content 1"}),e.jsx(n,{headlinePlain:"Item 2",children:"Content 2"}),e.jsx(n,{headlinePlain:"Item 3",children:"Content 3"})]}),"data-density":"regular"}},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{headlinePlain:"Item 1",children:"Content 1"}),e.jsx(n,{headlinePlain:"Item 2",children:"Content 2"}),e.jsx(n,{headlinePlain:"Item 3",children:"Content 3"})]}),"data-density":"expressive"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><DBAccordionItem headlinePlain="Item 1">Content 1</DBAccordionItem>
          <DBAccordionItem headlinePlain="Item 2">Content 2</DBAccordionItem>
          <DBAccordionItem headlinePlain="Item 3">Content 3</DBAccordionItem></>,
    "data-density": "functional"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><DBAccordionItem headlinePlain="Item 1">Content 1</DBAccordionItem>
          <DBAccordionItem headlinePlain="Item 2">Content 2</DBAccordionItem>
          <DBAccordionItem headlinePlain="Item 3">Content 3</DBAccordionItem></>,
    "data-density": "regular"
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><DBAccordionItem headlinePlain="Item 1">Content 1</DBAccordionItem>
          <DBAccordionItem headlinePlain="Item 2">Content 2</DBAccordionItem>
          <DBAccordionItem headlinePlain="Item 3">Content 3</DBAccordionItem></>,
    "data-density": "expressive"
  }
}`,...r.parameters?.docs?.source}}};const x=["Functional","Regular","Expressive"];export{r as Expressive,t as Functional,o as Regular,x as __namedExportsOrder,D as default};
