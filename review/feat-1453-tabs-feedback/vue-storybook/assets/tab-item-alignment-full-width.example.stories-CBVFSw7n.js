import{_ as o,a as n}from"./tab-list-dB0Gwv1-.js";import"./iframe-F82tG9VT.js";import"./preload-helper-CDE7oBwp.js";import"./index-CrC2-ZEz.js";import"./tooltip-rd4dMVri.js";import"./document-scroll-listener-BflQilF1.js";import"./floating-components-CKmcRn_b.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBTabItem/Tab-Item Alignment Full Width",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{label:"Left",default:""},render:e=>({components:{DBTabItem:n,DBTabList:o},setup(){return{args:e}},template:`<DBTabList  :style="{
  blockSize: '100%'
}"  ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},a={args:{label:"Centered",default:""},render:e=>({components:{DBTabItem:n,DBTabList:o},setup(){return{args:e}},template:`<DBTabList  :style="{
  blockSize: '100%'
}"  ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Left",
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Centered",
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
}`,...a.parameters?.docs?.source}}};const T=["Start","Centered"];export{a as Centered,t as Start,T as __namedExportsOrder,p as default};
