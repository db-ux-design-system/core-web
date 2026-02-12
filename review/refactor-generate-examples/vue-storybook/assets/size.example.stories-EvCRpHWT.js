import{_ as e}from"./button-BND3SCu0.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBButton/Size",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},n={args:{size:"medium",onClick:r(),default:"(Default) Medium"},render:t=>({components:{DBButton:e},setup(){return{args:t}},template:`<DBButton v-bind="args"   >${t.default}</DBButton>`})},o={args:{size:"small",onClick:r(),default:"Small"},render:t=>({components:{DBButton:e},setup(){return{args:t}},template:`<DBButton v-bind="args"   >${t.default}</DBButton>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "onClick": fn(),
    "default": \`(Default) Medium\`
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
    "size": "small",
    "onClick": fn(),
    "default": \`Small\`
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
}`,...o.parameters?.docs?.source}}};const i=["Medium","Small"];export{n as Medium,o as Small,i as __namedExportsOrder,u as default};
