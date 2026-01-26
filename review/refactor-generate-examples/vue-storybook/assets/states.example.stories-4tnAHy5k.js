import{_ as o}from"./tab-item-BHhqGf67.js";import"./iframe-D4GwdY-M.js";import"./preload-helper-_n2GBM2K.js";import"./index-CeOJJTBm.js";import"./form-components-B2LcTOtB.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBTabItem/States",component:o,render:r=>({components:{DBTabItem:o},setup(){return{args:r}},template:`
      <DBTabItem v-bind="args">
      ${r.default}
      </DBTabItem>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"}}},e={args:{label:"(Default) Enabled"}},a={args:{active:!0,label:"active"}},t={args:{disabled:!0,label:"disabled"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) Enabled"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "active": true,
    "label": "active"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "disabled": true,
    "label": "disabled"
  }
}`,...t.parameters?.docs?.source}}};const b=["DefaultEnabled","active","disabled"];export{e as DefaultEnabled,b as __namedExportsOrder,a as active,m as default,t as disabled};
