import{n as e}from"./chunk-BneVvdWh.js";import{t,w as n}from"./src-1GpFCKEe.js";var r,i,a,o,s,c;e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBInput/Example - Length`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},minLength:{control:`number`},maxLength:{control:`number`},type:{control:`select`,options:[`color`,`date`,`datetime-local`,`email`,`file`,`hidden`,`month`,`number`,`password`,`range`,`search`,`tel`,`text`,`time`,`url`,`week`]},min:{control:`text`},max:{control:`text`},step:{control:`text`},dataList:{control:`object`},dataListId:{control:`text`},placeholder:{control:`text`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},pattern:{control:`text`},accept:{control:`text`},multiple:{control:`boolean`},enterkeyhint:{control:`select`,options:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},inputmode:{control:`select`,options:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},autocomplete:{control:`text`},messageIcon:{control:`text`},messageSize:{control:`select`,options:[`small`,`medium`]},validMessageSize:{control:`select`,options:[`small`,`medium`]},invalidMessageSize:{control:`select`,options:[`small`,`medium`]},fieldSizing:{control:`select`,options:[`fixed`,`content`]},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{label:`Label`,placeholder:`MinLength`,minLength:3,default:``},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},o={args:{label:`Label`,placeholder:`MaxLength`,maxLength:5,default:``},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},s={args:{label:`Label`,placeholder:`MinMaxLength`,minLength:3,maxLength:5,default:``},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "MinLength",
    "minLength": 3,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInput v-bind="args"   >\${args.default}</DBInput>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "MaxLength",
    "maxLength": 5,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInput v-bind="args"   >\${args.default}</DBInput>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "MinMaxLength",
    "minLength": 3,
    "maxLength": 5,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInput v-bind="args"   >\${args.default}</DBInput>\`
  })
}`,...s.parameters?.docs?.source}}},c=[`MinLength`,`MaxLength`,`MinMaxLength`]}))();export{o as MaxLength,a as MinLength,s as MinMaxLength,c as __namedExportsOrder,i as default};