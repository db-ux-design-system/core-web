import{a as e,_ as n}from"./tabs-BoqvEDxr.js";import{_ as o,a as l}from"./tab-list-CYrltmoL.js";import{_ as r}from"./infotext-DTaf6UZ7.js";import"./iframe-Beipxrg6.js";import"./preload-helper-CDE7oBwp.js";import"./index-CrC2-ZEz.js";import"./button-ACvAzJCC.js";import"./tooltip-C5dvfysC.js";import"./document-scroll-listener-BflQilF1.js";import"./floating-components-CKmcRn_b.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBTabs/Truncation",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},width:{control:"select",options:["full","auto"]},contentAlignment:{control:"select",options:["start","center","end"]},behavior:{control:"select",options:["scrollbar","arrows"]},initialSelectedIndex:{control:"number"},initialSelectedMode:{control:"select",options:["auto","manually"]},name:{control:"text"},tabs:{control:"object"},arrowScrollDistance:{control:"number"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{orientation:"vertical",width:"auto",default:`<DBTabList
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
}`,...t.parameters?.docs?.source}}};const I=["truncated"];export{I as __namedExportsOrder,f as default,t as truncated};
