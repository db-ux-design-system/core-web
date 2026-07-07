import{i as e}from"./preload-helper-BfXGMw9-.js";import{Mt as t,Ot as n,ft as r,mt as i,t as a}from"./src-D7kPOHCd.js";var o,s,c,l,u;e((()=>{a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBControlPanelDesktop/Orientation`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},expanded:{control:`boolean`},expandButtonTooltip:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{orientation:`horizontal`,default:`<DBControlPanelNavigation aria-label="(Default) Horizontal" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">(Default) Horizontal</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
    ><a href="#">(Default) Horizontal disabled</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelDesktop:n,DBControlPanelBrand:t,DBControlPanelNavigationItem:r,DBControlPanelNavigation:i},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop></div>`})},l={args:{orientation:`vertical`,default:`<DBControlPanelNavigation aria-label="Vertical" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">Vertical</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
    ><a href="#">Vertical disabled</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelDesktop:n,DBControlPanelBrand:t,DBControlPanelNavigationItem:r,DBControlPanelNavigation:i},setup(){return{args:e}},template:`<div  :style="{
  maxInlineSize: '300px',
  width: 'auto',
  height: '500px',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop></div>`})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`DefaultHorizontal`,`Vertical`]}))();export{c as DefaultHorizontal,l as Vertical,u as __namedExportsOrder,s as default};