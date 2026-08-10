import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./accordion-item-B6aVC967.js";import{n as r,t as i}from"./accordion-_Yz2wDik.js";import{n as a,t as o}from"./infotext-q00OqznQ.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{t(),a(),r(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBAccordion/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:e=>({components:{DBAccordion:i,DBAccordionItem:n,DBInfotext:o},setup(){return{args:e}},template:`<div data-density="functional"   ><DBInfotext size="small" semantic="informational" icon="none"   >
                    Functional
                </DBInfotext><DBAccordion v-bind="args"   >${e.default}</DBAccordion></div>`})},u={args:{default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:e=>({components:{DBAccordion:i,DBAccordionItem:n,DBInfotext:o},setup(){return{args:e}},template:`<div data-density="regular"   ><DBInfotext size="small" semantic="informational" icon="none"   >
                    (Default) Regular
                </DBInfotext><DBAccordion v-bind="args"   >${e.default}</DBAccordion></div>`})},d={args:{default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:e=>({components:{DBAccordion:i,DBAccordionItem:n,DBInfotext:o},setup(){return{args:e}},template:`<div data-density="expressive"   ><DBInfotext size="small" semantic="informational" icon="none"   >
                    Expressive
                </DBInfotext><DBAccordion v-bind="args"   >${e.default}</DBAccordion></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Functional`,`Regular`,`Expressive`]})))()}p();export{d as Expressive,l as Functional,u as Regular,f as __namedExportsOrder,c as default};