import{_ as r,a as s}from"./tab-list-CaU2Nhei.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";import"./form-components-DotznFsp.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,i={title:"Components/DBTabItem/States",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},checked:{control:"boolean"},name:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{label:"(Default) Enabled",default:""},render:e=>({components:{DBTabItem:r,DBTabList:s},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},t={args:{label:"active",active:!0,default:""},render:e=>({components:{DBTabItem:r,DBTabList:s},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},n={args:{label:"disabled",disabled:!0,default:""},render:e=>({components:{DBTabItem:r,DBTabList:s},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Enabled",
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
    "label": "active",
    "active": true,
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
    "label": "disabled",
    "disabled": true,
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
}`,...n.parameters?.docs?.source}}};const u=["DefaultEnabled","active","disabled"];export{a as DefaultEnabled,u as __namedExportsOrder,t as active,i as default,n as disabled};
