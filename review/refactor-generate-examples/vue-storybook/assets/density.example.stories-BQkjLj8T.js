import{_ as t}from"./accordion-item-2PqwYMsw.js";import"./iframe-6Mx4-xKM.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BI2mJmbL.js";import"./index-S2nzjHTj.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBAccordionItem/Density",component:t,render:r=>({components:{DBAccordionItem:t},setup(){return{args:r}},template:`
      <DBAccordionItem v-bind="args">
      ${r.default}
      </DBAccordionItem>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headlinePlain:{control:"text"},disabled:{control:"boolean"}}},e={args:{default:"Functional","data-density":"functional",headlinePlain:"Functional"}},a={args:{default:"(Default) Regular","data-density":"regular",headlinePlain:"(Default) Regular"}},n={args:{default:"Expressive","data-density":"expressive",headlinePlain:"Expressive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Functional",
    "data-density": "functional",
    "headlinePlain": "Functional"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) Regular",
    "data-density": "regular",
    "headlinePlain": "(Default) Regular"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Expressive",
    "data-density": "expressive",
    "headlinePlain": "Expressive"
  }
}`,...n.parameters?.docs?.source}}};const p=["Functional","DefaultRegular","Expressive"];export{a as DefaultRegular,n as Expressive,e as Functional,p as __namedExportsOrder,u as default};
