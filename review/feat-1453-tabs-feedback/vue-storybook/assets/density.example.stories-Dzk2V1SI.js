import{_ as s,a as r}from"./tab-list-DIq_wmJu.js";import"./iframe-CB3EfEHc.js";import"./preload-helper-CDE7oBwp.js";import"./index-csvFxEYc.js";import"./tooltip-CHkGY1kU.js";import"./constants-y2N5m1XS.js";import"./document-scroll-listener-BSUHJGOU.js";import"./floating-components-CKmcRn_b.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBTabItem/Density",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{label:"Functional",default:""},render:e=>({components:{DBTabItem:r,DBTabList:s},setup(){return{args:e}},template:`<DBTabList data-density="functional"   ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},t={args:{label:"(Default) Regular",default:""},render:e=>({components:{DBTabItem:r,DBTabList:s},setup(){return{args:e}},template:`<DBTabList    ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})},n={args:{label:"Expressive",default:""},render:e=>({components:{DBTabItem:r,DBTabList:s},setup(){return{args:e}},template:`<DBTabList data-density="expressive"   ><DBTabItem v-bind="args"   >${e.default}</DBTabItem></DBTabList>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Functional",
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
    template: \`<DBTabList data-density="functional"   ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Regular",
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
    "label": "Expressive",
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
    template: \`<DBTabList data-density="expressive"   ><DBTabItem v-bind="args"   >\${args.default}</DBTabItem></DBTabList>\`
  })
}`,...n.parameters?.docs?.source}}};const T=["Functional","DefaultRegular","Expressive"];export{t as DefaultRegular,n as Expressive,a as Functional,T as __namedExportsOrder,D as default};
