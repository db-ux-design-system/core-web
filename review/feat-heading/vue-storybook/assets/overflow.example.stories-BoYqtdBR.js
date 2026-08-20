import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-CdOm4Hoi.js";import{i as r,n as i,r as a,t as o}from"./tab-list-BpucBrcP.js";import{i as s,n as c,r as l,t as u}from"./tabs-CKmZrkVw.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{t(),a(),o(),l(),u(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBTabs/Overflow`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:d(),onTabSelect:d()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},p={args:{tabItemWidth:`auto`,default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:e=>({components:{DBTabs:c,DBInfotext:n,DBTabItem:r,DBTabList:i,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    no overflow:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},m={args:{behavior:`arrows`,default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
  ><DBTabItem>Test 5</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
><DBTabPanel>Tab Panel 5</DBTabPanel>`},render:e=>({components:{DBTabs:c,DBInfotext:n,DBTabItem:r,DBTabList:i,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with overflow - behavior: arrows:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},h={args:{behavior:`scrollbar`,default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
  ><DBTabItem>Test 5</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
><DBTabPanel>Tab Panel 5</DBTabPanel>`},render:e=>({components:{DBTabs:c,DBInfotext:n,DBTabItem:r,DBTabList:i,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with overflow - behavior: scrollbar:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},g={args:{behavior:`arrows`,arrowScrollDistance:250,default:`<DBTabList
  ><DBTabItem>Berlin</DBTabItem><DBTabItem>München</DBTabItem
  ><DBTabItem>Hamburg</DBTabItem><DBTabItem>Frankfurt</DBTabItem
  ><DBTabItem>Köln</DBTabItem><DBTabItem>Stuttgart</DBTabItem
  ><DBTabItem>Düsseldorf</DBTabItem><DBTabItem>Leipzig</DBTabItem
  ><DBTabItem>Hannover</DBTabItem><DBTabItem>Nürnberg</DBTabItem
  ><DBTabItem>Dresden</DBTabItem><DBTabItem>Bremen</DBTabItem></DBTabList
><DBTabPanel>Berlin</DBTabPanel><DBTabPanel>München</DBTabPanel
><DBTabPanel>Hamburg</DBTabPanel><DBTabPanel>Frankfurt</DBTabPanel
><DBTabPanel>Köln</DBTabPanel><DBTabPanel>Stuttgart</DBTabPanel
><DBTabPanel>Düsseldorf</DBTabPanel><DBTabPanel>Leipzig</DBTabPanel
><DBTabPanel>Hannover</DBTabPanel><DBTabPanel>Nürnberg</DBTabPanel
><DBTabPanel>Dresden</DBTabPanel><DBTabPanel>Bremen</DBTabPanel>`},render:e=>({components:{DBTabs:c,DBInfotext:n,DBTabItem:r,DBTabList:i,DBTabPanel:s},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    arrows heavy load (12 tabs, custom distance 250px):
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "tabItemWidth": "auto",
    "default": \`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
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
    template: \`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    no overflow:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "arrows",
    "default": \`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
  ><DBTabItem>Test 5</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
><DBTabPanel>Tab Panel 5</DBTabPanel>\`
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
    template: \`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with overflow - behavior: arrows:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "scrollbar",
    "default": \`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
  ><DBTabItem>Test 5</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
><DBTabPanel>Tab Panel 5</DBTabPanel>\`
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
    template: \`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with overflow - behavior: scrollbar:
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "arrows",
    "arrowScrollDistance": 250,
    "default": \`<DBTabList
  ><DBTabItem>Berlin</DBTabItem><DBTabItem>München</DBTabItem
  ><DBTabItem>Hamburg</DBTabItem><DBTabItem>Frankfurt</DBTabItem
  ><DBTabItem>Köln</DBTabItem><DBTabItem>Stuttgart</DBTabItem
  ><DBTabItem>Düsseldorf</DBTabItem><DBTabItem>Leipzig</DBTabItem
  ><DBTabItem>Hannover</DBTabItem><DBTabItem>Nürnberg</DBTabItem
  ><DBTabItem>Dresden</DBTabItem><DBTabItem>Bremen</DBTabItem></DBTabList
><DBTabPanel>Berlin</DBTabPanel><DBTabPanel>München</DBTabPanel
><DBTabPanel>Hamburg</DBTabPanel><DBTabPanel>Frankfurt</DBTabPanel
><DBTabPanel>Köln</DBTabPanel><DBTabPanel>Stuttgart</DBTabPanel
><DBTabPanel>Düsseldorf</DBTabPanel><DBTabPanel>Leipzig</DBTabPanel
><DBTabPanel>Hannover</DBTabPanel><DBTabPanel>Nürnberg</DBTabPanel
><DBTabPanel>Dresden</DBTabPanel><DBTabPanel>Bremen</DBTabPanel>\`
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
    template: \`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    arrows heavy load (12 tabs, custom distance 250px):
                </DBInfotext><DBTabs v-bind="args"   >\${args.default}</DBTabs></div>\`
  })
}`,...g.parameters?.docs?.source}}},_=[`nooverflow`,`withoverflowbehaviorarrows`,`withoverflowbehaviorscrollbar`,`arrowsheavyload12tabscustomdistance`]})))()}v();export{_ as __namedExportsOrder,g as arrowsheavyload12tabscustomdistance,f as default,p as nooverflow,m as withoverflowbehaviorarrows,h as withoverflowbehaviorscrollbar};