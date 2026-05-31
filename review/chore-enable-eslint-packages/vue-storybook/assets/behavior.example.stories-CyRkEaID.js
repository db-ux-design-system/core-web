import{i as e}from"./preload-helper-CMit0Y9c.js";import{D as t,P as n,it as r,j as i,k as a,nt as o,t as s}from"./src-Dr2fY7SO.js";var c,l,u,d,f;e((()=>{s(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBHeader/Behavior`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{default:`<DBNavigation aria-label="Desktop (full width)" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Desktop (full width)</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Desktop (full width) disabled</a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template
><template v-slot:meta-navigation
  ><DBLink href="#">Imprint</DBLink> <DBLink href="#">Help</DBLink></template
><template v-slot:primary-action
  ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
    Search
  </DBButton></template
><template v-slot:secondary-action
  ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Profile
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Notification
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Help
  </DBButton></template
>`},render:e=>({components:{DBHeader:n,DBBrand:r,DBButton:o,DBLink:i,DBNavigationItem:t,DBNavigation:a},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${e.default}</DBHeader></div>`})},d={args:{forceMobile:`true`,default:`<DBNavigation aria-label="Mobile" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Mobile</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Mobile disabled</a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template
><template v-slot:meta-navigation
  ><DBLink href="#">Imprint</DBLink> <DBLink href="#">Help</DBLink></template
><template v-slot:primary-action
  ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
    Search
  </DBButton></template
><template v-slot:secondary-action
  ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Profile
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Notification
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Help
  </DBButton></template
>`},render:e=>({components:{DBHeader:n,DBBrand:r,DBButton:o,DBLink:i,DBNavigationItem:t,DBNavigation:a},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${e.default}</DBHeader></div>`})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBNavigation aria-label="Desktop (full width)" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Desktop (full width)</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Desktop (full width) disabled</a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template
><template v-slot:meta-navigation
  ><DBLink href="#">Imprint</DBLink> <DBLink href="#">Help</DBLink></template
><template v-slot:primary-action
  ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
    Search
  </DBButton></template
><template v-slot:secondary-action
  ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Profile
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Notification
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Help
  </DBButton></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBHeader,
      DBBrand,
      DBButton,
      DBLink,
      DBNavigationItem,
      DBNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >\${args.default}</DBHeader></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "forceMobile": "true",
    "default": \`<DBNavigation aria-label="Mobile" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Mobile</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Mobile disabled</a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template
><template v-slot:meta-navigation
  ><DBLink href="#">Imprint</DBLink> <DBLink href="#">Help</DBLink></template
><template v-slot:primary-action
  ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
    Search
  </DBButton></template
><template v-slot:secondary-action
  ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Profile
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Notification
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Help
  </DBButton></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBHeader,
      DBBrand,
      DBButton,
      DBLink,
      DBNavigationItem,
      DBNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >\${args.default}</DBHeader></div>\`
  })
}`,...d.parameters?.docs?.source}}},f=[`Desktopfullwidth`,`Mobile`]}))();export{u as Desktopfullwidth,d as Mobile,f as __namedExportsOrder,l as default};