import{_ as a}from"./drawer-DrQ68kLA.js";import{_ as o}from"./button-BND3SCu0.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBDrawer/Density",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean"},width:{control:"select",options:["full","auto"]},rounded:{control:"boolean"},spacing:{control:"select",options:["medium","small","large","none"]},backdrop:{control:"select",options:["none","strong","weak","invisible"]},direction:{control:"select",options:["left","right","up","down"]},variant:{control:"select",options:["modal","inside"]},position:{control:"select",options:["fixed","absolute"]},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},n={args:{"data-density":"functional",open:!1,onClose:s(),default:"Functional"},render:e=>({components:{DBDrawer:a,DBButton:o},setup(){return{args:e}},template:`<div data-density="functional"   >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},r={args:{"data-density":"regular",open:!1,onClose:s(),default:"(Default) Regular"},render:e=>({components:{DBDrawer:a,DBButton:o},setup(){return{args:e}},template:`<div data-density="regular"   >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},t={args:{"data-density":"expressive",open:!1,onClose:s(),default:"Expressive"},render:e=>({components:{DBDrawer:a,DBButton:o},setup(){return{args:e}},template:`<div data-density="expressive"   >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "open": false,
    "onClose": fn(),
    "default": \`Functional\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="functional"   >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "open": false,
    "onClose": fn(),
    "default": \`(Default) Regular\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="regular"   >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "open": false,
    "onClose": fn(),
    "default": \`Expressive\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="expressive"   >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...t.parameters?.docs?.source}}};const m=["Functional","DefaultRegular","Expressive"];export{r as DefaultRegular,t as Expressive,n as Functional,m as __namedExportsOrder,D as default};
