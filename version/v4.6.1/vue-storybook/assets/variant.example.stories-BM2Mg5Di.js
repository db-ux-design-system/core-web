import{n as e}from"./chunk-BneVvdWh.js";import{k as t,t as n}from"./src-CHVqXqQZ.js";var r,i,a,o,s,c,l;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBButton/Variant`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:r()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},a={args:{variant:`outlined`,onClick:r(),default:`(Default) Outlined - Adaptive`},render:e=>({components:{DBButton:t},setup(){return{args:e}},template:`<DBButton v-bind="args"   >${e.default}</DBButton>`})},o={args:{variant:`filled`,onClick:r(),default:`Filled - Adaptive`},render:e=>({components:{DBButton:t},setup(){return{args:e}},template:`<DBButton v-bind="args"   >${e.default}</DBButton>`})},s={args:{variant:`ghost`,onClick:r(),default:`Ghost - Adaptive`},render:e=>({components:{DBButton:t},setup(){return{args:e}},template:`<DBButton v-bind="args"   >${e.default}</DBButton>`})},c={args:{variant:`brand`,onClick:r(),default:`Brand`},render:e=>({components:{DBButton:t},setup(){return{args:e}},template:`<DBButton v-bind="args"   >${e.default}</DBButton>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`Outlined`,`Filled`,`Ghost`,`Brand`]}))();export{c as Brand,o as Filled,s as Ghost,a as Outlined,l as __namedExportsOrder,i as default};