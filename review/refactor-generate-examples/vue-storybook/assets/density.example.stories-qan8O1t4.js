import{_ as s,a as o}from"./tabs-DznWKzjs.js";import{a as T,_ as l}from"./tab-list-CaU2Nhei.js";import{_ as b}from"./infotext-tCTmoIyB.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";import"./button-BND3SCu0.js";import"./form-components-DotznFsp.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBTabs/Density",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},width:{control:"select",options:["full","auto"]},alignment:{control:"select",options:["start","center"]},behavior:{control:"select",options:["scrollbar","arrows"]},initialSelectedIndex:{control:"number"},initialSelectedMode:{control:"select",options:["auto","manually"]},name:{control:"text"},tabs:{control:"object"},arrowScrollDistance:{control:"number"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{"data-density":"functional",default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:a=>({components:{DBTabs:s,DBInfotext:b,DBTabItem:l,DBTabList:T,DBTabPanel:o},setup(){return{args:a}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Functional:
                </DBInfotext><DBTabs v-bind="args"   >${a.default}</DBTabs></div>`})},n={args:{"data-density":"regular",default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:a=>({components:{DBTabs:s,DBInfotext:b,DBTabItem:l,DBTabList:T,DBTabPanel:o},setup(){return{args:a}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    (Default) Regular:
                </DBInfotext><DBTabs v-bind="args"   >${a.default}</DBTabs></div>`})},t={args:{"data-density":"expressive",default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:a=>({components:{DBTabs:s,DBInfotext:b,DBTabItem:l,DBTabList:T,DBTabPanel:o},setup(){return{args:a}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Expressive:
                </DBInfotext><DBTabs v-bind="args"   >${a.default}</DBTabs></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
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
                    Functional:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
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
                    (Default) Regular:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
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
                    Expressive:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...t.parameters?.docs?.source}}};const P=["Functional","DefaultRegular","Expressive"];export{n as DefaultRegular,t as Expressive,e as Functional,P as __namedExportsOrder,u as default};
