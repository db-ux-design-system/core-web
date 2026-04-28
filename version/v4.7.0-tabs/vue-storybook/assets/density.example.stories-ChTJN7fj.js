import{n as e}from"./chunk-DnJy8xQt.js";import{N as t,t as n}from"./src-CttduW8a.js";var r,i,a,o,s,c;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBAccordionItem/Density`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{headlinePlain:{control:`text`},disabled:{control:`boolean`},defaultOpen:{control:`boolean`},text:{control:`text`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{"data-density":`functional`,headlinePlain:`Functional`,default:`Functional`},render:e=>({components:{DBAccordionItem:t},setup(){return{args:e}},template:`<div    ><DBAccordionItem v-bind="args"   >${e.default}</DBAccordionItem></div>`})},o={args:{"data-density":`regular`,headlinePlain:`(Default) Regular`,default:`(Default) Regular`},render:e=>({components:{DBAccordionItem:t},setup(){return{args:e}},template:`<div    ><DBAccordionItem v-bind="args"   >${e.default}</DBAccordionItem></div>`})},s={args:{"data-density":`expressive`,headlinePlain:`Expressive`,default:`Expressive`},render:e=>({components:{DBAccordionItem:t},setup(){return{args:e}},template:`<div    ><DBAccordionItem v-bind="args"   >${e.default}</DBAccordionItem></div>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "headlinePlain": "Functional",
    "default": \`Functional\`
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
    "data-density": "regular",
    "headlinePlain": "(Default) Regular",
    "default": \`(Default) Regular\`
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "headlinePlain": "Expressive",
    "default": \`Expressive\`
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
}`,...s.parameters?.docs?.source}}},c=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{o as DefaultRegular,s as Expressive,a as Functional,c as __namedExportsOrder,i as default};