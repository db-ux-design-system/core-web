import{n as e}from"./chunk-DnJy8xQt.js";import{D as t,a as n,i as r,o as i,r as a,t as o}from"./src-D2Aua8xJ.js";var s,c,l,u,d,f,p;e((()=>{o(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTabs/Overflow`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},name:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{tabItemWidth:`auto`,default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel>`},render:e=>({components:{DBTabs:a,DBInfotext:t,DBTabItem:i,DBTabList:n,DBTabPanel:r},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    no overflow:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},u={args:{behavior:`arrows`,default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
  ><DBTabItem>Test 5</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
><DBTabPanel>Tab Panel 5</DBTabPanel>`},render:e=>({components:{DBTabs:a,DBInfotext:t,DBTabItem:i,DBTabList:n,DBTabPanel:r},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with overflow - behavior: arrows:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},d={args:{behavior:`scrollbar`,default:`<DBTabList
  ><DBTabItem>Test 1</DBTabItem><DBTabItem>Test 2</DBTabItem
  ><DBTabItem>Test 3</DBTabItem><DBTabItem>Test 4</DBTabItem
  ><DBTabItem>Test 5</DBTabItem></DBTabList
><DBTabPanel>Tab Panel 1</DBTabPanel><DBTabPanel>Tab Panel 2</DBTabPanel
><DBTabPanel>Tab Panel 3</DBTabPanel><DBTabPanel>Tab Panel 4</DBTabPanel
><DBTabPanel>Tab Panel 5</DBTabPanel>`},render:e=>({components:{DBTabs:a,DBInfotext:t,DBTabItem:i,DBTabList:n,DBTabPanel:r},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    with overflow - behavior: scrollbar:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},f={args:{behavior:`arrows`,arrowScrollDistance:250,default:`<DBTabList
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
><DBTabPanel>Dresden</DBTabPanel><DBTabPanel>Bremen</DBTabPanel>`},render:e=>({components:{DBTabs:a,DBInfotext:t,DBTabItem:i,DBTabList:n,DBTabPanel:r},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '300px'
}"  ><DBInfotext icon="none" size="small" semantic="informational"   >
                    arrows heavy load (12 tabs, custom distance 250px):
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`nooverflow`,`withoverflowbehaviorarrows`,`withoverflowbehaviorscrollbar`,`arrowsheavyload12tabscustomdistance`]}))();export{p as __namedExportsOrder,f as arrowsheavyload12tabscustomdistance,c as default,l as nooverflow,u as withoverflowbehaviorarrows,d as withoverflowbehaviorscrollbar};