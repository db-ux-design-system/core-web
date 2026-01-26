import{_ as r}from"./switch-Bh3YLLGr.js";import"./iframe-D4GwdY-M.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BI2mJmbL.js";import"./index-CeOJJTBm.js";import"./form-components-B2LcTOtB.js";import"./infotext-CNKaL6ue.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBSwitch/Examples",component:r,render:t=>({components:{DBSwitch:r},setup(){return{args:t}},template:`
      <DBSwitch v-bind="args">
      ${t.default}
      </DBSwitch>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},visualAid:{control:"text"},iconLeading:{control:"text"},iconTrailing:{control:"text"},size:{control:"text"},label:{control:"text"},variant:{control:"text"},showLabel:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},showMessage:{control:"boolean"},message:{control:"text"},icon:{control:"text"}}},e={args:{default:"Custom Icons",visualAid:!0,icon:"cross_circle",iconTrailing:"clock"}},o={args:{default:"Required + Visual Aid",visualAid:!0,required:!0,validMessage:"Valid"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Custom Icons",
    "visualAid": true,
    "icon": "cross_circle",
    "iconTrailing": "clock"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "Required + Visual Aid",
    "visualAid": true,
    "required": true,
    "validMessage": "Valid"
  }
}`,...o.parameters?.docs?.source}}};const p=["CustomIcons","RequiredVisualAid"];export{e as CustomIcons,o as RequiredVisualAid,p as __namedExportsOrder,m as default};
