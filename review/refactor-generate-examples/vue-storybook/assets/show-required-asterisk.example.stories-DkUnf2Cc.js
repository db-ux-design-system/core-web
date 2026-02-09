import{_ as o}from"./switch-BDFRP5rE.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBSwitch/Show Required Asterisk",component:o,render:r=>({components:{DBSwitch:o},setup(){return{args:r}},template:`
      <DBSwitch v-bind="args">
      ${r.default}
      </DBSwitch>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},visualAid:{control:"boolean"},iconLeading:{control:"text"},iconTrailing:{control:"text"},size:{control:"text"},label:{control:"text"},variant:{control:"text"},showLabel:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},showMessage:{control:"boolean"},message:{control:"text"},icon:{control:"text"}}},e={args:{default:"(Default) True",required:!0,showRequiredAsterisk:!0}},t={args:{default:"False",required:!0,showRequiredAsterisk:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) True",
    "required": true,
    "showRequiredAsterisk": true
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "False",
    "required": true,
    "showRequiredAsterisk": false
  }
}`,...t.parameters?.docs?.source}}};const p=["DefaultTrue","False"];export{e as DefaultTrue,t as False,p as __namedExportsOrder,m as default};
