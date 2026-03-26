import{_ as a}from"./footer-CN0GHHdk.js";import"./iframe-DtAacyY5.js";import"./preload-helper-J29wahVO.js";import"./index-CWeHbbHp.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBFooter/Width",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{showCopyright:{control:"boolean"},showMain:{control:"boolean"},showMeta:{control:"boolean"},width:{control:"select",options:["full","large","small"]},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{width:"full",default:'<slot name="main">Full</slot><slot name="meta">Meta Content</slot>'},render:e=>({components:{DBFooter:a},setup(){return{args:e}},template:`<DBFooter v-bind="args"   >${e.default}</DBFooter>`})},o={args:{width:"large",default:'<slot name="main">Large</slot><slot name="meta">Meta Content</slot>'},render:e=>({components:{DBFooter:a},setup(){return{args:e}},template:`<DBFooter v-bind="args"   >${e.default}</DBFooter>`})},n={args:{width:"small",default:'<slot name="main">Small</slot><slot name="meta">Meta Content</slot>'},render:e=>({components:{DBFooter:a},setup(){return{args:e}},template:`<DBFooter v-bind="args"   >${e.default}</DBFooter>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "default": \`<slot name="main">Full</slot><slot name="meta">Meta Content</slot>\`
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "large",
    "default": \`<slot name="main">Large</slot><slot name="meta">Meta Content</slot>\`
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "small",
    "default": \`<slot name="main">Small</slot><slot name="meta">Meta Content</slot>\`
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
}`,...n.parameters?.docs?.source}}};const c=["Full","Large","Small"];export{t as Full,o as Large,n as Small,c as __namedExportsOrder,u as default};
