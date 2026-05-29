import{i as e}from"./preload-helper-BVcynSrN.js";import{Q as t,a as n,d as r,l as i,s as a,t as o}from"./src-bRHw-lGJ.js";var s,c,l,u,d,f;e((()=>{o(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTabs/Overflow`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:s(),onTabSelect:s()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},width:{control:`select`,options:[`full`,`auto`]},alignment:{control:`select`,options:[`start`,`center`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},name:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},l={args:{width:`auto`,default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:e=>({components:{DBTabs:n,DBInfotext:t,DBTabItem:r,DBTabList:i,DBTabPanel:a},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    no overflow:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},u={args:{behavior:`arrows`,default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
  ><DBTabItem>Test 5</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
><DBTabPanel>Tab Panel 5</DBTabPanel>`},render:e=>({components:{DBTabs:n,DBInfotext:t,DBTabItem:r,DBTabList:i,DBTabPanel:a},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with overflow - behavior: arrows:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},d={args:{default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
  ><DBTabItem>Test 5</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
><DBTabPanel>Tab Panel 5</DBTabPanel>`},render:e=>({components:{DBTabs:n,DBInfotext:t,DBTabItem:r,DBTabList:i,DBTabPanel:a},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with overflow - behavior: scrollbar:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
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
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    no overflow:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "arrows",
    "default": \`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
  ><DBTabItem>Test 5</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
><DBTabPanel>Tab Panel 5</DBTabPanel>\`
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
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with overflow - behavior: arrows:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
  ><DBTabItem>Test 5</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
><DBTabPanel>Tab Panel 5</DBTabPanel>\`
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
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with overflow - behavior: scrollbar:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...d.parameters?.docs?.source}}},f=[`nooverflow`,`withoverflowbehaviorarrows`,`withoverflowbehaviorscrollbar`]}))();export{f as __namedExportsOrder,c as default,l as nooverflow,u as withoverflowbehaviorarrows,d as withoverflowbehaviorscrollbar};