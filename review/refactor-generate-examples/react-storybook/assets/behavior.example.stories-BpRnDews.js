import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./accordion-CKIXfwj-.js";import{D as a}from"./infotext-CZi0xQss.js";import{D as n}from"./accordion-item-BeVn-J0G.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:I}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBAccordion/Behavior",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["multiple","single"]},variant:{control:"select",options:["divider","card"]},initOpenIndex:{control:"object"},items:{control:"object"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{behavior:"multiple",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{headlinePlain:"Item 1",children:"Content 1"}),e.jsx(n,{headlinePlain:"Item 2",children:"Content 2"}),e.jsx(n,{headlinePlain:"Item 3",children:"Content 3"})]})},render:i=>e.jsxs("div",{children:[e.jsx(a,{size:"small",semantic:"informational",icon:"none",children:"(Default) Multiple"}),e.jsx(r,{...i})]})},t={args:{behavior:"single",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{headlinePlain:"Item 1",children:"Content 1"}),e.jsx(n,{headlinePlain:"Item 2",children:"Content 2"}),e.jsx(n,{headlinePlain:"Item 3",children:"Content 3"})]})},render:i=>e.jsxs("div",{children:[e.jsx(a,{size:"small",semantic:"informational",icon:"none",children:"Single"}),e.jsx(r,{...i})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "multiple",
    "children": <><DBAccordionItem headlinePlain="Item 1">
                        Content 1
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 2">
                        Content 2
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 3">
                        Content 3
                    </DBAccordionItem></>
  },
  render: (properties: any) => <div><DBInfotext size="small" semantic="informational" icon="none">
                    (Default) Multiple
                </DBInfotext><DBAccordion {...properties} /></div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "single",
    "children": <><DBAccordionItem headlinePlain="Item 1">
                        Content 1
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 2">
                        Content 2
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 3">
                        Content 3
                    </DBAccordionItem></>
  },
  render: (properties: any) => <div><DBInfotext size="small" semantic="informational" icon="none">
                    Single
                </DBInfotext><DBAccordion {...properties} /></div>
}`,...t.parameters?.docs?.source}}};const x=["Multiple","Single"];export{o as Multiple,t as Single,x as __namedExportsOrder,D as default};
