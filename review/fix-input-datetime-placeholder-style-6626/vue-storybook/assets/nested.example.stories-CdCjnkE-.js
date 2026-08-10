import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-ASCoLCJZ.js";import{i as r,n as i,r as a,t as o}from"./tab-list-DtCVkpKP.js";import{i as s,n as c,r as l,t as u}from"./tabs-BNcl92rV.js";var d,f,p,m;function h(){return(h=e((()=>{t(),a(),o(),l(),u(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBTabs/Nested`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:d(),onTabSelect:d()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},p={args:{label:`outer-tabs`,default:`<DBTabList
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
><DBTabPanel><p>Settings content without nested tabs.</p></DBTabPanel>`},render:e=>({components:{DBTabs:c,DBInfotext:n,DBTabItem:r,DBTabList:i,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Nested Tabs:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`NestedTabs`]})))()}h();export{p as NestedTabs,m as __namedExportsOrder,f as default};