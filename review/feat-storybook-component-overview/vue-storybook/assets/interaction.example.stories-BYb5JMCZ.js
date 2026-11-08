import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-Bj4Q8I_R.js";import{i,n as a,r as o,t as s}from"./tab-list-D13HzZpe.js";import{i as c,n as l,r as u,t as d}from"./tabs-BbPEH6Vc.js";var f=t({Interaction:()=>h,TabsInteraction1:()=>g,TabsInteraction2:()=>_,TabsInteraction3:()=>v,TabsInteraction4:()=>y,__namedExportsOrder:()=>b,default:()=>m}),p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),o(),s(),u(),d(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBTabs/Interaction`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:p(),onValueChange:p()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},h={args:{default:`<DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem></DBTabList
><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel>`},render:e=>({components:{DBTabs:l,DBButton:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container" data-testid="click-tabs"   ><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},g={args:{"data-testid":`alignment-tabs`,tabItemAlignment:`center`,default:`<DBTabList><DBTabItem>Test 1</DBTabItem></DBTabList
><DBTabPanel>Content 1</DBTabPanel>`},render:e=>({components:{DBTabs:l,DBButton:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},_={args:{"data-testid":`auto-width-tabs`,tabItemWidth:`auto`,default:`<DBTabList
  ><DBTabItem icon="x_placeholder">
    Tab item with a very long label that must not be cut off </DBTabItem
  ><DBTabItem>Short</DBTabItem></DBTabList
><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel>`},render:e=>({components:{DBTabs:l,DBButton:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},v={args:{"data-testid":`vertical-width-tabs`,orientation:`vertical`,tabItemWidth:`auto`,default:`<DBTabList
  ><DBTabItem>
    Very long vertical tab label that definitely gets truncated </DBTabItem
  ><DBTabItem>Short</DBTabItem></DBTabList
><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel>`},render:e=>({components:{DBTabs:l,DBButton:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},y={args:{"data-testid":`full-width-tabs`,tabItemWidth:`full`,default:`<DBTabList
  ><DBTabItem>Short</DBTabItem
  ><DBTabItem>
    A considerably longer full-width tab item label
  </DBTabItem></DBTabList
><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel>`},render:e=>({components:{DBTabs:l,DBButton:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},b=[`Interaction`,`TabsInteraction1`,`TabsInteraction2`,`TabsInteraction3`,`TabsInteraction4`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem></DBTabList
><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel>\`
  },
  render: (args: any) => ({
    components: {
      DBTabs,
      DBButton,
      DBTabItem,
      DBTabList,
      DBTabPanel
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="fit-content-container" data-testid="click-tabs"   ><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "alignment-tabs",
    "tabItemAlignment": "center",
    "default": \`<DBTabList><DBTabItem>Test 1</DBTabItem></DBTabList
><DBTabPanel>Content 1</DBTabPanel>\`
  },
  render: (args: any) => ({
    components: {
      DBTabs,
      DBButton,
      DBTabItem,
      DBTabList,
      DBTabPanel
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="fit-content-container"   ><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "auto-width-tabs",
    "tabItemWidth": "auto",
    "default": \`<DBTabList
  ><DBTabItem icon="x_placeholder">
    Tab item with a very long label that must not be cut off </DBTabItem
  ><DBTabItem>Short</DBTabItem></DBTabList
><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel>\`
  },
  render: (args: any) => ({
    components: {
      DBTabs,
      DBButton,
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
}"  ><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "vertical-width-tabs",
    "orientation": "vertical",
    "tabItemWidth": "auto",
    "default": \`<DBTabList
  ><DBTabItem>
    Very long vertical tab label that definitely gets truncated </DBTabItem
  ><DBTabItem>Short</DBTabItem></DBTabList
><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel>\`
  },
  render: (args: any) => ({
    components: {
      DBTabs,
      DBButton,
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
}"  ><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "full-width-tabs",
    "tabItemWidth": "full",
    "default": \`<DBTabList
  ><DBTabItem>Short</DBTabItem
  ><DBTabItem>
    A considerably longer full-width tab item label
  </DBTabItem></DBTabList
><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel>\`
  },
  render: (args: any) => ({
    components: {
      DBTabs,
      DBButton,
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
}"  ><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...y.parameters?.docs?.source}}}})))()}export{y as a,v as i,g as n,x as o,_ as r,f as s,h as t};