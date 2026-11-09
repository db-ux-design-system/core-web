import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./control-panel-brand-Qozlg8Qd.js";import{n as i,t as a}from"./control-panel-mobile-BcSfkQyL.js";import{i as o,n as s,r as c,t as l}from"./control-panel-navigation-item-DkIJT_CT.js";import{n as u,t as d}from"./control-panel-navigation-item-group-CX-A7sUg.js";var f=t({Interaction:()=>h,__namedExportsOrder:()=>g,default:()=>m}),p,m,h,g;function _(){return(_=e((()=>{n(),u(),s(),o(),i(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBControlPanelMobile/Interaction`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{position:{control:`select`,options:[`top`,`bottom`]},drawerHeaderText:{control:`text`},burgerMenuLabel:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},h={args:{"data-testid":`drilldown-panel`,position:`top`,drawerHeaderText:`DBControlPanel`,default:`<DBControlPanelNavigation aria-label="Drilldown Interaction"
  ><DBControlPanelNavigationItemGroup
    text="Drilldown Group"
    data-testid="drilldown-group"
    ><DBControlPanelNavigationItem data-testid="drilldown-sub1"
      ><a href="#">Drilldown Sub 1</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigationItemGroup
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelMobile:a,DBControlPanelBrand:r,DBControlPanelNavigationItemGroup:d,DBControlPanelNavigationItem:l,DBControlPanelNavigation:c},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelMobile v-bind="args"   >${e.default}</DBControlPanelMobile></div>`})},g=[`Interaction`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "drilldown-panel",
    "position": "top",
    "drawerHeaderText": "DBControlPanel",
    "default": \`<DBControlPanelNavigation aria-label="Drilldown Interaction"
  ><DBControlPanelNavigationItemGroup
    text="Drilldown Group"
    data-testid="drilldown-group"
    ><DBControlPanelNavigationItem data-testid="drilldown-sub1"
      ><a href="#">Drilldown Sub 1</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigationItemGroup
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelMobile,
      DBControlPanelBrand,
      DBControlPanelNavigationItemGroup,
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
}`,...h.parameters?.docs?.source}}}})))()}export{_ as n,f as r,h as t};