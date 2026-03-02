import{_ as n,a as o}from"./tab-list-BP_aLxrw.js";import"./iframe-4D9j4fxB.js";import"./preload-helper-CDE7oBwp.js";import"./index-C2ygMkoK.js";import"./tooltip-BVOcljOC.js";import"./constants-CvUrIGJS.js";import"./document-scroll-listener-Bxs16huG.js";import"./floating-components-CKmcRn_b.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBTabItem/Show Icon Leading",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{label:"(Default) False",icon:"x_placeholder",showIcon:!1,default:""},render:e=>({components:{DBTabItem:n,DBTabList:o},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},t={args:{label:"True",icon:"x_placeholder",showIcon:!0,default:""},render:e=>({components:{DBTabItem:n,DBTabList:o},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const T=["DefaultFalse","True"];export{a as DefaultFalse,t as True,T as __namedExportsOrder,d as default};
