import{_ as t}from"./button-BND3SCu0.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,i={title:"Components/DBButton/Variant",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},e={args:{variant:"outlined",onClick:s(),default:"(Default) Outlined - Adaptive"},render:n=>({components:{DBButton:t},setup(){return{args:n}},template:`<DBButton v-bind="args"   >${n.default}</DBButton>`})},o={args:{variant:"filled",onClick:s(),default:"Filled - Adaptive"},render:n=>({components:{DBButton:t},setup(){return{args:n}},template:`<DBButton v-bind="args"   >${n.default}</DBButton>`})},r={args:{variant:"ghost",onClick:s(),default:"Ghost - Adaptive"},render:n=>({components:{DBButton:t},setup(){return{args:n}},template:`<DBButton v-bind="args"   >${n.default}</DBButton>`})},a={args:{variant:"brand",onClick:s(),default:"Brand"},render:n=>({components:{DBButton:t},setup(){return{args:n}},template:`<DBButton v-bind="args"   >${n.default}</DBButton>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "outlined",
    "onClick": fn(),
    "default": \`(Default) Outlined - Adaptive\`
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
    "variant": "filled",
    "onClick": fn(),
    "default": \`Filled - Adaptive\`
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "ghost",
    "onClick": fn(),
    "default": \`Ghost - Adaptive\`
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "brand",
    "onClick": fn(),
    "default": \`Brand\`
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
}`,...a.parameters?.docs?.source}}};const p=["Outlined","Filled","Ghost","Brand"];export{a as Brand,o as Filled,r as Ghost,e as Outlined,p as __namedExportsOrder,i as default};
