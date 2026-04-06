import{_ as o}from"./navigation-item-CKL9cNdS.js";import"./iframe-B_8YGBdU.js";import"./preload-helper-COvGWKxX.js";import"./constants-y2N5m1XS.js";import"./index-CggTMVtt.js";import"./floating-components-CKmcRn_b.js";import"./button-CJtBRNYR.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBNavigationItem/Density",component:o,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:r()},argTypes:{disabled:{control:"boolean"},active:{control:"boolean"},showIcon:{control:"boolean"},width:{control:"select",options:["full","auto"]},wrap:{control:"boolean"},text:{control:"text"},subNavigationExpanded:{control:"boolean"},backButtonId:{control:"text"},backButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},a={args:{"data-density":"functional",default:'<a href="#">Functional</a>'},render:t=>({components:{DBNavigationItem:o},setup(){return{args:t}},template:`<ul    ><DBNavigationItem v-bind="args"   >${t.default}</DBNavigationItem></ul>`})},e={args:{"data-density":"regular",default:'<a href="#">(Default) Regular</a>'},render:t=>({components:{DBNavigationItem:o},setup(){return{args:t}},template:`<ul    ><DBNavigationItem v-bind="args"   >${t.default}</DBNavigationItem></ul>`})},n={args:{"data-density":"expressive",default:'<a href="#">Expressive</a>'},render:t=>({components:{DBNavigationItem:o},setup(){return{args:t}},template:`<ul    ><DBNavigationItem v-bind="args"   >${t.default}</DBNavigationItem></ul>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const g=["Functional","DefaultRegular","Expressive"];export{e as DefaultRegular,n as Expressive,a as Functional,g as __namedExportsOrder,p as default};
