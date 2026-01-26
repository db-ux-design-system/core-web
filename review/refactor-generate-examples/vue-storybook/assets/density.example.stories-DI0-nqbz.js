import{_ as r}from"./radio-cYjVURcU.js";import"./iframe-DibQWrOg.js";import"./preload-helper-_n2GBM2K.js";import"./index-hMc7d43z.js";import"./form-components-Pzox8QFX.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBRadio/Density",component:r,render:n=>({components:{DBRadio:r},setup(){return{args:n}},template:`
      <DBRadio v-bind="args">
      ${n.default}
      </DBRadio>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"Functional","data-density":"functional",name:"Density",value:"functional"}},a={args:{default:"(Default) Regular","data-density":"regular",name:"Density",value:"regular"}},t={args:{default:"Expressive","data-density":"expressive",name:"Density",value:"expressive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Functional",
    "data-density": "functional",
    "name": "Density",
    "value": "functional"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) Regular",
    "data-density": "regular",
    "name": "Density",
    "value": "regular"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Expressive",
    "data-density": "expressive",
    "name": "Density",
    "value": "expressive"
  }
}`,...t.parameters?.docs?.source}}};const p=["Functional","DefaultRegular","Expressive"];export{a as DefaultRegular,t as Expressive,e as Functional,p as __namedExportsOrder,d as default};
