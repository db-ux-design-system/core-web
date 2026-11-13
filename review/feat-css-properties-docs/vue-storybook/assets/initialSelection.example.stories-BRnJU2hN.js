import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-COJ3J9QK.js";import{i,n as a,r as o,t as s}from"./tab-list-D2g3w5i_.js";import{i as c,n as l,r as u,t as d}from"./tabs-BL1sjEeM.js";var f=t({PreselectedviainitialSelectedIndex:()=>h,Preselectedwithvalueprops:()=>g,__namedExportsOrder:()=>_,default:()=>m}),p,m,h,g,_;function v(){return(v=e((()=>{n(),o(),s(),u(),d(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBTabs/Initial Selection`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:p(),onValueChange:p()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},h={args:{id:`initial-selection`,label:`initial-selection`,initialSelectedIndex:2,default:`<DBTabList
  ><DBTabItem>Overview</DBTabItem><DBTabItem>Details</DBTabItem
  ><DBTabItem>Settings</DBTabItem></DBTabList
><DBTabPanel>Overview content</DBTabPanel
><DBTabPanel>Details content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:l,DBInfotext:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    3rd tab pre-selected via initialSelectedIndex (also supports
                    deep linking via URL hash, e.g. #initial-selection-tab-1):
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},g={args:{label:`value-selection`,initialSelectedIndex:1,default:`<DBTabList
  ><DBTabItem value="overview">Overview</DBTabItem
  ><DBTabItem value="details">Details</DBTabItem
  ><DBTabItem value="settings">Settings</DBTabItem></DBTabList
><DBTabPanel>Overview content</DBTabPanel
><DBTabPanel>Details content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:l,DBInfotext:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    2nd tab pre-selected with value props and 'onValueChange':
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},_=[`PreselectedviainitialSelectedIndex`,`Preselectedwithvalueprops`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}})))()}export{f as i,g as n,v as r,h as t};