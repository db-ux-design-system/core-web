import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./accordion-item-DcWDgFkg.js";import{n as i,t as a}from"./accordion-Do-XAkyH.js";import{n as o,t as s}from"./infotext-DOaQcH6Y.js";var c=t({Multiple:()=>d,Single:()=>f,__namedExportsOrder:()=>p,default:()=>u}),l,u,d,f,p;function m(){return(m=e((()=>{n(),o(),i(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBAccordion/Behavior`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{behavior:`multiple`,default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:e=>({components:{DBAccordion:a,DBAccordionItem:r,DBInfotext:s},setup(){return{args:e}},template:`<div    ><DBInfotext size="small" semantic="informational" icon="none"   >
                    (Default) Multiple
                </DBInfotext><DBAccordion v-bind="args"   >${e.default}</DBAccordion></div>`})},f={args:{behavior:`single`,default:`<DBAccordionItem headlinePlain="Item 1"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 2"> Content 2 </DBAccordionItem
><DBAccordionItem headlinePlain="Item 3"> Content 3 </DBAccordionItem>`},render:e=>({components:{DBAccordion:a,DBAccordionItem:r,DBInfotext:s},setup(){return{args:e}},template:`<div    ><DBInfotext size="small" semantic="informational" icon="none"   >
                    Single
                </DBInfotext><DBAccordion v-bind="args"   >${e.default}</DBAccordion></div>`})},p=[`Multiple`,`Single`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}}})))()}export{m as i,f as n,c as r,d as t};