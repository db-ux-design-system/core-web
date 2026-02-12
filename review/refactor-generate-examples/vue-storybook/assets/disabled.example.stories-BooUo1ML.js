import{_ as n}from"./navigation-item-BOW6Wrwe.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./floating-components-1F_x7pmN.js";import"./button-BND3SCu0.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBNavigationItem/Disabled",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},active:{control:"boolean"},showIcon:{control:"boolean"},width:{control:"select",options:["full","auto"]},wrap:{control:"boolean"},text:{control:"text"},subNavigationExpanded:{control:"boolean"},backButtonId:{control:"text"},backButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},t={args:{disabled:!1,default:'<a href="#">(Default) False</a>'},render:e=>({components:{DBNavigationItem:n},setup(){return{args:e}},template:`<ul    ><DBNavigationItem v-bind="args"   >${e.default}</DBNavigationItem></ul>`})},a={args:{disabled:!0,default:'<a href="#">True</a>'},render:e=>({components:{DBNavigationItem:n},setup(){return{args:e}},template:`<ul    ><DBNavigationItem v-bind="args"   >${e.default}</DBNavigationItem></ul>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "disabled": false,
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "disabled": true,
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
}`,...a.parameters?.docs?.source}}};const p=["DefaultFalse","True"];export{t as DefaultFalse,a as True,p as __namedExportsOrder,m as default};
