import{_ as s,a as l}from"./tabs-pApWVqG9.js";import{a as o,_ as T}from"./tab-list-Dl2nJ0of.js";import{_ as b}from"./infotext-CQzZlFC4.js";import"./iframe-BJyzzIdz.js";import"./preload-helper-_n2GBM2K.js";import"./index-nMDAkmV1.js";import"./button-ls1aUhgi.js";import"./form-components-DdeCHFFQ.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,I={title:"Components/DBTabs/Width",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},width:{control:"select",options:["full","auto"]},alignment:{control:"select",options:["start","center"]},behavior:{control:"select",options:["scrollbar","arrows"]},initialSelectedIndex:{control:"number"},initialSelectedMode:{control:"select",options:["auto","manually"]},name:{control:"text"},tabs:{control:"object"},arrowScrollDistance:{control:"number"},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{width:"auto",default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:a=>({components:{DBTabs:s,DBInfotext:b,DBTabItem:T,DBTabList:o,DBTabPanel:l},setup(){return{args:a}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    auto:
                </DBInfotext><DBTabs v-bind="args"   >${a.default}</DBTabs></div>`})},e={args:{width:"full",default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:a=>({components:{DBTabs:s,DBInfotext:b,DBTabItem:T,DBTabList:o,DBTabPanel:l},setup(){return{args:a}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    full - alignment: start:
                </DBInfotext><DBTabs v-bind="args"   >${a.default}</DBTabs></div>`})},t={args:{width:"full",alignment:"center",default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:a=>({components:{DBTabs:s,DBInfotext:b,DBTabItem:T,DBTabList:o,DBTabPanel:l},setup(){return{args:a}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    full - alignment: center:
                </DBInfotext><DBTabs v-bind="args"   >${a.default}</DBTabs></div>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    auto:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
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
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    full - alignment: start:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "alignment": "center",
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
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    full - alignment: center:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...t.parameters?.docs?.source}}};const P=["auto","fullalignmentstart","fullalignmentcenter"];export{P as __namedExportsOrder,n as auto,I as default,t as fullalignmentcenter,e as fullalignmentstart};
