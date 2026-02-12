import{_ as e}from"./infotext-tCTmoIyB.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBInfotext/Semantic",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},size:{control:"select",options:["small","medium"]},showIcon:{control:"boolean"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{default:"(Default) Adaptive"},render:n=>({components:{DBInfotext:e},setup(){return{args:n}},template:`<DBInfotext v-bind="args"   >${n.default}</DBInfotext>`})},a={args:{semantic:"neutral",default:"Neutral"},render:n=>({components:{DBInfotext:e},setup(){return{args:n}},template:`<DBInfotext v-bind="args"   >${n.default}</DBInfotext>`})},r={args:{semantic:"critical",default:"Critical"},render:n=>({components:{DBInfotext:e},setup(){return{args:n}},template:`<DBInfotext v-bind="args"   >${n.default}</DBInfotext>`})},s={args:{semantic:"informational",default:"Informational"},render:n=>({components:{DBInfotext:e},setup(){return{args:n}},template:`<DBInfotext v-bind="args"   >${n.default}</DBInfotext>`})},o={args:{semantic:"successful",default:"Successful"},render:n=>({components:{DBInfotext:e},setup(){return{args:n}},template:`<DBInfotext v-bind="args"   >${n.default}</DBInfotext>`})},c={args:{semantic:"warning",default:"Warning"},render:n=>({components:{DBInfotext:e},setup(){return{args:n}},template:`<DBInfotext v-bind="args"   >${n.default}</DBInfotext>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`(Default) Adaptive\`
  },
  render: (args: any) => ({
    components: {
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInfotext v-bind="args"   >\${args.default}</DBInfotext>\`
  })
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "neutral",
    "default": \`Neutral\`
  },
  render: (args: any) => ({
    components: {
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInfotext v-bind="args"   >\${args.default}</DBInfotext>\`
  })
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "default": \`Critical\`
  },
  render: (args: any) => ({
    components: {
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInfotext v-bind="args"   >\${args.default}</DBInfotext>\`
  })
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "informational",
    "default": \`Informational\`
  },
  render: (args: any) => ({
    components: {
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInfotext v-bind="args"   >\${args.default}</DBInfotext>\`
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "successful",
    "default": \`Successful\`
  },
  render: (args: any) => ({
    components: {
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInfotext v-bind="args"   >\${args.default}</DBInfotext>\`
  })
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "warning",
    "default": \`Warning\`
  },
  render: (args: any) => ({
    components: {
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBInfotext v-bind="args"   >\${args.default}</DBInfotext>\`
  })
}`,...c.parameters?.docs?.source}}};const p=["DefaultAdaptive","Neutral","Critical","Informational","Successful","Warning"];export{r as Critical,t as DefaultAdaptive,s as Informational,a as Neutral,o as Successful,c as Warning,p as __namedExportsOrder,d as default};
