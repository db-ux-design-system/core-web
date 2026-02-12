import{_ as n}from"./navigation-item-BOW6Wrwe.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./floating-components-1F_x7pmN.js";import"./button-BND3SCu0.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBNavigationItem/Width",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},active:{control:"boolean"},showIcon:{control:"boolean"},width:{control:"select",options:["full","auto"]},wrap:{control:"boolean"},text:{control:"text"},subNavigationExpanded:{control:"boolean"},backButtonId:{control:"text"},backButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},e={args:{default:'<a href="#">(Default) Auto</a>'},render:t=>({components:{DBNavigationItem:n},setup(){return{args:t}},template:`<ul  :style="{
  width: '400px'
}"  ><DBNavigationItem v-bind="args"   >${t.default}</DBNavigationItem></ul>`})},a={args:{width:"full",default:'<a href="#">Full</a>'},render:t=>({components:{DBNavigationItem:n},setup(){return{args:t}},template:`<ul  :style="{
  width: '400px'
}"  ><DBNavigationItem v-bind="args"   >${t.default}</DBNavigationItem></ul>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<a href="#">(Default) Auto</a>\`
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
    template: \`<ul  :style="{
  width: '400px'
}"  ><DBNavigationItem v-bind="args"   >\${args.default}</DBNavigationItem></ul>\`
  })
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "default": \`<a href="#">Full</a>\`
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
    template: \`<ul  :style="{
  width: '400px'
}"  ><DBNavigationItem v-bind="args"   >\${args.default}</DBNavigationItem></ul>\`
  })
}`,...a.parameters?.docs?.source}}};const p=["DefaultAuto","Full"];export{e as DefaultAuto,a as Full,p as __namedExportsOrder,d as default};
