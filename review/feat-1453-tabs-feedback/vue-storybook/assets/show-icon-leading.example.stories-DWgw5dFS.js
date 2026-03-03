import{_ as o,a as n}from"./tab-list-DIq_wmJu.js";import"./iframe-CB3EfEHc.js";import"./preload-helper-CDE7oBwp.js";import"./index-csvFxEYc.js";import"./tooltip-CHkGY1kU.js";import"./constants-y2N5m1XS.js";import"./document-scroll-listener-BSUHJGOU.js";import"./floating-components-CKmcRn_b.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBTabItem/Show Icon Leading",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{label:"(Default) False",icon:"x_placeholder",showIcon:!1,default:""},render:e=>({components:{DBTabItem:n,DBTabList:o},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},t={args:{label:"True",icon:"x_placeholder",showIcon:!0,default:""},render:e=>({components:{DBTabItem:n,DBTabList:o},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
