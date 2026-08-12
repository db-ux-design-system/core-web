import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-Cwhpx-4A.js";import{i as r,n as i,r as a,t as o}from"./tab-list-v5TXKrBl.js";import{i as s,n as c,r as l,t as u}from"./tabs-C4JT-cZW.js";var d,f,p,m;function h(){return(h=e((()=>{t(),a(),o(),l(),u(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBTabs/Disabled`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:d(),onTabSelect:d()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},p={args:{default:`<DBTabList
  ><DBTabItem>Active Tab</DBTabItem
  ><DBTabItem :disabled="true">Disabled Tab</DBTabItem
  ><DBTabItem>Another Tab</DBTabItem></DBTabList
><DBTabPanel>Panel for active tab</DBTabPanel
><DBTabPanel>Panel for disabled tab</DBTabPanel
><DBTabPanel>Panel for another tab</DBTabPanel>`},render:e=>({components:{DBTabs:c,DBInfotext:n,DBTabItem:r,DBTabList:i,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with disabled tab in the middle:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`withdisabledtabinthemiddle`]})))()}h();export{m as __namedExportsOrder,f as default,p as withdisabledtabinthemiddle};