import{_ as n}from"./badge-CzEzPOtp.js";import{_ as a}from"./infotext-tCTmoIyB.js";import{_ as s}from"./icon-D-Az7Vp_.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";const{fn:E}=__STORYBOOK_MODULE_TEST__,$={title:"Components/DBBadge/BadgeExamples",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},r={args:{semantic:"successful",default:"9"},render:e=>({components:{DBBadge:n,DBIcon:s,DBInfotext:a},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},t={args:{semantic:"informational",default:"12"},render:e=>({components:{DBBadge:n,DBIcon:s,DBInfotext:a},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},o={args:{semantic:"warning",default:"123"},render:e=>({components:{DBBadge:n,DBIcon:s,DBInfotext:a},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},d={args:{size:"small",emphasis:"strong",semantic:"successful",default:"9"},render:e=>({components:{DBBadge:n,DBIcon:s,DBInfotext:a},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},B={args:{size:"small",emphasis:"strong",semantic:"informational",default:"12"},render:e=>({components:{DBBadge:n,DBIcon:s,DBInfotext:a},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},m={args:{size:"small",emphasis:"strong",semantic:"warning",default:"123"},render:e=>({components:{DBBadge:n,DBIcon:s,DBInfotext:a},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},g={args:{size:"medium",default:"(Default) Text - Medium"},render:e=>({components:{DBBadge:n,DBIcon:s,DBInfotext:a},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},c={args:{size:"medium",default:""},render:e=>({components:{DBBadge:n,DBIcon:s,DBInfotext:a},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})},p={args:{semantic:"critical",emphasis:"strong",size:"medium",default:'<DBIcon icon="x_placeholder">Icon - Medium</DBIcon>'},render:e=>({components:{DBBadge:n,DBIcon:s,DBInfotext:a},setup(){return{args:e}},template:`<DBBadge v-bind="args"   >${e.default}</DBBadge>`})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "successful",
    "default": \`9\`
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "informational",
    "default": \`12\`
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "warning",
    "default": \`123\`
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "successful",
    "default": \`9\`
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
}`,...d.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "informational",
    "default": \`12\`
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
}`,...B.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "warning",
    "default": \`123\`
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "default": \`(Default) Text - Medium\`
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
}`,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "emphasis": "strong",
    "size": "medium",
    "default": \`<DBIcon icon="x_placeholder">Icon - Medium</DBIcon>\`
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
}`,...p.parameters?.docs?.source}}};const _=["BadgeExamples0","BadgeExamples1","BadgeExamples2","BadgeExamples3","BadgeExamples4","BadgeExamples5","BadgeExamples6","BadgeExamples7","BadgeExamples8"];export{r as BadgeExamples0,t as BadgeExamples1,o as BadgeExamples2,d as BadgeExamples3,B as BadgeExamples4,m as BadgeExamples5,g as BadgeExamples6,c as BadgeExamples7,p as BadgeExamples8,_ as __namedExportsOrder,$ as default};
