import{n as e}from"./chunk-DnJy8xQt.js";import{D as t,a as n,i as r,o as i,r as a,t as o}from"./src-CttduW8a.js";var s,c,l,u,d,f,p;e((()=>{o(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTabs/Tab-Item-Width`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},name:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{tabItemWidth:`auto`,default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:e=>({components:{DBTabs:a,DBInfotext:t,DBTabItem:i,DBTabList:n,DBTabPanel:r},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    auto:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},u={args:{tabItemWidth:`full`,default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:e=>({components:{DBTabs:a,DBInfotext:t,DBTabItem:i,DBTabList:n,DBTabPanel:r},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    full - alignment: start:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},d={args:{tabItemWidth:`full`,tabItemAlignment:`center`,default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:e=>({components:{DBTabs:a,DBInfotext:t,DBTabItem:i,DBTabList:n,DBTabPanel:r},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    full - alignment: center:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},f={args:{tabItemWidth:`full`,tabItemAlignment:`end`,default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:e=>({components:{DBTabs:a,DBInfotext:t,DBTabItem:i,DBTabList:n,DBTabPanel:r},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    full - alignment: end:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "tabItemWidth": "auto",
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
    template: \`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    auto:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "tabItemWidth": "full",
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
    template: \`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    full - alignment: start:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "tabItemWidth": "full",
    "tabItemAlignment": "center",
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
    template: \`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    full - alignment: center:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "tabItemWidth": "full",
    "tabItemAlignment": "end",
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
    template: \`<div class="fit-content-container" :style="{
  width: '100%'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    full - alignment: end:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...f.parameters?.docs?.source}}},p=[`auto`,`fullalignmentstart`,`fullalignmentcenter`,`fullalignmentend`]}))();export{p as __namedExportsOrder,l as auto,c as default,d as fullalignmentcenter,f as fullalignmentend,u as fullalignmentstart};