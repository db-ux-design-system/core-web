import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-B9MJekmS.js";import{n as r,t as i}from"./control-panel-brand-BTgrphyr.js";import{n as a,t as o}from"./control-panel-desktop-Bm0AS0nF.js";import{n as s,t as c}from"./control-panel-meta-CeG2utFY.js";import{n as l,t as u}from"./control-panel-mobile-CnohtA-f.js";import{i as d,n as f,r as p,t as m}from"./control-panel-navigation-item-50b77jEd.js";import{n as h,t as g}from"./control-panel-navigation-item-group-B859aDML.js";import{i as _,n as v,r as y,t as b}from"./control-panel-secondary-actions-Bff04iiw.js";import{n as x,t as S}from"./link-D1V-0ZS7.js";import{i as C,n as w,r as T,t as E}from"./shell-content-B5e9bFHJ.js";var D,O,k,A,j;function M(){return(M=e((()=>{t(),r(),a(),s(),l(),h(),f(),d(),_(),v(),S(),E(),T(),{fn:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/DBShell/Tree Navigation`,component:C,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},k={args:{"data-test-id":`shell-tree-nav-single`,controlPanelDesktopPosition:`left`,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation
    aria-label="shell-tree-nav-single"
    variant="tree"
    behavior="single"
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Category A"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Item A1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item A2</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item A3</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Category B"
      ><DBControlPanelNavigationItem
        ><a href="#">Item B1</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item B2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Category C"
      ><DBControlPanelNavigationItem
        ><a href="#">Item C1</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item C2</a></DBControlPanelNavigationItem
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
><DBControlPanelMobile drawerHeaderText="Tree Nav Single"
  ><DBControlPanelNavigation aria-label="shell-tree-nav-single-mobile"
    ><DBControlPanelNavigationItemGroup text="Category A" icon="x_placeholder"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Item A1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item A2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItemGroup text="Category B" icon="x_placeholder"
      ><DBControlPanelNavigationItem
        ><a href="#">Item B1</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
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
  mainId="main-content-tree-nav-single"
  mainLabel="shell-tree-nav-single"
  ><p> Tree Navigation - Single Behavior (only one group open at a time) </p
  ><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:C,DBButton:n,DBControlPanelBrand:i,DBControlPanelDesktop:o,DBControlPanelMeta:c,DBControlPanelMobile:u,DBControlPanelNavigationItemGroup:g,DBControlPanelNavigationItem:m,DBControlPanelNavigation:p,DBControlPanelPrimaryActions:y,DBControlPanelSecondaryActions:b,DBLink:x,DBShellContent:w},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},A={args:{"data-test-id":`shell-tree-nav-multiple`,controlPanelDesktopPosition:`left`,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation
    aria-label="shell-tree-nav-multiple"
    variant="tree"
    behavior="multiple"
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Category A"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Item A1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item A2</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item A3</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Category B"
      ><DBControlPanelNavigationItem
        ><a href="#">Item B1</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item B2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Category C"
      ><DBControlPanelNavigationItem
        ><a href="#">Item C1</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item C2</a></DBControlPanelNavigationItem
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
><DBControlPanelMobile drawerHeaderText="Tree Nav Multiple"
  ><DBControlPanelNavigation aria-label="shell-tree-nav-multiple-mobile"
    ><DBControlPanelNavigationItemGroup text="Category A" icon="x_placeholder"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Item A1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item A2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItemGroup text="Category B" icon="x_placeholder"
      ><DBControlPanelNavigationItem
        ><a href="#">Item B1</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
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
  mainId="main-content-tree-nav-multiple"
  mainLabel="shell-tree-nav-multiple"
  ><p>
    Tree Navigation - Multiple Behavior (multiple groups can be open
    simultaneously) </p
  ><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:C,DBButton:n,DBControlPanelBrand:i,DBControlPanelDesktop:o,DBControlPanelMeta:c,DBControlPanelMobile:u,DBControlPanelNavigationItemGroup:g,DBControlPanelNavigationItem:m,DBControlPanelNavigation:p,DBControlPanelPrimaryActions:y,DBControlPanelSecondaryActions:b,DBLink:x,DBShellContent:w},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-tree-nav-single",
    "controlPanelDesktopPosition": "left",
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation
    aria-label="shell-tree-nav-single"
    variant="tree"
    behavior="single"
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Category A"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Item A1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item A2</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item A3</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Category B"
      ><DBControlPanelNavigationItem
        ><a href="#">Item B1</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item B2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Category C"
      ><DBControlPanelNavigationItem
        ><a href="#">Item C1</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item C2</a></DBControlPanelNavigationItem
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
><DBControlPanelMobile drawerHeaderText="Tree Nav Single"
  ><DBControlPanelNavigation aria-label="shell-tree-nav-single-mobile"
    ><DBControlPanelNavigationItemGroup text="Category A" icon="x_placeholder"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Item A1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item A2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItemGroup text="Category B" icon="x_placeholder"
      ><DBControlPanelNavigationItem
        ><a href="#">Item B1</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
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
  mainId="main-content-tree-nav-single"
  mainLabel="shell-tree-nav-single"
  ><p> Tree Navigation - Single Behavior (only one group open at a time) </p
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
    "data-test-id": "shell-tree-nav-multiple",
    "controlPanelDesktopPosition": "left",
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation
    aria-label="shell-tree-nav-multiple"
    variant="tree"
    behavior="multiple"
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Category A"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Item A1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item A2</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item A3</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Category B"
      ><DBControlPanelNavigationItem
        ><a href="#">Item B1</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item B2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Category C"
      ><DBControlPanelNavigationItem
        ><a href="#">Item C1</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item C2</a></DBControlPanelNavigationItem
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
><DBControlPanelMobile drawerHeaderText="Tree Nav Multiple"
  ><DBControlPanelNavigation aria-label="shell-tree-nav-multiple-mobile"
    ><DBControlPanelNavigationItemGroup text="Category A" icon="x_placeholder"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Item A1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Item A2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItemGroup text="Category B" icon="x_placeholder"
      ><DBControlPanelNavigationItem
        ><a href="#">Item B1</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
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
  mainId="main-content-tree-nav-multiple"
  mainLabel="shell-tree-nav-multiple"
  ><p>
    Tree Navigation - Multiple Behavior (multiple groups can be open
    simultaneously) </p
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
}`,...A.parameters?.docs?.source}}},j=[`Single`,`Multiple`]})))()}M();export{A as Multiple,k as Single,j as __namedExportsOrder,O as default};