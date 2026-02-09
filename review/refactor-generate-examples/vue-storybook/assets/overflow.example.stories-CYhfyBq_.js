import{_ as b,a as n}from"./tabs-kmCQwX-o.js";import{_ as l,a as s}from"./tab-list-D9dAxwvb.js";import{_ as B}from"./infotext-C1MSMu4c.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./index-B493XNFi.js";import"./button-YbkVn8kv.js";import"./form-components-DlJa7Tu6.js";import"./constants-qyp1P7vr.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBTabs/Overflow",component:n,render:T=>({components:{DBTabs:n,DBInfotext:B,DBTabItem:s,DBTabList:l,DBTabPanel:b},setup(){return{args:T}},template:`
      <DBTabs v-bind="args">
      ${T.default}
      </DBTabs>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"text"},width:{control:"text"},alignment:{control:"text"},behavior:{control:"text"},initialSelectedIndex:{control:"text"},initialSelectedMode:{control:"text"}}},a={args:{default:`<DBTabList
        ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
        ><DBTabItem>Test 3</DBTabItem></DBTabList
      ><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
      ><DBTabPanel>Tab Panel 3</DBTabPanel>`,width:"auto"},decorators:[()=>({template:'<div style="  width:300px"><story /></div>'})]},e={args:{default:`<DBTabList
        ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
        ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
        ><DBTabItem>Test 5</DBTabItem></DBTabList
      ><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
      ><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
      ><DBTabPanel>Tab Panel 5</DBTabPanel>`,behavior:"arrows"},decorators:[()=>({template:'<div style="  width:300px"><story /></div>'})]},t={args:{default:`<DBTabList
        ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
        ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
        ><DBTabItem>Test 5</DBTabItem></DBTabList
      ><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
      ><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
      ><DBTabPanel>Tab Panel 5</DBTabPanel>`},decorators:[()=>({template:'<div style="  width:300px"><story /></div>'})]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBTabList
        ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
        ><DBTabItem>Test 3</DBTabItem></DBTabList
      ><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
      ><DBTabPanel>Tab Panel 3</DBTabPanel>\`,
    "width": "auto"
  },
  decorators: [() => ({
    template: \`<div style="  width:300px"><story /></div>\`
  })]
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBTabList
        ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
        ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
        ><DBTabItem>Test 5</DBTabItem></DBTabList
      ><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
      ><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
      ><DBTabPanel>Tab Panel 5</DBTabPanel>\`,
    "behavior": "arrows"
  },
  decorators: [() => ({
    template: \`<div style="  width:300px"><story /></div>\`
  })]
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: \`<DBTabList
        ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
        ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
        ><DBTabItem>Test 5</DBTabItem></DBTabList
      ><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
      ><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
      ><DBTabPanel>Tab Panel 5</DBTabPanel>\`
  },
  decorators: [() => ({
    template: \`<div style="  width:300px"><story /></div>\`
  })]
}`,...t.parameters?.docs?.source}}};const f=["nooverflow","withoverflowbehaviorarrows","withoverflowbehaviorscrollbar"];export{f as __namedExportsOrder,v as default,a as nooverflow,e as withoverflowbehaviorarrows,t as withoverflowbehaviorscrollbar};
