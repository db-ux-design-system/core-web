import{_ as n}from"./switch-wMml1i3t.js";import"./iframe-6Mx4-xKM.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BI2mJmbL.js";import"./index-S2nzjHTj.js";import"./form-components-DporCuVj.js";import"./infotext-iunmPScm.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBSwitch/Validation",component:n,render:t=>({components:{DBSwitch:n},setup(){return{args:t}},template:`
      <DBSwitch v-bind="args">
      ${t.default}
      </DBSwitch>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},visualAid:{control:"text"},iconLeading:{control:"text"},iconTrailing:{control:"text"},size:{control:"text"},label:{control:"text"},variant:{control:"text"},showLabel:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},showMessage:{control:"boolean"},message:{control:"text"},icon:{control:"text"}}},a={args:{default:"(Default) No validation"}},e={args:{default:"Invalid",validation:"invalid",invalidMessage:"Invalid Message"}},o={args:{default:"Valid",checked:!0,validation:"valid",validMessage:"Valid message"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "(Default) No validation"
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Invalid",
    "validation": "invalid",
    "invalidMessage": "Invalid Message"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Valid",
    "checked": true,
    "validation": "valid",
    "validMessage": "Valid message"
  }
}`,...o.parameters?.docs?.source}}};const v=["DefaultNovalidation","Invalid","Valid"];export{a as DefaultNovalidation,e as Invalid,o as Valid,v as __namedExportsOrder,p as default};
