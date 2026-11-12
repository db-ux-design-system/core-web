import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-WExAjssN.js";import{i,n as a,r as o,t as s}from"./tab-list-Ci8HkFxN.js";import{i as c,n as l,r as u,t as d}from"./tabs-C2pS3fw9.js";var f=t({NestedTabs:()=>h,__namedExportsOrder:()=>g,default:()=>m}),p,m,h,g;function _(){return(_=e((()=>{n(),o(),s(),u(),d(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBTabs/Nested`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:p(),onValueChange:p()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},h={args:{label:`outer-tabs`,default:`<DBTabList
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
><DBTabPanel><p>Settings content without nested tabs.</p></DBTabPanel>`},render:e=>({components:{DBTabs:l,DBInfotext:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Nested Tabs:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},g=[`NestedTabs`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}}})))()}export{_ as n,f as r,h as t};