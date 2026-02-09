import{_ as r}from"./accordion-item-vs6_uibg.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,c={title:"Components/DBAccordionItem/Open",component:r,render:t=>({components:{DBAccordionItem:r},setup(){return{args:t}},template:`
      <DBAccordionItem v-bind="args">
      ${t.default}
      </DBAccordionItem>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headlinePlain:{control:"text"},disabled:{control:"boolean"}}},e={args:{default:"(Default) False",defaultOpen:!1,headlinePlain:"(Default) False"}},a={args:{default:"True",defaultOpen:!0,headlinePlain:"True"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) False",
    "defaultOpen": false,
    "headlinePlain": "(Default) False"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "True",
    "defaultOpen": true,
    "headlinePlain": "True"
  }
}`,...a.parameters?.docs?.source}}};const i=["DefaultFalse","True"];export{e as DefaultFalse,a as True,i as __namedExportsOrder,c as default};
