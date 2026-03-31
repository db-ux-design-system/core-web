import{_ as e}from"./button-CzozbFgE.js";import"./iframe-BOTASpA2.js";import"./preload-helper-Bk5FE6Wt.js";import"./index-D4Tj0YTI.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,c={title:"Components/DBButton/Width",component:e,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:r()},argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},wrap:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},o={args:{width:"auto",onClick:r(),default:"(Default) Auto"},render:t=>({components:{DBButton:e},setup(){return{args:t}},template:`<DBButton v-bind="args"   >${t.default}</DBButton>`})},n={args:{width:"full",onClick:r(),default:"Width"},render:t=>({components:{DBButton:e},setup(){return{args:t}},template:`<div  :style="{
  width: '500px'
}"  ><DBButton v-bind="args"   >${t.default}</DBButton></div>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const i=["Auto","Full"];export{o as Auto,n as Full,i as __namedExportsOrder,c as default};
