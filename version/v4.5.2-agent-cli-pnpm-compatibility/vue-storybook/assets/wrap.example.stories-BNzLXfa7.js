import{_ as n}from"./navigation-item-DkXzkXzr.js";import"./iframe-Dqty9p2x.js";import"./preload-helper-BFlDYBMr.js";import"./constants-y2N5m1XS.js";import"./index-B2WiKbs4.js";import"./floating-components-CKmcRn_b.js";import"./button-DCIvoyob.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBNavigationItem/Wrap",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},active:{control:"boolean"},showIcon:{control:"boolean"},width:{control:"select",options:["full","auto"]},wrap:{control:"boolean"},text:{control:"text"},subNavigationExpanded:{control:"boolean"},backButtonId:{control:"text"},backButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},a={args:{default:'<a href="#">No Wrap (Default)</a>'},render:t=>({components:{DBNavigationItem:n},setup(){return{args:t}},template:`<ul    ><DBNavigationItem v-bind="args"   >${t.default}</DBNavigationItem></ul>`})},e={args:{icon:"x_placeholder",showIcon:!0,wrap:!0,default:`This is a very long text that is broken into multiple lines.<template
  v-slot:sub-navigation
  ><DBNavigationItem>
    Sub-Navi-Item 1
    <template v-slot:sub-navigation
      ><DBNavigationItem><a href="#">Sub-Sub-Navi-Item 1</a></DBNavigationItem>
      <DBNavigationItem
        ><a href="#">Sub-Sub-Navi-Item 2</a></DBNavigationItem
      ></template
    ></DBNavigationItem
  >
  <DBNavigationItem><a href="#">Sub-Navi-Item 2</a></DBNavigationItem></template
>`},render:t=>({components:{DBNavigationItem:n},setup(){return{args:t}},template:`<ul  :style="{
  width: '200px'
}"  ><DBNavigationItem v-bind="args"   >${t.default}</DBNavigationItem></ul>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<a href="#">No Wrap (Default)</a>\`
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
    "icon": "x_placeholder",
    "showIcon": true,
    "wrap": true,
    "default": \`This is a very long text that is broken into multiple lines.<template
  v-slot:sub-navigation
  ><DBNavigationItem>
    Sub-Navi-Item 1
    <template v-slot:sub-navigation
      ><DBNavigationItem><a href="#">Sub-Sub-Navi-Item 1</a></DBNavigationItem>
      <DBNavigationItem
        ><a href="#">Sub-Sub-Navi-Item 2</a></DBNavigationItem
      ></template
    ></DBNavigationItem
  >
  <DBNavigationItem><a href="#">Sub-Navi-Item 2</a></DBNavigationItem></template
>\`
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
  width: '200px'
}"  ><DBNavigationItem v-bind="args"   >\${args.default}</DBNavigationItem></ul>\`
  })
}`,...e.parameters?.docs?.source}}};const g=["DefaultFalse","True"];export{a as DefaultFalse,e as True,g as __namedExportsOrder,v as default};
