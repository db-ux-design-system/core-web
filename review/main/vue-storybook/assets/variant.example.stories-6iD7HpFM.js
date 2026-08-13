import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./accordion-item-CT4roJeO.js";import{n as r,t as i}from"./accordion-Ds2Dbsm-.js";import{n as a,t as o}from"./infotext-DBNPjSk_.js";var s,c,l,u,d;function f(){return(f=e((()=>{t(),a(),r(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBAccordion/Variant`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{variant:`divider`,default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:e=>({components:{DBAccordion:i,DBAccordionItem:n,DBInfotext:o},setup(){return{args:e}},template:`<div    ><DBInfotext size="small" semantic="informational" icon="none"   >
                    (Default) Divider
                </DBInfotext><DBAccordion v-bind="args"   >${e.default}</DBAccordion></div>`})},u={args:{variant:`card`,default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:e=>({components:{DBAccordion:i,DBAccordionItem:n,DBInfotext:o},setup(){return{args:e}},template:`<div    ><DBInfotext size="small" semantic="informational" icon="none"   >
                    Card
                </DBInfotext><DBAccordion v-bind="args"   >${e.default}</DBAccordion></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Divider`,`Card`]})))()}f();export{u as Card,l as Divider,d as __namedExportsOrder,c as default};