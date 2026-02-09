import{_ as b,a as T}from"./tabs-kmCQwX-o.js";import{_ as s,a as D}from"./tab-list-D9dAxwvb.js";import{_ as B}from"./infotext-C1MSMu4c.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";import"./button-YbkVn8kv.js";import"./form-components-DlJa7Tu6.js";import"./constants-qyp1P7vr.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBTabs/Density",component:T,render:n=>({components:{DBTabs:T,DBInfotext:B,DBTabItem:D,DBTabList:s,DBTabPanel:b},setup(){return{args:n}},template:`
      <DBTabs v-bind="args">
      ${n.default}
      </DBTabs>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"text"},width:{control:"text"},alignment:{control:"text"},behavior:{control:"text"},initialSelectedIndex:{control:"text"},initialSelectedMode:{control:"text"}}},a={args:{default:`<DBTabList
        ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
        ><DBTabItem>Test 3</DBTabItem></DBTabList
      ><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
      ><DBTabPanel>Tab Panel 3</DBTabPanel>`,"data-density":"functional"}},e={args:{default:`<DBTabList
        ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
        ><DBTabItem>Test 3</DBTabItem></DBTabList
      ><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
      ><DBTabPanel>Tab Panel 3</DBTabPanel>`,"data-density":"regular"}},t={args:{default:`<DBTabList
        ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
        ><DBTabItem>Test 3</DBTabItem></DBTabList
      ><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
      ><DBTabPanel>Tab Panel 3</DBTabPanel>`,"data-density":"expressive"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBTabList
        ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
        ><DBTabItem>Test 3</DBTabItem></DBTabList
      ><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
      ><DBTabPanel>Tab Panel 3</DBTabPanel>\`,
    "data-density": "functional"
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBTabList
        ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
        ><DBTabItem>Test 3</DBTabItem></DBTabList
      ><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
      ><DBTabPanel>Tab Panel 3</DBTabPanel>\`,
    "data-density": "regular"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBTabList
        ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
        ><DBTabItem>Test 3</DBTabItem></DBTabList
      ><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
      ><DBTabPanel>Tab Panel 3</DBTabPanel>\`,
    "data-density": "expressive"
  }
}`,...t.parameters?.docs?.source}}};const f=["Functional","DefaultRegular","Expressive"];export{e as DefaultRegular,t as Expressive,a as Functional,f as __namedExportsOrder,u as default};
