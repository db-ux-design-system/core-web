import{_ as e}from"./button-BJ3EJGFW.js";import"./iframe-D4K7UsKo.js";import"./preload-helper-BuuRWPf7.js";import"./index-BSAZCWsy.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBButton/Disabled",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},wrap:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},n={args:{onClick:r(),disabled:!1,default:"(Default) False"},render:t=>({components:{DBButton:e},setup(){return{args:t}},template:`<DBButton v-bind="args"   >${t.default}</DBButton>`})},o={args:{onClick:r(),disabled:!0,default:"True"},render:t=>({components:{DBButton:e},setup(){return{args:t}},template:`<DBButton v-bind="args"   >${t.default}</DBButton>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "onClick": fn(),
    "disabled": false,
    "default": \`(Default) False\`
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
    "onClick": fn(),
    "disabled": true,
    "default": \`True\`
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
}`,...o.parameters?.docs?.source}}};const d=["False","True"];export{n as False,o as True,d as __namedExportsOrder,u as default};
