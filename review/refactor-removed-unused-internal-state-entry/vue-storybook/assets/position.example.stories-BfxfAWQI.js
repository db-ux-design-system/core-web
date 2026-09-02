import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./control-panel-brand-GPdtJf9f.js";import{n as r,t as i}from"./control-panel-mobile-CBOivuJY.js";import{i as a,n as o,r as s,t as c}from"./control-panel-navigation-item-Cyjx0rmJ.js";var l,u,d,f,p;function m(){return(m=e((()=>{t(),o(),a(),r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBControlPanelMobile/Position`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{position:{control:`select`,options:[`top`,`bottom`]},drawerHeaderText:{control:`text`},burgerMenuLabel:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{position:`top`,drawerHeaderText:`DBControlPanel`,default:`<DBControlPanelNavigation aria-label="(Default) Top" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">(Default) Top</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelMobile:i,DBControlPanelBrand:n,DBControlPanelNavigationItem:c,DBControlPanelNavigation:s},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelMobile v-bind="args"   >${e.default}</DBControlPanelMobile></div>`})},f={args:{position:`bottom`,drawerHeaderText:`DBControlPanel`,default:`<DBControlPanelNavigation aria-label="Bottom" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">Bottom</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelMobile:i,DBControlPanelBrand:n,DBControlPanelNavigationItem:c,DBControlPanelNavigation:s},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelMobile v-bind="args"   >${e.default}</DBControlPanelMobile></div>`})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`DefaultTop`,`Bottom`]})))()}m();export{f as Bottom,d as DefaultTop,p as __namedExportsOrder,u as default};