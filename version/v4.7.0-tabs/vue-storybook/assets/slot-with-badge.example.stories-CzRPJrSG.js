import{n as e}from"./chunk-DnJy8xQt.js";import{a as t,j as n,o as r,t as i}from"./src-D2Aua8xJ.js";var a,o,s,c,l;e((()=>{i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBTabItem/Slot with Badge`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},noText:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{default:`<span
  :style="{
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}"
>
  Messages
  <DBBadge semantic="informational">134</DBBadge></span
>`},render:e=>({components:{DBTabItem:r,DBBadge:n,DBTabList:t},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},c={args:{default:`<span
  :style="{
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}"
>
  Notifications
  <DBBadge semantic="neutral">433</DBBadge></span
>`},render:e=>({components:{DBTabItem:r,DBBadge:n,DBTabList:t},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<span
  :style="{
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}"
>
  Messages
  <DBBadge semantic="informational">134</DBBadge></span
>\`
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
    "default": \`<span
  :style="{
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}"
>
  Notifications
  <DBBadge semantic="neutral">433</DBBadge></span
>\`
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