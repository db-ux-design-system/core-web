import{_ as r}from"./card-CbLJh0Dq.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBCard/Behavior",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["static","interactive"]},elevationLevel:{control:"select",options:["1","2","3"]},spacing:{control:"select",options:["medium","small","large","none"]},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},e={args:{behavior:"static",default:"<strong>(Default) Static</strong>"},render:t=>({components:{DBCard:r},setup(){return{args:t}},template:`<DBCard v-bind="args"   >${t.default}</DBCard>`})},n={args:{behavior:"interactive",default:"<strong>Interactive</strong>"},render:t=>({components:{DBCard:r},setup(){return{args:t}},template:`<button type="button"   ><DBCard v-bind="args"   >${t.default}</DBCard></button>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "static",
    "default": \`<strong>(Default) Static</strong>\`
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "interactive",
    "default": \`<strong>Interactive</strong>\`
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
}`,...n.parameters?.docs?.source}}};const u=["DefaultStatic","Interactive"];export{e as DefaultStatic,n as Interactive,u as __namedExportsOrder,d as default};
