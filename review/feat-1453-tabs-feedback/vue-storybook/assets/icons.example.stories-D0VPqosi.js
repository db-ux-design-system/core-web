import{i as e}from"./preload-helper-BvLp0nkB.js";import{Q as t,a as n,d as r,l as i,s as a,t as o}from"./src-ClBUHEO7.js";var s,c,l,u,d;e((()=>{o(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTabs/Icons`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:s(),onTabSelect:s()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},l={args:{default:`<DBTabList
  ><DBTabItem icon="house" :showIcon="true"> Home </DBTabItem
  ><DBTabItem icon="magnifying_glass" :showIcon="true"> Search </DBTabItem
  ><DBTabItem icon="calendar" :showIcon="true"> Calendar </DBTabItem></DBTabList
><DBTabPanel>Home content</DBTabPanel><DBTabPanel>Search content</DBTabPanel
><DBTabPanel>Calendar content</DBTabPanel>`},render:e=>({components:{DBTabs:n,DBInfotext:t,DBTabItem:r,DBTabList:i,DBTabPanel:a},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with leading icons:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},u={args:{default:`<DBTabList
  ><DBTabItem iconTrailing="exclamation_mark_circle" :showIconTrailing="true">
    Notifications </DBTabItem
  ><DBTabItem iconTrailing="information_circle" :showIconTrailing="true">
    Info </DBTabItem
  ><DBTabItem iconTrailing="circular_arrows" :showIconTrailing="true">
    Settings
  </DBTabItem></DBTabList
><DBTabPanel>Notifications content</DBTabPanel
><DBTabPanel>Info content</DBTabPanel><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:n,DBInfotext:t,DBTabItem:r,DBTabList:i,DBTabPanel:a},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with trailing icons:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`withleadingicons`,`withtrailingicons`]}))();export{d as __namedExportsOrder,c as default,l as withleadingicons,u as withtrailingicons};