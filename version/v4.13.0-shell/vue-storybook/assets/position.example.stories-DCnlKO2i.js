import{i as e}from"./preload-helper-BfXGMw9-.js";import{Mt as t,ft as n,gt as r,mt as i,t as a}from"./src-D7kPOHCd.js";var o,s,c,l,u;e((()=>{a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBControlPanelMobile/Position`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{position:{control:`select`,options:[`top`,`bottom`]},drawerHeaderText:{control:`text`},burgerMenuLabel:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{position:`top`,drawerHeaderText:`DBControlPanel`,default:`<DBControlPanelNavigation aria-label="(Default) Top" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">(Default) Top</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelMobile:r,DBControlPanelBrand:t,DBControlPanelNavigationItem:n,DBControlPanelNavigation:i},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelMobile v-bind="args"   >${e.default}</DBControlPanelMobile></div>`})},l={args:{position:`bottom`,drawerHeaderText:`DBControlPanel`,default:`<DBControlPanelNavigation aria-label="Bottom" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">Bottom</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelMobile:r,DBControlPanelBrand:t,DBControlPanelNavigationItem:n,DBControlPanelNavigation:i},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelMobile v-bind="args"   >${e.default}</DBControlPanelMobile></div>`})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`DefaultTop`,`Bottom`]}))();export{l as Bottom,c as DefaultTop,u as __namedExportsOrder,s as default};