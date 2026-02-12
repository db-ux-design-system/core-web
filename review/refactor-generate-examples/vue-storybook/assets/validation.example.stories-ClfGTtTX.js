import{_ as o}from"./textarea-D11pgOFo.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";import"./infotext-tCTmoIyB.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBTextarea/Validation",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"number"},cols:{control:"number"},showResizer:{control:"boolean"},fieldSizing:{control:"select",options:["fixed","content"]},resize:{control:"select",options:["none","both","horizontal","vertical"]},spellCheck:{control:"boolean"},wrap:{control:"select",options:["hard","soft","off"]},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},minLength:{control:"number"},maxLength:{control:"number"},autocomplete:{control:"text"},messageIcon:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{label:"Label",validation:"no-validation",placeholder:"(Default) No validation",default:""},render:e=>({components:{DBTextarea:o},setup(){return{args:e}},template:`<DBTextarea v-bind="args"   >${e.default}</DBTextarea>`})},n={args:{label:"Label",validation:"invalid",invalidMessage:"Invalid Message",placeholder:"Invalid",default:""},render:e=>({components:{DBTextarea:o},setup(){return{args:e}},template:`<DBTextarea v-bind="args"   >${e.default}</DBTextarea>`})},t={args:{label:"Label",validation:"valid",validMessage:"Valid message",placeholder:"Valid",default:""},render:e=>({components:{DBTextarea:o},setup(){return{args:e}},template:`<DBTextarea v-bind="args"   >${e.default}</DBTextarea>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "no-validation",
    "placeholder": "(Default) No validation",
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "placeholder": "Invalid",
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "valid",
    "validMessage": "Valid message",
    "placeholder": "Valid",
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
}`,...t.parameters?.docs?.source}}};const v=["DefaultNovalidation","Invalid","Valid"];export{a as DefaultNovalidation,n as Invalid,t as Valid,v as __namedExportsOrder,u as default};
