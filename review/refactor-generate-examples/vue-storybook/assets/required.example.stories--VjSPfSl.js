import{_ as t}from"./checkbox-B-3mJP4_.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBCheckbox/Required",component:t,render:o=>({components:{DBCheckbox:t},setup(){return{args:o}},template:`
      <DBCheckbox v-bind="args">
      ${o.default}
      </DBCheckbox>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"(Default) False",required:!1,name:"Requirement"}},r={args:{default:"True",required:!0,name:"Requirement"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) False",
    "required": false,
    "name": "Requirement"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: "True",
    "required": true,
    "name": "Requirement"
  }
}`,...r.parameters?.docs?.source}}};const p=["DefaultFalse","True"];export{e as DefaultFalse,r as True,p as __namedExportsOrder,d as default};
