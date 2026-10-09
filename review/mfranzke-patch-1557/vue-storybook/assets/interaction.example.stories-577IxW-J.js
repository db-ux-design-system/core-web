import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./tab-list-Bhj0Mnm3.js";import{i as a,n as o,r as s,t as c}from"./tabs-BoZpYKBK.js";var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),i(),s(),c(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTabs/Interaction`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:l(),onTabSelect:l()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},d={args:{default:`<DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem></DBTabList
><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel>`},render:e=>({components:{DBTabs:o,DBTabItem:t,DBTabList:n,DBTabPanel:a},setup(){return{args:e}},template:`<div class="fit-content-container" data-testid="click-tabs"   ><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},f={args:{"data-testid":`alignment-tabs`,tabItemAlignment:`center`,default:`<DBTabList><DBTabItem>Test 1</DBTabItem></DBTabList
><DBTabPanel>Content 1</DBTabPanel>`},render:e=>({components:{DBTabs:o,DBTabItem:t,DBTabList:n,DBTabPanel:a},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},p={args:{"data-testid":`auto-width-tabs`,tabItemWidth:`auto`,default:`<DBTabList
  ><DBTabItem icon="x_placeholder">
    Tab item with a very long label that must not be cut off </DBTabItem
  ><DBTabItem>Short</DBTabItem></DBTabList
><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel>`},render:e=>({components:{DBTabs:o,DBTabItem:t,DBTabList:n,DBTabPanel:a},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},m={args:{"data-testid":`vertical-width-tabs`,orientation:`vertical`,tabItemWidth:`auto`,default:`<DBTabList
  ><DBTabItem>
    Very long vertical tab label that definitely gets truncated </DBTabItem
  ><DBTabItem>Short</DBTabItem></DBTabList
><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel>`},render:e=>({components:{DBTabs:o,DBTabItem:t,DBTabList:n,DBTabPanel:a},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},h={args:{"data-testid":`full-width-tabs`,tabItemWidth:`full`,default:`<DBTabList
  ><DBTabItem>Short</DBTabItem
  ><DBTabItem>
    A considerably longer full-width tab item label
  </DBTabItem></DBTabList
><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel>`},render:e=>({components:{DBTabs:o,DBTabItem:t,DBTabList:n,DBTabPanel:a},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},g=[`Interaction`,`TabsInteraction1`,`TabsInteraction2`,`TabsInteraction3`,`TabsInteraction4`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBTabList><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem></DBTabList
><DBTabPanel>Panel 1</DBTabPanel><DBTabPanel>Panel 2</DBTabPanel>\`
  },
  render: (args: any) => ({
    components: {
      DBTabs,
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "alignment-tabs",
    "tabItemAlignment": "center",
    "default": \`<DBTabList><DBTabItem>Test 1</DBTabItem></DBTabList
><DBTabPanel>Content 1</DBTabPanel>\`
  },
  render: (args: any) => ({
    components: {
      DBTabs,
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}}})))()}_();export{d as Interaction,f as TabsInteraction1,p as TabsInteraction2,m as TabsInteraction3,h as TabsInteraction4,g as __namedExportsOrder,u as default};