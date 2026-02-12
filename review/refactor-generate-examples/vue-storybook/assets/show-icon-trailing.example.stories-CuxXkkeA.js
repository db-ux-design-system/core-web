import{_ as n}from"./input-DCt77RAB.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";import"./infotext-tCTmoIyB.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBInput/Show Icon Trailing",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},minLength:{control:"number"},maxLength:{control:"number"},type:{control:"select",options:["color","date","datetime-local","email","file","hidden","month","number","password","range","search","tel","text","time","url","week"]},min:{control:"text"},max:{control:"text"},step:{control:"text"},dataList:{control:"object"},dataListId:{control:"text"},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},size:{control:"number"},pattern:{control:"text"},accept:{control:"text"},multiple:{control:"boolean"},enterkeyhint:{control:"select",options:["enter","done","go","next","previous","search","send"]},inputmode:{control:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},autocomplete:{control:"text"},messageIcon:{control:"text"},messageSize:{control:"select",options:["small","medium"]},validMessageSize:{control:"select",options:["small","medium"]},invalidMessageSize:{control:"select",options:["small","medium"]},fieldSizing:{control:"select",options:["fixed","content"]},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{label:"False",iconTrailing:"x_placeholder",placeholder:"(Default) False",showIconTrailing:!1,default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})},t={args:{label:"True",iconTrailing:"x_placeholder",placeholder:"True",showIconTrailing:!0,default:""},render:e=>({components:{DBInput:n},setup(){return{args:e}},template:`<DBInput v-bind="args"   >${e.default}</DBInput>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "False",
    "iconTrailing": "x_placeholder",
    "placeholder": "(Default) False",
    "showIconTrailing": false,
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "True",
    "iconTrailing": "x_placeholder",
    "placeholder": "True",
    "showIconTrailing": true,
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
}`,...t.parameters?.docs?.source}}};const m=["DefaultFalse","True"];export{o as DefaultFalse,t as True,m as __namedExportsOrder,u as default};
