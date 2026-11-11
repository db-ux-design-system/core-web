import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./input--U9xw6aV.js";var i=t({DefaultEmpty:()=>s,Disabled:()=>l,Filled:()=>c,Invalid:()=>d,ReadonlyFilled:()=>u,__namedExportsOrder:()=>f,default:()=>o}),a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBInput/Example Floating Label`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},minLength:{control:`number`},maxLength:{control:`number`},type:{control:`select`,options:[`color`,`date`,`datetime-local`,`email`,`file`,`hidden`,`month`,`number`,`password`,`range`,`search`,`tel`,`text`,`time`,`url`,`week`]},min:{control:`text`},max:{control:`text`},step:{control:`text`},dataList:{control:`object`},dataListId:{control:`text`},placeholder:{control:`text`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},pattern:{control:`text`},accept:{control:`text`},multiple:{control:`boolean`},enterkeyhint:{control:`select`,options:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},inputmode:{control:`select`,options:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},autocomplete:{control:`text`},messageIcon:{control:`text`},messageSize:{control:`select`,options:[`small`,`medium`]},validMessageSize:{control:`select`,options:[`small`,`medium`]},invalidMessageSize:{control:`select`,options:[`small`,`medium`]},fieldSizing:{control:`select`,options:[`fixed`,`content`]},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{label:`Label`,variant:`floating`,placeholder:`(Default) Empty`,default:``},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},c={args:{label:`Label`,value:`Filled`,variant:`floating`,placeholder:`Filled`,default:``},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},l={args:{label:`Label`,variant:`floating`,placeholder:`Disabled`,disabled:!0,default:``},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},u={args:{label:`Label`,value:`Readonly - Filled`,variant:`floating`,placeholder:`Readonly - Filled`,readOnly:!0,default:``},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},d={args:{label:`Label`,validation:`invalid`,invalidMessage:`Invalid Message`,variant:`floating`,placeholder:`Invalid`,default:``},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},f=[`DefaultEmpty`,`Filled`,`Disabled`,`ReadonlyFilled`,`Invalid`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "(Default) Empty",
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "value": "Filled",
    "variant": "floating",
    "placeholder": "Filled",
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "Disabled",
    "disabled": true,
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
      DBInput
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInput v-bind="args"   >\${args.default}</DBInput>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "variant": "floating",
    "placeholder": "Invalid",
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
}`,...d.parameters?.docs?.source}}}})))()}export{u as a,d as i,l as n,i as o,c as r,p as s,s as t};