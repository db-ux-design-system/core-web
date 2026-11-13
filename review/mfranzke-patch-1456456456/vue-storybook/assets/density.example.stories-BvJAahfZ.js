import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./accordion-item-BXFW7KCg.js";var i=t({DefaultRegular:()=>c,Expressive:()=>l,Functional:()=>s,__namedExportsOrder:()=>u,default:()=>o}),a,o,s,c,l,u;function d(){return(d=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBAccordionItem/Density`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{headlinePlain:{control:`text`},disabled:{control:`boolean`},defaultOpen:{control:`boolean`},text:{control:`text`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{"data-density":`functional`,headlinePlain:`Functional`,default:`Functional`},render:e=>({components:{DBAccordionItem:r},setup(){return{args:e}},template:`<div    ><DBAccordionItem v-bind="args"   >${e.default}</DBAccordionItem></div>`})},c={args:{"data-density":`regular`,headlinePlain:`(Default) Regular`,default:`(Default) Regular`},render:e=>({components:{DBAccordionItem:r},setup(){return{args:e}},template:`<div    ><DBAccordionItem v-bind="args"   >${e.default}</DBAccordionItem></div>`})},l={args:{"data-density":`expressive`,headlinePlain:`Expressive`,default:`Expressive`},render:e=>({components:{DBAccordionItem:r},setup(){return{args:e}},template:`<div    ><DBAccordionItem v-bind="args"   >${e.default}</DBAccordionItem></div>`})},u=[`Functional`,`DefaultRegular`,`Expressive`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}}})))()}export{d as a,i,l as n,s as r,c as t};