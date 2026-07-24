import{i as e}from"./preload-helper-Dk-BLK4W.js";import{C as t,T as n,a as r,gt as i,t as a,x as o}from"./src-CqqOn_FC.js";var s,c,l,u;e((()=>{a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTabs/Disabled`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:s(),onTabSelect:s()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},l={args:{default:`<DBTabList
  ><DBTabItem>Active Tab</DBTabItem
  ><DBTabItem :disabled="true">Disabled Tab</DBTabItem
  ><DBTabItem>Another Tab</DBTabItem></DBTabList
><DBTabPanel>Panel for active tab</DBTabPanel
><DBTabPanel>Panel for disabled tab</DBTabPanel
><DBTabPanel>Panel for another tab</DBTabPanel>`},render:e=>({components:{DBTabs:r,DBInfotext:i,DBTabItem:n,DBTabList:t,DBTabPanel:o},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with disabled tab in the middle:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBTabList
  ><DBTabItem>Active Tab</DBTabItem
  ><DBTabItem :disabled="true">Disabled Tab</DBTabItem
  ><DBTabItem>Another Tab</DBTabItem></DBTabList
><DBTabPanel>Panel for active tab</DBTabPanel
><DBTabPanel>Panel for disabled tab</DBTabPanel
><DBTabPanel>Panel for another tab</DBTabPanel>\`
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
                    with disabled tab in the middle:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...l.parameters?.docs?.source}}},u=[`withdisabledtabinthemiddle`]}))();export{u as __namedExportsOrder,c as default,l as withdisabledtabinthemiddle};