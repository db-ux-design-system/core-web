import{_ as e,a as n}from"./tabs-D8FKwErK.js";import{a as o,_ as l}from"./tab-list-DYxMPwoG.js";import{_ as r}from"./infotext-C4XLlUH0.js";import"./iframe-Br7nUqWT.js";import"./preload-helper-CDE7oBwp.js";import"./index-CAc947dM.js";import"./button-P3iao7S9.js";import"./tooltip-CNbO9lhP.js";import"./constants-CvUrIGJS.js";import"./document-scroll-listener-C99HqdfC.js";import"./floating-components-jmncKSnU.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,I={title:"Components/DBTabs/Truncation",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},width:{control:"select",options:["full","auto"]},contentAlignment:{control:"select",options:["start","center"]},behavior:{control:"select",options:["scrollbar","arrows"]},initialSelectedIndex:{control:"number"},initialSelectedMode:{control:"select",options:["auto","manually"]},name:{control:"text"},tabs:{control:"object"},arrowScrollDistance:{control:"number"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{orientation:"vertical",width:"auto",default:`<DBTabList
  ><DBTabItem label="Very long tab label that gets truncated"></DBTabItem
  ><DBTabItem label="Another long label"></DBTabItem
  ><DBTabItem label="Short"></DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:a=>({components:{DBTabs:e,DBInfotext:r,DBTabItem:l,DBTabList:o,DBTabPanel:n},setup(){return{args:a}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    truncated tab label (vertical only):
                </DBInfotext><DBTabs v-bind="args"   >${a.default}</DBTabs></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "vertical",
    "width": "auto",
    "default": \`<DBTabList
  ><DBTabItem label="Very long tab label that gets truncated"></DBTabItem
  ><DBTabItem label="Another long label"></DBTabItem
  ><DBTabItem label="Short"></DBTabItem></DBTabList
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
                    truncated tab label (vertical only):
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...t.parameters?.docs?.source}}};const _=["truncated"];export{_ as __namedExportsOrder,I as default,t as truncated};
