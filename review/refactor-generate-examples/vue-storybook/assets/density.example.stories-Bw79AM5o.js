import{_ as r}from"./checkbox-CP42vnGw.js";import"./iframe-6Mx4-xKM.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BI2mJmbL.js";import"./index-S2nzjHTj.js";import"./form-components-DporCuVj.js";import"./infotext-iunmPScm.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBCheckbox/Density",component:r,render:n=>({components:{DBCheckbox:r},setup(){return{args:n}},template:`
      <DBCheckbox v-bind="args">
      ${n.default}
      </DBCheckbox>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"Functional","data-density":"functional",name:"Density"}},t={args:{default:"(Default) Regular","data-density":"regular",name:"Density"}},a={args:{default:"Expressive","data-density":"expressive",name:"Density"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Functional",
    "data-density": "functional",
    "name": "Density"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) Regular",
    "data-density": "regular",
    "name": "Density"
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Expressive",
    "data-density": "expressive",
    "name": "Density"
  }
}`,...a.parameters?.docs?.source}}};const g=["Functional","DefaultRegular","Expressive"];export{t as DefaultRegular,a as Expressive,e as Functional,g as __namedExportsOrder,p as default};
