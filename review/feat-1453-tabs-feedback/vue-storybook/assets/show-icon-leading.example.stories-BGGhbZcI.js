import{_ as o,a as t}from"./tab-list-b-L2b1Nc.js";import"./iframe-BKaBJmSB.js";import"./preload-helper-CDE7oBwp.js";import"./index-D9waR3El.js";import"./tooltip-C_bNBKnC.js";import"./document-scroll-listener-DHo2HF0-.js";import"./floating-components-CKmcRn_b.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBTabItem/Show Icon Leading",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{label:"(Default) False",icon:"x_placeholder",showIcon:!1,default:""},render:e=>({components:{DBTabItem:t,DBTabList:o},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},n={args:{label:"True",icon:"x_placeholder",showIcon:!0,default:""},render:e=>({components:{DBTabItem:t,DBTabList:o},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) False",
    "icon": "x_placeholder",
    "showIcon": false,
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "True",
    "icon": "x_placeholder",
    "showIcon": true,
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
}`,...n.parameters?.docs?.source}}};const d=["DefaultFalse","True"];export{a as DefaultFalse,n as True,d as __namedExportsOrder,u as default};
