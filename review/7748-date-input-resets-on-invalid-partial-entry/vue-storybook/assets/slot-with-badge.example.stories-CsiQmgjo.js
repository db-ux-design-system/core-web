import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-Bsan_bR7.js";import{i as r,n as i,r as a,t as o}from"./tab-list-CYdjX6wv.js";var s,c,l,u,d;function f(){return(f=e((()=>{t(),o(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTabItem/Slot with Badge`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},active:{control:`boolean`},disabled:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},autofocus:{control:`boolean`}}},l={args:{label:`Messages`,default:`<DBBadge semantic="informational">134</DBBadge>`},render:e=>({components:{DBTabItem:r,DBBadge:n,DBTabList:i},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},u={args:{label:`Notifications`,default:`<DBBadge semantic="neutral">433</DBBadge>`},render:e=>({components:{DBTabItem:r,DBBadge:n,DBTabList:i},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`MessageswithBadge`,`NotificationswithBadge`]})))()}f();export{l as MessageswithBadge,u as NotificationswithBadge,d as __namedExportsOrder,c as default};