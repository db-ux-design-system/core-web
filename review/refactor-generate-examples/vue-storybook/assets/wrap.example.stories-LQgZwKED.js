import{_ as r}from"./link-B8BfZg0m.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,c={title:"Components/DBLink/Wrap",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"select",options:["adaptive","brand","inline"]},disabled:{control:"boolean"},size:{control:"select",options:["medium","small"]},content:{control:"select",options:["external","internal"]},showIcon:{control:"boolean"},wrap:{control:"boolean"},text:{control:"text"},target:{control:"select",options:["_self","_blank","_parent","_top"]},rel:{control:"text"},hreflang:{control:"text"},referrerPolicy:{control:"select",options:["no-referrer","no-referrer-when-downgrade","origin","origin-when-cross-origin","same-origin","strict-origin","strict-origin-when-cross-origin","unsafe-url"]},role:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},n={args:{href:"#",text:"(Default) False",wrap:!1,default:""},render:e=>({components:{DBLink:r},setup(){return{args:e}},template:`<DBLink v-bind="args"   >${e.default}</DBLink>`})},t={args:{href:"#",text:"True [Multiline]",wrap:!0,default:""},render:e=>({components:{DBLink:r},setup(){return{args:e}},template:`<div  :style="{
  width: '2ch'
}"  ><DBLink v-bind="args"   >${e.default}</DBLink></div>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "text": "(Default) False",
    "wrap": false,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBLink v-bind="args"   >\${args.default}</DBLink>\`
  })
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "text": "True [Multiline]",
    "wrap": true,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '2ch'
}"  ><DBLink v-bind="args"   >\${args.default}</DBLink></div>\`
  })
}`,...t.parameters?.docs?.source}}};const p=["DefaultFalse","TrueMultiline"];export{n as DefaultFalse,t as TrueMultiline,p as __namedExportsOrder,c as default};
