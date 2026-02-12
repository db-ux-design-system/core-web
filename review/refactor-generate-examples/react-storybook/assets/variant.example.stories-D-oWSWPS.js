import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./accordion-CKIXfwj-.js";import{D as a}from"./infotext-CZi0xQss.js";import{D as e}from"./accordion-item-BeVn-J0G.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:I}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBAccordion/Variant",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["multiple","single"]},variant:{control:"select",options:["divider","card"]},initOpenIndex:{control:"object"},items:{control:"object"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{variant:"divider",children:n.jsxs(n.Fragment,{children:[n.jsx(e,{headlinePlain:"Item 1",children:"Content 1"}),n.jsx(e,{headlinePlain:"Item 2",children:"Content 2"}),n.jsx(e,{headlinePlain:"Item 3",children:"Content 3"})]})},render:r=>n.jsxs("div",{children:[n.jsx(a,{size:"small",semantic:"informational",icon:"none",children:"(Default) Divider"}),n.jsx(i,{...r})]})},o={args:{variant:"card",children:n.jsxs(n.Fragment,{children:[n.jsx(e,{headlinePlain:"Item 1",children:"Content 1"}),n.jsx(e,{headlinePlain:"Item 2",children:"Content 2"}),n.jsx(e,{headlinePlain:"Item 3",children:"Content 3"})]})},render:r=>n.jsxs("div",{children:[n.jsx(a,{size:"small",semantic:"informational",icon:"none",children:"Card"}),n.jsx(i,{...r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "divider",
    "children": <><DBAccordionItem headlinePlain="Item 1">
                        Content 1
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 2">
                        Content 2
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 3">
                        Content 3
                    </DBAccordionItem></>
  },
  render: (properties: any) => <div><DBInfotext size="small" semantic="informational" icon="none">
                    (Default) Divider
                </DBInfotext><DBAccordion {...properties} /></div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "card",
    "children": <><DBAccordionItem headlinePlain="Item 1">
                        Content 1
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 2">
                        Content 2
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 3">
                        Content 3
                    </DBAccordionItem></>
  },
  render: (properties: any) => <div><DBInfotext size="small" semantic="informational" icon="none">
                    Card
                </DBInfotext><DBAccordion {...properties} /></div>
}`,...o.parameters?.docs?.source}}};const x=["Divider","Card"];export{o as Card,t as Divider,x as __namedExportsOrder,h as default};
