import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-B6HPeu-1.js";import{n as i,t as a}from"./drawer-header-Dz0dEeFi.js";import{n as o,t as s}from"./drawer-CHtIWbsx.js";var c=t({DefaultWithSpacing:()=>d,WithoutSpacing:()=>f,__namedExportsOrder:()=>p,default:()=>u}),l,u,d,f,p;function m(){return(m=e((()=>{n(),i(),o(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDrawer/Show Spacing`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l(),onCancel:l()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},d={args:{containerSize:`full`,propOverrides:{id:`drawer-spacing-with`},showSpacing:!0,default:`(Default) With Spacing<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>(Default) With Spacing</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:s,DBButton:r,DBDrawerHeader:a},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-spacing-with"   >
                    Open: (Default) With Spacing
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},f={args:{containerSize:`full`,propOverrides:{id:`drawer-spacing-without`},showSpacing:!1,default:`Without Spacing<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>Without Spacing</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:s,DBButton:r,DBDrawerHeader:a},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-spacing-without"   >
                    Open: Without Spacing
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},p=[`DefaultWithSpacing`,`WithoutSpacing`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}}})))()}export{c as i,f as n,m as r,d as t};