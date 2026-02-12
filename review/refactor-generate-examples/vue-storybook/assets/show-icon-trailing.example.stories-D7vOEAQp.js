import{_ as e}from"./button-BND3SCu0.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:"Components/DBButton/Show Icon Trailing",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},o={args:{iconTrailing:"x_placeholder",onClick:r(),showIconTrailing:!1,default:"(Default) False"},render:n=>({components:{DBButton:e},setup(){return{args:n}},template:`<DBButton v-bind="args"   >${n.default}</DBButton>`})},t={args:{iconTrailing:"x_placeholder",onClick:r(),showIconTrailing:!0,default:"True"},render:n=>({components:{DBButton:e},setup(){return{args:n}},template:`<DBButton v-bind="args"   >${n.default}</DBButton>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "iconTrailing": "x_placeholder",
    "onClick": fn(),
    "showIconTrailing": false,
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "iconTrailing": "x_placeholder",
    "onClick": fn(),
    "showIconTrailing": true,
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
}`,...t.parameters?.docs?.source}}};const u=["False","True"];export{o as False,t as True,u as __namedExportsOrder,i as default};
