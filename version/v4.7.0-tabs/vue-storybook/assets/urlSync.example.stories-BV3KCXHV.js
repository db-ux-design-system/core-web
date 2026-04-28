import{n as e}from"./chunk-DnJy8xQt.js";import{D as t,a as n,i as r,o as i,r as a,t as o}from"./src-CttduW8a.js";var s,c,l,u,d;e((()=>{o(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTabs/URL Sync`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},name:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{name:`url-sync-index`,initialSelectedIndex:2,default:`<DBTabList
  ><DBTabItem>Overview</DBTabItem><DBTabItem>Details</DBTabItem
  ><DBTabItem>Settings</DBTabItem></DBTabList
><DBTabPanel>Overview content</DBTabPanel
><DBTabPanel>Details content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:a,DBInfotext:t,DBTabItem:i,DBTabList:n,DBTabPanel:r},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    3rd tab pre-selected via initialSelectedIndex with a value
                    parsed from URL parameter:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},u={args:{name:`url-sync-value`,initialSelectedIndex:1,default:`<DBTabList
  ><DBTabItem value="overview">Overview</DBTabItem
  ><DBTabItem value="details">Details</DBTabItem
  ><DBTabItem value="settings">Settings</DBTabItem></DBTabList
><DBTabPanel>Overview content</DBTabPanel
><DBTabPanel>Details content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:a,DBInfotext:t,DBTabItem:i,DBTabList:n,DBTabPanel:r},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    2nd tab pre-selected with value props and 'onValueChange':
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "url-sync-index",
    "initialSelectedIndex": 2,
    "default": \`<DBTabList
  ><DBTabItem>Overview</DBTabItem><DBTabItem>Details</DBTabItem
  ><DBTabItem>Settings</DBTabItem></DBTabList
><DBTabPanel>Overview content</DBTabPanel
><DBTabPanel>Details content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>\`
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
                    3rd tab pre-selected via initialSelectedIndex with a value
                    parsed from URL parameter:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "url-sync-value",
    "initialSelectedIndex": 1,
    "default": \`<DBTabList
  ><DBTabItem value="overview">Overview</DBTabItem
  ><DBTabItem value="details">Details</DBTabItem
  ><DBTabItem value="settings">Settings</DBTabItem></DBTabList
><DBTabPanel>Overview content</DBTabPanel
><DBTabPanel>Details content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>\`
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
                    2nd tab pre-selected with value props and 'onValueChange':
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...u.parameters?.docs?.source}}},d=[`initialSelectedIndexviaURL`,`valuebasedURLsync`]}))();export{d as __namedExportsOrder,c as default,l as initialSelectedIndexviaURL,u as valuebasedURLsync};