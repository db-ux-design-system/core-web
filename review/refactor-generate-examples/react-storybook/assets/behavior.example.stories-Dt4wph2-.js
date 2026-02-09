import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./accordion-of7eecmQ.js";import{D as n}from"./accordion-item-DLiO14lO.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,I={title:"Components/DBAccordion/Behavior",component:i,render:r=>e.jsx(i,{...r,children:r.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["multiple","single"]},variant:{control:"select",options:["divider","card"]},initOpenIndex:{control:"object"},name:{control:"text"},id:{control:"text"}}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{headlinePlain:"Item 1",children:"Content 1"}),e.jsx(n,{headlinePlain:"Item 2",children:"Content 2"}),e.jsx(n,{headlinePlain:"Item 3",children:"Content 3"})]}),behavior:"multiple"}},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{headlinePlain:"Item 1",children:"Content 1"}),e.jsx(n,{headlinePlain:"Item 2",children:"Content 2"}),e.jsx(n,{headlinePlain:"Item 3",children:"Content 3"})]}),behavior:"single"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><DBAccordionItem headlinePlain="Item 1">Content 1</DBAccordionItem>
          <DBAccordionItem headlinePlain="Item 2">Content 2</DBAccordionItem>
          <DBAccordionItem headlinePlain="Item 3">Content 3</DBAccordionItem></>,
    "behavior": "multiple"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><DBAccordionItem headlinePlain="Item 1">Content 1</DBAccordionItem>
          <DBAccordionItem headlinePlain="Item 2">Content 2</DBAccordionItem>
          <DBAccordionItem headlinePlain="Item 3">Content 3</DBAccordionItem></>,
    "behavior": "single"
  }
}`,...o.parameters?.docs?.source}}};const D=["Multiple","Single"];export{t as Multiple,o as Single,D as __namedExportsOrder,I as default};
