import{_ as o,a as n}from"./tab-list-DIq_wmJu.js";import"./iframe-CB3EfEHc.js";import"./preload-helper-CDE7oBwp.js";import"./index-csvFxEYc.js";import"./tooltip-CHkGY1kU.js";import"./constants-y2N5m1XS.js";import"./document-scroll-listener-BSUHJGOU.js";import"./floating-components-CKmcRn_b.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBTabItem/Behavior",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{label:"(Default) Auto Width",default:""},render:t=>({components:{DBTabItem:n,DBTabList:o},setup(){return{args:t}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${t.default}</DBTabItem></DBTabList>`})},a={args:{label:"Width full",default:""},render:t=>({components:{DBTabItem:n,DBTabList:o},setup(){return{args:t}},template:`<DBTabList  :style="{
  blockSize: '100%'
}"  ><DBTabItem v-bind="args"   >${t.default}</DBTabItem></DBTabList>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Auto Width",
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
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Width full",
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
    template: \`<DBTabList  :style="{
  blockSize: '100%'
}"  ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...a.parameters?.docs?.source}}};const T=["DefaultAutoWidth","Widthfull"];export{e as DefaultAutoWidth,a as Widthfull,T as __namedExportsOrder,p as default};
