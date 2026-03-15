import{a as o,_ as T}from"./tabs-10BThCwc.js";import{_ as b,a as s}from"./tab-list-BDwklcJ6.js";import{_ as l}from"./infotext-C8-lP1m4.js";import"./iframe-CoccQDqX.js";import"./preload-helper-YU6p8zKh.js";import"./index-DskLw4v6.js";import"./button-D0REx52p.js";import"./form-components-BRC9rP1n.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBTabs/Overflow",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},width:{control:"select",options:["full","auto"]},alignment:{control:"select",options:["start","center"]},behavior:{control:"select",options:["scrollbar","arrows"]},initialSelectedIndex:{control:"number"},initialSelectedMode:{control:"select",options:["auto","manually"]},name:{control:"text"},tabs:{control:"object"},arrowScrollDistance:{control:"number"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{width:"auto",default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:a=>({components:{DBTabs:o,DBInfotext:l,DBTabItem:s,DBTabList:b,DBTabPanel:T},setup(){return{args:a}},template:`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    no overflow:
                </DBInfotext><DBTabs v-bind="args"   >${a.default}</DBTabs></div>`})},n={args:{behavior:"arrows",default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
  ><DBTabItem>Test 5</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
><DBTabPanel>Tab Panel 5</DBTabPanel>`},render:a=>({components:{DBTabs:o,DBInfotext:l,DBTabItem:s,DBTabList:b,DBTabPanel:T},setup(){return{args:a}},template:`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with overflow - behavior: arrows:
                </DBInfotext><DBTabs v-bind="args"   >${a.default}</DBTabs></div>`})},t={args:{default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
  ><DBTabItem>Test 5</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
><DBTabPanel>Tab Panel 5</DBTabPanel>`},render:a=>({components:{DBTabs:o,DBInfotext:l,DBTabItem:s,DBTabList:b,DBTabPanel:T},setup(){return{args:a}},template:`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with overflow - behavior: scrollbar:
                </DBInfotext><DBTabs v-bind="args"   >${a.default}</DBTabs></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "default": \`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>\`
  },
  render: (args: any) => ({
    components: {
      DBTabs,
      DBInfotext,
      DBTabItem,
      DBTabList,
      DBTabPanel
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    no overflow:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "arrows",
    "default": \`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
  ><DBTabItem>Test 5</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
><DBTabPanel>Tab Panel 5</DBTabPanel>\`
  },
  render: (args: any) => ({
    components: {
      DBTabs,
      DBInfotext,
      DBTabItem,
      DBTabList,
      DBTabPanel
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with overflow - behavior: arrows:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
  ><DBTabItem>Test 5</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
><DBTabPanel>Tab Panel 5</DBTabPanel>\`
  },
  render: (args: any) => ({
    components: {
      DBTabs,
      DBInfotext,
      DBTabItem,
      DBTabList,
      DBTabPanel
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with overflow - behavior: scrollbar:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...t.parameters?.docs?.source}}};const p=["nooverflow","withoverflowbehaviorarrows","withoverflowbehaviorscrollbar"];export{p as __namedExportsOrder,d as default,e as nooverflow,n as withoverflowbehaviorarrows,t as withoverflowbehaviorscrollbar};
