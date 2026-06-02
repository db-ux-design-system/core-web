import{i as e}from"./preload-helper-BvLp0nkB.js";import{Q as t,a as n,d as r,l as i,s as a,t as o}from"./src-gH6is_Tx.js";var s,c,l,u;e((()=>{o(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTabs/Nested`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:s(),onTabSelect:s()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},l={args:{label:`outer-tabs`,default:`<DBTabList
  ><DBTabItem>Overview</DBTabItem><DBTabItem>Details</DBTabItem
  ><DBTabItem>Settings</DBTabItem></DBTabList
><DBTabPanel><p>Overview content without nested tabs.</p></DBTabPanel
><DBTabPanel
  ><DBTabs label="inner-tabs"
    ><DBTabList
      ><DBTabItem>Sub-Tab A</DBTabItem
      ><DBTabItem>Sub-Tab B</DBTabItem></DBTabList
    ><DBTabPanel>Content of inner Sub-Tab A</DBTabPanel
    ><DBTabPanel>Content of inner Sub-Tab B</DBTabPanel></DBTabs
  ></DBTabPanel
><DBTabPanel><p>Settings content without nested tabs.</p></DBTabPanel>`},render:e=>({components:{DBTabs:n,DBInfotext:t,DBTabItem:r,DBTabList:i,DBTabPanel:a},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Nested Tabs:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "outer-tabs",
    "default": \`<DBTabList
  ><DBTabItem>Overview</DBTabItem><DBTabItem>Details</DBTabItem
  ><DBTabItem>Settings</DBTabItem></DBTabList
><DBTabPanel><p>Overview content without nested tabs.</p></DBTabPanel
><DBTabPanel
  ><DBTabs label="inner-tabs"
    ><DBTabList
      ><DBTabItem>Sub-Tab A</DBTabItem
      ><DBTabItem>Sub-Tab B</DBTabItem></DBTabList
    ><DBTabPanel>Content of inner Sub-Tab A</DBTabPanel
    ><DBTabPanel>Content of inner Sub-Tab B</DBTabPanel></DBTabs
  ></DBTabPanel
><DBTabPanel><p>Settings content without nested tabs.</p></DBTabPanel>\`
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
                    Nested Tabs:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...l.parameters?.docs?.source}}},u=[`NestedTabs`]}))();export{l as NestedTabs,u as __namedExportsOrder,c as default};