import{n as e}from"./chunk-DnJy8xQt.js";import{A as t,t as n}from"./src-D6heB58J.js";var r,i,a,o,s,c;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBBrand/Variants`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{default:`(Default) With Logo`},render:e=>({components:{DBBrand:t},setup(){return{args:e}},template:`<DBBrand v-bind="args"   >${e.default}</DBBrand>`})},o={args:{"data-logo":`db-systel`,noText:!0,default:`Logo Variant`},render:e=>({components:{DBBrand:t},setup(){return{args:e}},template:`<DBBrand v-bind="args"   >${e.default}</DBBrand>`})},s={args:{default:`<img alt="this is a fancy placeholder logo" :src="getImage()" />Custom Logo`},render:e=>({components:{DBBrand:t},setup(){return{args:e}},template:`<DBBrand v-bind="args"   >${e.default}</DBBrand>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-logo": "db-systel",
    "noText": true,
    "default": \`Logo Variant\`
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
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
}`,...s.parameters?.docs?.source}}},c=[`DefaultWithLogo`,`NoLogo`,`CustomLogo`]}))();export{s as CustomLogo,a as DefaultWithLogo,o as NoLogo,c as __namedExportsOrder,i as default};