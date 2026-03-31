import{_ as n}from"./navigation-item-cO1rKbl2.js";import"./iframe-ZNYnKSFr.js";import"./preload-helper-kLwBkM8d.js";import"./constants-y2N5m1XS.js";import"./index-D4Tj0YTI.js";import"./floating-components-CKmcRn_b.js";import"./button-BAUfQwG3.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBNavigationItem/Active",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:o()},argTypes:{disabled:{control:"boolean"},active:{control:"boolean"},showIcon:{control:"boolean"},width:{control:"select",options:["full","auto"]},wrap:{control:"boolean"},text:{control:"text"},subNavigationExpanded:{control:"boolean"},backButtonId:{control:"text"},backButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},e={args:{active:!1,default:'<a href="#">(Default) False</a>'},render:t=>({components:{DBNavigationItem:n},setup(){return{args:t}},template:`<ul    ><DBNavigationItem v-bind="args"   >${t.default}</DBNavigationItem></ul>`})},a={args:{active:!0,default:'<a href="#">True</a>'},render:t=>({components:{DBNavigationItem:n},setup(){return{args:t}},template:`<ul    ><DBNavigationItem v-bind="args"   >${t.default}</DBNavigationItem></ul>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "active": false,
    "default": \`<a href="#">(Default) False</a>\`
  },
  render: (args: any) => ({
    components: {
      DBNavigationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<ul    ><DBNavigationItem v-bind="args"   >\${args.default}</DBNavigationItem></ul>\`
  })
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "active": true,
    "default": \`<a href="#">True</a>\`
  },
  render: (args: any) => ({
    components: {
      DBNavigationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<ul    ><DBNavigationItem v-bind="args"   >\${args.default}</DBNavigationItem></ul>\`
  })
}`,...a.parameters?.docs?.source}}};const d=["DefaultFalse","True"];export{e as DefaultFalse,a as True,d as __namedExportsOrder,p as default};
