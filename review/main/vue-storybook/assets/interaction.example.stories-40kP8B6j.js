import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./control-panel-brand-Dz0CnuFs.js";import{n as r,t as i}from"./control-panel-mobile-B0FD7xG4.js";import{i as a,n as o,r as s,t as c}from"./control-panel-navigation-item-B7hi6fd7.js";import{n as l,t as u}from"./control-panel-navigation-item-group-DDxt1AN8.js";var d,f,p,m;function h(){return(h=e((()=>{t(),l(),o(),a(),r(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBControlPanelMobile/Interaction`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{position:{control:`select`,options:[`top`,`bottom`]},drawerHeaderText:{control:`text`},burgerMenuLabel:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},p={args:{"data-testid":`drilldown-panel`,position:`top`,drawerHeaderText:`DBControlPanel`,default:`<DBControlPanelNavigation aria-label="Drilldown Interaction"
  ><DBControlPanelNavigationItemGroup
    text="Drilldown Group"
    data-testid="drilldown-group"
    ><DBControlPanelNavigationItem data-testid="drilldown-sub1"
      ><a href="#">Drilldown Sub 1</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigationItemGroup
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelMobile:i,DBControlPanelBrand:n,DBControlPanelNavigationItemGroup:u,DBControlPanelNavigationItem:c,DBControlPanelNavigation:s},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelMobile v-bind="args"   >${e.default}</DBControlPanelMobile></div>`})},m=[`Interaction`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as Interaction,m as __namedExportsOrder,f as default};