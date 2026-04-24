import{n as e}from"./chunk-DnJy8xQt.js";import{D as t,M as n,N as r,t as i}from"./src-C6Gn60iG.js";var a,o,s,c,l;e((()=>{i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBAccordion/Behavior`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{behavior:`multiple`,default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:e=>({components:{DBAccordion:n,DBAccordionItem:r,DBInfotext:t},setup(){return{args:e}},template:`<div    ><DBInfotext size="small" semantic="informational" icon="none"   >
                    (Default) Multiple
                </DBInfotext><DBAccordion v-bind="args"   >${e.default}</DBAccordion></div>`})},c={args:{behavior:`single`,default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:e=>({components:{DBAccordion:n,DBAccordionItem:r,DBInfotext:t},setup(){return{args:e}},template:`<div    ><DBInfotext size="small" semantic="informational" icon="none"   >
                    Single
                </DBInfotext><DBAccordion v-bind="args"   >${e.default}</DBAccordion></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`Multiple`,`Single`]}))();export{s as Multiple,c as Single,l as __namedExportsOrder,o as default};