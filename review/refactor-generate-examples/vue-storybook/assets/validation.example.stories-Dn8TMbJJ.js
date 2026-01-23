import{_ as t}from"./radio-DG3T4je8.js";import"./iframe-IRMWFPfw.js";import"./preload-helper-_n2GBM2K.js";import"./index-S2nzjHTj.js";import"./form-components-DporCuVj.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBRadio/Validation",component:t,render:n=>({components:{DBRadio:t},setup(){return{args:n}},template:`
      <DBRadio v-bind="args">
      ${n.default}
      </DBRadio>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},a={args:{default:"(Default) No validation",name:"No validation",validation:"no-validation"}},o={args:{default:"Invalid",name:"invalid",validation:"invalid"}},e={args:{default:"Valid",checked:!0,name:"valid",validation:"valid"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) No validation",
    "name": "No validation",
    "validation": "no-validation"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Invalid",
    "name": "invalid",
    "validation": "invalid"
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Valid",
    "checked": true,
    "name": "valid",
    "validation": "valid"
  }
}`,...e.parameters?.docs?.source}}};const u=["DefaultNovalidation","Invalid","Valid"];export{a as DefaultNovalidation,o as Invalid,e as Valid,u as __namedExportsOrder,m as default};
