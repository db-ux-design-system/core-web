import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-vAUgXCTl.js";import{n as r,t as i}from"./drawer-header-YY5zAWRk.js";import{n as a,t as o}from"./drawer-8zLTHy_l.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{t(),r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDrawer/Density`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s(),onCancel:s()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},l={args:{propOverrides:{id:`drawer-density-functional`},default:`Functional<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>Functional</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:o,DBButton:n,DBDrawerHeader:i},setup(){return{args:e}},template:`<div data-density="functional"   ><DBButton command="show-modal" commandfor="drawer-density-functional"   >
                    Open: Functional
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},u={args:{propOverrides:{id:`drawer-density-regular`},default:`(Default) Regular<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>(Default) Regular</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:o,DBButton:n,DBDrawerHeader:i},setup(){return{args:e}},template:`<div data-density="regular"   ><DBButton command="show-modal" commandfor="drawer-density-regular"   >
                    Open: (Default) Regular
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},d={args:{propOverrides:{id:`drawer-density-expressive`},default:`Expressive<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>Expressive</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:o,DBButton:n,DBDrawerHeader:i},setup(){return{args:e}},template:`<div data-density="expressive"   ><DBButton command="show-modal" commandfor="drawer-density-expressive"   >
                    Open: Expressive
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},f=[`Functional`,`DefaultRegular`,`Expressive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-density-functional'
    },
    "default": \`Functional<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>Functional</h2></DBDrawerHeader
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
    template: \`<div data-density="functional"   ><DBButton command="show-modal" commandfor="drawer-density-functional"   >
                    Open: Functional
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-density-regular'
    },
    "default": \`(Default) Regular<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>(Default) Regular</h2></DBDrawerHeader
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
    template: \`<div data-density="regular"   ><DBButton command="show-modal" commandfor="drawer-density-regular"   >
                    Open: (Default) Regular
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-density-expressive'
    },
    "default": \`Expressive<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>Expressive</h2></DBDrawerHeader
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
    template: \`<div data-density="expressive"   ><DBButton command="show-modal" commandfor="drawer-density-expressive"   >
                    Open: Expressive
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...d.parameters?.docs?.source}}}})))()}p();export{u as DefaultRegular,d as Expressive,l as Functional,f as __namedExportsOrder,c as default};