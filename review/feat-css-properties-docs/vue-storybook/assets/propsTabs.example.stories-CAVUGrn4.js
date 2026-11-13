import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-mn-R-K6k.js";import{i,n as a,r as o,t as s}from"./tab-list-gc8kHaA4.js";import{i as c,n as l,r as u,t as d}from"./tabs-CsSAftLv.js";var f=t({CompositionAPIchildren:()=>g,OptionAPIpropstabs:()=>h,__namedExportsOrder:()=>_,default:()=>m}),p,m,h,g,_;function v(){return(v=e((()=>{n(),o(),s(),u(),d(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBTabs/Props Tabs`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:p(),onValueChange:p()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},h={args:{tabs:[{label:`Home`,content:`Home content`},{label:`Profile`,content:`Profile content`},{label:`Settings`,content:`Settings content`}],default:``},render:e=>({components:{DBTabs:l,DBInfotext:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Option API — using the tabs prop with an array of tab
                    objects:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},g={args:{default:`<DBTabList
  ><DBTabItem>Home</DBTabItem><DBTabItem>Profile</DBTabItem
  ><DBTabItem>Settings</DBTabItem></DBTabList
><DBTabPanel>Home content</DBTabPanel><DBTabPanel>Profile content</DBTabPanel
><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:l,DBInfotext:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Composition API — using child components:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},_=[`OptionAPIpropstabs`,`CompositionAPIchildren`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}})))()}export{f as i,h as n,v as r,g as t};