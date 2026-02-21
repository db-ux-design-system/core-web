import{_ as e}from"./tooltip-B13O0PRa.js";import{_ as r}from"./button-B4loOJxs.js";import"./iframe-gwJ7bdfB.js";import"./preload-helper-BUQEUc4V.js";import"./constants-BMPlMwqI.js";import"./index-DPPzDY5H.js";import"./document-scroll-listener-D4-lwbso.js";import"./floating-components-1F_x7pmN.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,B={title:"Components/DBTooltip/Show Arrow",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},showArrow:{control:"boolean"},emphasis:{control:"select",options:["weak","strong"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},width:{control:"select",options:["auto","fixed"]},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},variant:{control:"select",options:["description","label"]},autofocus:{control:"boolean"}}},o={args:{id:"tooltip-04",showArrow:!0,default:"Tooltip"},render:t=>({components:{DBTooltip:e,DBButton:r},setup(){return{args:t}},template:`<DBButton    >
                (Default) True
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},n={args:{id:"tooltip-05",showArrow:!1,default:"Tooltip"},render:t=>({components:{DBTooltip:e,DBButton:r},setup(){return{args:t}},template:`<DBButton    >
                False
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-04",
    "showArrow": true,
    "default": \`Tooltip\`
  },
  render: (args: any) => ({
    components: {
      DBTooltip,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton    >
                (Default) True
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-05",
    "showArrow": false,
    "default": \`Tooltip\`
  },
  render: (args: any) => ({
    components: {
      DBTooltip,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton    >
                False
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...n.parameters?.docs?.source}}};const D=["DefaultTrue","False"];export{o as DefaultTrue,n as False,D as __namedExportsOrder,B as default};
