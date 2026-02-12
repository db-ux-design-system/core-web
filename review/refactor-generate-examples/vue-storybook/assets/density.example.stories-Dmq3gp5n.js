import{_ as o}from"./link-B8BfZg0m.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBLink/Density",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"select",options:["adaptive","brand","inline"]},disabled:{control:"boolean"},size:{control:"select",options:["medium","small"]},content:{control:"select",options:["external","internal"]},showIcon:{control:"boolean"},wrap:{control:"boolean"},text:{control:"text"},target:{control:"select",options:["_self","_blank","_parent","_top"]},rel:{control:"text"},hreflang:{control:"text"},referrerPolicy:{control:"select",options:["no-referrer","no-referrer-when-downgrade","origin","origin-when-cross-origin","same-origin","strict-origin","strict-origin-when-cross-origin","unsafe-url"]},role:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},n={args:{"data-density":"functional",href:"#",text:"Functional",default:""},render:e=>({components:{DBLink:o},setup(){return{args:e}},template:`<DBLink v-bind="args"   >${e.default}</DBLink>`})},t={args:{"data-density":"regular",href:"#",text:"(Default) Regular",default:""},render:e=>({components:{DBLink:o},setup(){return{args:e}},template:`<DBLink v-bind="args"   >${e.default}</DBLink>`})},r={args:{"data-density":"expressive",href:"#",text:"Expressive",default:""},render:e=>({components:{DBLink:o},setup(){return{args:e}},template:`<DBLink v-bind="args"   >${e.default}</DBLink>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "href": "#",
    "text": "Functional",
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
    "data-density": "regular",
    "href": "#",
    "text": "(Default) Regular",
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "href": "#",
    "text": "Expressive",
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
}`,...r.parameters?.docs?.source}}};const u=["Functional","DefaultRegular","Expressive"];export{t as DefaultRegular,r as Expressive,n as Functional,u as __namedExportsOrder,d as default};
