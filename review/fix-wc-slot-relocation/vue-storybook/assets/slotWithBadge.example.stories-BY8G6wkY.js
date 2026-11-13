import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./badge-D-gvo3Gc.js";import{n as i,t as a}from"./infotext-uy8OrTux.js";import{i as o,n as s,r as c,t as l}from"./tab-list-BzALzVQ5.js";import{i as u,n as d,r as f,t as p}from"./tabs-QzC7zhX-.js";var m=t({Horizontal:()=>_,Vertical:()=>v,__namedExportsOrder:()=>y,default:()=>g}),h,g,_,v,y;function b(){return(b=e((()=>{n(),i(),c(),l(),f(),p(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBTabs/Slot with Badge`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:h(),onValueChange:h()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},_={args:{default:`<DBTabList
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
><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:d,DBBadge:r,DBInfotext:a,DBTabItem:o,DBTabList:s,DBTabPanel:u},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Horizontal:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},v={args:{orientation:`vertical`,default:`<DBTabList
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
><DBTabPanel>Settings content</DBTabPanel>`},render:e=>({components:{DBTabs:d,DBBadge:r,DBInfotext:a,DBTabItem:o,DBTabList:s,DBTabPanel:u},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Vertical:
                </DBInfotext><DBTabs v-bind="args"   >${e.default}</DBTabs></div>`})},y=[`Horizontal`,`Vertical`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}}})))()}export{m as i,v as n,b as r,_ as t};