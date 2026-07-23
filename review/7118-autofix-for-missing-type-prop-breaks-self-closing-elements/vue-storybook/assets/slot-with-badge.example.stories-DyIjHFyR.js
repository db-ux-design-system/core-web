import{i as e}from"./preload-helper-DNSX3-F6.js";import{C as t,T as n,t as r,wt as i}from"./src-BAPoLA4B.js";var a,o,s,c,l;e((()=>{r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBTabItem/Slot with Badge`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},autofocus:{control:`boolean`}}},s={args:{label:`Messages`,default:`<DBBadge semantic="informational">134</DBBadge>`},render:e=>({components:{DBTabItem:n,DBBadge:i,DBTabList:t},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},c={args:{label:`Notifications`,default:`<DBBadge semantic="neutral">433</DBBadge>`},render:e=>({components:{DBTabItem:n,DBBadge:i,DBTabList:t},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Messages",
    "default": \`<DBBadge semantic="informational">134</DBBadge>\`
  },
  render: (args: any) => ({
    components: {
      DBTabItem,
      DBBadge,
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
    "label": "Notifications",
    "default": \`<DBBadge semantic="neutral">433</DBBadge>\`
  },
  render: (args: any) => ({
    components: {
      DBTabItem,
      DBBadge,
      DBTabList
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTabList    ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...c.parameters?.docs?.source}}},l=[`MessageswithBadge`,`NotificationswithBadge`]}))();export{s as MessageswithBadge,c as NotificationswithBadge,l as __namedExportsOrder,o as default};