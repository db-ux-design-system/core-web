import{_ as a}from"./card-DwEXE84J.js";import"./iframe-DibQWrOg.js";import"./preload-helper-_n2GBM2K.js";import"./index-hMc7d43z.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBCard/Behavior",component:a,render:r=>({components:{DBCard:a},setup(){return{args:r}},template:`
      <DBCard v-bind="args">
      ${r.default}
      </DBCard>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{elevationLevel:{control:"text"},spacing:{control:"text"},behavior:{control:"text"}}},e={args:{behavior:"static"}},t={args:{behavior:"interactive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "static"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "interactive"
  }
}`,...t.parameters?.docs?.source}}};const m=["DefaultStatic","Interactive"];export{e as DefaultStatic,t as Interactive,m as __namedExportsOrder,p as default};
