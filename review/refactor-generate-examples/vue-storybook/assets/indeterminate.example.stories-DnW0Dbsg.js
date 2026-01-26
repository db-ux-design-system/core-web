import{_ as a}from"./checkbox-DN6mLQpW.js";import"./iframe-D4GwdY-M.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BI2mJmbL.js";import"./index-CeOJJTBm.js";import"./form-components-B2LcTOtB.js";import"./infotext-CNKaL6ue.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBCheckbox/Indeterminate",component:a,render:r=>({components:{DBCheckbox:a},setup(){return{args:r}},template:`
      <DBCheckbox v-bind="args">
      ${r.default}
      </DBCheckbox>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"(Default) False",indeterminate:!1,name:"Indeterminate"}},t={args:{default:"True",indeterminate:!0,name:"Indeterminate"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
