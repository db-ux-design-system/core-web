import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./textarea-D8LYtYwO.js";var i=t({Content:()=>c,Contentwithminheight:()=>l,DefaultFixed:()=>s,__namedExportsOrder:()=>u,default:()=>o}),a,o,s,c,l,u;function d(){return(d=e((()=>{r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBTextarea/Field Sizing`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},rows:{control:`number`},cols:{control:`number`},showResizer:{control:`boolean`},fieldSizing:{control:`select`,options:[`fixed`,`content`]},resize:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},spellCheck:{control:`boolean`},wrap:{control:`select`,options:[`hard`,`soft`,`off`]},placeholder:{control:`text`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},minLength:{control:`number`},maxLength:{control:`number`},autocomplete:{control:`text`},messageIcon:{control:`text`},showMessage:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{label:`Label`,fieldSizing:`fixed`,placeholder:`(Default) Fixed`,default:``},render:e=>({components:{DBTextarea:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBTextarea v-bind="args"   >${e.default}</DBTextarea></div>`})},c={args:{label:`Label`,fieldSizing:`content`,placeholder:`Content`,default:``},render:e=>({components:{DBTextarea:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBTextarea v-bind="args"   >${e.default}</DBTextarea></div>`})},l={args:{label:`Label`,fieldSizing:`content`,placeholder:`Content with min-height`,default:``},render:e=>({components:{DBTextarea:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px',
  '--db-form-component-min-block-size': '4lh'
}"  ><DBTextarea v-bind="args"   >${e.default}</DBTextarea></div>`})},u=[`DefaultFixed`,`Content`,`Contentwithminheight`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "fieldSizing": "content",
    "placeholder": "Content with min-height",
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
  width: '300px',
  '--db-form-component-min-block-size': '4lh'
}"  ><DBTextarea v-bind="args"   >\${args.default}</DBTextarea></div>\`
  })
}`,...l.parameters?.docs?.source}}}})))()}export{d as a,i,l as n,s as r,c as t};