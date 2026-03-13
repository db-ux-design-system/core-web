import{a as e,_ as o}from"./tabs-CWQQ5V7n.js";import{_ as s,a as r}from"./tab-list-CBwb4hYp.js";import{_ as l}from"./infotext-D1PTVpgU.js";import"./iframe-DqItoT3r.js";import"./preload-helper-CDE7oBwp.js";import"./index-v_uYr-ku.js";import"./button-Dosi1j3O.js";import"./tooltip-DIhGhH0W.js";import"./document-scroll-listener-d8pwIYFb.js";import"./floating-components-CKmcRn_b.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,P={title:"Components/DBTabs/Orientation",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},width:{control:"select",options:["full","auto"]},contentAlignment:{control:"select",options:["start","center"]},behavior:{control:"select",options:["scrollbar","arrows"]},initialSelectedIndex:{control:"number"},initialSelectedMode:{control:"select",options:["auto","manually"]},name:{control:"text"},tabs:{control:"object"},arrowScrollDistance:{control:"number"},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{orientation:"horizontal",default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:a=>({components:{DBTabs:e,DBInfotext:l,DBTabItem:r,DBTabList:s,DBTabPanel:o},setup(){return{args:a}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    horizontal:
                </DBInfotext><DBTabs v-bind="args"   >${a.default}</DBTabs></div>`})},t={args:{orientation:"vertical",default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:a=>({components:{DBTabs:e,DBInfotext:l,DBTabItem:r,DBTabList:s,DBTabPanel:o},setup(){return{args:a}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    vertical:
                </DBInfotext><DBTabs v-bind="args"   >${a.default}</DBTabs></div>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
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
                    horizontal:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "vertical",
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
                    vertical:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...t.parameters?.docs?.source}}};const u=["horizontal","vertical"];export{u as __namedExportsOrder,P as default,n as horizontal,t as vertical};
