import{n as e}from"./chunk-DnJy8xQt.js";import{D as t,a as n,i as r,o as i,r as a,t as o}from"./src-CttduW8a.js";var s,c,l,u;e((()=>{o(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTabs/Disabled`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},name:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{default:`<DBTabList
  ><DBTabItem>Active Tab</DBTabItem
  ><DBTabItem :disabled="true">Disabled Tab</DBTabItem
  ><DBTabItem>Another Tab</DBTabItem></DBTabList
><DBTabPanel>Panel for active tab</DBTabPanel
><DBTabPanel>Panel for disabled tab</DBTabPanel
><DBTabPanel>Panel for another tab</DBTabPanel>`},render:e=>({components:{DBTabs:a,DBInfotext:t,DBTabItem:i,DBTabList:n,DBTabPanel:r},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
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