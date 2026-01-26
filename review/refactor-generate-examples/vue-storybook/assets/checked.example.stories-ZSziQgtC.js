import{_ as r}from"./switch-Bh3YLLGr.js";import"./iframe-D4GwdY-M.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BI2mJmbL.js";import"./index-CeOJJTBm.js";import"./form-components-B2LcTOtB.js";import"./infotext-CNKaL6ue.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBSwitch/Checked",component:r,render:o=>({components:{DBSwitch:r},setup(){return{args:o}},template:`
      <DBSwitch v-bind="args">
      ${o.default}
      </DBSwitch>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},visualAid:{control:"text"},iconLeading:{control:"text"},iconTrailing:{control:"text"},size:{control:"text"},label:{control:"text"},variant:{control:"text"},showLabel:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},showMessage:{control:"boolean"},message:{control:"text"},icon:{control:"text"}}},e={args:{default:"(Default) False",checked:!1}},t={args:{default:"True",checked:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) False",
    "checked": false
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "True",
    "checked": true
  }
}`,...t.parameters?.docs?.source}}};const p=["DefaultFalse","True"];export{e as DefaultFalse,t as True,p as __namedExportsOrder,m as default};
