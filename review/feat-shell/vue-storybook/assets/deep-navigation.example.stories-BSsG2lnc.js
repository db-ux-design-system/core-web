import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-B9MJekmS.js";import{n as r,t as i}from"./control-panel-brand-BTgrphyr.js";import{n as a,t as o}from"./control-panel-desktop-Bm0AS0nF.js";import{n as s,t as c}from"./control-panel-meta-CeG2utFY.js";import{n as l,t as u}from"./control-panel-mobile-CnohtA-f.js";import{i as d,n as f,r as p,t as m}from"./control-panel-navigation-item-50b77jEd.js";import{n as h,t as g}from"./control-panel-navigation-item-group-B859aDML.js";import{i as _,n as v,r as y,t as b}from"./control-panel-secondary-actions-Bff04iiw.js";import{n as x,t as S}from"./link-D1V-0ZS7.js";import{i as C,n as w,r as T,t as E}from"./shell-content-B5e9bFHJ.js";var D,O,k,A,j;function M(){return(M=e((()=>{t(),r(),a(),s(),l(),h(),f(),d(),_(),v(),S(),E(),T(),{fn:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/DBShell/Deep Navigation`,component:C,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},k={args:{"data-test-id":`shell-deep-nav-top`,controlPanelDesktopPosition:`top`,default:`<DBControlPanelDesktop
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
  ><template v-slot:meta
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
>`},render:e=>({components:{DBShell:C,DBButton:n,DBControlPanelBrand:i,DBControlPanelDesktop:o,DBControlPanelMeta:c,DBControlPanelMobile:u,DBControlPanelNavigationItemGroup:g,DBControlPanelNavigationItem:m,DBControlPanelNavigation:p,DBControlPanelPrimaryActions:y,DBControlPanelSecondaryActions:b,DBLink:x,DBShellContent:w},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},A={args:{"data-test-id":`shell-deep-nav-left`,controlPanelDesktopPosition:`left`,default:`<DBControlPanelDesktop
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
  ><template v-slot:meta
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
>`},render:e=>({components:{DBShell:C,DBButton:n,DBControlPanelBrand:i,DBControlPanelDesktop:o,DBControlPanelMeta:c,DBControlPanelMobile:u,DBControlPanelNavigationItemGroup:g,DBControlPanelNavigationItem:m,DBControlPanelNavigation:p,DBControlPanelPrimaryActions:y,DBControlPanelSecondaryActions:b,DBLink:x,DBShellContent:w},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
  ><template v-slot:meta
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
  ><template v-slot:meta
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
}`,...A.parameters?.docs?.source}}},j=[`Top`,`Left`]})))()}M();export{A as Left,k as Top,j as __namedExportsOrder,O as default};