import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-16MegdKu.js";import{n as r,t as i}from"./infotext-CUndoo_L.js";import{i as a,n as o,r as s,t as c}from"./tab-list-CSSo8eKR.js";import{i as l,n as u,r as d,t as f}from"./tabs-DP5EPbXL.js";var p,m,h,g,_;function v(){return(v=e((()=>{t(),r(),s(),c(),d(),f(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBTabs/Slot with Badge`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:p(),onTabSelect:p()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},h={args:{default:`<DBTabList
  ><DBTabItem>
    Messages
    <template v-slot:end-slot
      ><DBBadge semantic="informational">134</DBBadge></template
    ></DBTabItem
  ><DBTabItem>
    Notifications and very long content
    <template v-slot:end-slot
      ><DBBadge semantic="neutral">433</DBBadge></template
    ></DBTabItem
  ><DBTabItem>Settings</DBTabItem></DBTabList
><DBTabPanel>Messages content</DBTabPanel
><DBTabPanel>Notifications content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:u,DBBadge:n,DBInfotext:i,DBTabItem:a,DBTabList:o,DBTabPanel:l},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Horizontal:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},g={args:{orientation:`vertical`,default:`<DBTabList
  ><DBTabItem>
    Messages
    <template v-slot:end-slot
      ><DBBadge semantic="informational">134</DBBadge></template
    ></DBTabItem
  ><DBTabItem>
    Notifications and very long content
    <template v-slot:end-slot
      ><DBBadge semantic="neutral">433</DBBadge></template
    ></DBTabItem
  ><DBTabItem>Settings</DBTabItem></DBTabList
><DBTabPanel>Messages content</DBTabPanel
><DBTabPanel>Notifications content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:u,DBBadge:n,DBInfotext:i,DBTabItem:a,DBTabList:o,DBTabPanel:l},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Vertical:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBTabList
  ><DBTabItem>
    Messages
    <template v-slot:end-slot
      ><DBBadge semantic="informational">134</DBBadge></template
    ></DBTabItem
  ><DBTabItem>
    Notifications and very long content
    <template v-slot:end-slot
      ><DBBadge semantic="neutral">433</DBBadge></template
    ></DBTabItem
  ><DBTabItem>Settings</DBTabItem></DBTabList
><DBTabPanel>Messages content</DBTabPanel
><DBTabPanel>Notifications content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>\`
  },
  render: (args: any) => ({
    components: {
      DBTabs,
      DBBadge,
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
                    Horizontal:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "vertical",
    "default": \`<DBTabList
  ><DBTabItem>
    Messages
    <template v-slot:end-slot
      ><DBBadge semantic="informational">134</DBBadge></template
    ></DBTabItem
  ><DBTabItem>
    Notifications and very long content
    <template v-slot:end-slot
      ><DBBadge semantic="neutral">433</DBBadge></template
    ></DBTabItem
  ><DBTabItem>Settings</DBTabItem></DBTabList
><DBTabPanel>Messages content</DBTabPanel
><DBTabPanel>Notifications content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>\`
  },
  render: (args: any) => ({
    components: {
      DBTabs,
      DBBadge,
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
                    Vertical:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...g.parameters?.docs?.source}}},_=[`Horizontal`,`Vertical`]})))()}v();export{h as Horizontal,g as Vertical,_ as __namedExportsOrder,m as default};