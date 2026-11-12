import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-DymTzYQV.js";import{i,n as a,r as o,t as s}from"./tab-list-gYzyaMQn.js";import{i as c,n as l,r as u,t as d}from"./tabs-chqV4i3W.js";var f=t({__namedExportsOrder:()=>g,default:()=>m,withdisabledtabinthemiddle:()=>h}),p,m,h,g;function _(){return(_=e((()=>{n(),o(),s(),u(),d(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBTabs/Disabled`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:p(),onValueChange:p()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},h={args:{default:`<DBTabList
  ><DBTabItem>Active Tab</DBTabItem
  ><DBTabItem :disabled="true">Disabled Tab</DBTabItem
  ><DBTabItem>Another Tab</DBTabItem></DBTabList
><DBTabPanel>Panel for active tab</DBTabPanel
><DBTabPanel>Panel for disabled tab</DBTabPanel
><DBTabPanel>Panel for another tab</DBTabPanel>`},render:e=>({components:{DBTabs:l,DBInfotext:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with disabled tab in the middle:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},g=[`withdisabledtabinthemiddle`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}}})))()}export{_ as n,h as r,f as t};