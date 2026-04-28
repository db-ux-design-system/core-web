import{n as e}from"./chunk-DnJy8xQt.js";import{A as t,t as n}from"./src-IA1wsRkd.js";var r,i,a,o,s,c;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBBrand/Density`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{hideLogo:{control:`boolean`},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{"data-density":`functional`,default:`Functional`},render:e=>({components:{DBBrand:t},setup(){return{args:e}},template:`<DBBrand v-bind="args"   >${e.default}</DBBrand>`})},o={args:{"data-density":`regular`,default:`(Default) Regular`},render:e=>({components:{DBBrand:t},setup(){return{args:e}},template:`<DBBrand v-bind="args"   >${e.default}</DBBrand>`})},s={args:{"data-density":`expressive`,default:`Expressive`},render:e=>({components:{DBBrand:t},setup(){return{args:e}},template:`<DBBrand v-bind="args"   >${e.default}</DBBrand>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{o as DefaultRegular,s as Expressive,a as Functional,c as __namedExportsOrder,i as default};