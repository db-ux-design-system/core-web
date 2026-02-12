import{_ as r}from"./card-CbLJh0Dq.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBCard/Spacing",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["static","interactive"]},elevationLevel:{control:"select",options:["1","2","3"]},spacing:{control:"select",options:["medium","small","large","none"]},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},e={args:{spacing:"small",default:"<strong>(Default) Small</strong>"},render:n=>({components:{DBCard:r},setup(){return{args:n}},template:`<DBCard v-bind="args"   >${n.default}</DBCard>`})},a={args:{spacing:"medium",default:"<strong>Medium</strong>"},render:n=>({components:{DBCard:r},setup(){return{args:n}},template:`<DBCard v-bind="args"   >${n.default}</DBCard>`})},t={args:{spacing:"large",default:"<strong>Large</strong>"},render:n=>({components:{DBCard:r},setup(){return{args:n}},template:`<DBCard v-bind="args"   >${n.default}</DBCard>`})},s={args:{spacing:"none",default:"<strong>None</strong>"},render:n=>({components:{DBCard:r},setup(){return{args:n}},template:`<DBCard v-bind="args"   >${n.default}</DBCard>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "small",
    "default": \`<strong>(Default) Small</strong>\`
  },
  render: (args: any) => ({
    components: {
      DBCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCard v-bind="args"   >\${args.default}</DBCard>\`
  })
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "medium",
    "default": \`<strong>Medium</strong>\`
  },
  render: (args: any) => ({
    components: {
      DBCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCard v-bind="args"   >\${args.default}</DBCard>\`
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "large",
    "default": \`<strong>Large</strong>\`
  },
  render: (args: any) => ({
    components: {
      DBCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCard v-bind="args"   >\${args.default}</DBCard>\`
  })
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "none",
    "default": \`<strong>None</strong>\`
  },
  render: (args: any) => ({
    components: {
      DBCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCard v-bind="args"   >\${args.default}</DBCard>\`
  })
}`,...s.parameters?.docs?.source}}};const m=["DefaultSmall","Medium","Large","None"];export{e as DefaultSmall,t as Large,a as Medium,s as None,m as __namedExportsOrder,p as default};
