import{_ as r,a as s}from"./tab-list-BZPplhIN.js";import"./iframe-DGFKbu5H.js";import"./preload-helper-CDE7oBwp.js";import"./index-CxtH_N9b.js";import"./tooltip-DBHonoZU.js";import"./constants-CvUrIGJS.js";import"./document-scroll-listener-C3hIOeCA.js";import"./floating-components-CKmcRn_b.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,T={title:"Components/DBTabItem/States",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{label:"(Default) Enabled",default:""},render:e=>({components:{DBTabItem:r,DBTabList:s},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},t={args:{label:"active",active:!0,default:""},render:e=>({components:{DBTabItem:r,DBTabList:s},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},n={args:{label:"disabled",disabled:!0,default:""},render:e=>({components:{DBTabItem:r,DBTabList:s},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const D=["DefaultEnabled","active","disabled"];export{a as DefaultEnabled,D as __namedExportsOrder,t as active,T as default,n as disabled};
