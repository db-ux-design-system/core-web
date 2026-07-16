import{i as e}from"./preload-helper-DJg_qmA5.js";import{C as t,T as n,a as r,ft as i,t as a,x as o}from"./src-DrFYkiOB.js";var s,c,l,u,d;e((()=>{a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTabs/Props Tabs`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:s(),onTabSelect:s()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},l={args:{tabs:[{label:`Home`,content:`Home content`},{label:`Profile`,content:`Profile content`},{label:`Settings`,content:`Settings content`}],default:``},render:e=>({components:{DBTabs:r,DBInfotext:i,DBTabItem:n,DBTabList:t,DBTabPanel:o},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Option API — using the tabs prop with an array of tab
                    objects:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},u={args:{default:`<DBTabList
  ><DBTabItem>Home</DBTabItem><DBTabItem>Profile</DBTabItem
  ><DBTabItem>Settings</DBTabItem></DBTabList
><DBTabPanel>Home content</DBTabPanel><DBTabPanel>Profile content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:r,DBInfotext:i,DBTabItem:n,DBTabList:t,DBTabPanel:o},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Composition API — using child components:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "tabs": [{
      label: 'Home',
      content: 'Home content'
    }, {
      label: 'Profile',
      content: 'Profile content'
    }, {
      label: 'Settings',
      content: 'Settings content'
    }],
    "default": \`\`
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
                    Option API — using the tabs prop with an array of tab
                    objects:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBTabList
  ><DBTabItem>Home</DBTabItem><DBTabItem>Profile</DBTabItem
  ><DBTabItem>Settings</DBTabItem></DBTabList
><DBTabPanel>Home content</DBTabPanel><DBTabPanel>Profile content</DBTabPanel
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
                    Composition API — using child components:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...u.parameters?.docs?.source}}},d=[`OptionAPIpropstabs`,`CompositionAPIchildren`]}))();export{u as CompositionAPIchildren,l as OptionAPIpropstabs,d as __namedExportsOrder,c as default};