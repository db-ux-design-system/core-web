import{_ as a}from"./checkbox-B-3mJP4_.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBCheckbox/Size",component:a,render:t=>({components:{DBCheckbox:a},setup(){return{args:t}},template:`
      <DBCheckbox v-bind="args">
      ${t.default}
      </DBCheckbox>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"(Default) Medium",name:"Size"}},o={args:{default:"Small",name:"Size",size:"small"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) Medium",
    "name": "Size"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Small",
    "name": "Size",
    "size": "small"
  }
}`,...o.parameters?.docs?.source}}};const p=["DefaultMedium","Small"];export{e as DefaultMedium,o as Small,p as __namedExportsOrder,u as default};
