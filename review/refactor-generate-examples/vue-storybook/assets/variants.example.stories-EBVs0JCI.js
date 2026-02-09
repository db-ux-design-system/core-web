import{_ as a}from"./brand-dAFNSHk8.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBBrand/Variants",component:a,render:t=>({components:{DBBrand:a},setup(){return{args:t}},template:`
      <DBBrand v-bind="args">
      ${t.default}
      </DBBrand>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{hideLogo:{control:"text"}}},o={args:{default:"(Default) With Logo"}},e={args:{default:"No Logo",hideLogo:!0}},r={args:{default:`<img alt="this is a fancy placeholder logo" :src="getImage()" />
    Custom Logo`,hideLogo:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) With Logo"
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "No Logo",
    "hideLogo": true
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<img alt="this is a fancy placeholder logo" :src="getImage()" />
    Custom Logo\`,
    "hideLogo": true
  }
}`,...r.parameters?.docs?.source}}};const i=["DefaultWithLogo","NoLogo","CustomLogo"];export{r as CustomLogo,o as DefaultWithLogo,e as NoLogo,i as __namedExportsOrder,u as default};
