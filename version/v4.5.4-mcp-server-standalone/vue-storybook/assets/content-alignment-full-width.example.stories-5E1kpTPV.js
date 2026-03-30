import{_ as o,a}from"./tab-list-Crg6BEh5.js";import"./iframe-B8ME7r0t.js";import"./preload-helper-CQhCriSn.js";import"./index-B4uakXIv.js";import"./form-components-ARsDUAYg.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,i={title:"Components/DBTabItem/Content Alignment Full Width",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},checked:{control:"boolean"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{label:"Left",default:""},render:e=>({components:{DBTabItem:a,DBTabList:o},setup(){return{args:e}},template:`<DBTabList  :style="{
  blockSize: '100%'
}"  ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},n={args:{label:"Centered",default:""},render:e=>({components:{DBTabItem:a,DBTabList:o},setup(){return{args:e}},template:`<DBTabList  :style="{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const d=["Left","Centered"];export{n as Centered,t as Left,d as __namedExportsOrder,i as default};
