import{_ as r}from"./infotext-Dw2rTK43.js";import{_ as i}from"./accordion-item-BR2BcJso.js";import{_ as t}from"./accordion-Bw19YHg0.js";import"./iframe-CD_z5reS.js";import"./preload-helper-B08UjP0c.js";import"./index-BSAZCWsy.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,B={title:"Components/DBAccordion/Variant",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["multiple","single"]},variant:{control:"select",options:["divider","card"]},initOpenIndex:{control:"object"},items:{control:"object"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{variant:"divider",default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:n=>({components:{DBAccordion:t,DBAccordionItem:i,DBInfotext:r},setup(){return{args:n}},template:`<div    ><DBInfotext size="small" semantic="informational" icon="none"   >
                    (Default) Divider
                </DBInfotext><DBAccordion v-bind="args"   >${n.default}</DBAccordion></div>`})},o={args:{variant:"card",default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:n=>({components:{DBAccordion:t,DBAccordionItem:i,DBInfotext:r},setup(){return{args:n}},template:`<div    ><DBInfotext size="small" semantic="informational" icon="none"   >
                    Card
                </DBInfotext><DBAccordion v-bind="args"   >${n.default}</DBAccordion></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "divider",
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
    template: \`<div    ><DBInfotext size="small" semantic="informational" icon="none"   >
                    (Default) Divider
                </DBInfotext><DBAccordion v-bind="args"   >\${args.default}</DBAccordion></div>\`
  })
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "card",
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
    template: \`<div    ><DBInfotext size="small" semantic="informational" icon="none"   >
                    Card
                </DBInfotext><DBAccordion v-bind="args"   >\${args.default}</DBAccordion></div>\`
  })
}`,...o.parameters?.docs?.source}}};const I=["Divider","Card"];export{o as Card,e as Divider,I as __namedExportsOrder,B as default};
