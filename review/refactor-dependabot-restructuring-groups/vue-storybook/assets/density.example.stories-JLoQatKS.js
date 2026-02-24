import{_ as r}from"./tag-1Drdia2Y.js";import"./iframe-Dv0wOaMC.js";import"./preload-helper-uFTTf0yU.js";import"./constants-BMPlMwqI.js";import"./index-CwT0vXlV.js";import"./tooltip-z_yZfQZK.js";import"./document-scroll-listener-D7KIqgN2.js";import"./floating-components-1F_x7pmN.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBTag/Density",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},behavior:{control:"select",options:["static","removable"]},showIcon:{control:"boolean"},noText:{control:"boolean"},content:{control:"text"},showCheckState:{control:"boolean"},overflow:{control:"boolean"},removeButton:{control:"text"},text:{control:"text"},value:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onRemove:{action:"onRemove"}}},n={args:{"data-density":"functional",default:"Functional"},render:e=>({components:{DBTag:r},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},t={args:{"data-density":"regular",default:"(Default) Regular"},render:e=>({components:{DBTag:r},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})},a={args:{"data-density":"expressive",default:"Expressive"},render:e=>({components:{DBTag:r},setup(){return{args:e}},template:`<DBTag v-bind="args"   >${e.default}</DBTag>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "default": \`Functional\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "default": \`(Default) Regular\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "default": \`Expressive\`
  },
  render: (args: any) => ({
    components: {
      DBTag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTag v-bind="args"   >\${args.default}</DBTag>\`
  })
}`,...a.parameters?.docs?.source}}};const f=["Functional","DefaultRegular","Expressive"];export{t as DefaultRegular,a as Expressive,n as Functional,f as __namedExportsOrder,m as default};
