import{n as e}from"./chunk-DnJy8xQt.js";import{D as t,a as n,i as r,j as i,o as a,r as o,t as s}from"./src-CttduW8a.js";var c,l,u,d;e((()=>{s(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTabs/Slot with Badge`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},name:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{default:`<DBTabList
  ><DBTabItem
    ><span
      :style="{
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}"
    >
      Messages
      <DBBadge semantic="informational">134</DBBadge></span
    ></DBTabItem
  ><DBTabItem
    ><span
      :style="{
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}"
    >
      Notifications
      <DBBadge semantic="neutral">433</DBBadge></span
    ></DBTabItem
  ><DBTabItem>Settings</DBTabItem></DBTabList
><DBTabPanel>Messages content</DBTabPanel
><DBTabPanel>Notifications content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:o,DBBadge:i,DBInfotext:t,DBTabItem:a,DBTabList:n,DBTabPanel:r},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    tab-items with badges:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBTabList
  ><DBTabItem
    ><span
      :style="{
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}"
    >
      Messages
      <DBBadge semantic="informational">134</DBBadge></span
    ></DBTabItem
  ><DBTabItem
    ><span
      :style="{
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}"
    >
      Notifications
      <DBBadge semantic="neutral">433</DBBadge></span
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
                    tab-items with badges:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...u.parameters?.docs?.source}}},d=[`tabitemswithbadges`]}))();export{d as __namedExportsOrder,l as default,u as tabitemswithbadges};