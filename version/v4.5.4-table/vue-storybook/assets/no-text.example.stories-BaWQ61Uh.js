import{_ as e}from"./button-eZpQGvA1.js";import"./iframe-DfvinHPj.js";import"./preload-helper-eESElaRw.js";import"./index-COCtms_G.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBButton/No Text",component:e,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:r()},argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},wrap:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},t={args:{icon:"x_placeholder",onClick:r(),default:"(Default) False"},render:o=>({components:{DBButton:e},setup(){return{args:o}},template:`<DBButton v-bind="args"   >${o.default}</DBButton>`})},n={args:{icon:"x_placeholder",onClick:r(),noText:!0,default:"True"},render:o=>({components:{DBButton:e},setup(){return{args:o}},template:`<DBButton v-bind="args"   >${o.default}</DBButton>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "onClick": fn(),
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "onClick": fn(),
    "noText": true,
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
}`,...n.parameters?.docs?.source}}};const i=["False","True"];export{t as False,n as True,i as __namedExportsOrder,u as default};
