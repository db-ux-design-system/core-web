import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./select-CmDqX3Jl.js";var r,i,a,o,s;function c(){return(c=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBSelect/Interaction`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:r()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},disabled:{control:`boolean`},showIcon:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},multiple:{control:`boolean`},showEmptyOption:{control:`boolean`},autocomplete:{control:`text`},messageIcon:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},a={args:{"data-testid":`select-change`,label:`Label`,placeholder:`Placeholder`,onInput:r(),default:`<option value="test1">Test1</option><option value="test2">Test2</option>`},render:e=>({components:{DBSelect:t},setup(){return{args:e}},template:`<DBSelect v-bind="args"   >${e.default}</DBSelect>`})},o={args:{"data-testid":`select-required`,label:`Label`,value:``,placeholder:`Choose an option`,required:!0,default:`<option value="test1">Test1</option><option value="test2">Test2</option>`},render:e=>({components:{DBSelect:t},setup(){return{args:e}},template:`<DBSelect v-bind="args"   >${e.default}</DBSelect>`})},s=[`Change`,`Required`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}}})))()}c();export{a as Change,o as Required,s as __namedExportsOrder,i as default};