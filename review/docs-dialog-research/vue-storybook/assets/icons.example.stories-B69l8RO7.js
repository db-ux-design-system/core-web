import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-BOZyYnJN.js";import{i as r,n as i,r as a,t as o}from"./tab-list-BKGvBXIo.js";import{i as s,n as c,r as l,t as u}from"./tabs-BAIaALpR.js";var d,f,p,m,h;function g(){return(g=e((()=>{t(),a(),o(),l(),u(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBTabs/Icons`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:d(),onTabSelect:d()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},p={args:{default:`<DBTabList
  ><DBTabItem icon="house" :showIcon="true"> Home </DBTabItem
  ><DBTabItem icon="magnifying_glass" :showIcon="true"> Search </DBTabItem
  ><DBTabItem icon="calendar" :showIcon="true"> Calendar </DBTabItem></DBTabList
><DBTabPanel>Home content</DBTabPanel><DBTabPanel>Search content</DBTabPanel
><DBTabPanel>Calendar content</DBTabPanel>`},render:e=>({components:{DBTabs:c,DBInfotext:n,DBTabItem:r,DBTabList:i,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with leading icons:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},m={args:{default:`<DBTabList
  ><DBTabItem iconTrailing="exclamation_mark_circle" :showIconTrailing="true">
    Notifications </DBTabItem
  ><DBTabItem iconTrailing="information_circle" :showIconTrailing="true">
    Info </DBTabItem
  ><DBTabItem iconTrailing="circular_arrows" :showIconTrailing="true">
    Settings
  </DBTabItem></DBTabList
><DBTabPanel>Notifications content</DBTabPanel
><DBTabPanel>Info content</DBTabPanel><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:c,DBInfotext:n,DBTabItem:r,DBTabList:i,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with trailing icons:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`withleadingicons`,`withtrailingicons`]})))()}g();export{h as __namedExportsOrder,f as default,p as withleadingicons,m as withtrailingicons};