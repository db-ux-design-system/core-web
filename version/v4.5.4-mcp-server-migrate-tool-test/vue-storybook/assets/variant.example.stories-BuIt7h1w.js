import{_ as t}from"./button-CzozbFgE.js";import"./iframe-BOTASpA2.js";import"./preload-helper-Bk5FE6Wt.js";import"./index-D4Tj0YTI.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,i={title:"Components/DBButton/Variant",component:t,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:e()},argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},wrap:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},o={args:{variant:"outlined",onClick:e(),default:"(Default) Outlined - Adaptive"},render:n=>({components:{DBButton:t},setup(){return{args:n}},template:`<DBButton v-bind="args"   >${n.default}</DBButton>`})},r={args:{variant:"filled",onClick:e(),default:"Filled - Adaptive"},render:n=>({components:{DBButton:t},setup(){return{args:n}},template:`<DBButton v-bind="args"   >${n.default}</DBButton>`})},a={args:{variant:"ghost",onClick:e(),default:"Ghost - Adaptive"},render:n=>({components:{DBButton:t},setup(){return{args:n}},template:`<DBButton v-bind="args"   >${n.default}</DBButton>`})},s={args:{variant:"brand",onClick:e(),default:"Brand"},render:n=>({components:{DBButton:t},setup(){return{args:n}},template:`<DBButton v-bind="args"   >${n.default}</DBButton>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const p=["Outlined","Filled","Ghost","Brand"];export{s as Brand,r as Filled,a as Ghost,o as Outlined,p as __namedExportsOrder,i as default};
