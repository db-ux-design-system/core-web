import{_ as a}from"./button-BND3SCu0.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,c={title:"Components/DBButton/Multi Line Text",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},disabled:{control:"boolean"},form:{control:"text"},name:{control:"text"},noText:{control:"boolean"},type:{control:"select",options:["button","reset","submit"]},value:{control:"text"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},n={args:{width:"full",onClick:r(),default:"Multi-line Text With Automatic Line Breaks"},render:t=>({components:{DBButton:a},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBButton v-bind="args"   >${t.default}</DBButton></div>`})},e={args:{width:"full",icon:"x_placeholder",onClick:r(),default:"Multi-line Text With Automatic Line Breaks and Icon"},render:t=>({components:{DBButton:a},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBButton v-bind="args"   >${t.default}</DBButton></div>`})},o={args:{size:"small",onClick:r(),default:"Button Small Multi-line Text With Automatic Line Breaks"},render:t=>({components:{DBButton:a},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBButton v-bind="args"   >${t.default}</DBButton></div>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "onClick": fn(),
    "default": \`Multi-line Text With Automatic Line Breaks\`
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
  width: '300px'
}"  ><DBButton v-bind="args"   >\${args.default}</DBButton></div>\`
  })
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "icon": "x_placeholder",
    "onClick": fn(),
    "default": \`Multi-line Text With Automatic Line Breaks and Icon\`
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
  width: '300px'
}"  ><DBButton v-bind="args"   >\${args.default}</DBButton></div>\`
  })
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "onClick": fn(),
    "default": \`Button Small Multi-line Text With Automatic Line Breaks\`
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
  width: '300px'
}"  ><DBButton v-bind="args"   >\${args.default}</DBButton></div>\`
  })
}`,...o.parameters?.docs?.source}}};const d=["AutomaticLineBreaks","AutomaticLineBreaksandIcon","SmallAutomaticLineBreaks"];export{n as AutomaticLineBreaks,e as AutomaticLineBreaksandIcon,o as SmallAutomaticLineBreaks,d as __namedExportsOrder,c as default};
