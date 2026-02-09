import{_ as s}from"./badge-378uP2Dd.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,l={title:"Components/DBBadge/Density",component:s,render:r=>({components:{DBBadge:s},setup(){return{args:r}},template:`
      <DBBadge v-bind="args">
      ${r.default}
      </DBBadge>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"text"},semantic:{control:"text"},size:{control:"text"},placement:{control:"text"}}},e={args:{default:"Functional","data-density":"functional"}},a={args:{default:"(Default) Regular","data-density":"regular"}},t={args:{default:"Expressive","data-density":"expressive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Functional",
    "data-density": "functional"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) Regular",
    "data-density": "regular"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Expressive",
    "data-density": "expressive"
  }
}`,...t.parameters?.docs?.source}}};const p=["Functional","DefaultRegular","Expressive"];export{a as DefaultRegular,t as Expressive,e as Functional,p as __namedExportsOrder,l as default};
