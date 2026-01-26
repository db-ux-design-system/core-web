import{_ as s}from"./infotext-CNKaL6ue.js";import"./iframe-D4GwdY-M.js";import"./preload-helper-_n2GBM2K.js";import"./index-CeOJJTBm.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,i={title:"Components/DBInfotext/Density",component:s,render:r=>({components:{DBInfotext:s},setup(){return{args:r}},template:`
      <DBInfotext v-bind="args">
      ${r.default}
      </DBInfotext>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{semantic:{control:"text"},size:{control:"text"},showIcon:{control:"boolean"}}},e={args:{default:"Functional","data-density":"functional"}},t={args:{default:"(Default) Regular","data-density":"regular"}},a={args:{default:"Expressive","data-density":"expressive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Functional",
    "data-density": "functional"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) Regular",
    "data-density": "regular"
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Expressive",
    "data-density": "expressive"
  }
}`,...a.parameters?.docs?.source}}};const l=["Functional","DefaultRegular","Expressive"];export{t as DefaultRegular,a as Expressive,e as Functional,l as __namedExportsOrder,i as default};
