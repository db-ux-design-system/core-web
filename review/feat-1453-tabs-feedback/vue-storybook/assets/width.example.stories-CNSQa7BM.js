import{_ as n,a as T}from"./tabs-D2EusOQ6.js";import{a as o,_ as b}from"./tab-list-CAzjgiAW.js";import{_ as D}from"./infotext-ClPyTFqQ.js";import"./iframe-Cke17Jem.js";import"./preload-helper-CDE7oBwp.js";import"./index-CxtH_N9b.js";import"./button-h5LZvjtZ.js";import"./tooltip-C3bmREtB.js";import"./constants-CvUrIGJS.js";import"./document-scroll-listener-C3hIOeCA.js";import"./floating-components-CKmcRn_b.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBTabs/Width",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},width:{control:"select",options:["full","auto"]},contentAlignment:{control:"select",options:["start","center"]},behavior:{control:"select",options:["scrollbar","arrows"]},initialSelectedIndex:{control:"number"},initialSelectedMode:{control:"select",options:["auto","manually"]},name:{control:"text"},tabs:{control:"object"},arrowScrollDistance:{control:"number"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{width:"auto",default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:a=>({components:{DBTabs:n,DBInfotext:D,DBTabItem:b,DBTabList:o,DBTabPanel:T},setup(){return{args:a}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    auto:
                </DBInfotext><DBTabs v-bind="args"   >${a.default}</DBTabs></div>`})},t={args:{width:"full",default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:a=>({components:{DBTabs:n,DBInfotext:D,DBTabItem:b,DBTabList:o,DBTabPanel:T},setup(){return{args:a}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    full - alignment: start:
                </DBInfotext><DBTabs v-bind="args"   >${a.default}</DBTabs></div>`})},s={args:{width:"full",contentAlignment:"center",default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:a=>({components:{DBTabs:n,DBInfotext:D,DBTabItem:b,DBTabList:o,DBTabPanel:T},setup(){return{args:a}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    full - alignment: center:
                </DBInfotext><DBTabs v-bind="args"   >${a.default}</DBTabs></div>`})},l={args:{width:"full",contentAlignment:"end",default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:a=>({components:{DBTabs:n,DBInfotext:D,DBTabItem:b,DBTabList:o,DBTabPanel:T},setup(){return{args:a}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    full - alignment: end:
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
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    auto:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "contentAlignment": "center",
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "contentAlignment": "end",
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
                    full - alignment: end:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...l.parameters?.docs?.source}}};const v=["auto","fullalignmentstart","fullalignmentcenter","fullalignmentend"];export{v as __namedExportsOrder,e as auto,x as default,s as fullalignmentcenter,l as fullalignmentend,t as fullalignmentstart};
