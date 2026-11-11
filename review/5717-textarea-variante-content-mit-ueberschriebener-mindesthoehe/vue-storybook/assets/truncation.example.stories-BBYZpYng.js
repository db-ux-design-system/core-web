import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-BBJT_EnE.js";import{i,n as a,r as o,t as s}from"./tab-list-df-_G8at.js";import{i as c,n as l,r as u,t as d}from"./tabs-DhnDXVWp.js";var f=t({__namedExportsOrder:()=>g,default:()=>m,truncatedvertical:()=>h}),p,m,h,g;function _(){return(_=e((()=>{n(),o(),s(),u(),d(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBTabs/Truncation`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:p(),onValueChange:p()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},h={args:{orientation:`vertical`,tabItemWidth:`auto`,default:`<DBTabList
  ><DBTabItem label="Very long tab label that gets truncated"></DBTabItem
  ><DBTabItem label="Another long label"></DBTabItem
  ><DBTabItem label="Short"></DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:e=>({components:{DBTabs:l,DBInfotext:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    truncated tab label (vertical only):
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},g=[`truncatedvertical`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "vertical",
    "tabItemWidth": "auto",
    "default": \`<DBTabList
  ><DBTabItem label="Very long tab label that gets truncated"></DBTabItem
  ><DBTabItem label="Another long label"></DBTabItem
  ><DBTabItem label="Short"></DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>\`
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
                    truncated tab label (vertical only):
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...h.parameters?.docs?.source}}}})))()}export{h as n,f as r,_ as t};