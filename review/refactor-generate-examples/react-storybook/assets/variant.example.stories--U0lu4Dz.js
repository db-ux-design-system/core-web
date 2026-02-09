import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./accordion-of7eecmQ.js";import{D as n}from"./accordion-item-DLiO14lO.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";const{fn:I}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBAccordion/Variant",component:i,render:o=>e.jsx(i,{...o,children:o.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["multiple","single"]},variant:{control:"select",options:["divider","card"]},initOpenIndex:{control:"object"},name:{control:"text"},id:{control:"text"}}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{headlinePlain:"Item 1",children:"Content 1"}),e.jsx(n,{headlinePlain:"Item 2",children:"Content 2"}),e.jsx(n,{headlinePlain:"Item 3",children:"Content 3"})]}),variant:"divider"}},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{headlinePlain:"Item 1",children:"Content 1"}),e.jsx(n,{headlinePlain:"Item 2",children:"Content 2"}),e.jsx(n,{headlinePlain:"Item 3",children:"Content 3"})]}),variant:"card"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><DBAccordionItem headlinePlain="Item 1">Content 1</DBAccordionItem>
          <DBAccordionItem headlinePlain="Item 2">Content 2</DBAccordionItem>
          <DBAccordionItem headlinePlain="Item 3">Content 3</DBAccordionItem></>,
    "variant": "divider"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><DBAccordionItem headlinePlain="Item 1">Content 1</DBAccordionItem>
          <DBAccordionItem headlinePlain="Item 2">Content 2</DBAccordionItem>
          <DBAccordionItem headlinePlain="Item 3">Content 3</DBAccordionItem></>,
    "variant": "card"
  }
}`,...r.parameters?.docs?.source}}};const D=["Divider","Card"];export{r as Card,t as Divider,D as __namedExportsOrder,p as default};
