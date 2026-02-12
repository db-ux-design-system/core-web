import{_ as r}from"./drawer-DrQ68kLA.js";import{_ as t}from"./button-BND3SCu0.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBDrawer/Rounded",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean"},width:{control:"select",options:["full","auto"]},rounded:{control:"boolean"},spacing:{control:"select",options:["medium","small","large","none"]},backdrop:{control:"select",options:["none","strong","weak","invisible"]},direction:{control:"select",options:["left","right","up","down"]},variant:{control:"select",options:["modal","inside"]},position:{control:"select",options:["fixed","absolute"]},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},n={args:{rounded:!1,open:!1,onClose:a(),default:"(Default) False"},render:e=>({components:{DBDrawer:r,DBButton:t},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},o={args:{rounded:!0,open:!1,onClose:a(),default:"True"},render:e=>({components:{DBDrawer:r,DBButton:t},setup(){return{args:e}},template:`<div    >Open DBDrawer by switching open property<DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "rounded": false,
    "open": false,
    "onClose": fn(),
    "default": \`(Default) False\`
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
    "rounded": true,
    "open": false,
    "onClose": fn(),
    "default": \`True\`
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
}`,...o.parameters?.docs?.source}}};const D=["DefaultFalse","True"];export{n as DefaultFalse,o as True,D as __namedExportsOrder,u as default};
