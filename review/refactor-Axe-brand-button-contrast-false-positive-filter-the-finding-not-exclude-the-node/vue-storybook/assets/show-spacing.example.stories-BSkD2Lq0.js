import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-B0hcS9Xm.js";import{n as r,t as i}from"./drawer-header-BgO_FC6w.js";import{n as a,t as o}from"./drawer-B5zNxXin.js";var s,c,l,u,d;function f(){return(f=e((()=>{t(),r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDrawer/Show Spacing`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s(),onCancel:s()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},l={args:{containerSize:`full`,propOverrides:{id:`drawer-spacing-with`},showSpacing:!0,default:`(Default) With Spacing<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>(Default) With Spacing</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:o,DBButton:n,DBDrawerHeader:i},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-spacing-with"   >
                    Open: (Default) With Spacing
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},u={args:{containerSize:`full`,propOverrides:{id:`drawer-spacing-without`},showSpacing:!1,default:`Without Spacing<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>Without Spacing</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:o,DBButton:n,DBDrawerHeader:i},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-spacing-without"   >
                    Open: Without Spacing
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},d=[`DefaultWithSpacing`,`WithoutSpacing`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "containerSize": "full",
    "propOverrides": {
      id: 'drawer-spacing-with'
    },
    "showSpacing": true,
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
    template: \`<div    ><DBButton command="show-modal" commandfor="drawer-spacing-with"   >
                    Open: (Default) With Spacing
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "containerSize": "full",
    "propOverrides": {
      id: 'drawer-spacing-without'
    },
    "showSpacing": false,
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
    template: \`<div    ><DBButton command="show-modal" commandfor="drawer-spacing-without"   >
                    Open: Without Spacing
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultWithSpacing,u as WithoutSpacing,d as __namedExportsOrder,c as default};