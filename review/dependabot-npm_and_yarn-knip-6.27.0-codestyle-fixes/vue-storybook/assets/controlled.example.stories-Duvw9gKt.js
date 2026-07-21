import{i as e}from"./preload-helper-zWsi7Jic.js";import{C as t,T as n,a as r,bt as i,t as a,x as o}from"./src-Bqo8Th2l.js";var s,c,l,u;e((()=>{a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTabs/Controlled`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:s(),onTabSelect:s()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},l={args:{activeIndex:0,onIndexChange:s(),default:`<DBTabList
  ><DBTabItem>Tab 1</DBTabItem><DBTabItem>Tab 2</DBTabItem
  ><DBTabItem>Tab 3</DBTabItem></DBTabList
><DBTabPanel>Content of Tab 1</DBTabPanel
><DBTabPanel>Content of Tab 2</DBTabPanel
><DBTabPanel>Content of Tab 3</DBTabPanel>`},render:e=>({components:{DBTabs:r,DBButton:i,DBTabItem:n,DBTabList:t,DBTabPanel:o},setup(){return{args:e}},template:`<div class="fit-content-container"   >Use external buttons to control active tab<DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`ControlledTabsExternalState`]}))();export{l as ControlledTabsExternalState,u as __namedExportsOrder,c as default};