import{_ as n}from"./footer-CN0GHHdk.js";import"./iframe-DtAacyY5.js";import"./preload-helper-J29wahVO.js";import"./index-CWeHbbHp.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBFooter/Show Main",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{showCopyright:{control:"boolean"},showMain:{control:"boolean"},showMeta:{control:"boolean"},width:{control:"select",options:["full","large","small"]},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{showMain:!0,default:'<slot name="main">True</slot><slot name="meta">Meta Content</slot>'},render:e=>({components:{DBFooter:n},setup(){return{args:e}},template:`<DBFooter v-bind="args"   >${e.default}</DBFooter>`})},t={args:{showMain:!1,default:'<slot name="main">False</slot><slot name="meta">Meta Content</slot>'},render:e=>({components:{DBFooter:n},setup(){return{args:e}},template:`<DBFooter v-bind="args"   >${e.default}</DBFooter>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "showMain": true,
    "default": \`<slot name="main">True</slot><slot name="meta">Meta Content</slot>\`
  },
  render: (args: any) => ({
    components: {
      DBFooter
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBFooter v-bind="args"   >\${args.default}</DBFooter>\`
  })
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "showMain": false,
    "default": \`<slot name="main">False</slot><slot name="meta">Meta Content</slot>\`
  },
  render: (args: any) => ({
    components: {
      DBFooter
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBFooter v-bind="args"   >\${args.default}</DBFooter>\`
  })
}`,...t.parameters?.docs?.source}}};const c=["True","False"];export{t as False,o as True,c as __namedExportsOrder,u as default};
