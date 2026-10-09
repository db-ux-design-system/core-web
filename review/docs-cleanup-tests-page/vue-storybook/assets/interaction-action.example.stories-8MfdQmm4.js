import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./accordion-item-0-AlMBVI.js";import{n as r,t as i}from"./accordion-CllQQ2_G.js";import{n as a,t as o}from"./button-CGN3pPLA.js";import{n as s,t as c}from"./textarea-CuZf7z08.js";var l,u,d,f;function p(){return(p=e((()=>{t(),a(),c(),r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBAccordion/Interaction Action`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{behavior:`single`,default:`<DBAccordionItem data-testid="item1" headlinePlain="Test"
  ><DBButton data-testid="button">Click me</DBButton></DBAccordionItem
><DBAccordionItem data-testid="item2" headlinePlain="Test 2"
  ><DBTextarea
    data-testid="textarea"
    label="Label"
  ></DBTextarea></DBAccordionItem
><DBAccordionItem data-testid="item3" headlinePlain="Test 3" :disabled="true"
  ><DBButton data-testid="button2">Click me</DBButton></DBAccordionItem
>`},render:e=>({components:{DBAccordion:i,DBAccordionItem:n,DBButton:o,DBTextarea:s},setup(){return{args:e}},template:`<DBAccordion v-bind="args"   >${e.default}</DBAccordion>`})},f=[`Action`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "single",
    "default": \`<DBAccordionItem data-testid="item1" headlinePlain="Test"
  ><DBButton data-testid="button">Click me</DBButton></DBAccordionItem
><DBAccordionItem data-testid="item2" headlinePlain="Test 2"
  ><DBTextarea
    data-testid="textarea"
    label="Label"
  ></DBTextarea></DBAccordionItem
><DBAccordionItem data-testid="item3" headlinePlain="Test 3" :disabled="true"
  ><DBButton data-testid="button2">Click me</DBButton></DBAccordionItem
>\`
  },
  render: (args: any) => ({
    components: {
      DBAccordion,
      DBAccordionItem,
      DBButton,
      DBTextarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBAccordion v-bind="args"   >\${args.default}</DBAccordion>\`
  })
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as Action,f as __namedExportsOrder,u as default};