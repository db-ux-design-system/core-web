import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-CaFZ3HzC.js";import{n as r,t as i}from"./drawer-header-ySCbWcJF.js";import{n as a,t as o}from"./drawer-C0ZzfCYP.js";var s,c,l,u,d;function f(){return(f=e((()=>{t(),r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDrawer/Show Spacing`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},l={args:{id:`drawer-spacing-with`,containerSize:`full`,open:!1,showSpacing:!0,onClose:s(),default:`(Default) With Spacing<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>(Default) With Spacing</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:o,DBButton:n,DBDrawerHeader:i},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-spacing-with" :onClick="(event) => openIndex = 0"  >
                    Open: (Default) With Spacing
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},u={args:{id:`drawer-spacing-without`,containerSize:`full`,showSpacing:!1,open:!1,onClose:s(),default:`Without Spacing<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>Without Spacing</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:o,DBButton:n,DBDrawerHeader:i},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-spacing-without" :onClick="(event) => openIndex = 1"  >
                    Open: Without Spacing
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},d=[`DefaultWithSpacing`,`WithoutSpacing`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-spacing-with",
    "containerSize": "full",
    "open": false,
    "showSpacing": true,
    "onClose": fn(),
    "default": \`(Default) With Spacing<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>(Default) With Spacing</h2></DBDrawerHeader
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBButton,
      DBDrawerHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="drawer-spacing-with" :onClick="(event) => openIndex = 0"  >
                    Open: (Default) With Spacing
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-spacing-without",
    "containerSize": "full",
    "showSpacing": false,
    "open": false,
    "onClose": fn(),
    "default": \`Without Spacing<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>Without Spacing</h2></DBDrawerHeader
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBButton,
      DBDrawerHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="drawer-spacing-without" :onClick="(event) => openIndex = 1"  >
                    Open: Without Spacing
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultWithSpacing,u as WithoutSpacing,d as __namedExportsOrder,c as default};