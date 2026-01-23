import{_ as t}from"./radio-DG3T4je8.js";import"./iframe-IRMWFPfw.js";import"./preload-helper-_n2GBM2K.js";import"./index-S2nzjHTj.js";import"./form-components-DporCuVj.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,c={title:"Components/DBRadio/Size",component:t,render:a=>({components:{DBRadio:t},setup(){return{args:a}},template:`
      <DBRadio v-bind="args">
      ${a.default}
      </DBRadio>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"(Default) Medium",name:"Size"}},o={args:{default:"Small",name:"Size",size:"small"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const d=["DefaultMedium","Small"];export{e as DefaultMedium,o as Small,d as __namedExportsOrder,c as default};
