import{_ as n,a as o}from"./tab-list-D9dAxwvb.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./constants-qyp1P7vr.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBTabItem/Density",component:o,render:r=>({components:{DBTabItem:o,DBTabList:n},setup(){return{args:r}},template:`
      <DBTabItem v-bind="args">
      ${r.default}
      </DBTabItem>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"}}},e={args:{default:"","data-density":"functional",label:"Functional"}},a={args:{default:"","data-density":"regular",label:"(Default) Regular"}},t={args:{default:"","data-density":"expressive",label:"Expressive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "data-density": "functional",
    "label": "Functional"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "data-density": "regular",
    "label": "(Default) Regular"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "data-density": "expressive",
    "label": "Expressive"
  }
}`,...t.parameters?.docs?.source}}};const g=["Functional","DefaultRegular","Expressive"];export{a as DefaultRegular,t as Expressive,e as Functional,g as __namedExportsOrder,m as default};
