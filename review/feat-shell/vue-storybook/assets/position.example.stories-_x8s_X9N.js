import{i as e}from"./preload-helper-sgvh3Ght.js";import{Bt as t,F as n,Mt as r,N as i,Ot as a,ct as o,ft as s,gt as c,mt as l,ot as u,q as d,t as f,wt as p}from"./src-bYaG8MsC.js";var m,h,g,_,v;e((()=>{f(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/DBShell/Position`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},g={args:{"data-test-id":`shell-position-top`,controlPanelDesktopPosition:`top`,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-position-top"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item"
      ><a href="#">Item</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      icon="x_placeholder"
      tooltip="Item disabled"
      :disabled="true"
      ><a href="#">Item disabled</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ><template v-slot:brand
    ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
  ><template v-slot:meta-navigation
    ><DBControlPanelMeta
      ><DBLink href="#">Imprint</DBLink
      ><DBLink href="#">Help</DBLink></DBControlPanelMeta
    ></template
  ><template v-slot:primary-actions
    ><DBControlPanelPrimaryActions
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelPrimaryActions
    ></template
  ><template v-slot:secondary-actions
    ><DBControlPanelSecondaryActions
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Top Position"
  ><DBControlPanelNavigation aria-label="shell-position-top-mobile" v-bind="{}"
    ><DBControlPanelNavigationItem icon="x_placeholder"
      ><a href="#">Item</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
      ><a href="#">Item disabled</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ><template v-slot:brand
    ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
  ><template v-slot:meta-navigation
    ><DBControlPanelMeta
      ><DBLink href="#">Imprint</DBLink
      ><DBLink href="#">Help</DBLink></DBControlPanelMeta
    ></template
  ><template v-slot:primary-actions
    ><DBControlPanelPrimaryActions
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelPrimaryActions
    ></template
  ><template v-slot:secondary-actions
    ><DBControlPanelSecondaryActions
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelMobile
><DBShellContent
  mainId="main-content-position-top"
  mainLabel="shell-position-top"
  ><p>Top position content</p><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:n,DBButton:t,DBControlPanelBrand:r,DBControlPanelDesktop:a,DBControlPanelMeta:p,DBControlPanelMobile:c,DBControlPanelNavigationItem:s,DBControlPanelNavigation:l,DBControlPanelPrimaryActions:o,DBControlPanelSecondaryActions:u,DBLink:d,DBShellContent:i},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},_={args:{"data-test-id":`shell-position-left`,controlPanelDesktopPosition:`left`,controlPanelMobilePosition:`bottom`,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-position-left"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item"
      ><a href="#">Item</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      icon="x_placeholder"
      tooltip="Item disabled"
      :disabled="true"
      ><a href="#">Item disabled</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ><template v-slot:brand
    ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
  ><template v-slot:meta-navigation
    ><DBControlPanelMeta
      ><DBLink href="#">Imprint</DBLink
      ><DBLink href="#">Help</DBLink></DBControlPanelMeta
    ></template
  ><template v-slot:primary-actions
    ><DBControlPanelPrimaryActions
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelPrimaryActions
    ></template
  ><template v-slot:secondary-actions
    ><DBControlPanelSecondaryActions
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Left Position"
  ><DBControlPanelNavigation aria-label="shell-position-left-mobile" v-bind="{}"
    ><DBControlPanelNavigationItem icon="x_placeholder"
      ><a href="#">Item</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
      ><a href="#">Item disabled</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ><template v-slot:brand
    ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
  ><template v-slot:meta-navigation
    ><DBControlPanelMeta
      ><DBLink href="#">Imprint</DBLink
      ><DBLink href="#">Help</DBLink></DBControlPanelMeta
    ></template
  ><template v-slot:primary-actions
    ><DBControlPanelPrimaryActions
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelPrimaryActions
    ></template
  ><template v-slot:secondary-actions
    ><DBControlPanelSecondaryActions
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelMobile
><DBShellContent
  mainId="main-content-position-left"
  mainLabel="shell-position-left"
  ><p>Left position content</p><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:n,DBButton:t,DBControlPanelBrand:r,DBControlPanelDesktop:a,DBControlPanelMeta:p,DBControlPanelMobile:c,DBControlPanelNavigationItem:s,DBControlPanelNavigation:l,DBControlPanelPrimaryActions:o,DBControlPanelSecondaryActions:u,DBLink:d,DBShellContent:i},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-position-top",
    "controlPanelDesktopPosition": "top",
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-position-top"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item"
      ><a href="#">Item</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      icon="x_placeholder"
      tooltip="Item disabled"
      :disabled="true"
      ><a href="#">Item disabled</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ><template v-slot:brand
    ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
  ><template v-slot:meta-navigation
    ><DBControlPanelMeta
      ><DBLink href="#">Imprint</DBLink
      ><DBLink href="#">Help</DBLink></DBControlPanelMeta
    ></template
  ><template v-slot:primary-actions
    ><DBControlPanelPrimaryActions
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelPrimaryActions
    ></template
  ><template v-slot:secondary-actions
    ><DBControlPanelSecondaryActions
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Top Position"
  ><DBControlPanelNavigation aria-label="shell-position-top-mobile" v-bind="{}"
    ><DBControlPanelNavigationItem icon="x_placeholder"
      ><a href="#">Item</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
      ><a href="#">Item disabled</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ><template v-slot:brand
    ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
  ><template v-slot:meta-navigation
    ><DBControlPanelMeta
      ><DBLink href="#">Imprint</DBLink
      ><DBLink href="#">Help</DBLink></DBControlPanelMeta
    ></template
  ><template v-slot:primary-actions
    ><DBControlPanelPrimaryActions
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelPrimaryActions
    ></template
  ><template v-slot:secondary-actions
    ><DBControlPanelSecondaryActions
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelMobile
><DBShellContent
  mainId="main-content-position-top"
  mainLabel="shell-position-top"
  ><p>Top position content</p><DBButton>Action</DBButton></DBShellContent
>\`
  },
  render: (args: any) => ({
    components: {
      DBShell,
      DBButton,
      DBControlPanelBrand,
      DBControlPanelDesktop,
      DBControlPanelMeta,
      DBControlPanelMobile,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation,
      DBControlPanelPrimaryActions,
      DBControlPanelSecondaryActions,
      DBLink,
      DBShellContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >\${args.default}</DBShell></div>\`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-position-left",
    "controlPanelDesktopPosition": "left",
    "controlPanelMobilePosition": "bottom",
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-position-left"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item"
      ><a href="#">Item</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      icon="x_placeholder"
      tooltip="Item disabled"
      :disabled="true"
      ><a href="#">Item disabled</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ><template v-slot:brand
    ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
  ><template v-slot:meta-navigation
    ><DBControlPanelMeta
      ><DBLink href="#">Imprint</DBLink
      ><DBLink href="#">Help</DBLink></DBControlPanelMeta
    ></template
  ><template v-slot:primary-actions
    ><DBControlPanelPrimaryActions
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelPrimaryActions
    ></template
  ><template v-slot:secondary-actions
    ><DBControlPanelSecondaryActions
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Left Position"
  ><DBControlPanelNavigation aria-label="shell-position-left-mobile" v-bind="{}"
    ><DBControlPanelNavigationItem icon="x_placeholder"
      ><a href="#">Item</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
      ><a href="#">Item disabled</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ><template v-slot:brand
    ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
  ><template v-slot:meta-navigation
    ><DBControlPanelMeta
      ><DBLink href="#">Imprint</DBLink
      ><DBLink href="#">Help</DBLink></DBControlPanelMeta
    ></template
  ><template v-slot:primary-actions
    ><DBControlPanelPrimaryActions
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelPrimaryActions
    ></template
  ><template v-slot:secondary-actions
    ><DBControlPanelSecondaryActions
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelMobile
><DBShellContent
  mainId="main-content-position-left"
  mainLabel="shell-position-left"
  ><p>Left position content</p><DBButton>Action</DBButton></DBShellContent
>\`
  },
  render: (args: any) => ({
    components: {
      DBShell,
      DBButton,
      DBControlPanelBrand,
      DBControlPanelDesktop,
      DBControlPanelMeta,
      DBControlPanelMobile,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation,
      DBControlPanelPrimaryActions,
      DBControlPanelSecondaryActions,
      DBLink,
      DBShellContent
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >\${args.default}</DBShell></div>\`
  })
}`,..._.parameters?.docs?.source}}},v=[`DefaultTop`,`Left`]}))();export{g as DefaultTop,_ as Left,v as __namedExportsOrder,h as default};