import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-CrvM89s1.js";import{i as r,n as i,r as a,t as o}from"./tab-list-Czl9VIvw.js";import{i as s,n as c,r as l,t as u}from"./tabs-DnF-knIr.js";var d,f,p,m,h;function g(){return(g=e((()=>{t(),a(),o(),l(),u(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBTabs/Props Tabs`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:d(),onTabSelect:d()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},p={args:{tabs:[{label:`Home`,content:`Home content`},{label:`Profile`,content:`Profile content`},{label:`Settings`,content:`Settings content`}],default:``},render:e=>({components:{DBTabs:c,DBInfotext:n,DBTabItem:r,DBTabList:i,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Option API — using the tabs prop with an array of tab
                    objects:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},m={args:{default:`<DBTabList
  ><DBTabItem>Home</DBTabItem><DBTabItem>Profile</DBTabItem
  ><DBTabItem>Settings</DBTabItem></DBTabList
><DBTabPanel>Home content</DBTabPanel><DBTabPanel>Profile content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:c,DBInfotext:n,DBTabItem:r,DBTabList:i,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Composition API — using child components:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`OptionAPIpropstabs`,`CompositionAPIchildren`]})))()}g();export{m as CompositionAPIchildren,p as OptionAPIpropstabs,h as __namedExportsOrder,f as default};