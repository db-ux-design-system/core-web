import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./accordion-item-ByRT4zA7.js";import{n as i,t as a}from"./accordion-DL664HBe.js";import{n as o,t as s}from"./button-BPKio8UX.js";import{n as c,t as l}from"./textarea-BANECyQw.js";var u=t({Action:()=>p,__namedExportsOrder:()=>m,default:()=>f}),d,f,p,m;function h(){return(h=e((()=>{n(),o(),l(),i(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBAccordion/Interaction Action`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{behavior:{control:`select`,options:[`multiple`,`single`]},variant:{control:`select`,options:[`divider`,`card`]},initOpenIndex:{control:`object`},items:{control:`object`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},p={args:{behavior:`single`,default:`<DBAccordionItem data-testid="item1" headlinePlain="Test"
  ><DBButton data-testid="button">Click me</DBButton></DBAccordionItem
><DBAccordionItem data-testid="item2" headlinePlain="Test 2"
  ><DBTextarea
    data-testid="textarea"
    label="Label"
  ></DBTextarea></DBAccordionItem
><DBAccordionItem data-testid="item3" headlinePlain="Test 3" :disabled="true"
  ><DBButton data-testid="button2">Click me</DBButton></DBAccordionItem
>`},render:e=>({components:{DBAccordion:a,DBAccordionItem:r,DBButton:s,DBTextarea:c},setup(){return{args:e}},template:`<DBAccordion v-bind="args"   >${e.default}</DBAccordion>`})},m=[`Action`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}}})))()}export{h as n,u as r,p as t};