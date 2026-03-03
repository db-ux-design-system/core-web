import{_ as r}from"./button-DTPXZJMh.js";import{_ as a}from"./tooltip-BUtwXAVJ.js";import"./iframe-COxeOdOJ.js";import"./preload-helper-CDE7oBwp.js";import"./index-csvFxEYc.js";import"./document-scroll-listener-BSUHJGOU.js";import"./floating-components-CKmcRn_b.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBTooltip/Delay",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},showArrow:{control:"boolean"},emphasis:{control:"select",options:["weak","strong"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},width:{control:"select",options:["auto","fixed"]},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},variant:{control:"select",options:["description","label"]},autofocus:{control:"boolean"}}},o={args:{id:"tooltip-144",delay:"none",default:"Tooltip"},render:t=>({components:{DBTooltip:a,DBButton:r},setup(){return{args:t}},template:`<DBButton    >
                (Default) None
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},n={args:{delay:"slow",id:"tooltip-15",default:"Tooltip"},render:t=>({components:{DBTooltip:a,DBButton:r},setup(){return{args:t}},template:`<DBButton    >
                Slow
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},e={args:{delay:"fast",id:"tooltip-16",default:"Tooltip"},render:t=>({components:{DBTooltip:a,DBButton:r},setup(){return{args:t}},template:`<DBButton    >
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
}`,...e.parameters?.docs?.source}}};const D=["DefaultNone","Slow","Fast"];export{o as DefaultNone,e as Fast,n as Slow,D as __namedExportsOrder,m as default};
