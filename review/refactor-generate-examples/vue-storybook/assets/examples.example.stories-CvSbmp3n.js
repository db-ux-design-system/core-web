import{_ as T,a as n}from"./tabs-kmCQwX-o.js";import{_ as s,a as b}from"./tab-list-D9dAxwvb.js";import{_ as l}from"./infotext-C1MSMu4c.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";import"./button-YbkVn8kv.js";import"./form-components-DlJa7Tu6.js";import"./constants-qyp1P7vr.js";const{fn:I}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBTabs/Examples",component:n,render:t=>({components:{DBTabs:n,DBInfotext:l,DBTabItem:b,DBTabList:s,DBTabPanel:T},setup(){return{args:t}},template:`
      <DBTabs v-bind="args">
      ${t.default}
      </DBTabs>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"text"},width:{control:"text"},alignment:{control:"text"},behavior:{control:"text"},initialSelectedIndex:{control:"text"},initialSelectedMode:{control:"text"}}},a={args:{default:`<DBTabList
        ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
        ><DBTabItem>Test 3</DBTabItem></DBTabList
      ><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
      ><DBTabPanel>Tab Panel 3</DBTabPanel>`,initialSelectedIndex:1}},e={args:{default:`<DBTabList
        ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
        ><DBTabItem>Test 3</DBTabItem></DBTabList
      ><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
      ><DBTabPanel>Tab Panel 3</DBTabPanel>`,initialSelectedMode:"manually"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBTabList
        ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
        ><DBTabItem>Test 3</DBTabItem></DBTabList
      ><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
      ><DBTabPanel>Tab Panel 3</DBTabPanel>\`,
    "initialSelectedIndex": 1
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBTabList
        ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
        ><DBTabItem>Test 3</DBTabItem></DBTabList
      ><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
      ><DBTabPanel>Tab Panel 3</DBTabPanel>\`,
    "initialSelectedMode": "manually"
  }
}`,...e.parameters?.docs?.source}}};const _=["SecondTestselected","nothingselected"];export{a as SecondTestselected,_ as __namedExportsOrder,p as default,e as nothingselected};
