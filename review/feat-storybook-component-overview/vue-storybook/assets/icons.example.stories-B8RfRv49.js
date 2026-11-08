import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-T1YHfGVq.js";import{i,n as a,r as o,t as s}from"./tab-list-C2REnV8R.js";import{i as c,n as l,r as u,t as d}from"./tabs-DUnICHox.js";var f=t({__namedExportsOrder:()=>_,default:()=>m,withleadingicons:()=>h,withtrailingicons:()=>g}),p,m,h,g,_;function v(){return(v=e((()=>{n(),o(),s(),u(),d(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBTabs/Icons`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:p(),onValueChange:p()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},h={args:{default:`<DBTabList
  ><DBTabItem icon="house" :showIcon="true"> Home </DBTabItem
  ><DBTabItem icon="magnifying_glass" :showIcon="true"> Search </DBTabItem
  ><DBTabItem icon="calendar" :showIcon="true"> Calendar </DBTabItem></DBTabList
><DBTabPanel>Home content</DBTabPanel><DBTabPanel>Search content</DBTabPanel
><DBTabPanel>Calendar content</DBTabPanel>`},render:e=>({components:{DBTabs:l,DBInfotext:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with leading icons:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},g={args:{default:`<DBTabList
  ><DBTabItem iconTrailing="exclamation_mark_circle" :showIconTrailing="true">
    Notifications </DBTabItem
  ><DBTabItem iconTrailing="information_circle" :showIconTrailing="true">
    Info </DBTabItem
  ><DBTabItem iconTrailing="circular_arrows" :showIconTrailing="true">
    Settings
  </DBTabItem></DBTabList
><DBTabPanel>Notifications content</DBTabPanel
><DBTabPanel>Info content</DBTabPanel><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:l,DBInfotext:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with trailing icons:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},_=[`withleadingicons`,`withtrailingicons`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBTabList
  ><DBTabItem icon="house" :showIcon="true"> Home </DBTabItem
  ><DBTabItem icon="magnifying_glass" :showIcon="true"> Search </DBTabItem
  ><DBTabItem icon="calendar" :showIcon="true"> Calendar </DBTabItem></DBTabList
><DBTabPanel>Home content</DBTabPanel><DBTabPanel>Search content</DBTabPanel
><DBTabPanel>Calendar content</DBTabPanel>\`
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
                    with leading icons:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBTabList
  ><DBTabItem iconTrailing="exclamation_mark_circle" :showIconTrailing="true">
    Notifications </DBTabItem
  ><DBTabItem iconTrailing="information_circle" :showIconTrailing="true">
    Info </DBTabItem
  ><DBTabItem iconTrailing="circular_arrows" :showIconTrailing="true">
    Settings
  </DBTabItem></DBTabList
><DBTabPanel>Notifications content</DBTabPanel
><DBTabPanel>Info content</DBTabPanel><DBTabPanel>Settings content</DBTabPanel>\`
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
                    with trailing icons:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...g.parameters?.docs?.source}}}})))()}export{g as i,v as n,h as r,f as t};