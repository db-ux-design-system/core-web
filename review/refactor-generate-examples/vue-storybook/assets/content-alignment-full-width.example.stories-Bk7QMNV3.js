import{_ as a,a as o}from"./tab-list-CaU2Nhei.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBTabItem/Content Alignment Full Width",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},checked:{control:"boolean"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{label:"Left",default:""},render:e=>({components:{DBTabItem:a,DBTabList:o},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},n={args:{label:"Centered",default:""},render:e=>({components:{DBTabItem:a,DBTabList:o},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    template: \`<DBTabList    ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
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
    template: \`<DBTabList    ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...n.parameters?.docs?.source}}};const i=["Left","Centered"];export{n as Centered,t as Left,i as __namedExportsOrder,d as default};
