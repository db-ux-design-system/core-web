import{_ as e,a as n}from"./tabs-ChtUzM4q.js";import{a as o,_ as l}from"./tab-list-BP_aLxrw.js";import{_ as r}from"./infotext-2-vHDgd2.js";import"./iframe-4D9j4fxB.js";import"./preload-helper-CDE7oBwp.js";import"./index-C2ygMkoK.js";import"./button-Dt87l4Lk.js";import"./tooltip-BVOcljOC.js";import"./constants-CvUrIGJS.js";import"./document-scroll-listener-Bxs16huG.js";import"./floating-components-CKmcRn_b.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,I={title:"Components/DBTabs/Truncation",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},width:{control:"select",options:["full","auto"]},contentAlignment:{control:"select",options:["start","center"]},behavior:{control:"select",options:["scrollbar","arrows"]},initialSelectedIndex:{control:"number"},initialSelectedMode:{control:"select",options:["auto","manually"]},name:{control:"text"},tabs:{control:"object"},arrowScrollDistance:{control:"number"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{orientation:"vertical",width:"auto",default:`<DBTabList
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
