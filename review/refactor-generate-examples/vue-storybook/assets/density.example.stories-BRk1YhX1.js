import{_ as s}from"./card-Dcjfg6X8.js";import"./iframe-CjHKGCyo.js";import"./preload-helper-_n2GBM2K.js";import"./index-CeOJJTBm.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBCard/Density",component:s,render:t=>({components:{DBCard:s},setup(){return{args:t}},template:`
      <DBCard v-bind="args">
      ${t.default}
      </DBCard>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{elevationLevel:{control:"text"},spacing:{control:"text"},behavior:{control:"text"}}},e={args:{"data-density":"functional"}},r={args:{"data-density":"regular"}},a={args:{"data-density":"expressive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive"
  }
}`,...a.parameters?.docs?.source}}};const m=["Functional","DefaultRegular","Expressive"];export{r as DefaultRegular,a as Expressive,e as Functional,m as __namedExportsOrder,p as default};
