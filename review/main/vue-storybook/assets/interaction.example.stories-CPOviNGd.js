import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./button-DEbldj0g.js";import{i as r,n as i,r as a,t as o}from"./tab-list-DUXScKja.js";import{i as s,n as c,r as l,t as u}from"./tabs-1rB4uNOV.js";var d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{t(),a(),o(),l(),u(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBTabs/Interaction`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:d(),onTabSelect:d()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},p={args:{default:`<DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem></DBTabList
><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel>`},render:e=>({components:{DBTabs:c,DBButton:n,DBTabItem:r,DBTabList:i,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container" data-testid="click-tabs"   ><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},m={args:{"data-testid":`alignment-tabs`,tabItemAlignment:`center`,default:`<DBTabList><DBTabItem>Test 1</DBTabItem></DBTabList
><DBTabPanel>Content 1</DBTabPanel>`},render:e=>({components:{DBTabs:c,DBButton:n,DBTabItem:r,DBTabList:i,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},h={args:{"data-testid":`auto-width-tabs`,tabItemWidth:`auto`,default:`<DBTabList
  ><DBTabItem icon="x_placeholder">
    Tab item with a very long label that must not be cut off </DBTabItem
  ><DBTabItem>Short</DBTabItem></DBTabList
><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel>`},render:e=>({components:{DBTabs:c,DBButton:n,DBTabItem:r,DBTabList:i,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},g={args:{"data-testid":`vertical-width-tabs`,orientation:`vertical`,tabItemWidth:`auto`,default:`<DBTabList
  ><DBTabItem>
    Very long vertical tab label that definitely gets truncated </DBTabItem
  ><DBTabItem>Short</DBTabItem></DBTabList
><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel>`},render:e=>({components:{DBTabs:c,DBButton:n,DBTabItem:r,DBTabList:i,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},_={args:{"data-testid":`full-width-tabs`,tabItemWidth:`full`,default:`<DBTabList
  ><DBTabItem>Short</DBTabItem
  ><DBTabItem>
    A considerably longer full-width tab item label
  </DBTabItem></DBTabList
><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel>`},render:e=>({components:{DBTabs:c,DBButton:n,DBTabItem:r,DBTabList:i,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},v=[`Interaction`,`TabsInteraction1`,`TabsInteraction2`,`TabsInteraction3`,`TabsInteraction4`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}})))()}y();export{p as Interaction,m as TabsInteraction1,h as TabsInteraction2,g as TabsInteraction3,_ as TabsInteraction4,v as __namedExportsOrder,f as default};