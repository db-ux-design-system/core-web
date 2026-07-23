import{i as e}from"./preload-helper-CDhdJpfe.js";import{C as t,T as n,a as r,gt as i,t as a,wt as o,x as s}from"./src-C9eLKOVC.js";var c,l,u,d,f;e((()=>{a(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTabs/Slot with Badge`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:c(),onTabSelect:c()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},u={args:{default:`<DBTabList
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
><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:r,DBBadge:o,DBInfotext:i,DBTabItem:n,DBTabList:t,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Horizontal:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},d={args:{orientation:`vertical`,default:`<DBTabList
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
><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:r,DBBadge:o,DBInfotext:i,DBTabItem:n,DBTabList:t,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Vertical:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Horizontal`,`Vertical`]}))();export{u as Horizontal,d as Vertical,f as __namedExportsOrder,l as default};