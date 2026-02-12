import{_ as a}from"./card-CbLJh0Dq.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBCard/Example",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["static","interactive"]},elevationLevel:{control:"select",options:["1","2","3"]},spacing:{control:"select",options:["medium","small","large","none"]},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},t={args:{elevationLevel:"1",behavior:"interactive",default:"<strong>Level 1 - Interactive</strong>"},render:e=>({components:{DBCard:a},setup(){return{args:e}},template:`<button type="button"   ><DBCard v-bind="args"   >${e.default}</DBCard></button>`})},n={args:{elevationLevel:"2",behavior:"interactive",default:"<strong>Level 2 - Interactive</strong>"},render:e=>({components:{DBCard:a},setup(){return{args:e}},template:`<button type="button"   ><DBCard v-bind="args"   >${e.default}</DBCard></button>`})},r={args:{elevationLevel:"3",behavior:"interactive",default:"<strong>Level 3 - Interactive</strong>"},render:e=>({components:{DBCard:a},setup(){return{args:e}},template:`<button type="button"   ><DBCard v-bind="args"   >${e.default}</DBCard></button>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "1",
    "behavior": "interactive",
    "default": \`<strong>Level 1 - Interactive</strong>\`
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
    template: \`<button type="button"   ><DBCard v-bind="args"   >\${args.default}</DBCard></button>\`
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "2",
    "behavior": "interactive",
    "default": \`<strong>Level 2 - Interactive</strong>\`
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
    template: \`<button type="button"   ><DBCard v-bind="args"   >\${args.default}</DBCard></button>\`
  })
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "3",
    "behavior": "interactive",
    "default": \`<strong>Level 3 - Interactive</strong>\`
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
    template: \`<button type="button"   ><DBCard v-bind="args"   >\${args.default}</DBCard></button>\`
  })
}`,...r.parameters?.docs?.source}}};const v=["Level1Interactive","Level2Interactive","Level3Interactive"];export{t as Level1Interactive,n as Level2Interactive,r as Level3Interactive,v as __namedExportsOrder,d as default};
