import{_ as r}from"./tooltip-bsw76Umn.js";import{_ as a}from"./button-BND3SCu0.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./document-scroll-listener-sPooixGf.js";import"./floating-components-1F_x7pmN.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBTooltip/Delay",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},showArrow:{control:"boolean"},emphasis:{control:"select",options:["weak","strong"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},width:{control:"select",options:["auto","fixed"]},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},variant:{control:"select",options:["description","label"]},autofocus:{control:"boolean"}}},o={args:{id:"tooltip-144",delay:"none",default:"Tooltip"},render:t=>({components:{DBTooltip:r,DBButton:a},setup(){return{args:t}},template:`<DBButton    >
                (Default) None
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},n={args:{delay:"slow",id:"tooltip-15",default:"Tooltip"},render:t=>({components:{DBTooltip:r,DBButton:a},setup(){return{args:t}},template:`<DBButton    >
                Slow
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},e={args:{delay:"fast",id:"tooltip-16",default:"Tooltip"},render:t=>({components:{DBTooltip:r,DBButton:a},setup(){return{args:t}},template:`<DBButton    >
                Fast
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-144",
    "delay": "none",
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
                (Default) None
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "id": "tooltip-15",
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
                Slow
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "id": "tooltip-16",
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
                Fast
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...e.parameters?.docs?.source}}};const f=["DefaultNone","Slow","Fast"];export{o as DefaultNone,e as Fast,n as Slow,f as __namedExportsOrder,D as default};
