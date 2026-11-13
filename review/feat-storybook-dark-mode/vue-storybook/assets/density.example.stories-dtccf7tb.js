import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-B1lcHs5H.js";import{n as i,t as a}from"./drawer-header-DZ-fmIVK.js";import{n as o,t as s}from"./drawer-BlENne6E.js";var c=t({DefaultRegular:()=>f,Expressive:()=>p,Functional:()=>d,__namedExportsOrder:()=>m,default:()=>u}),l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i(),o(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDrawer/Density`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l(),onCancel:l()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},d={args:{propOverrides:{id:`drawer-density-functional`},default:`Functional<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>Functional</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:s,DBButton:r,DBDrawerHeader:a},setup(){return{args:e}},template:`<div data-density="functional"   ><DBButton command="show-modal" commandfor="drawer-density-functional"   >
                    Open: Functional
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},f={args:{propOverrides:{id:`drawer-density-regular`},default:`(Default) Regular<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>(Default) Regular</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:s,DBButton:r,DBDrawerHeader:a},setup(){return{args:e}},template:`<div data-density="regular"   ><DBButton command="show-modal" commandfor="drawer-density-regular"   >
                    Open: (Default) Regular
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},p={args:{propOverrides:{id:`drawer-density-expressive`},default:`Expressive<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>Expressive</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:s,DBButton:r,DBDrawerHeader:a},setup(){return{args:e}},template:`<div data-density="expressive"   ><DBButton command="show-modal" commandfor="drawer-density-expressive"   >
                    Open: Expressive
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},m=[`Functional`,`DefaultRegular`,`Expressive`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,c as i,p as n,d as r,f as t};