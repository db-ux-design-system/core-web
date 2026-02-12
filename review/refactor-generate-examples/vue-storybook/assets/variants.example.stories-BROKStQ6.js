import{_ as a}from"./brand-aeauyKMx.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:"Components/DBBrand/Variants",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{hideLogo:{control:"boolean"},showIcon:{control:"boolean"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{default:"(Default) With Logo"},render:e=>({components:{DBBrand:a},setup(){return{args:e}},template:`<DBBrand v-bind="args"   >${e.default}</DBBrand>`})},r={args:{hideLogo:!0,default:"No Logo"},render:e=>({components:{DBBrand:a},setup(){return{args:e}},template:`<DBBrand v-bind="args"   >${e.default}</DBBrand>`})},o={args:{hideLogo:!0,default:'<img alt="this is a fancy placeholder logo" :src="getImage()" />Custom Logo'},render:e=>({components:{DBBrand:a},setup(){return{args:e}},template:`<DBBrand v-bind="args"   >${e.default}</DBBrand>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`(Default) With Logo\`
  },
  render: (args: any) => ({
    components: {
      DBBrand
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBrand v-bind="args"   >\${args.default}</DBBrand>\`
  })
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "hideLogo": true,
    "default": \`No Logo\`
  },
  render: (args: any) => ({
    components: {
      DBBrand
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBrand v-bind="args"   >\${args.default}</DBBrand>\`
  })
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "hideLogo": true,
    "default": \`<img alt="this is a fancy placeholder logo" :src="getImage()" />Custom Logo\`
  },
  render: (args: any) => ({
    components: {
      DBBrand
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBrand v-bind="args"   >\${args.default}</DBBrand>\`
  })
}`,...o.parameters?.docs?.source}}};const m=["DefaultWithLogo","NoLogo","CustomLogo"];export{o as CustomLogo,n as DefaultWithLogo,r as NoLogo,m as __namedExportsOrder,l as default};
