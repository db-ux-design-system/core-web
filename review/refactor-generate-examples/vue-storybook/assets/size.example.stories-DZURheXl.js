import{_ as r}from"./badge-378uP2Dd.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,l={title:"Components/DBBadge/Size",component:r,render:a=>({components:{DBBadge:r},setup(){return{args:a}},template:`
      <DBBadge v-bind="args">
      ${a.default}
      </DBBadge>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"text"},semantic:{control:"text"},size:{control:"text"},placement:{control:"text"}}},e={args:{default:"(Default) Small"}},t={args:{default:"Medium",size:"medium"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) Small"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Medium",
    "size": "medium"
  }
}`,...t.parameters?.docs?.source}}};const u=["DefaultSmall","Medium"];export{e as DefaultSmall,t as Medium,u as __namedExportsOrder,l as default};
