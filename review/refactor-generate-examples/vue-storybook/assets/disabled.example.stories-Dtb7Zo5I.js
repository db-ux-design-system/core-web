import{_ as t}from"./radio-DG3T4je8.js";import"./iframe-IRMWFPfw.js";import"./preload-helper-_n2GBM2K.js";import"./index-S2nzjHTj.js";import"./form-components-DporCuVj.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,i={title:"Components/DBRadio/Disabled",component:t,render:o=>({components:{DBRadio:t},setup(){return{args:o}},template:`
      <DBRadio v-bind="args">
      ${o.default}
      </DBRadio>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},validation:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"(Default) False",disabled:!1,name:"Disabled"}},a={args:{default:"True",disabled:!0,name:"Disabled"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) False",
    "disabled": false,
    "name": "Disabled"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "True",
    "disabled": true,
    "name": "Disabled"
  }
}`,...a.parameters?.docs?.source}}};const u=["DefaultFalse","True"];export{e as DefaultFalse,a as True,u as __namedExportsOrder,i as default};
