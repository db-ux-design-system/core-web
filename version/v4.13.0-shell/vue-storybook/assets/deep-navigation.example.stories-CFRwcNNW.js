import{i as e}from"./preload-helper-BfXGMw9-.js";import{Bt as t,F as n,Mt as r,N as i,Ot as a,ct as o,ft as s,gt as c,mt as l,ot as u,q as d,t as f,ut as p,wt as m}from"./src-D7kPOHCd.js";var h,g,_,v,y;e((()=>{f(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBShell/Deep Navigation`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},_={args:{"data-test-id":`shell-deep-nav-top`,controlPanelDesktopPosition:`top`,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-deep-nav-top"
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Level 1a"
      ><DBControlPanelNavigationItemGroup text="Level 2a"
        ><DBControlPanelNavigationItemGroup text="Level 3a"
          ><DBControlPanelNavigationItem
            ><a href="#" aria-current="page">
              Level 4a
            </a></DBControlPanelNavigationItem
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4b</a></DBControlPanelNavigationItem
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4c</a></DBControlPanelNavigationItem
          ></DBControlPanelNavigationItemGroup
        ><DBControlPanelNavigationItemGroup text="Level 3b"
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4d</a></DBControlPanelNavigationItem
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4e</a></DBControlPanelNavigationItem
          ></DBControlPanelNavigationItemGroup
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3c</a></DBControlPanelNavigationItem
        ></DBControlPanelNavigationItemGroup
      ><DBControlPanelNavigationItemGroup text="Level 2b"
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3d</a></DBControlPanelNavigationItem
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3e</a></DBControlPanelNavigationItem
        ></DBControlPanelNavigationItemGroup
      ><DBControlPanelNavigationItem
        ><a href="#">Level 2c</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Level 1b"
      ><DBControlPanelNavigationItemGroup text="Level 2d"
        ><DBControlPanelNavigationItemGroup text="Level 3f"
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4f</a></DBControlPanelNavigationItem
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4g</a></DBControlPanelNavigationItem
          ></DBControlPanelNavigationItemGroup
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3g</a></DBControlPanelNavigationItem
        ></DBControlPanelNavigationItemGroup
      ><DBControlPanelNavigationItem
        ><a href="#">Level 2e</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Simple Item"
      ><a href="#">Simple Item</a></DBControlPanelNavigationItem
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
        Profile
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Deep Nav Top"
  ><DBControlPanelNavigation aria-label="shell-deep-nav-top-mobile"
    ><DBControlPanelNavigationItemGroup text="Level 1a"
      ><DBControlPanelNavigationItemGroup text="Level 2a"
        ><DBControlPanelNavigationItem
          ><a href="#" aria-current="page">
            Level 3a
          </a></DBControlPanelNavigationItem
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3b</a></DBControlPanelNavigationItem
        ></DBControlPanelNavigationItemGroup
      ><DBControlPanelNavigationItem
        ><a href="#">Level 2b</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Level 1b</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ><template v-slot:brand
    ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
  ><template v-slot:primary-actions
    ><DBControlPanelPrimaryActions
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelPrimaryActions
    ></template
  ><template v-slot:secondary-actions
    ><DBControlPanelSecondaryActions
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelMobile
><DBShellContent
  mainId="main-content-deep-nav-top"
  mainLabel="shell-deep-nav-top"
  ><p>Deep Navigation - Top Position</p
  ><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:n,DBButton:t,DBControlPanelBrand:r,DBControlPanelDesktop:a,DBControlPanelMeta:m,DBControlPanelMobile:c,DBControlPanelNavigationItemGroup:p,DBControlPanelNavigationItem:s,DBControlPanelNavigation:l,DBControlPanelPrimaryActions:o,DBControlPanelSecondaryActions:u,DBLink:d,DBShellContent:i},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},v={args:{"data-test-id":`shell-deep-nav-left`,controlPanelDesktopPosition:`left`,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-deep-nav-left"
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Level 1a"
      ><DBControlPanelNavigationItemGroup text="Level 2a"
        ><DBControlPanelNavigationItemGroup text="Level 3a"
          ><DBControlPanelNavigationItem
            ><a href="#" aria-current="page">
              Level 4a
            </a></DBControlPanelNavigationItem
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4b</a></DBControlPanelNavigationItem
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4c</a></DBControlPanelNavigationItem
          ></DBControlPanelNavigationItemGroup
        ><DBControlPanelNavigationItemGroup text="Level 3b"
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4d</a></DBControlPanelNavigationItem
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4e</a></DBControlPanelNavigationItem
          ></DBControlPanelNavigationItemGroup
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3c</a></DBControlPanelNavigationItem
        ></DBControlPanelNavigationItemGroup
      ><DBControlPanelNavigationItemGroup text="Level 2b"
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3d</a></DBControlPanelNavigationItem
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3e</a></DBControlPanelNavigationItem
        ></DBControlPanelNavigationItemGroup
      ><DBControlPanelNavigationItem
        ><a href="#">Level 2c</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Level 1b"
      ><DBControlPanelNavigationItemGroup text="Level 2d"
        ><DBControlPanelNavigationItemGroup text="Level 3f"
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4f</a></DBControlPanelNavigationItem
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4g</a></DBControlPanelNavigationItem
          ></DBControlPanelNavigationItemGroup
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3g</a></DBControlPanelNavigationItem
        ></DBControlPanelNavigationItemGroup
      ><DBControlPanelNavigationItem
        ><a href="#">Level 2e</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Simple Item"
      ><a href="#">Simple Item</a></DBControlPanelNavigationItem
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
        Profile
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Deep Nav Left"
  ><DBControlPanelNavigation aria-label="shell-deep-nav-left-mobile"
    ><DBControlPanelNavigationItemGroup text="Level 1a"
      ><DBControlPanelNavigationItemGroup text="Level 2a"
        ><DBControlPanelNavigationItem
          ><a href="#" aria-current="page">
            Level 3a
          </a></DBControlPanelNavigationItem
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3b</a></DBControlPanelNavigationItem
        ></DBControlPanelNavigationItemGroup
      ><DBControlPanelNavigationItem
        ><a href="#">Level 2b</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Level 1b</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ><template v-slot:brand
    ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
  ><template v-slot:primary-actions
    ><DBControlPanelPrimaryActions
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelPrimaryActions
    ></template
  ><template v-slot:secondary-actions
    ><DBControlPanelSecondaryActions
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelMobile
><DBShellContent
  mainId="main-content-deep-nav-left"
  mainLabel="shell-deep-nav-left"
  ><p>Deep Navigation - Left Position</p
  ><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:n,DBButton:t,DBControlPanelBrand:r,DBControlPanelDesktop:a,DBControlPanelMeta:m,DBControlPanelMobile:c,DBControlPanelNavigationItemGroup:p,DBControlPanelNavigationItem:s,DBControlPanelNavigation:l,DBControlPanelPrimaryActions:o,DBControlPanelSecondaryActions:u,DBLink:d,DBShellContent:i},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-deep-nav-top",
    "controlPanelDesktopPosition": "top",
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-deep-nav-top"
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Level 1a"
      ><DBControlPanelNavigationItemGroup text="Level 2a"
        ><DBControlPanelNavigationItemGroup text="Level 3a"
          ><DBControlPanelNavigationItem
            ><a href="#" aria-current="page">
              Level 4a
            </a></DBControlPanelNavigationItem
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4b</a></DBControlPanelNavigationItem
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4c</a></DBControlPanelNavigationItem
          ></DBControlPanelNavigationItemGroup
        ><DBControlPanelNavigationItemGroup text="Level 3b"
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4d</a></DBControlPanelNavigationItem
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4e</a></DBControlPanelNavigationItem
          ></DBControlPanelNavigationItemGroup
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3c</a></DBControlPanelNavigationItem
        ></DBControlPanelNavigationItemGroup
      ><DBControlPanelNavigationItemGroup text="Level 2b"
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3d</a></DBControlPanelNavigationItem
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3e</a></DBControlPanelNavigationItem
        ></DBControlPanelNavigationItemGroup
      ><DBControlPanelNavigationItem
        ><a href="#">Level 2c</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Level 1b"
      ><DBControlPanelNavigationItemGroup text="Level 2d"
        ><DBControlPanelNavigationItemGroup text="Level 3f"
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4f</a></DBControlPanelNavigationItem
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4g</a></DBControlPanelNavigationItem
          ></DBControlPanelNavigationItemGroup
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3g</a></DBControlPanelNavigationItem
        ></DBControlPanelNavigationItemGroup
      ><DBControlPanelNavigationItem
        ><a href="#">Level 2e</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Simple Item"
      ><a href="#">Simple Item</a></DBControlPanelNavigationItem
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
        Profile
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Deep Nav Top"
  ><DBControlPanelNavigation aria-label="shell-deep-nav-top-mobile"
    ><DBControlPanelNavigationItemGroup text="Level 1a"
      ><DBControlPanelNavigationItemGroup text="Level 2a"
        ><DBControlPanelNavigationItem
          ><a href="#" aria-current="page">
            Level 3a
          </a></DBControlPanelNavigationItem
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3b</a></DBControlPanelNavigationItem
        ></DBControlPanelNavigationItemGroup
      ><DBControlPanelNavigationItem
        ><a href="#">Level 2b</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Level 1b</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ><template v-slot:brand
    ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
  ><template v-slot:primary-actions
    ><DBControlPanelPrimaryActions
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelPrimaryActions
    ></template
  ><template v-slot:secondary-actions
    ><DBControlPanelSecondaryActions
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelMobile
><DBShellContent
  mainId="main-content-deep-nav-top"
  mainLabel="shell-deep-nav-top"
  ><p>Deep Navigation - Top Position</p
  ><DBButton>Action</DBButton></DBShellContent
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
      DBControlPanelNavigationItemGroup,
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-deep-nav-left",
    "controlPanelDesktopPosition": "left",
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-deep-nav-left"
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Level 1a"
      ><DBControlPanelNavigationItemGroup text="Level 2a"
        ><DBControlPanelNavigationItemGroup text="Level 3a"
          ><DBControlPanelNavigationItem
            ><a href="#" aria-current="page">
              Level 4a
            </a></DBControlPanelNavigationItem
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4b</a></DBControlPanelNavigationItem
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4c</a></DBControlPanelNavigationItem
          ></DBControlPanelNavigationItemGroup
        ><DBControlPanelNavigationItemGroup text="Level 3b"
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4d</a></DBControlPanelNavigationItem
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4e</a></DBControlPanelNavigationItem
          ></DBControlPanelNavigationItemGroup
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3c</a></DBControlPanelNavigationItem
        ></DBControlPanelNavigationItemGroup
      ><DBControlPanelNavigationItemGroup text="Level 2b"
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3d</a></DBControlPanelNavigationItem
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3e</a></DBControlPanelNavigationItem
        ></DBControlPanelNavigationItemGroup
      ><DBControlPanelNavigationItem
        ><a href="#">Level 2c</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Level 1b"
      ><DBControlPanelNavigationItemGroup text="Level 2d"
        ><DBControlPanelNavigationItemGroup text="Level 3f"
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4f</a></DBControlPanelNavigationItem
          ><DBControlPanelNavigationItem
            ><a href="#">Level 4g</a></DBControlPanelNavigationItem
          ></DBControlPanelNavigationItemGroup
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3g</a></DBControlPanelNavigationItem
        ></DBControlPanelNavigationItemGroup
      ><DBControlPanelNavigationItem
        ><a href="#">Level 2e</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Simple Item"
      ><a href="#">Simple Item</a></DBControlPanelNavigationItem
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
        Profile
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Deep Nav Left"
  ><DBControlPanelNavigation aria-label="shell-deep-nav-left-mobile"
    ><DBControlPanelNavigationItemGroup text="Level 1a"
      ><DBControlPanelNavigationItemGroup text="Level 2a"
        ><DBControlPanelNavigationItem
          ><a href="#" aria-current="page">
            Level 3a
          </a></DBControlPanelNavigationItem
        ><DBControlPanelNavigationItem
          ><a href="#">Level 3b</a></DBControlPanelNavigationItem
        ></DBControlPanelNavigationItemGroup
      ><DBControlPanelNavigationItem
        ><a href="#">Level 2b</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Level 1b</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ><template v-slot:brand
    ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
  ><template v-slot:primary-actions
    ><DBControlPanelPrimaryActions
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelPrimaryActions
    ></template
  ><template v-slot:secondary-actions
    ><DBControlPanelSecondaryActions
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelMobile
><DBShellContent
  mainId="main-content-deep-nav-left"
  mainLabel="shell-deep-nav-left"
  ><p>Deep Navigation - Left Position</p
  ><DBButton>Action</DBButton></DBShellContent
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
      DBControlPanelNavigationItemGroup,
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
}`,...v.parameters?.docs?.source}}},y=[`Top`,`Left`]}))();export{v as Left,_ as Top,y as __namedExportsOrder,g as default};