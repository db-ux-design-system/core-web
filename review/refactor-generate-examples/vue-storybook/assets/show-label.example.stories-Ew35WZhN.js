import{_ as a}from"./textarea-D11pgOFo.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";import"./infotext-tCTmoIyB.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBTextarea/Show Label",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"number"},cols:{control:"number"},showResizer:{control:"boolean"},fieldSizing:{control:"select",options:["fixed","content"]},resize:{control:"select",options:["none","both","horizontal","vertical"]},spellCheck:{control:"boolean"},wrap:{control:"select",options:["hard","soft","off"]},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},minLength:{control:"number"},maxLength:{control:"number"},autocomplete:{control:"text"},messageIcon:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{label:"Label",placeholder:"(Default) True",showLabel:!0,default:""},render:e=>({components:{DBTextarea:a},setup(){return{args:e}},template:`<DBTextarea v-bind="args"   >${e.default}</DBTextarea>`})},t={args:{label:"Label",placeholder:"False",showLabel:!1,default:""},render:e=>({components:{DBTextarea:a},setup(){return{args:e}},template:`<DBTextarea v-bind="args"   >${e.default}</DBTextarea>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "(Default) True",
    "showLabel": true,
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "False",
    "showLabel": false,
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
}`,...t.parameters?.docs?.source}}};const m=["DefaultTrue","False"];export{o as DefaultTrue,t as False,m as __namedExportsOrder,u as default};
