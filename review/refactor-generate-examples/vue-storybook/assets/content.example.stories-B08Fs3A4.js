import{_ as r}from"./badge-CzEzPOtp.js";import{_ as o}from"./infotext-tCTmoIyB.js";import{_ as s}from"./icon-D-Az7Vp_.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBBadge/Content",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},size:{control:"select",options:["small","medium"]},placement:{control:"select",options:["inline","corner-top-left","corner-top-right","corner-center-left","corner-center-right","corner-bottom-left","corner-bottom-right"]},label:{control:"text"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{default:"(Default) Text"},render:e=>({components:{DBBadge:r,DBIcon:s,DBInfotext:o},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},t={args:{default:""},render:e=>({components:{DBBadge:r,DBIcon:s,DBInfotext:o},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},a={args:{semantic:"critical",emphasis:"strong",default:'<DBIcon icon="x_placeholder">Icon - Small</DBIcon>'},render:e=>({components:{DBBadge:r,DBIcon:s,DBInfotext:o},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`(Default) Text\`
  },
  render: (args: any) => ({
    components: {
      DBBadge,
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBBadge,
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "emphasis": "strong",
    "default": \`<DBIcon icon="x_placeholder">Icon - Small</DBIcon>\`
  },
  render: (args: any) => ({
    components: {
      DBBadge,
      DBIcon,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBadge v-bind="args"   >\${args.default}</DBBadge>\`
  })
}`,...a.parameters?.docs?.source}}};const D=["DefaultText","DotSmall","IconSmall"];export{n as DefaultText,t as DotSmall,a as IconSmall,D as __namedExportsOrder,u as default};
