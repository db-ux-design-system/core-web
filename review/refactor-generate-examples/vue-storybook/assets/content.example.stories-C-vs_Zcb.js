import{_ as r}from"./link-B8BfZg0m.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,c={title:"Components/DBLink/Content",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"select",options:["adaptive","brand","inline"]},disabled:{control:"boolean"},size:{control:"select",options:["medium","small"]},content:{control:"select",options:["external","internal"]},showIcon:{control:"boolean"},wrap:{control:"boolean"},text:{control:"text"},target:{control:"select",options:["_self","_blank","_parent","_top"]},rel:{control:"text"},hreflang:{control:"text"},referrerPolicy:{control:"select",options:["no-referrer","no-referrer-when-downgrade","origin","origin-when-cross-origin","same-origin","strict-origin","strict-origin-when-cross-origin","unsafe-url"]},role:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},e={args:{href:"#",text:"(Default) Internal",default:""},render:n=>({components:{DBLink:r},setup(){return{args:n}},template:`<DBLink v-bind="args"   >${n.default}</DBLink>`})},t={args:{href:"#",content:"external",text:"External",default:""},render:n=>({components:{DBLink:r},setup(){return{args:n}},template:`<DBLink v-bind="args"   >${n.default}</DBLink>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "text": "(Default) Internal",
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "content": "external",
    "text": "External",
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
}`,...t.parameters?.docs?.source}}};const p=["DefaultInternal","External"];export{e as DefaultInternal,t as External,p as __namedExportsOrder,c as default};
