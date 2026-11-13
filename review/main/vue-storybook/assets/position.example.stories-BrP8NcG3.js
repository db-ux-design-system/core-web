import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-CWXqZAq2.js";import{n as i,t as a}from"./drawer-header-DjZNa1R1.js";import{n as o,t as s}from"./drawer-CE8QdZ8K.js";var c=t({DefaultFixed:()=>d,__namedExportsOrder:()=>f,default:()=>u}),l,u,d,f;function p(){return(p=e((()=>{n(),i(),o(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDrawer/Position`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l(),onCancel:l()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},d={args:{position:`absolute`,propOverrides:{id:`drawer-position-absolute`},open:!1,onClose:l(),default:`Absolute<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>Absolute</h2></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:s,DBButton:r,DBDrawerHeader:a},setup(){return{args:e}},template:`<div  :style="{
  position: 'relative',
  height: '500px',
  width: '100%',
  border: '2px dashed currentColor',
  overflow: 'hidden'
}"  ><DBButton  :onClick="(event) => absoluteOpen = true"  >
                    Open: Absolute
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},f=[`DefaultFixed`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "position": "absolute",
    "propOverrides": {
      id: 'drawer-position-absolute'
    },
    "open": false,
    "onClose": fn(),
    "default": \`Absolute<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>Absolute</h2></DBDrawerHeader
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
    template: \`<div  :style="{
  position: 'relative',
  height: '500px',
  width: '100%',
  border: '2px dashed currentColor',
  overflow: 'hidden'
}"  ><DBButton  :onClick="(event) => absoluteOpen = true"  >
                    Open: Absolute
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...d.parameters?.docs?.source}}}})))()}export{p as n,c as r,d as t};