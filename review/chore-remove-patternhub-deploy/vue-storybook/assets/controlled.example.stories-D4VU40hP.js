import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-B7NAOO9a.js";import{i,n as a,r as o,t as s}from"./tab-list-Bpy5wTv6.js";import{i as c,n as l,r as u,t as d}from"./tabs-Cu4GEABR.js";var f=t({ControlledTabsExternalState:()=>h,__namedExportsOrder:()=>g,default:()=>m}),p,m,h,g;function _(){return(_=e((()=>{n(),o(),s(),u(),d(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBTabs/Controlled`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:p(),onValueChange:p()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},h={args:{activeIndex:0,onIndexChange:p(),default:`<DBTabList
  ><DBTabItem>Tab 1</DBTabItem><DBTabItem>Tab 2</DBTabItem
  ><DBTabItem>Tab 3</DBTabItem></DBTabList
><DBTabPanel>Content of Tab 1</DBTabPanel
><DBTabPanel>Content of Tab 2</DBTabPanel
><DBTabPanel>Content of Tab 3</DBTabPanel>`},render:e=>({components:{DBTabs:l,DBButton:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container"   >Use external buttons to control active tab<DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},g=[`ControlledTabsExternalState`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}}})))()}export{m as i,f as n,_ as r,h as t};