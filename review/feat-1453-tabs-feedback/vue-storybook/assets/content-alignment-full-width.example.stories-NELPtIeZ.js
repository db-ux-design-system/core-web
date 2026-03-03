import{_ as o,a}from"./tab-list-tpNbtH5c.js";import"./iframe-PLmMB2Ss.js";import"./preload-helper-CDE7oBwp.js";import"./index-csvFxEYc.js";import"./tooltip-C5Z6JCDS.js";import"./document-scroll-listener-BSUHJGOU.js";import"./floating-components-CKmcRn_b.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBTabItem/Content Alignment Full Width",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{label:"Left",default:""},render:e=>({components:{DBTabItem:a,DBTabList:o},setup(){return{args:e}},template:`<DBTabList  :style="{
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
}`,...n.parameters?.docs?.source}}};const T=["Left","Centered"];export{n as Centered,t as Left,T as __namedExportsOrder,p as default};
