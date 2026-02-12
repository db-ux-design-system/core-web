import{_ as r}from"./button-BND3SCu0.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,i={title:"Components/DBButton/Density",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},t={args:{"data-density":"functional",onClick:a(),default:"Functional"},render:n=>({components:{DBButton:r},setup(){return{args:n}},template:`<DBButton v-bind="args"   >${n.default}</DBButton>`})},e={args:{"data-density":"regular",onClick:a(),default:"(Default) Regular"},render:n=>({components:{DBButton:r},setup(){return{args:n}},template:`<DBButton v-bind="args"   >${n.default}</DBButton>`})},o={args:{"data-density":"expressive",onClick:a(),default:"Expressive"},render:n=>({components:{DBButton:r},setup(){return{args:n}},template:`<DBButton v-bind="args"   >${n.default}</DBButton>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "onClick": fn(),
    "default": \`Functional\`
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
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "onClick": fn(),
    "default": \`(Default) Regular\`
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "onClick": fn(),
    "default": \`Expressive\`
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
}`,...o.parameters?.docs?.source}}};const d=["Functional","Regular","Expressive"];export{o as Expressive,t as Functional,e as Regular,d as __namedExportsOrder,i as default};
