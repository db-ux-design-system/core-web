import{_ as e}from"./tooltip-bsw76Umn.js";import{_ as r}from"./button-BND3SCu0.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,B={title:"Components/DBTooltip/Emphasis",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},showArrow:{control:"boolean"},emphasis:{control:"select",options:["weak","strong"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},width:{control:"select",options:["auto","fixed"]},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},variant:{control:"select",options:["description","label"]},autofocus:{control:"boolean"}}},o={args:{id:"tooltip-06",default:"Tooltip"},render:t=>({components:{DBTooltip:e,DBButton:r},setup(){return{args:t}},template:`<DBButton    >
                (Default) Weak
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},n={args:{emphasis:"strong",id:"tooltip-07",default:"Tooltip"},render:t=>({components:{DBTooltip:e,DBButton:r},setup(){return{args:t}},template:`<DBButton    >
                Strong
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-06",
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
                (Default) Weak
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "id": "tooltip-07",
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
                Strong
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...n.parameters?.docs?.source}}};const D=["DefaultWeak","Strong"];export{o as DefaultWeak,n as Strong,D as __namedExportsOrder,B as default};
