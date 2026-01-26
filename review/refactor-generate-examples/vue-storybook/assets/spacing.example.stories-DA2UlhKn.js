import{_ as n}from"./card-DxTKgjQC.js";import"./iframe-D4GwdY-M.js";import"./preload-helper-_n2GBM2K.js";import"./index-CeOJJTBm.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBCard/Spacing",component:n,render:o=>({components:{DBCard:n},setup(){return{args:o}},template:`
      <DBCard v-bind="args">
      ${o.default}
      </DBCard>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{elevationLevel:{control:"text"},spacing:{control:"text"},behavior:{control:"text"}}},e={args:{spacing:"small"}},r={args:{spacing:"medium"}},a={args:{spacing:"large"}},s={args:{spacing:"none"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "small"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "medium"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "large"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "spacing": "none"
  }
}`,...s.parameters?.docs?.source}}};const g=["DefaultSmall","Medium","Large","None"];export{e as DefaultSmall,a as Large,r as Medium,s as None,g as __namedExportsOrder,d as default};
