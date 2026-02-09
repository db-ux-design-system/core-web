import{_ as o}from"./checkbox-B-3mJP4_.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBCheckbox/Indeterminate",component:o,render:a=>({components:{DBCheckbox:o},setup(){return{args:a}},template:`
      <DBCheckbox v-bind="args">
      ${a.default}
      </DBCheckbox>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"(Default) False",indeterminate:!1,name:"Indeterminate"}},t={args:{default:"True",indeterminate:!0,name:"Indeterminate"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) False",
    "indeterminate": false,
    "name": "Indeterminate"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "True",
    "indeterminate": true,
    "name": "Indeterminate"
  }
}`,...t.parameters?.docs?.source}}};const p=["DefaultFalse","True"];export{e as DefaultFalse,t as True,p as __namedExportsOrder,u as default};
