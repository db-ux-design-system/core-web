import{n as e}from"./chunk-DnJy8xQt.js";import{N as t,t as n}from"./src-IA1wsRkd.js";var r,i,a,o,s;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBAccordionItem/Disabled`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{headlinePlain:{control:`text`},disabled:{control:`boolean`},defaultOpen:{control:`boolean`},text:{control:`text`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{headlinePlain:`(Default) False`,disabled:!1,default:`(Default) False`},render:e=>({components:{DBAccordionItem:t},setup(){return{args:e}},template:`<div    ><DBAccordionItem v-bind="args"   >${e.default}</DBAccordionItem></div>`})},o={args:{headlinePlain:`True`,disabled:!0,default:`True`},render:e=>({components:{DBAccordionItem:t},setup(){return{args:e}},template:`<div    ><DBAccordionItem v-bind="args"   >${e.default}</DBAccordionItem></div>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "headlinePlain": "(Default) False",
    "disabled": false,
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "headlinePlain": "True",
    "disabled": true,
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
}`,...o.parameters?.docs?.source}}},s=[`DefaultFalse`,`True`]}))();export{a as DefaultFalse,o as True,s as __namedExportsOrder,i as default};