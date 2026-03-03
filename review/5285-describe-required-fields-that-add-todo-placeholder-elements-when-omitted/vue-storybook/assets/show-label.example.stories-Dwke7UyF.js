import{_ as a}from"./infotext-Bgtz6Q2l.js";import{_ as t}from"./checkbox-6p3Crabf.js";import"./iframe-CJ9mCNfZ.js";import"./preload-helper-YU6p8zKh.js";import"./index-CN9Aqx6l.js";import"./constants-CENtXT6n.js";import"./form-components-BjgsSJ1o.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBCheckbox/Show Label",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},message:{control:"text"},showMessage:{control:"boolean"},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{name:"Label",showLabel:!0,default:"(Default) True"},render:e=>({components:{DBCheckbox:t,DBInfotext:a},setup(){return{args:e}},template:`<DBCheckbox v-bind="args"   >${e.default}</DBCheckbox>`})},n={args:{name:"Label",showLabel:!1,default:"False"},render:e=>({components:{DBCheckbox:t,DBInfotext:a},setup(){return{args:e}},template:`<div    ><DBCheckbox v-bind="args"   >${e.default}</DBCheckbox><DBInfotext semantic="informational" size="small" icon="none"   >
                    False
                </DBInfotext></div>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Label",
    "showLabel": true,
    "default": \`(Default) True\`
  },
  render: (args: any) => ({
    components: {
      DBCheckbox,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCheckbox v-bind="args"   >\${args.default}</DBCheckbox>\`
  })
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Label",
    "showLabel": false,
    "default": \`False\`
  },
  render: (args: any) => ({
    components: {
      DBCheckbox,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBCheckbox v-bind="args"   >\${args.default}</DBCheckbox><DBInfotext semantic="informational" size="small" icon="none"   >
                    False
                </DBInfotext></div>\`
  })
}`,...n.parameters?.docs?.source}}};const p=["DefaultTrue","False"];export{o as DefaultTrue,n as False,p as __namedExportsOrder,b as default};
