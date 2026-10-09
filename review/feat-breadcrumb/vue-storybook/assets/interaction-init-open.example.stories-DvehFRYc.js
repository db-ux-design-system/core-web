import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./accordion-item-Ch0N8VZi.js";import{n as r,t as i}from"./accordion-DwtJJAbw.js";var a,o,s,c;function l(){return(l=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBAccordion/Interaction Init Open`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{initOpenIndex:[1,2],default:`<DBAccordionItem headlinePlain="Test"> Content 1 </DBAccordionItem
><DBAccordionItem headlinePlain="Test 2"
  ><span data-testid="item2">Test2</span></DBAccordionItem
><DBAccordionItem headlinePlain="Test 3"
  ><span data-testid="item3">Test3</span></DBAccordionItem
>`},render:e=>({components:{DBAccordion:i,DBAccordionItem:n},setup(){return{args:e}},template:`<DBAccordion v-bind="args"   >${e.default}</DBAccordion>`})},c=[`InitOpen`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as InitOpen,c as __namedExportsOrder,o as default};