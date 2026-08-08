import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-JmLiDJ6R.js";import{i as r,n as i,r as a,t as o}from"./tab-list-BsReHSse.js";import{i as s,n as c,r as l,t as u}from"./tabs-B_HiOApN.js";var d,f,p,m;function h(){return(h=e((()=>{t(),a(),o(),l(),u(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBTabs/Controlled`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:d(),onTabSelect:d()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},p={args:{activeIndex:0,onIndexChange:d(),default:`<DBTabList
  ><DBTabItem>Tab 1</DBTabItem><DBTabItem>Tab 2</DBTabItem
  ><DBTabItem>Tab 3</DBTabItem></DBTabList
><DBTabPanel>Content of Tab 1</DBTabPanel
><DBTabPanel>Content of Tab 2</DBTabPanel
><DBTabPanel>Content of Tab 3</DBTabPanel>`},render:e=>({components:{DBTabs:c,DBButton:n,DBTabItem:r,DBTabList:i,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container"   >Use external buttons to control active tab<DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "activeIndex": 0,
    "onIndexChange": fn(),
    "default": \`<DBTabList
  ><DBTabItem>Tab 1</DBTabItem><DBTabItem>Tab 2</DBTabItem
  ><DBTabItem>Tab 3</DBTabItem></DBTabList
><DBTabPanel>Content of Tab 1</DBTabPanel
><DBTabPanel>Content of Tab 2</DBTabPanel
><DBTabPanel>Content of Tab 3</DBTabPanel>\`
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
    template: \`<div class="fit-content-container"   >Use external buttons to control active tab<DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...p.parameters?.docs?.source}}},m=[`ControlledTabsExternalState`]})))()}h();export{p as ControlledTabsExternalState,m as __namedExportsOrder,f as default};