import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-CvGJdwBi.js";import{n as i,t as a}from"./popover-CTogqFAp.js";var o=t({Interaction:()=>l,PopoverInteraction1:()=>u,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPopover/Interaction`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},l={args:{animation:`disabled`,"data-testid":`popover`,default:`Test<template v-slot:trigger
  ><DBButton data-testid="button">Button</DBButton></template
>`},render:e=>({components:{DBPopover:i,DBButton:r},setup(){return{args:e}},template:`<div    ><DBPopover v-bind="args"   >${e.default}</DBPopover></div>`})},u={args:{animation:`disabled`,"data-testid":`controlled-popover`,open:!1,default:`Test<template v-slot:trigger
  ><DBButton data-testid="controlled-button"> Button </DBButton></template
>`},render:e=>({components:{DBPopover:i,DBButton:r},setup(){return{args:e}},template:`<div    ><DBButton data-testid="toggle" :onClick="(event) => toggle()"  >
                    Toggle
                </DBButton><DBPopover v-bind="args"   >${e.default}</DBPopover></div>`})},d=[`Interaction`,`PopoverInteraction1`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "animation": "disabled",
    "data-testid": "popover",
    "default": \`Test<template v-slot:trigger
  ><DBButton data-testid="button">Button</DBButton></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBPopover,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBPopover v-bind="args"   >\${args.default}</DBPopover></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "animation": "disabled",
    "data-testid": "controlled-popover",
    "open": false,
    "default": \`Test<template v-slot:trigger
  ><DBButton data-testid="controlled-button"> Button </DBButton></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBPopover,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton data-testid="toggle" :onClick="(event) => toggle()"  >
                    Toggle
                </DBButton><DBPopover v-bind="args"   >\${args.default}</DBPopover></div>\`
  })
}`,...u.parameters?.docs?.source}}}})))()}export{o as i,u as n,f as r,l as t};