import{_ as t}from"./card-CbLJh0Dq.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBCard/Density",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{behavior:{control:"select",options:["static","interactive"]},elevationLevel:{control:"select",options:["1","2","3"]},spacing:{control:"select",options:["medium","small","large","none"]},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},n={args:{"data-density":"functional",default:"<strong>Functional</strong>"},render:e=>({components:{DBCard:t},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},r={args:{"data-density":"regular",default:"<strong>(Default) Regular</strong>"},render:e=>({components:{DBCard:t},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})},a={args:{"data-density":"expressive",default:"<strong>Expressive</strong>"},render:e=>({components:{DBCard:t},setup(){return{args:e}},template:`<DBCard v-bind="args"   >${e.default}</DBCard>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "default": \`<strong>Functional</strong>\`
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
    "data-density": "regular",
    "default": \`<strong>(Default) Regular</strong>\`
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "default": \`<strong>Expressive</strong>\`
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
}`,...a.parameters?.docs?.source}}};const i=["Functional","DefaultRegular","Expressive"];export{r as DefaultRegular,a as Expressive,n as Functional,i as __namedExportsOrder,u as default};
