import{_ as t,a as s}from"./tabs-DznWKzjs.js";import{a as o,_ as l}from"./tab-list-CaU2Nhei.js";import{_ as T}from"./infotext-tCTmoIyB.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";import"./button-BND3SCu0.js";import"./form-components-DotznFsp.js";const{fn:I}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBTabs/Examples",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},width:{control:"select",options:["full","auto"]},alignment:{control:"select",options:["start","center"]},behavior:{control:"select",options:["scrollbar","arrows"]},initialSelectedIndex:{control:"number"},initialSelectedMode:{control:"select",options:["auto","manually"]},name:{control:"text"},tabs:{control:"object"},arrowScrollDistance:{control:"number"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{initialSelectedIndex:1,default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:e=>({components:{DBTabs:t,DBInfotext:T,DBTabItem:l,DBTabList:o,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    2nd tab selected:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},n={args:{initialSelectedMode:"manually",default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:e=>({components:{DBTabs:t,DBInfotext:T,DBTabItem:l,DBTabList:o,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    nothing selected:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "initialSelectedIndex": 1,
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
    template: \`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    2nd tab selected:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "initialSelectedMode": "manually",
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
    template: \`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    nothing selected:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...n.parameters?.docs?.source}}};const p=["SecondTestselected","nothingselected"];export{a as SecondTestselected,p as __namedExportsOrder,f as default,n as nothingselected};
