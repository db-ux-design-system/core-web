import{_ as a}from"./checkbox-DN6mLQpW.js";import"./iframe-D4GwdY-M.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BI2mJmbL.js";import"./index-CeOJJTBm.js";import"./form-components-B2LcTOtB.js";import"./infotext-CNKaL6ue.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBCheckbox/Size",component:a,render:t=>({components:{DBCheckbox:a},setup(){return{args:t}},template:`
      <DBCheckbox v-bind="args">
      ${t.default}
      </DBCheckbox>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"(Default) Medium",name:"Size"}},o={args:{default:"Small",name:"Size",size:"small"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
