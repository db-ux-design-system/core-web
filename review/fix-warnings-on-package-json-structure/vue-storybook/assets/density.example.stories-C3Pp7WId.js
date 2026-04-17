import{n as e}from"./chunk-BneVvdWh.js";import{a as t,o as n,t as r}from"./src-D8ePn3Ki.js";var i,a,o,s,c,l;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBTabItem/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},noText:{control:`boolean`},checked:{control:`boolean`},name:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},o={args:{"data-density":`functional`,label:`Functional`,default:``},render:e=>({components:{DBTabItem:n,DBTabList:t},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},s={args:{"data-density":`regular`,label:`(Default) Regular`,default:``},render:e=>({components:{DBTabItem:n,DBTabList:t},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},c={args:{"data-density":`expressive`,label:`Expressive`,default:``},render:e=>({components:{DBTabItem:n,DBTabList:t},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "label": "Functional",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTabItem,
      DBTabList
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTabList    ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "label": "(Default) Regular",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTabItem,
      DBTabList
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTabList    ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "label": "Expressive",
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTabItem,
      DBTabList
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTabList    ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...c.parameters?.docs?.source}}},l=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{s as DefaultRegular,c as Expressive,o as Functional,l as __namedExportsOrder,a as default};