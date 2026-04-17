import{n as e}from"./chunk-BneVvdWh.js";import{D as t,M as n,N as r,t as i}from"./src-D8ePn3Ki.js";var a,o,s,c,l,u;e((()=>{i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBAccordion/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:e=>({components:{DBAccordion:n,DBAccordionItem:r,DBInfotext:t},setup(){return{args:e}},template:`<div data-density="functional"   ><DBInfotext size="small" semantic="informational" icon="none"   >
                    Functional
                </DBInfotext><DBAccordion v-bind="args"   >${e.default}</DBAccordion></div>`})},c={args:{default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:e=>({components:{DBAccordion:n,DBAccordionItem:r,DBInfotext:t},setup(){return{args:e}},template:`<div data-density="regular"   ><DBInfotext size="small" semantic="informational" icon="none"   >
                    (Default) Regular
                </DBInfotext><DBAccordion v-bind="args"   >${e.default}</DBAccordion></div>`})},l={args:{default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:e=>({components:{DBAccordion:n,DBAccordionItem:r,DBInfotext:t},setup(){return{args:e}},template:`<div data-density="expressive"   ><DBInfotext size="small" semantic="informational" icon="none"   >
                    Expressive
                </DBInfotext><DBAccordion v-bind="args"   >${e.default}</DBAccordion></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Functional`,`Regular`,`Expressive`]}))();export{l as Expressive,s as Functional,c as Regular,u as __namedExportsOrder,o as default};