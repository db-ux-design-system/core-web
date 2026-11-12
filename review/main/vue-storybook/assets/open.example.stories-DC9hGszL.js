import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./accordion-item-B3WW3uow.js";var i=t({DefaultFalse:()=>s,True:()=>c,__namedExportsOrder:()=>l,default:()=>o}),a,o,s,c,l;function u(){return(u=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBAccordionItem/Open`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{headlinePlain:{control:`text`},disabled:{control:`boolean`},defaultOpen:{control:`boolean`},text:{control:`text`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{headlinePlain:`(Default) False`,defaultOpen:!1,default:`(Default) False`},render:e=>({components:{DBAccordionItem:r},setup(){return{args:e}},template:`<div    ><DBAccordionItem v-bind="args"   >${e.default}</DBAccordionItem></div>`})},c={args:{headlinePlain:`True`,defaultOpen:!0,default:`True`},render:e=>({components:{DBAccordionItem:r},setup(){return{args:e}},template:`<div    ><DBAccordionItem v-bind="args"   >${e.default}</DBAccordionItem></div>`})},l=[`DefaultFalse`,`True`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "headlinePlain": "(Default) False",
    "defaultOpen": false,
    "default": \`(Default) False\`
  },
  render: (args: any) => ({
    components: {
      DBAccordionItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBAccordionItem v-bind="args"   >\${args.default}</DBAccordionItem></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "headlinePlain": "True",
    "defaultOpen": true,
    "default": \`True\`
  },
  render: (args: any) => ({
    components: {
      DBAccordionItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBAccordionItem v-bind="args"   >\${args.default}</DBAccordionItem></div>\`
  })
}`,...c.parameters?.docs?.source}}}})))()}export{i,c as n,u as r,s as t};