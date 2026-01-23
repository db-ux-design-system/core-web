import{_ as t}from"./checkbox-DIM9c3BV.js";import"./iframe-IRMWFPfw.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BI2mJmbL.js";import"./index-S2nzjHTj.js";import"./form-components-DporCuVj.js";import"./infotext-06GstPkD.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBCheckbox/Validation",component:t,render:n=>({components:{DBCheckbox:t},setup(){return{args:n}},template:`
      <DBCheckbox v-bind="args">
      ${n.default}
      </DBCheckbox>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},a={args:{default:"(Default) No validation",name:"Validation",validation:"no-validation"}},e={args:{default:"Invalid",name:"Validation",validation:"invalid",invalidMessage:"Invalid Message"}},o={args:{default:"Valid",name:"Validation",validation:"valid",validMessage:"Valid message"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) No validation",
    "name": "Validation",
    "validation": "no-validation"
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Invalid",
    "name": "Validation",
    "validation": "invalid",
    "invalidMessage": "Invalid Message"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Valid",
    "name": "Validation",
    "validation": "valid",
    "validMessage": "Valid message"
  }
}`,...o.parameters?.docs?.source}}};const u=["DefaultNovalidation","Invalid","Valid"];export{a as DefaultNovalidation,e as Invalid,o as Valid,u as __namedExportsOrder,p as default};
