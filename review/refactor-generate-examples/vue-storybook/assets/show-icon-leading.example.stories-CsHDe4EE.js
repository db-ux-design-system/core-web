import{_ as t,a as o}from"./tab-list-CaU2Nhei.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,i={title:"Components/DBTabItem/Show Icon Leading",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},checked:{control:"boolean"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{label:"(Default) False",icon:"x_placeholder",showIcon:!1,default:""},render:e=>({components:{DBTabItem:t,DBTabList:o},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},n={args:{label:"True",icon:"x_placeholder",showIcon:!0,default:""},render:e=>({components:{DBTabItem:t,DBTabList:o},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const d=["DefaultFalse","True"];export{a as DefaultFalse,n as True,d as __namedExportsOrder,i as default};
