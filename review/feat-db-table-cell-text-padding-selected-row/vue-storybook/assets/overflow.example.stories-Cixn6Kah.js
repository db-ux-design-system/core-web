import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-ClxkgNnW.js";import{i,n as a,r as o,t as s}from"./tab-list-Ymgb13D2.js";import{i as c,n as l,r as u,t as d}from"./tabs-BpFsrCuv.js";var f=t({__namedExportsOrder:()=>y,arrowsheavyload12tabscustomdistance:()=>v,default:()=>m,nooverflow:()=>h,withoverflowbehaviorarrows:()=>g,withoverflowbehaviorscrollbar:()=>_}),p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),o(),s(),u(),d(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBTabs/Overflow`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:p(),onValueChange:p()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},h={args:{tabItemWidth:`auto`,default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:e=>({components:{DBTabs:l,DBInfotext:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    no overflow:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},g={args:{behavior:`arrows`,default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
  ><DBTabItem>Test 5</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
><DBTabPanel>Tab Panel 5</DBTabPanel>`},render:e=>({components:{DBTabs:l,DBInfotext:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with overflow - behavior: arrows:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},_={args:{behavior:`scrollbar`,default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
  ><DBTabItem>Test 5</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
><DBTabPanel>Tab Panel 5</DBTabPanel>`},render:e=>({components:{DBTabs:l,DBInfotext:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with overflow - behavior: scrollbar:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},v={args:{behavior:`arrows`,arrowScrollDistance:250,default:`<DBTabList
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
><DBTabPanel>Dresden</DBTabPanel><DBTabPanel>Bremen</DBTabPanel>`},render:e=>({components:{DBTabs:l,DBInfotext:r,DBTabItem:i,DBTabList:a,DBTabPanel:c},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    arrows heavy load (12 tabs, custom distance 250px):
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},y=[`nooverflow`,`withoverflowbehaviorarrows`,`withoverflowbehaviorscrollbar`,`arrowsheavyload12tabscustomdistance`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}}})))()}export{g as a,f as i,b as n,_ as o,h as r,v as t};