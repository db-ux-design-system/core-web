import{_ as s,a as o}from"./tab-list-D9dAxwvb.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./constants-qyp1P7vr.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBTabItem/States",component:o,render:r=>({components:{DBTabItem:o,DBTabList:s},setup(){return{args:r}},template:`
      <DBTabItem v-bind="args">
      ${r.default}
      </DBTabItem>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"}}},e={args:{default:"",label:"(Default) Enabled"}},a={args:{default:"",active:!0,label:"active"}},t={args:{default:"",disabled:!0,label:"disabled"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "(Default) Enabled"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "active": true,
    "label": "active"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "disabled": true,
    "label": "disabled"
  }
}`,...t.parameters?.docs?.source}}};const p=["DefaultEnabled","active","disabled"];export{e as DefaultEnabled,p as __namedExportsOrder,a as active,b as default,t as disabled};
