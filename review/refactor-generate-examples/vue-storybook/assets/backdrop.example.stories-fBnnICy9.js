import{_ as n}from"./drawer-DrQ68kLA.js";import{_ as s}from"./button-BND3SCu0.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,B={title:"Components/DBDrawer/Backdrop",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean"},width:{control:"select",options:["full","auto"]},rounded:{control:"boolean"},spacing:{control:"select",options:["medium","small","large","none"]},backdrop:{control:"select",options:["none","strong","weak","invisible"]},direction:{control:"select",options:["left","right","up","down"]},variant:{control:"select",options:["modal","inside"]},position:{control:"select",options:["fixed","absolute"]},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},r={args:{backdrop:"strong",open:!1,onClose:p(),default:"(Default) Strong"},render:e=>({components:{DBDrawer:n,DBButton:s},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},o={args:{backdrop:"weak",open:!1,onClose:p(),default:"Weak"},render:e=>({components:{DBDrawer:n,DBButton:s},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},t={args:{backdrop:"invisible",open:!1,onClose:p(),default:"Invisible"},render:e=>({components:{DBDrawer:n,DBButton:s},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},a={args:{backdrop:"none",open:!1,onClose:p(),default:"No Backdrop"},render:e=>({components:{DBDrawer:n,DBButton:s},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "strong",
    "open": false,
    "onClose": fn(),
    "default": \`(Default) Strong\`
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
    "backdrop": "weak",
    "open": false,
    "onClose": fn(),
    "default": \`Weak\`
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "invisible",
    "open": false,
    "onClose": fn(),
    "default": \`Invisible\`
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "none",
    "open": false,
    "onClose": fn(),
    "default": \`No Backdrop\`
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
}`,...a.parameters?.docs?.source}}};const m=["DefaultStrong","Weak","Invisible","NoBackdrop"];export{r as DefaultStrong,t as Invisible,a as NoBackdrop,o as Weak,m as __namedExportsOrder,B as default};
