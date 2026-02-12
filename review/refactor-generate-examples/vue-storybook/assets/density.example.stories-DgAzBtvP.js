import{_ as i}from"./accordion-D-mtIuyB.js";import{_ as r}from"./infotext-tCTmoIyB.js";import{_ as a}from"./accordion-item-BPPJnE69.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:B}=__STORYBOOK_MODULE_TEST__,I={title:"Components/DBAccordion/Density",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["multiple","single"]},variant:{control:"select",options:["divider","card"]},initOpenIndex:{control:"object"},items:{control:"object"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{"data-density":"functional",default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:n=>({components:{DBAccordion:i,DBAccordionItem:a,DBInfotext:r},setup(){return{args:n}},template:`<div data-density="functional"   ><DBInfotext size="small" semantic="informational" icon="none"   >
                    Functional
                </DBInfotext><DBAccordion v-bind="args"   >${n.default}</DBAccordion></div>`})},t={args:{"data-density":"regular",default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:n=>({components:{DBAccordion:i,DBAccordionItem:a,DBInfotext:r},setup(){return{args:n}},template:`<div data-density="regular"   ><DBInfotext size="small" semantic="informational" icon="none"   >
                    (Default) Regular
                </DBInfotext><DBAccordion v-bind="args"   >${n.default}</DBAccordion></div>`})},o={args:{"data-density":"expressive",default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:n=>({components:{DBAccordion:i,DBAccordionItem:a,DBInfotext:r},setup(){return{args:n}},template:`<div data-density="expressive"   ><DBInfotext size="small" semantic="informational" icon="none"   >
                    Expressive
                </DBInfotext><DBAccordion v-bind="args"   >${n.default}</DBAccordion></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "default": \`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>\`
  },
  render: (args: any) => ({
    components: {
      DBAccordion,
      DBAccordionItem,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="functional"   ><DBInfotext size="small" semantic="informational" icon="none"   >
                    Functional
                </DBInfotext><DBAccordion v-bind="args"   >\${args.default}</DBAccordion></div>\`
  })
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "default": \`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>\`
  },
  render: (args: any) => ({
    components: {
      DBAccordion,
      DBAccordionItem,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="regular"   ><DBInfotext size="small" semantic="informational" icon="none"   >
                    (Default) Regular
                </DBInfotext><DBAccordion v-bind="args"   >\${args.default}</DBAccordion></div>\`
  })
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "default": \`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>\`
  },
  render: (args: any) => ({
    components: {
      DBAccordion,
      DBAccordionItem,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="expressive"   ><DBInfotext size="small" semantic="informational" icon="none"   >
                    Expressive
                </DBInfotext><DBAccordion v-bind="args"   >\${args.default}</DBAccordion></div>\`
  })
}`,...o.parameters?.docs?.source}}};const A=["Functional","Regular","Expressive"];export{o as Expressive,e as Functional,t as Regular,A as __namedExportsOrder,I as default};
