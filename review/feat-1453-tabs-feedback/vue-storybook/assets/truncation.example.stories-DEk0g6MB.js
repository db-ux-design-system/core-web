import{a as e,_ as n}from"./tabs-Cir34JDh.js";import{_ as o,a as l}from"./tab-list-2To2XU1k.js";import{_ as r}from"./infotext-Ct1pv765.js";import"./iframe-q-AYLWxZ.js";import"./preload-helper-CDE7oBwp.js";import"./index-C-vJ4oTM.js";import"./button-CkPmRBAb.js";import"./tooltip-diLkT-gC.js";import"./document-scroll-listener-D0VF2132.js";import"./floating-components-CKmcRn_b.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBTabs/Truncation",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},tabItemWidth:{control:"select",options:["full","auto"]},tabItemAlignment:{control:"select",options:["start","center","end"]},behavior:{control:"select",options:["scrollbar","arrows"]},initialSelectedIndex:{control:"number"},initialSelectedMode:{control:"select",options:["auto","manually"]},name:{control:"text"},tabs:{control:"object"},arrowScrollDistance:{control:"number"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{orientation:"vertical",tabItemWidth:"auto",default:`<DBTabList
  ><DBTabItem label="Very long tab label that gets truncated"></DBTabItem
  ><DBTabItem label="Another long label"></DBTabItem
  ><DBTabItem label="Short"></DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:a=>({components:{DBTabs:e,DBInfotext:r,DBTabItem:l,DBTabList:o,DBTabPanel:n},setup(){return{args:a}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    truncated tab label (vertical only):
                </DBInfotext><DBTabs v-bind="args"   >${a.default}</DBTabs></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "vertical",
    "tabItemWidth": "auto",
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
    template: \`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    truncated tab label (vertical only):
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...t.parameters?.docs?.source}}};const I=["truncated"];export{I as __namedExportsOrder,f as default,t as truncated};
