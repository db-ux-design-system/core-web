import{_ as a}from"./textarea-D11pgOFo.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";import"./infotext-tCTmoIyB.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,c={title:"Components/DBTextarea/Rows",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"number"},cols:{control:"number"},showResizer:{control:"boolean"},fieldSizing:{control:"select",options:["fixed","content"]},resize:{control:"select",options:["none","both","horizontal","vertical"]},spellCheck:{control:"boolean"},wrap:{control:"select",options:["hard","soft","off"]},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},minLength:{control:"number"},maxLength:{control:"number"},autocomplete:{control:"text"},messageIcon:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{label:"(Default) 4 Rows",value:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",placeholder:"(Default) 4 Rows",default:""},render:e=>({components:{DBTextarea:a},setup(){return{args:e}},template:`<div  :style="{
  width: '328px'
}"  ><DBTextarea v-bind="args"   >${e.default}</DBTextarea></div>`})},t={args:{label:"Custom Example 8 Rows",value:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",placeholder:"Custom",rows:8,default:""},render:e=>({components:{DBTextarea:a},setup(){return{args:e}},template:`<div  :style="{
  width: '328px'
}"  ><DBTextarea v-bind="args"   >${e.default}</DBTextarea></div>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) 4 Rows",
    "value": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    "placeholder": "(Default) 4 Rows",
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
  width: '328px'
}"  ><DBTextarea v-bind="args"   >\${args.default}</DBTextarea></div>\`
  })
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Custom Example 8 Rows",
    "value": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    "placeholder": "Custom",
    "rows": 8,
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
  width: '328px'
}"  ><DBTextarea v-bind="args"   >\${args.default}</DBTextarea></div>\`
  })
}`,...t.parameters?.docs?.source}}};const p=["Default4Rows","Custom"];export{t as Custom,o as Default4Rows,p as __namedExportsOrder,c as default};
