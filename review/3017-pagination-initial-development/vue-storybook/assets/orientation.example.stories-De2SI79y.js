import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./control-panel-brand-CopiwuuG.js";import{n as r,t as i}from"./control-panel-desktop-BQU13x1j.js";import{i as a,n as o,r as s,t as c}from"./control-panel-navigation-item-CkZ1a-OH.js";var l,u,d,f,p;function m(){return(m=e((()=>{t(),o(),a(),r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBControlPanelDesktop/Orientation`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},expanded:{control:`boolean`},expandButtonTooltip:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{orientation:`horizontal`,default:`<DBControlPanelNavigation aria-label="(Default) Horizontal" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">(Default) Horizontal</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
    ><a href="#">(Default) Horizontal disabled</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelDesktop:i,DBControlPanelBrand:n,DBControlPanelNavigationItem:c,DBControlPanelNavigation:s},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop></div>`})},f={args:{orientation:`vertical`,default:`<DBControlPanelNavigation aria-label="Vertical" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">Vertical</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
    ><a href="#">Vertical disabled</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelDesktop:i,DBControlPanelBrand:n,DBControlPanelNavigationItem:c,DBControlPanelNavigation:s},setup(){return{args:e}},template:`<div  :style="{
  maxInlineSize: '300px',
  width: 'auto',
  height: '500px',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop></div>`})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "default": \`<DBControlPanelNavigation aria-label="(Default) Horizontal" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">(Default) Horizontal</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
    ><a href="#">(Default) Horizontal disabled</a></DBControlPanelNavigationItem
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
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >\${args.default}</DBControlPanelDesktop></div>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "vertical",
    "default": \`<DBControlPanelNavigation aria-label="Vertical" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">Vertical</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
    ><a href="#">Vertical disabled</a></DBControlPanelNavigationItem
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
}`,...f.parameters?.docs?.source}}},p=[`DefaultHorizontal`,`Vertical`]})))()}m();export{d as DefaultHorizontal,f as Vertical,p as __namedExportsOrder,u as default};