import{_ as a}from"./card-CbLJh0Dq.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBCard/Elevation Level",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["static","interactive"]},elevationLevel:{control:"select",options:["1","2","3"]},spacing:{control:"select",options:["medium","small","large","none"]},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},n={args:{elevationLevel:"1",default:"<strong>(Default) 1</strong>"},render:e=>({components:{DBCard:a},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},r={args:{elevationLevel:"2",default:"<strong>2</strong>"},render:e=>({components:{DBCard:a},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},t={args:{elevationLevel:"3",default:"<strong>3</strong>"},render:e=>({components:{DBCard:a},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "1",
    "default": \`<strong>(Default) 1</strong>\`
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "2",
    "default": \`<strong>2</strong>\`
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "3",
    "default": \`<strong>3</strong>\`
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
}`,...t.parameters?.docs?.source}}};const u=["DefaultLevel1","Level2","Level3"];export{n as DefaultLevel1,r as Level2,t as Level3,u as __namedExportsOrder,p as default};
