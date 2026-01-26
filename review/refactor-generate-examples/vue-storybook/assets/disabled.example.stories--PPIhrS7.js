import{_ as t}from"./accordion-item-bVI0gkkD.js";import"./iframe-CjHKGCyo.js";import"./preload-helper-_n2GBM2K.js";import"./constants-B3j-ayWu.js";import"./index-CeOJJTBm.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,i={title:"Components/DBAccordionItem/Disabled",component:t,render:r=>({components:{DBAccordionItem:t},setup(){return{args:r}},template:`
      <DBAccordionItem v-bind="args">
      ${r.default}
      </DBAccordionItem>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headlinePlain:{control:"text"},disabled:{control:"boolean"}}},e={args:{default:"(Default) False",disabled:!1,headlinePlain:"(Default) False"}},a={args:{default:"True",disabled:!0,headlinePlain:"True"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) False",
    "disabled": false,
    "headlinePlain": "(Default) False"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "True",
    "disabled": true,
    "headlinePlain": "True"
  }
}`,...a.parameters?.docs?.source}}};const u=["DefaultFalse","True"];export{e as DefaultFalse,a as True,u as __namedExportsOrder,i as default};
