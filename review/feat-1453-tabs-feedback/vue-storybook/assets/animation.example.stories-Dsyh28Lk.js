import{_ as a}from"./button-CQty3kLR.js";import{_ as e}from"./tooltip-DmFzGVFi.js";import"./iframe-DH8My9CQ.js";import"./preload-helper-CDE7oBwp.js";import"./index-BqjHKMWU.js";import"./document-scroll-listener-DtRUwBR7.js";import"./floating-components-CKmcRn_b.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBTooltip/Animation",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},showArrow:{control:"boolean"},emphasis:{control:"select",options:["weak","strong"]},placement:{control:"select",options:["top","bottom","top-start","top-end","bottom-start","bottom-end","left","right","left-start","left-end","right-start","right-end"]},width:{control:"select",options:["auto","fixed"]},animation:{control:"boolean"},delay:{control:"select",options:["none","slow","fast"]},variant:{control:"select",options:["description","label"]},autofocus:{control:"boolean"}}},o={args:{id:"tooltip-14",animation:!0,default:"Tooltip"},render:t=>({components:{DBTooltip:e,DBButton:a},setup(){return{args:t}},template:`<DBButton    >
                (Default) True
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})},n={args:{id:"tooltip-17",animation:!1,default:"Tooltip"},render:t=>({components:{DBTooltip:e,DBButton:a},setup(){return{args:t}},template:`<DBButton    >
                False
                <DBTooltip v-bind="args"   >${t.default}</DBTooltip></DBButton>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-14",
    "animation": true,
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
    "id": "tooltip-17",
    "animation": false,
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
}`,...n.parameters?.docs?.source}}};const B=["DefaultTrue","False"];export{o as DefaultTrue,n as False,B as __namedExportsOrder,d as default};
