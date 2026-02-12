import{_ as t}from"./brand-aeauyKMx.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBBrand/Density",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{hideLogo:{control:"boolean"},showIcon:{control:"boolean"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{"data-density":"functional",default:"Functional"},render:n=>({components:{DBBrand:t},setup(){return{args:n}},template:`<DBBrand v-bind="args"   >${n.default}</DBBrand>`})},r={args:{"data-density":"regular",default:"(Default) Regular"},render:n=>({components:{DBBrand:t},setup(){return{args:n}},template:`<DBBrand v-bind="args"   >${n.default}</DBBrand>`})},a={args:{"data-density":"expressive",default:"Expressive"},render:n=>({components:{DBBrand:t},setup(){return{args:n}},template:`<DBBrand v-bind="args"   >${n.default}</DBBrand>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "default": \`Functional\`
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "default": \`(Default) Regular\`
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "default": \`Expressive\`
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
}`,...a.parameters?.docs?.source}}};const i=["Functional","DefaultRegular","Expressive"];export{r as DefaultRegular,a as Expressive,e as Functional,i as __namedExportsOrder,p as default};
