import{i as e}from"./preload-helper-CuD5bpNn.js";import{C as t,T as n,a as r,ft as i,t as a,x as o}from"./src-BJ7R8C9G.js";var s,c,l,u,d;e((()=>{a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTabs/Initial Selection`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:s(),onTabSelect:s()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},l={args:{id:`initial-selection`,label:`initial-selection`,initialSelectedIndex:2,default:`<DBTabList
  ><DBTabItem>Overview</DBTabItem><DBTabItem>Details</DBTabItem
  ><DBTabItem>Settings</DBTabItem></DBTabList
><DBTabPanel>Overview content</DBTabPanel
><DBTabPanel>Details content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:r,DBInfotext:i,DBTabItem:n,DBTabList:t,DBTabPanel:o},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    3rd tab pre-selected via initialSelectedIndex (also supports
                    deep linking via URL hash, e.g. #initial-selection-tab-1):
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},u={args:{label:`value-selection`,initialSelectedIndex:1,default:`<DBTabList
  ><DBTabItem value="overview">Overview</DBTabItem
  ><DBTabItem value="details">Details</DBTabItem
  ><DBTabItem value="settings">Settings</DBTabItem></DBTabList
><DBTabPanel>Overview content</DBTabPanel
><DBTabPanel>Details content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:r,DBInfotext:i,DBTabItem:n,DBTabList:t,DBTabPanel:o},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    2nd tab pre-selected with value props and 'onValueChange':
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "initial-selection",
    "label": "initial-selection",
    "initialSelectedIndex": 2,
    "default": \`<DBTabList
  ><DBTabItem>Overview</DBTabItem><DBTabItem>Details</DBTabItem
  ><DBTabItem>Settings</DBTabItem></DBTabList
><DBTabPanel>Overview content</DBTabPanel
><DBTabPanel>Details content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>\`
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
                    3rd tab pre-selected via initialSelectedIndex (also supports
                    deep linking via URL hash, e.g. #initial-selection-tab-1):
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "value-selection",
    "initialSelectedIndex": 1,
    "default": \`<DBTabList
  ><DBTabItem value="overview">Overview</DBTabItem
  ><DBTabItem value="details">Details</DBTabItem
  ><DBTabItem value="settings">Settings</DBTabItem></DBTabList
><DBTabPanel>Overview content</DBTabPanel
><DBTabPanel>Details content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>\`
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
                    2nd tab pre-selected with value props and 'onValueChange':
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...u.parameters?.docs?.source}}},d=[`PreselectedviainitialSelectedIndex`,`Preselectedwithvalueprops`]}))();export{l as PreselectedviainitialSelectedIndex,u as Preselectedwithvalueprops,d as __namedExportsOrder,c as default};