import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./accordion-item-DG8z5E5M.js";import{n as r,t as i}from"./accordion-C0RJPg_o.js";import{n as a,t as o}from"./infotext-D_fAG29d.js";var s,c,l,u,d;function f(){return(f=e((()=>{t(),a(),r(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBAccordion/Behavior`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{behavior:`multiple`,default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:e=>({components:{DBAccordion:i,DBAccordionItem:n,DBInfotext:o},setup(){return{args:e}},template:`<div    ><DBInfotext size="small" semantic="informational" icon="none"   >
                    (Default) Multiple
                </DBInfotext><DBAccordion v-bind="args"   >${e.default}</DBAccordion></div>`})},u={args:{behavior:`single`,default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:e=>({components:{DBAccordion:i,DBAccordionItem:n,DBInfotext:o},setup(){return{args:e}},template:`<div    ><DBInfotext size="small" semantic="informational" icon="none"   >
                    Single
                </DBInfotext><DBAccordion v-bind="args"   >${e.default}</DBAccordion></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "multiple",
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
                    (Default) Multiple
                </DBInfotext><DBAccordion v-bind="args"   >\${args.default}</DBAccordion></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "single",
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
                    Single
                </DBInfotext><DBAccordion v-bind="args"   >\${args.default}</DBAccordion></div>\`
  })
}`,...u.parameters?.docs?.source}}},d=[`Multiple`,`Single`]})))()}f();export{l as Multiple,u as Single,d as __namedExportsOrder,c as default};