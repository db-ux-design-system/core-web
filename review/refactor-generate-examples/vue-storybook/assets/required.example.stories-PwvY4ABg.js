import{_ as o}from"./checkbox-DIM9c3BV.js";import"./iframe-IRMWFPfw.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BI2mJmbL.js";import"./index-S2nzjHTj.js";import"./form-components-DporCuVj.js";import"./infotext-06GstPkD.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBCheckbox/Required",component:o,render:t=>({components:{DBCheckbox:o},setup(){return{args:t}},template:`
      <DBCheckbox v-bind="args">
      ${t.default}
      </DBCheckbox>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"(Default) False",required:!1,name:"Requirement"}},r={args:{default:"True",required:!0,name:"Requirement"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
