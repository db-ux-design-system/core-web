import{_ as r}from"./switch-BDFRP5rE.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBSwitch/Checked",component:r,render:t=>({components:{DBSwitch:r},setup(){return{args:t}},template:`
      <DBSwitch v-bind="args">
      ${t.default}
      </DBSwitch>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},visualAid:{control:"boolean"},iconLeading:{control:"text"},iconTrailing:{control:"text"},size:{control:"text"},label:{control:"text"},variant:{control:"text"},showLabel:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},showMessage:{control:"boolean"},message:{control:"text"},icon:{control:"text"}}},e={args:{default:"(Default) False",checked:!1}},o={args:{default:"True",checked:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) False",
    "checked": false
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "True",
    "checked": true
  }
}`,...o.parameters?.docs?.source}}};const p=["DefaultFalse","True"];export{e as DefaultFalse,o as True,p as __namedExportsOrder,m as default};
