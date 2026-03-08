import{_ as e}from"./notification-BKG2d2zS.js";import"./iframe-eBBx05hg.js";import"./preload-helper-B-w8sMNO.js";import"./constants-y2N5m1XS.js";import"./index-BSAZCWsy.js";import"./button-CvRvcXD9.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBNotification/Show Icon",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},t={args:{icon:"information_circle",showIcon:!0,default:"(Default) True"},render:o=>({components:{DBNotification:e},setup(){return{args:o}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${o.default}</DBNotification></div>`})},n={args:{icon:"information_circle",showIcon:!1,default:"False"},render:o=>({components:{DBNotification:e},setup(){return{args:o}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${o.default}</DBNotification></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "showIcon": true,
    "default": \`(Default) True\`
  },
  render: (args: any) => ({
    components: {
      DBNotification
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >\${args.default}</DBNotification></div>\`
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "showIcon": false,
    "default": \`False\`
  },
  render: (args: any) => ({
    components: {
      DBNotification
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >\${args.default}</DBNotification></div>\`
  })
}`,...n.parameters?.docs?.source}}};const u=["DefaultTrue","False"];export{t as DefaultTrue,n as False,u as __namedExportsOrder,p as default};
