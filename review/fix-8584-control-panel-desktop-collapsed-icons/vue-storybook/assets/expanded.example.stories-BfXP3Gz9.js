import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./control-panel-brand-CzXRY_1U.js";import{n as r,t as i}from"./control-panel-desktop-B0OLD-Zo.js";import{i as a,n as o,r as s,t as c}from"./control-panel-navigation-item-gdvy_MbP.js";var l,u,d,f,p;function m(){return(m=e((()=>{t(),o(),a(),r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBControlPanelDesktop/Expanded`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onExpandButtonTooltipFn:l()},argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},expanded:{control:`boolean`},expandButtonTooltip:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onExpandButtonTooltipFn:{action:`onExpandButtonTooltipFn`}}},d={args:{orientation:`vertical`,expanded:!0,default:`<DBControlPanelNavigation aria-label="(Default) Expanded" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder" :active="true"
    ><a href="#">(Default) Expanded 1</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">(Default) Expanded 2</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">(Default) Expanded 3</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelDesktop:i,DBControlPanelBrand:n,DBControlPanelNavigationItem:c,DBControlPanelNavigation:s},setup(){return{args:e}},template:`<div  :style="{
  maxInlineSize: '300px',
  width: 'auto',
  height: '500px',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop></div>`})},f={args:{orientation:`vertical`,expanded:!1,default:`<DBControlPanelNavigation aria-label="Collapsed" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder" :active="true"
    ><a href="#">Collapsed 1</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">Collapsed 2</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">Collapsed 3</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelDesktop:i,DBControlPanelBrand:n,DBControlPanelNavigationItem:c,DBControlPanelNavigation:s},setup(){return{args:e}},template:`<div  :style="{
  maxInlineSize: '300px',
  width: 'auto',
  height: '500px',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop></div>`})},p=[`DefaultExpanded`,`Collapsed`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "vertical",
    "expanded": true,
    "default": \`<DBControlPanelNavigation aria-label="(Default) Expanded" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder" :active="true"
    ><a href="#">(Default) Expanded 1</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">(Default) Expanded 2</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">(Default) Expanded 3</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelDesktop,
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
  maxInlineSize: '300px',
  width: 'auto',
  height: '500px',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >\${args.default}</DBControlPanelDesktop></div>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "vertical",
    "expanded": false,
    "default": \`<DBControlPanelNavigation aria-label="Collapsed" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder" :active="true"
    ><a href="#">Collapsed 1</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">Collapsed 2</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">Collapsed 3</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelDesktop,
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
  maxInlineSize: '300px',
  width: 'auto',
  height: '500px',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >\${args.default}</DBControlPanelDesktop></div>\`
  })
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Collapsed,d as DefaultExpanded,p as __namedExportsOrder,u as default};