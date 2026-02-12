import{_ as a}from"./navigation-item-BOW6Wrwe.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./floating-components-1F_x7pmN.js";import"./button-BND3SCu0.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBNavigationItem/Show Icon",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},active:{control:"boolean"},showIcon:{control:"boolean"},width:{control:"select",options:["full","auto"]},wrap:{control:"boolean"},text:{control:"text"},subNavigationExpanded:{control:"boolean"},backButtonId:{control:"text"},backButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},t={args:{icon:"x_placeholder",showIcon:!1,default:'<a href="#">(Default) False</a>'},render:e=>({components:{DBNavigationItem:a},setup(){return{args:e}},template:`<ul    ><DBNavigationItem v-bind="args"   >${e.default}</DBNavigationItem></ul>`})},o={args:{icon:"x_placeholder",showIcon:!0,default:'<a href="#">True</a>'},render:e=>({components:{DBNavigationItem:a},setup(){return{args:e}},template:`<ul    ><DBNavigationItem v-bind="args"   >${e.default}</DBNavigationItem></ul>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "showIcon": false,
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "showIcon": true,
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
}`,...o.parameters?.docs?.source}}};const d=["DefaultFalse","True"];export{t as DefaultFalse,o as True,d as __namedExportsOrder,p as default};
