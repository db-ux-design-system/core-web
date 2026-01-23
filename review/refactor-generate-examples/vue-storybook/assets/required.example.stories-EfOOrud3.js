import{_ as t}from"./radio-CMd3WBB_.js";import"./iframe-6Mx4-xKM.js";import"./preload-helper-_n2GBM2K.js";import"./index-S2nzjHTj.js";import"./form-components-DporCuVj.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBRadio/Required",component:t,render:o=>({components:{DBRadio:t},setup(){return{args:o}},template:`
      <DBRadio v-bind="args">
      ${o.default}
      </DBRadio>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"(Default) False",required:!1,name:"Requirement"}},r={args:{default:"True",required:!0,name:"Requirement"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const i=["DefaultFalse","True"];export{e as DefaultFalse,r as True,i as __namedExportsOrder,d as default};
