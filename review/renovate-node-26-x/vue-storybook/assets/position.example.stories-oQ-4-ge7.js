import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./control-panel-brand-fTX-DtH1.js";import{n as i,t as a}from"./control-panel-mobile-DcQg6Zxt.js";import{i as o,n as s,r as c,t as l}from"./control-panel-navigation-item-BmXbpleW.js";var u=t({Bottom:()=>m,DefaultTop:()=>p,__namedExportsOrder:()=>h,default:()=>f}),d,f,p,m,h;function g(){return(g=e((()=>{n(),s(),o(),i(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBControlPanelMobile/Position`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{position:{control:`select`,options:[`top`,`bottom`]},drawerHeaderText:{control:`text`},burgerMenuLabel:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},p={args:{position:`top`,drawerHeaderText:`DBControlPanel`,default:`<DBControlPanelNavigation aria-label="(Default) Top" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">(Default) Top</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelMobile:a,DBControlPanelBrand:r,DBControlPanelNavigationItem:l,DBControlPanelNavigation:c},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelMobile v-bind="args"   >${e.default}</DBControlPanelMobile></div>`})},m={args:{position:`bottom`,drawerHeaderText:`DBControlPanel`,default:`<DBControlPanelNavigation aria-label="Bottom" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">Bottom</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelMobile:a,DBControlPanelBrand:r,DBControlPanelNavigationItem:l,DBControlPanelNavigation:c},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelMobile v-bind="args"   >${e.default}</DBControlPanelMobile></div>`})},h=[`DefaultTop`,`Bottom`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "position": "top",
    "drawerHeaderText": "DBControlPanel",
    "default": \`<DBControlPanelNavigation aria-label="(Default) Top" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">(Default) Top</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelMobile,
      DBControlPanelBrand,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelMobile v-bind="args"   >\${args.default}</DBControlPanelMobile></div>\`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "position": "bottom",
    "drawerHeaderText": "DBControlPanel",
    "default": \`<DBControlPanelNavigation aria-label="Bottom" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">Bottom</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelMobile,
      DBControlPanelBrand,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelMobile v-bind="args"   >\${args.default}</DBControlPanelMobile></div>\`
  })
}`,...m.parameters?.docs?.source}}}})))()}export{u as i,p as n,g as r,m as t};