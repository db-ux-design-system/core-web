import{_ as r}from"./badge-CzEzPOtp.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBBadge/Emphasis",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},size:{control:"select",options:["small","medium"]},placement:{control:"select",options:["inline","corner-top-left","corner-top-right","corner-center-left","corner-center-right","corner-bottom-left","corner-bottom-right"]},label:{control:"text"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{default:"(Default) Weak"},render:e=>({components:{DBBadge:r},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},n={args:{emphasis:"strong",default:"Strong"},render:e=>({components:{DBBadge:r},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`(Default) Weak\`
  },
  render: (args: any) => ({
    components: {
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "default": \`Strong\`
  },
  render: (args: any) => ({
    components: {
      DBBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...n.parameters?.docs?.source}}};const g=["DefaultWeak","Strong"];export{t as DefaultWeak,n as Strong,g as __namedExportsOrder,p as default};
