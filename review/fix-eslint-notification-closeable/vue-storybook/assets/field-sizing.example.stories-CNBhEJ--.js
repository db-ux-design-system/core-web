import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./src-1GpFCKEe.js";var r,i,a,o,s;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBTextarea/Field Sizing`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},rows:{control:`number`},cols:{control:`number`},showResizer:{control:`boolean`},fieldSizing:{control:`select`,options:[`fixed`,`content`]},resize:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},spellCheck:{control:`boolean`},wrap:{control:`select`,options:[`hard`,`soft`,`off`]},placeholder:{control:`text`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},minLength:{control:`number`},maxLength:{control:`number`},autocomplete:{control:`text`},messageIcon:{control:`text`},showMessage:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{label:`Label`,fieldSizing:`fixed`,placeholder:`(Default) Fixed`,default:``},render:e=>({components:{DBTextarea:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBTextarea v-bind="args"   >${e.default}</DBTextarea></div>`})},o={args:{label:`Label`,fieldSizing:`content`,placeholder:`Content`,default:``},render:e=>({components:{DBTextarea:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBTextarea v-bind="args"   >${e.default}</DBTextarea></div>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "fieldSizing": "fixed",
    "placeholder": "(Default) Fixed",
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
    template: \`<div  :style="{
  width: '300px'
}"  ><DBTextarea v-bind="args"   >\${args.default}</DBTextarea></div>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "fieldSizing": "content",
    "placeholder": "Content",
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
    template: \`<div  :style="{
  width: '300px'
}"  ><DBTextarea v-bind="args"   >\${args.default}</DBTextarea></div>\`
  })
}`,...o.parameters?.docs?.source}}},s=[`DefaultFixed`,`Content`]}))();export{o as Content,a as DefaultFixed,s as __namedExportsOrder,i as default};