import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-C60y4aK7.js";import{i as r,n as i,r as a,t as o}from"./tab-list-MkHDuQZG.js";import{i as s,n as c,r as l,t as u}from"./tabs-F-tU-5TE.js";var d,f,p,m,h;function g(){return(g=e((()=>{t(),a(),o(),l(),u(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBTabs/Initial Selection`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:d(),onTabSelect:d()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},p={args:{id:`initial-selection`,label:`initial-selection`,initialSelectedIndex:2,default:`<DBTabList
  ><DBTabItem>Overview</DBTabItem><DBTabItem>Details</DBTabItem
  ><DBTabItem>Settings</DBTabItem></DBTabList
><DBTabPanel>Overview content</DBTabPanel
><DBTabPanel>Details content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:c,DBInfotext:n,DBTabItem:r,DBTabList:i,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    3rd tab pre-selected via initialSelectedIndex (also supports
                    deep linking via URL hash, e.g. #initial-selection-tab-1):
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},m={args:{label:`value-selection`,initialSelectedIndex:1,default:`<DBTabList
  ><DBTabItem value="overview">Overview</DBTabItem
  ><DBTabItem value="details">Details</DBTabItem
  ><DBTabItem value="settings">Settings</DBTabItem></DBTabList
><DBTabPanel>Overview content</DBTabPanel
><DBTabPanel>Details content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:c,DBInfotext:n,DBTabItem:r,DBTabList:i,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    2nd tab pre-selected with value props and 'onValueChange':
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`PreselectedviainitialSelectedIndex`,`Preselectedwithvalueprops`]})))()}g();export{p as PreselectedviainitialSelectedIndex,m as Preselectedwithvalueprops,h as __namedExportsOrder,f as default};