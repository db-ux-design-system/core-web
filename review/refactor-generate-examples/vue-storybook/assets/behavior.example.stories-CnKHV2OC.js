import{_ as n,a as o}from"./tab-list-CaU2Nhei.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBTabItem/Behavior",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},checked:{control:"boolean"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{label:"(Default) Auto Width",default:""},render:t=>({components:{DBTabItem:n,DBTabList:o},setup(){return{args:t}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${t.default}</DBTabItem></DBTabList>`})},a={args:{label:"Width full",default:""},render:t=>({components:{DBTabItem:n,DBTabList:o},setup(){return{args:t}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${t.default}</DBTabItem></DBTabList>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    template: \`<DBTabList    ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...a.parameters?.docs?.source}}};const d=["DefaultAutoWidth","Widthfull"];export{e as DefaultAutoWidth,a as Widthfull,d as __namedExportsOrder,m as default};
