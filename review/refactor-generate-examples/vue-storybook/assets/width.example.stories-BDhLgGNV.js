import{_ as e}from"./button-BND3SCu0.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,c={title:"Components/DBButton/Width",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},n={args:{width:"auto",onClick:r(),default:"(Default) Auto"},render:t=>({components:{DBButton:e},setup(){return{args:t}},template:`<DBButton v-bind="args"   >${t.default}</DBButton>`})},o={args:{width:"full",onClick:r(),default:"Width"},render:t=>({components:{DBButton:e},setup(){return{args:t}},template:`<div  :style="{
  width: '500px'
}"  ><DBButton v-bind="args"   >${t.default}</DBButton></div>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "onClick": fn(),
    "default": \`(Default) Auto\`
  },
  render: (args: any) => ({
    components: {
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton v-bind="args"   >\${args.default}</DBButton>\`
  })
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "onClick": fn(),
    "default": \`Width\`
  },
  render: (args: any) => ({
    components: {
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '500px'
}"  ><DBButton v-bind="args"   >\${args.default}</DBButton></div>\`
  })
}`,...o.parameters?.docs?.source}}};const i=["Auto","Full"];export{n as Auto,o as Full,i as __namedExportsOrder,c as default};
