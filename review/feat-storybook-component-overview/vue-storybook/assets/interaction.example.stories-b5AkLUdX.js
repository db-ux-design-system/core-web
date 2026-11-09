import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./select-BmAUC4NS.js";var i=t({Change:()=>s,Required:()=>c,__namedExportsOrder:()=>l,default:()=>o}),a,o,s,c,l;function u(){return(u=e((()=>{r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBSelect/Interaction`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},disabled:{control:`boolean`},showIcon:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},multiple:{control:`boolean`},showEmptyOption:{control:`boolean`},autocomplete:{control:`text`},messageIcon:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{"data-testid":`select-change`,label:`Label`,placeholder:`Placeholder`,onInput:a(),default:`<option value="test1">Test1</option><option value="test2">Test2</option>`},render:e=>({components:{DBSelect:n},setup(){return{args:e}},template:`<DBSelect v-bind="args"   >${e.default}</DBSelect>`})},c={args:{"data-testid":`select-required`,label:`Label`,value:``,placeholder:`Choose an option`,required:!0,default:`<option value="test1">Test1</option><option value="test2">Test2</option>`},render:e=>({components:{DBSelect:n},setup(){return{args:e}},template:`<DBSelect v-bind="args"   >${e.default}</DBSelect>`})},l=[`Change`,`Required`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "select-change",
    "label": "Label",
    "placeholder": "Placeholder",
    "onInput": fn(),
    "default": \`<option value="test1">Test1</option><option value="test2">Test2</option>\`
  },
  render: (args: any) => ({
    components: {
      DBSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBSelect v-bind="args"   >\${args.default}</DBSelect>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "select-required",
    "label": "Label",
    "value": "",
    "placeholder": "Choose an option",
    "required": true,
    "default": \`<option value="test1">Test1</option><option value="test2">Test2</option>\`
  },
  render: (args: any) => ({
    components: {
      DBSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBSelect v-bind="args"   >\${args.default}</DBSelect>\`
  })
}`,...c.parameters?.docs?.source}}}})))()}export{i,c as n,u as r,s as t};