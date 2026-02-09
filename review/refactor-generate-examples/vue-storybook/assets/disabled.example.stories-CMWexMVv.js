import{_ as t}from"./checkbox-B-3mJP4_.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBCheckbox/Disabled",component:t,render:o=>({components:{DBCheckbox:t},setup(){return{args:o}},template:`
      <DBCheckbox v-bind="args">
      ${o.default}
      </DBCheckbox>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"(Default) False",disabled:!1,name:"Disabled"}},a={args:{default:"True",disabled:!0,name:"Disabled"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const p=["DefaultFalse","True"];export{e as DefaultFalse,a as True,p as __namedExportsOrder,u as default};
