import{_ as r}from"./badge-378uP2Dd.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBBadge/Emphasis",component:r,render:a=>({components:{DBBadge:r},setup(){return{args:a}},template:`
      <DBBadge v-bind="args">
      ${a.default}
      </DBBadge>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"text"},semantic:{control:"text"},size:{control:"text"},placement:{control:"text"}}},e={args:{default:"(Default) Weak"}},t={args:{default:"Strong",emphasis:"strong"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) Weak"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Strong",
    "emphasis": "strong"
  }
}`,...t.parameters?.docs?.source}}};const l=["DefaultWeak","Strong"];export{e as DefaultWeak,t as Strong,l as __namedExportsOrder,d as default};
