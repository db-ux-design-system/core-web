import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./tab-list-DEmDdg73.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{i(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBTabItem/Density`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},autofocus:{control:`boolean`}}},s={args:{label:`Functional`,default:``},render:e=>({components:{DBTabItem:t,DBTabList:n},setup(){return{args:e}},template:`<DBTabList data-density="functional"   ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},c={args:{label:`(Default) Regular`,default:``},render:e=>({components:{DBTabItem:t,DBTabList:n},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},l={args:{label:`Expressive`,default:``},render:e=>({components:{DBTabItem:t,DBTabList:n},setup(){return{args:e}},template:`<DBTabList data-density="expressive"   ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
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
    template: \`<DBTabList data-density="functional"   ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
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
    template: \`<DBTabList data-density="expressive"   ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...l.parameters?.docs?.source}}},u=[`Functional`,`DefaultRegular`,`Expressive`]})))()}d();export{c as DefaultRegular,l as Expressive,s as Functional,u as __namedExportsOrder,o as default};