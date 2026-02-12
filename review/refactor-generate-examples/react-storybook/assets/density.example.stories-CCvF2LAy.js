import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./accordion-CKIXfwj-.js";import{D as s}from"./infotext-CZi0xQss.js";import{D as e}from"./accordion-item-BeVn-J0G.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBAccordion/Density",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["multiple","single"]},variant:{control:"select",options:["divider","card"]},initOpenIndex:{control:"object"},items:{control:"object"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},i={args:{"data-density":"functional",children:n.jsxs(n.Fragment,{children:[n.jsx(e,{headlinePlain:"Item 1",children:"Content 1"}),n.jsx(e,{headlinePlain:"Item 2",children:"Content 2"}),n.jsx(e,{headlinePlain:"Item 3",children:"Content 3"})]})},render:t=>n.jsxs("div",{"data-density":"functional",children:[n.jsx(s,{size:"small",semantic:"informational",icon:"none",children:"Functional"}),n.jsx(a,{...t})]})},o={args:{"data-density":"regular",children:n.jsxs(n.Fragment,{children:[n.jsx(e,{headlinePlain:"Item 1",children:"Content 1"}),n.jsx(e,{headlinePlain:"Item 2",children:"Content 2"}),n.jsx(e,{headlinePlain:"Item 3",children:"Content 3"})]})},render:t=>n.jsxs("div",{"data-density":"regular",children:[n.jsx(s,{size:"small",semantic:"informational",icon:"none",children:"(Default) Regular"}),n.jsx(a,{...t})]})},r={args:{"data-density":"expressive",children:n.jsxs(n.Fragment,{children:[n.jsx(e,{headlinePlain:"Item 1",children:"Content 1"}),n.jsx(e,{headlinePlain:"Item 2",children:"Content 2"}),n.jsx(e,{headlinePlain:"Item 3",children:"Content 3"})]})},render:t=>n.jsxs("div",{"data-density":"expressive",children:[n.jsx(s,{size:"small",semantic:"informational",icon:"none",children:"Expressive"}),n.jsx(a,{...t})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": <><DBAccordionItem headlinePlain="Item 1">
                        Content 1
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 2">
                        Content 2
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 3">
                        Content 3
                    </DBAccordionItem></>
  },
  render: (properties: any) => <div data-density="functional"><DBInfotext size="small" semantic="informational" icon="none">
                    Functional
                </DBInfotext><DBAccordion {...properties} /></div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": <><DBAccordionItem headlinePlain="Item 1">
                        Content 1
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 2">
                        Content 2
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 3">
                        Content 3
                    </DBAccordionItem></>
  },
  render: (properties: any) => <div data-density="regular"><DBInfotext size="small" semantic="informational" icon="none">
                    (Default) Regular
                </DBInfotext><DBAccordion {...properties} /></div>
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": <><DBAccordionItem headlinePlain="Item 1">
                        Content 1
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 2">
                        Content 2
                    </DBAccordionItem><DBAccordionItem headlinePlain="Item 3">
                        Content 3
                    </DBAccordionItem></>
  },
  render: (properties: any) => <div data-density="expressive"><DBInfotext size="small" semantic="informational" icon="none">
                    Expressive
                </DBInfotext><DBAccordion {...properties} /></div>
}`,...r.parameters?.docs?.source}}};const u=["Functional","Regular","Expressive"];export{r as Expressive,i as Functional,o as Regular,u as __namedExportsOrder,D as default};
