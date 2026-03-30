import{_ as r}from"./button-BuO9u3CJ.js";import{_ as n}from"./tooltip-BtS4CKXc.js";import"./iframe-B8ME7r0t.js";import"./preload-helper-CQhCriSn.js";import"./index-B4uakXIv.js";import"./constants-y2N5m1XS.js";import"./document-scroll-listener-Di23ImBo.js";import"./floating-components-CKmcRn_b.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,B={title:"Components/DBTooltip/Width",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},showArrow:{control:"boolean"},emphasis:{control:"select",options:["weak","strong"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},width:{control:"select",options:["auto","fixed"]},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},variant:{control:"select",options:["description","label"]},autofocus:{control:"boolean"}}},o={args:{id:"tooltip-12",default:"Max width, lorem ipsum dolor sit amet, consetetur sadipscing"},render:t=>({components:{DBTooltip:n,DBButton:r},setup(){return{args:t}},template:`<DBButton    >
                (Default) Auto
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},e={args:{width:"fixed",id:"tooltip-13",default:"Max width, lorem ipsum dolor sit amet, consetetur sadipscing"},render:t=>({components:{DBTooltip:n,DBButton:r},setup(){return{args:t}},template:`<DBButton    >
                Fixed
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-12",
    "default": \`Max width, lorem ipsum dolor sit amet, consetetur sadipscing\`
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
                (Default) Auto
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "fixed",
    "id": "tooltip-13",
    "default": \`Max width, lorem ipsum dolor sit amet, consetetur sadipscing\`
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
                Fixed
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...e.parameters?.docs?.source}}};const D=["DefaultAuto","Fixed"];export{o as DefaultAuto,e as Fixed,D as __namedExportsOrder,B as default};
