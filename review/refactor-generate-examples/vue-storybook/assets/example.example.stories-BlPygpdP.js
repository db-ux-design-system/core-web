import{_ as r}from"./drawer-DrQ68kLA.js";import{_ as t}from"./button-BND3SCu0.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBDrawer/Example",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean"},width:{control:"select",options:["full","auto"]},rounded:{control:"boolean"},spacing:{control:"select",options:["medium","small","large","none"]},backdrop:{control:"select",options:["none","strong","weak","invisible"]},direction:{control:"select",options:["left","right","up","down"]},variant:{control:"select",options:["modal","inside"]},position:{control:"select",options:["fixed","absolute"]},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},n={args:{variant:"modal",open:!1,onClose:a(),default:"(Default) As modal"},render:e=>({components:{DBDrawer:r,DBButton:t},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},o={args:{variant:"inside",open:!1,onClose:a(),default:"Inside"},render:e=>({components:{DBDrawer:r,DBButton:t},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "modal",
    "open": false,
    "onClose": fn(),
    "default": \`(Default) As modal\`
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "inside",
    "open": false,
    "onClose": fn(),
    "default": \`Inside\`
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
}`,...o.parameters?.docs?.source}}};const D=["DefaultAsmodal","Inside"];export{n as DefaultAsmodal,o as Inside,D as __namedExportsOrder,u as default};
