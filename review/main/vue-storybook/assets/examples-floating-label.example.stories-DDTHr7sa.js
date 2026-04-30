import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,t as n}from"./src-CwgarGln.js";var r,i,a,o,s,c,l;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBTextarea/Examples Floating Label`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},rows:{control:`number`},cols:{control:`number`},showResizer:{control:`boolean`},fieldSizing:{control:`select`,options:[`fixed`,`content`]},resize:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},spellCheck:{control:`boolean`},wrap:{control:`select`,options:[`hard`,`soft`,`off`]},placeholder:{control:`text`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},minLength:{control:`number`},maxLength:{control:`number`},autocomplete:{control:`text`},messageIcon:{control:`text`},showMessage:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{label:`Label`,variant:`floating`,placeholder:`(Default) Empty`,default:``},render:e=>({components:{DBTextarea:t},setup(){return{args:e}},template:`<DBTextarea v-bind="args"   >${e.default}</DBTextarea>`})},o={args:{label:`Label`,value:`Filled`,variant:`floating`,placeholder:`Filled`,default:``},render:e=>({components:{DBTextarea:t},setup(){return{args:e}},template:`<DBTextarea v-bind="args"   >${e.default}</DBTextarea>`})},s={args:{label:`Label`,variant:`floating`,placeholder:`Disabled`,disabled:!0,default:``},render:e=>({components:{DBTextarea:t},setup(){return{args:e}},template:`<DBTextarea v-bind="args"   >${e.default}</DBTextarea>`})},c={args:{label:`Label`,value:`Readonly - Filled`,variant:`floating`,placeholder:`Readonly - Filled`,readOnly:!0,default:``},render:e=>({components:{DBTextarea:t},setup(){return{args:e}},template:`<DBTextarea v-bind="args"   >${e.default}</DBTextarea>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "(Default) Empty",
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
    "label": "Label",
    "value": "Filled",
    "variant": "floating",
    "placeholder": "Filled",
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
    "label": "Label",
    "variant": "floating",
    "placeholder": "Disabled",
    "disabled": true,
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "value": "Readonly - Filled",
    "variant": "floating",
    "placeholder": "Readonly - Filled",
    "readOnly": true,
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
}`,...c.parameters?.docs?.source}}},l=[`DefaultEmpty`,`Filled`,`Disabled`,`ReadonlyFilled`]}))();export{a as DefaultEmpty,s as Disabled,o as Filled,c as ReadonlyFilled,l as __namedExportsOrder,i as default};