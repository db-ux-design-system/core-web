import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./navigation-item-CirHcNzR.js";var i=t({DefaultFalse:()=>s,True:()=>c,__namedExportsOrder:()=>l,default:()=>o}),a,o,s,c,l;function u(){return(u=e((()=>{r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBNavigationItem/Wrap`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{default:`<a href="#">No Wrap (Default)</a>`},render:e=>({components:{DBNavigationItem:n},setup(){return{args:e}},template:`<ul    ><DBNavigationItem v-bind="args"   >${e.default}</DBNavigationItem></ul>`})},c={args:{text:`This is a very long text that is broken into multiple lines.`,icon:`x_placeholder`,showIcon:!0,wrap:!0,default:`<template v-slot:sub-navigation
  ><DBNavigationItem text="Sub-Navi-Item 1"
    ><template v-slot:sub-navigation
      ><DBNavigationItem><a href="#">Sub-Sub-Navi-Item 1</a></DBNavigationItem>
      <DBNavigationItem
        ><a href="#">Sub-Sub-Navi-Item 2</a></DBNavigationItem
      ></template
    ></DBNavigationItem
  >
  <DBNavigationItem><a href="#">Sub-Navi-Item 2</a></DBNavigationItem></template
>`},render:e=>({components:{DBNavigationItem:n},setup(){return{args:e}},template:`<ul  :style="{
  width: '200px'
}"  ><DBNavigationItem v-bind="args"   >${e.default}</DBNavigationItem></ul>`})},l=[`DefaultFalse`,`True`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "text": "This is a very long text that is broken into multiple lines.",
    "icon": "x_placeholder",
    "showIcon": true,
    "wrap": true,
    "default": \`<template v-slot:sub-navigation
  ><DBNavigationItem text="Sub-Navi-Item 1"
    ><template v-slot:sub-navigation
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
}`,...c.parameters?.docs?.source}}}})))()}export{i,c as n,u as r,s as t};