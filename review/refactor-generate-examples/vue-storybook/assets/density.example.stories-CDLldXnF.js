import{_ as o}from"./tab-item-CnAExQdt.js";import"./iframe-D9Yu_Ccn.js";import"./preload-helper-_n2GBM2K.js";import"./index-CeOJJTBm.js";import"./form-components-C8BRKoTh.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBTabItem/Density",component:o,render:r=>({components:{DBTabItem:o},setup(){return{args:r}},template:`
      <DBTabItem v-bind="args">
      ${r.default}
      </DBTabItem>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"}}},e={args:{"data-density":"functional",label:"Functional"}},a={args:{"data-density":"regular",label:"(Default) Regular"}},t={args:{"data-density":"expressive",label:"Expressive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "label": "Functional"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "label": "(Default) Regular"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "label": "Expressive"
  }
}`,...t.parameters?.docs?.source}}};const u=["Functional","DefaultRegular","Expressive"];export{a as DefaultRegular,t as Expressive,e as Functional,u as __namedExportsOrder,d as default};
