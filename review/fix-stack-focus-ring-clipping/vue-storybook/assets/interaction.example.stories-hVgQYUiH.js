import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-B9dyNYE3.js";import{n as r,t as i}from"./popover-DpShlPHs.js";var a,o,s,c,l;function u(){return(u=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBPopover/Interaction`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},s={args:{animation:`disabled`,"data-testid":`popover`,default:`Test<template v-slot:trigger
  ><DBButton data-testid="button">Button</DBButton></template
>`},render:e=>({components:{DBPopover:r,DBButton:n},setup(){return{args:e}},template:`<div class="padding-box"   ><DBPopover v-bind="args"   >${e.default}</DBPopover></div>`})},c={args:{animation:`disabled`,"data-testid":`controlled-popover`,open:!1,default:`Test<template v-slot:trigger
  ><DBButton data-testid="controlled-button"> Button </DBButton></template
>`},render:e=>({components:{DBPopover:r,DBButton:n},setup(){return{args:e}},template:`<div class="padding-box"   ><DBButton data-testid="toggle" :onClick="(event) => toggle()"  >
                    Toggle
                </DBButton><DBPopover v-bind="args"   >${e.default}</DBPopover></div>`})},l=[`Interaction`,`PopoverInteraction1`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    template: \`<div class="padding-box"   ><DBPopover v-bind="args"   >\${args.default}</DBPopover></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    template: \`<div class="padding-box"   ><DBButton data-testid="toggle" :onClick="(event) => toggle()"  >
                    Toggle
                </DBButton><DBPopover v-bind="args"   >\${args.default}</DBPopover></div>\`
  })
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as Interaction,c as PopoverInteraction1,l as __namedExportsOrder,o as default};