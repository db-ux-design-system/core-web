import{_ as a}from"./checkbox-Gk8yGi2Q.js";import"./iframe-DibQWrOg.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BI2mJmbL.js";import"./index-hMc7d43z.js";import"./form-components-Pzox8QFX.js";import"./infotext-BXtUkf96.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,i={title:"Components/DBCheckbox/Checked",component:a,render:o=>({components:{DBCheckbox:a},setup(){return{args:o}},template:`
      <DBCheckbox v-bind="args">
      ${o.default}
      </DBCheckbox>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},size:{control:"text"},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},e={args:{default:"(Default) False",checked:!1,name:"State"}},t={args:{default:"True",checked:!0,name:"State"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) False",
    "checked": false,
    "name": "State"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "True",
    "checked": true,
    "name": "State"
  }
}`,...t.parameters?.docs?.source}}};const p=["DefaultFalse","True"];export{e as DefaultFalse,t as True,p as __namedExportsOrder,i as default};
