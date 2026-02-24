import{_ as n}from"./textarea-kHJCsE-0.js";import"./iframe-BRL77h7A.js";import"./preload-helper-BrSIRfC5.js";import"./constants-CvUrIGJS.js";import"./index-D_V5zbEX.js";import"./form-components-CCMYuaqp.js";import"./infotext-COZFc5EN.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBTextarea/Field Sizing",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"number"},cols:{control:"number"},showResizer:{control:"boolean"},fieldSizing:{control:"select",options:["fixed","content"]},resize:{control:"select",options:["none","both","horizontal","vertical"]},spellCheck:{control:"boolean"},wrap:{control:"select",options:["hard","soft","off"]},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},minLength:{control:"number"},maxLength:{control:"number"},autocomplete:{control:"text"},messageIcon:{control:"text"},showMessage:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{label:"Label",fieldSizing:"fixed",placeholder:"(Default) Fixed",default:""},render:e=>({components:{DBTextarea:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBTextarea v-bind="args"   >${e.default}</DBTextarea></div>`})},o={args:{label:"Label",fieldSizing:"content",placeholder:"Content",default:""},render:e=>({components:{DBTextarea:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBTextarea v-bind="args"   >${e.default}</DBTextarea></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const u=["DefaultFixed","Content"];export{o as Content,t as DefaultFixed,u as __namedExportsOrder,m as default};
