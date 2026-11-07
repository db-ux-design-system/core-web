import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./accordion-item-Dd8ynUr1.js";import{n as i,t as a}from"./accordion-DQG0NkM-.js";var o=t({InitOpen:()=>l,__namedExportsOrder:()=>u,default:()=>c}),s,c,l,u;function d(){return(d=e((()=>{n(),i(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBAccordion/Interaction Init Open`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{initOpenIndex:[1,2],default:`<DBAccordionItem headlinePlain="Test"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Test 2"
  ><span data-testid="item2">Test2</span></DBAccordionItem
><DBAccordionItem headlinePlain="Test 3"
  ><span data-testid="item3">Test3</span></DBAccordionItem
>`},render:e=>({components:{DBAccordion:a,DBAccordionItem:r},setup(){return{args:e}},template:`<DBAccordion v-bind="args"   >${e.default}</DBAccordion>`})},u=[`InitOpen`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "initOpenIndex": [1, 2],
    "default": \`<DBAccordionItem headlinePlain="Test"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Test 2"
  ><span data-testid="item2">Test2</span></DBAccordionItem
><DBAccordionItem headlinePlain="Test 3"
  ><span data-testid="item3">Test3</span></DBAccordionItem
>\`
  },
  render: (args: any) => ({
    components: {
      DBAccordion,
      DBAccordionItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBAccordion v-bind="args"   >\${args.default}</DBAccordion>\`
  })
}`,...l.parameters?.docs?.source}}}})))()}export{d as n,o as r,l as t};