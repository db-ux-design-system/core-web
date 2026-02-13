import{_ as i}from"./accordion-f_H1Y4WT.js";import{_ as c}from"./infotext-CEHQ5DTk.js";import{_ as r}from"./accordion-item-C23t1eQf.js";import"./iframe-Bmf1EjZo.js";import"./preload-helper-_n2GBM2K.js";import"./index-nMDAkmV1.js";const{fn:B}=__STORYBOOK_MODULE_TEST__,I={title:"Components/DBAccordion/Density",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["multiple","single"]},variant:{control:"select",options:["divider","card"]},initOpenIndex:{control:"object"},items:{control:"object"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:n=>({components:{DBAccordion:i,DBAccordionItem:r,DBInfotext:c},setup(){return{args:n}},template:`<div data-density="functional"   ><DBInfotext size="small" semantic="informational" icon="none"   >
                    Functional
                </DBInfotext><DBAccordion v-bind="args"   >${n.default}</DBAccordion></div>`})},o={args:{default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:n=>({components:{DBAccordion:i,DBAccordionItem:r,DBInfotext:c},setup(){return{args:n}},template:`<div data-density="regular"   ><DBInfotext size="small" semantic="informational" icon="none"   >
                    (Default) Regular
                </DBInfotext><DBAccordion v-bind="args"   >${n.default}</DBAccordion></div>`})},t={args:{default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:n=>({components:{DBAccordion:i,DBAccordionItem:r,DBInfotext:c},setup(){return{args:n}},template:`<div data-density="expressive"   ><DBInfotext size="small" semantic="informational" icon="none"   >
                    Expressive
                </DBInfotext><DBAccordion v-bind="args"   >${n.default}</DBAccordion></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
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
}`,...t.parameters?.docs?.source}}};const A=["Functional","Regular","Expressive"];export{t as Expressive,e as Functional,o as Regular,A as __namedExportsOrder,I as default};
