import{_ as o,a as s}from"./tab-list-48OwU_q6.js";import{_ as n}from"./badge-C9UHRq49.js";import"./iframe-DH8My9CQ.js";import"./preload-helper-CDE7oBwp.js";import"./index-BqjHKMWU.js";import"./tooltip-DmFzGVFi.js";import"./document-scroll-listener-DtRUwBR7.js";import"./floating-components-CKmcRn_b.js";import"./constants-CRDP6LoT.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBTabItem/Slot with Badge",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{default:`<span
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
