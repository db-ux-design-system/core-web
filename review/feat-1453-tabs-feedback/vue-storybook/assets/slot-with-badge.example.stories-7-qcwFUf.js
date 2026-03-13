import{_ as o,a as s}from"./tab-list-b-L2b1Nc.js";import{_ as n}from"./badge-KpEDyLEH.js";import"./iframe-BKaBJmSB.js";import"./preload-helper-CDE7oBwp.js";import"./index-D9waR3El.js";import"./tooltip-C_bNBKnC.js";import"./document-scroll-listener-DHo2HF0-.js";import"./floating-components-CKmcRn_b.js";import"./constants-CRDP6LoT.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBTabItem/Slot with Badge",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{default:`<span
  :style="{
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}"
>
  Messages
  <DBBadge semantic="informational">3</DBBadge></span
>`},render:a=>({components:{DBTabItem:s,DBBadge:n,DBTabList:o},setup(){return{args:a}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${a.default}</DBTabItem></DBTabList>`})},t={args:{default:`<span
  :style="{
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}"
>
  Notifications
  <DBBadge semantic="neutral">4</DBBadge></span
>`},render:a=>({components:{DBTabItem:s,DBBadge:n,DBTabList:o},setup(){return{args:a}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${a.default}</DBTabItem></DBTabList>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<span
  :style="{
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}"
>
  Messages
  <DBBadge semantic="informational">3</DBBadge></span
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<span
  :style="{
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}"
>
  Notifications
  <DBBadge semantic="neutral">4</DBBadge></span
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
}`,...t.parameters?.docs?.source}}};const T=["MessageswithBadge","NotificationswithBadge"];export{e as MessageswithBadge,t as NotificationswithBadge,T as __namedExportsOrder,D as default};
