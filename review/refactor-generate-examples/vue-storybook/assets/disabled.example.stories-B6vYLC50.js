import{_ as t}from"./checkbox-Gk8yGi2Q.js";import"./iframe-DibQWrOg.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BI2mJmbL.js";import"./index-hMc7d43z.js";import"./form-components-Pzox8QFX.js";import"./infotext-BXtUkf96.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBCheckbox/Disabled",component:t,render:o=>({components:{DBCheckbox:t},setup(){return{args:o}},template:`
      <DBCheckbox v-bind="args">
      ${o.default}
      </DBCheckbox>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"(Default) False",disabled:!1,name:"Disabled"}},a={args:{default:"True",disabled:!0,name:"Disabled"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
