import{_ as n}from"./drawer-DrQ68kLA.js";import{_ as s}from"./button-BND3SCu0.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBDrawer/Spacing",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean"},width:{control:"select",options:["full","auto"]},rounded:{control:"boolean"},spacing:{control:"select",options:["medium","small","large","none"]},backdrop:{control:"select",options:["none","strong","weak","invisible"]},direction:{control:"select",options:["left","right","up","down"]},variant:{control:"select",options:["modal","inside"]},position:{control:"select",options:["fixed","absolute"]},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},r={args:{open:!1,onClose:p(),default:"(Default) Medium"},render:e=>({components:{DBDrawer:n,DBButton:s},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},o={args:{spacing:"small",open:!1,onClose:p(),default:"Small"},render:e=>({components:{DBDrawer:n,DBButton:s},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},a={args:{spacing:"large",open:!1,onClose:p(),default:"Large"},render:e=>({components:{DBDrawer:n,DBButton:s},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},t={args:{spacing:"none",open:!1,onClose:p(),default:"None"},render:e=>({components:{DBDrawer:n,DBButton:s},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "default": \`(Default) Medium\`
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
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "small",
    "open": false,
    "onClose": fn(),
    "default": \`Small\`
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
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "large",
    "open": false,
    "onClose": fn(),
    "default": \`Large\`
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
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "none",
    "open": false,
    "onClose": fn(),
    "default": \`None\`
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
    template: \`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...t.parameters?.docs?.source}}};const g=["DefaultMedium","Small","Large","None"];export{r as DefaultMedium,a as Large,t as None,o as Small,g as __namedExportsOrder,m as default};
