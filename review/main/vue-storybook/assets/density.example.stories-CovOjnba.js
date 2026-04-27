import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n}from"./src-BEwlPLIG.js";var r,i,a,o,s,c;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBTextarea/Density`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},rows:{control:`number`},cols:{control:`number`},showResizer:{control:`boolean`},fieldSizing:{control:`select`,options:[`fixed`,`content`]},resize:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},spellCheck:{control:`boolean`},wrap:{control:`select`,options:[`hard`,`soft`,`off`]},placeholder:{control:`text`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},minLength:{control:`number`},maxLength:{control:`number`},autocomplete:{control:`text`},messageIcon:{control:`text`},showMessage:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{"data-density":`functional`,label:`Label`,placeholder:`Functional`,default:``},render:e=>({components:{DBTextarea:t},setup(){return{args:e}},template:`<DBTextarea v-bind="args"   >${e.default}</DBTextarea>`})},o={args:{"data-density":`regular`,label:`Label`,placeholder:`(Default) Regular`,default:``},render:e=>({components:{DBTextarea:t},setup(){return{args:e}},template:`<DBTextarea v-bind="args"   >${e.default}</DBTextarea>`})},s={args:{"data-density":`expressive`,label:`Label`,placeholder:`Expressive`,default:``},render:e=>({components:{DBTextarea:t},setup(){return{args:e}},template:`<DBTextarea v-bind="args"   >${e.default}</DBTextarea>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "label": "Label",
    "placeholder": "Functional",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTextarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTextarea v-bind="args"   >\${args.default}</DBTextarea>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "label": "Label",
    "placeholder": "(Default) Regular",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTextarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTextarea v-bind="args"   >\${args.default}</DBTextarea>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "label": "Label",
    "placeholder": "Expressive",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTextarea
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTextarea v-bind="args"   >\${args.default}</DBTextarea>\`
  })
}`,...s.parameters?.docs?.source}}},c=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{o as DefaultRegular,s as Expressive,a as Functional,c as __namedExportsOrder,i as default};