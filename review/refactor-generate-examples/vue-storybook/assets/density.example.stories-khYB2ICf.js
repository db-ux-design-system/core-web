import{_ as o}from"./navigation-item-BOW6Wrwe.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./floating-components-1F_x7pmN.js";import"./button-BND3SCu0.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBNavigationItem/Density",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},active:{control:"boolean"},showIcon:{control:"boolean"},width:{control:"select",options:["full","auto"]},wrap:{control:"boolean"},text:{control:"text"},subNavigationExpanded:{control:"boolean"},backButtonId:{control:"text"},backButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},e={args:{"data-density":"functional",default:'<a href="#">Functional</a>'},render:t=>({components:{DBNavigationItem:o},setup(){return{args:t}},template:`<ul    ><DBNavigationItem v-bind="args"   >${t.default}</DBNavigationItem></ul>`})},a={args:{"data-density":"regular",default:'<a href="#">(Default) Regular</a>'},render:t=>({components:{DBNavigationItem:o},setup(){return{args:t}},template:`<ul    ><DBNavigationItem v-bind="args"   >${t.default}</DBNavigationItem></ul>`})},n={args:{"data-density":"expressive",default:'<a href="#">Expressive</a>'},render:t=>({components:{DBNavigationItem:o},setup(){return{args:t}},template:`<ul    ><DBNavigationItem v-bind="args"   >${t.default}</DBNavigationItem></ul>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "default": \`<a href="#">Functional</a>\`
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
    "data-density": "regular",
    "default": \`<a href="#">(Default) Regular</a>\`
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "default": \`<a href="#">Expressive</a>\`
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
}`,...n.parameters?.docs?.source}}};const g=["Functional","DefaultRegular","Expressive"];export{a as DefaultRegular,n as Expressive,e as Functional,g as __namedExportsOrder,p as default};
