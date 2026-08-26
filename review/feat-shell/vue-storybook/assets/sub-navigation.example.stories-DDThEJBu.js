import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-Vd-EEkIe.js";import{n as r,t as i}from"./control-panel-brand-Dz6Whcft.js";import{n as a,t as o}from"./control-panel-desktop-BN9AluC-.js";import{n as s,t as c}from"./control-panel-meta-m3OHMeWV.js";import{n as l,t as u}from"./control-panel-mobile-BQzLBuzC.js";import{i as d,n as f,r as p,t as m}from"./control-panel-navigation-item-G87D45a-.js";import{n as h,t as g}from"./control-panel-navigation-item-group-BfO4Mi3N.js";import{i as _,n as v,r as y,t as b}from"./control-panel-secondary-actions-BbC3svG0.js";import{n as x,t as S}from"./link-dM4-U4_u.js";import{i as C,n as w,r as T,t as E}from"./shell-content-fj21PiwH.js";import{n as D,t as O}from"./shell-sub-navigation-B-uIdbNx.js";var k,A,j,M,N,P,F;function I(){return(I=e((()=>{t(),r(),a(),s(),l(),h(),f(),d(),_(),v(),S(),E(),O(),T(),{fn:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/DBShell/Sub Navigation`,component:C,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},j={args:{"data-test-id":`shell-top-sub-top`,controlPanelDesktopPosition:`top`,subNavigationDesktopPosition:`top`,showSubNavigation:!0,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-top-sub-top-main"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item 1"
      ><a href="#">Item 1</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item 2"
      ><a href="#">Item 2</a></DBControlPanelNavigationItem
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
><DBControlPanelMobile drawerHeaderText="Top + Sub Top"
  ><DBControlPanelNavigation aria-label="shell-top-sub-top-mobile" v-bind="{}"
    ><DBControlPanelNavigationItemGroup text="Group 1"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Sub-Item 1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Sub-Item 2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 3</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 4</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 5</a></DBControlPanelNavigationItem
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
><DBShellSubNavigation aria-label="shell-top-sub-top-sub"
  ><DBControlPanelNavigation aria-label="shell-top-sub-top-sub"
    ><DBControlPanelNavigationItemGroup text="Group 1"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Sub-Item 1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Sub-Item 2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 3</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 4</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 5</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBShellSubNavigation
><DBShellContent mainId="main-content-top-sub-top" mainLabel="shell-top-sub-top"
  ><p>Top + Sub Top content</p><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:C,DBButton:n,DBControlPanelBrand:i,DBControlPanelDesktop:o,DBControlPanelMeta:c,DBControlPanelMobile:u,DBControlPanelNavigationItemGroup:g,DBControlPanelNavigationItem:m,DBControlPanelNavigation:p,DBControlPanelPrimaryActions:y,DBControlPanelSecondaryActions:b,DBLink:x,DBShellContent:w,DBShellSubNavigation:D},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},M={args:{"data-test-id":`shell-top-sub-left`,controlPanelDesktopPosition:`top`,subNavigationDesktopPosition:`left`,subNavigationMobilePosition:`bottom`,showSubNavigation:!0,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-top-sub-left-main"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item 1"
      ><a href="#">Item 1</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item 2"
      ><a href="#">Item 2</a></DBControlPanelNavigationItem
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
><DBControlPanelMobile drawerHeaderText="Top + Sub Left Popover"
  ><DBControlPanelNavigation aria-label="shell-top-sub-left-mobile" v-bind="{}"
    ><DBControlPanelNavigationItemGroup text="Group 1"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Sub-Item 1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Sub-Item 2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 3</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 4</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 5</a></DBControlPanelNavigationItem
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
><DBShellSubNavigation aria-label="shell-top-sub-left-sub"
  ><DBControlPanelNavigation
    aria-label="shell-top-sub-left-sub"
    variant="drilldown"
    ><DBControlPanelNavigationItemGroup text="Group 1"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Sub-Item 1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Sub-Item 2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 3</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 4</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 5</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBShellSubNavigation
><DBShellContent
  mainId="main-content-top-sub-left"
  mainLabel="shell-top-sub-left"
  ><p>Top + Sub Left Popover content</p
  ><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:C,DBButton:n,DBControlPanelBrand:i,DBControlPanelDesktop:o,DBControlPanelMeta:c,DBControlPanelMobile:u,DBControlPanelNavigationItemGroup:g,DBControlPanelNavigationItem:m,DBControlPanelNavigation:p,DBControlPanelPrimaryActions:y,DBControlPanelSecondaryActions:b,DBLink:x,DBShellContent:w,DBShellSubNavigation:D},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},N={args:{"data-test-id":`shell-top-sub-left-tree`,controlPanelDesktopPosition:`top`,subNavigationDesktopPosition:`left`,controlPanelMobilePosition:`bottom`,showSubNavigation:!0,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-top-sub-left-tree-main"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item 1"
      ><a href="#">Item 1</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item 2"
      ><a href="#">Item 2</a></DBControlPanelNavigationItem
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
><DBControlPanelMobile drawerHeaderText="Top + Sub Left Tree"
  ><DBControlPanelNavigation
    aria-label="shell-top-sub-left-tree-mobile"
    v-bind="{}"
    ><DBControlPanelNavigationItemGroup text="Group 1"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Sub-Item 1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Sub-Item 2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 3</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 4</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 5</a></DBControlPanelNavigationItem
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
><DBShellSubNavigation aria-label="shell-top-sub-left-tree-sub"
  ><DBControlPanelNavigation
    variant="tree"
    aria-label="shell-top-sub-left-tree-sub"
    ><DBControlPanelNavigationItemGroup text="Group 1"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Sub-Item 1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Sub-Item 2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 3</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 4</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 5</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBShellSubNavigation
><DBShellContent
  mainId="main-content-top-sub-left-tree"
  mainLabel="shell-top-sub-left-tree"
  ><p>Top + Sub Left Tree content</p><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:C,DBButton:n,DBControlPanelBrand:i,DBControlPanelDesktop:o,DBControlPanelMeta:c,DBControlPanelMobile:u,DBControlPanelNavigationItemGroup:g,DBControlPanelNavigationItem:m,DBControlPanelNavigation:p,DBControlPanelPrimaryActions:y,DBControlPanelSecondaryActions:b,DBLink:x,DBShellContent:w,DBShellSubNavigation:D},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},P={args:{"data-test-id":`shell-left-sub-top`,controlPanelDesktopPosition:`left`,subNavigationDesktopPosition:`top`,controlPanelMobilePosition:`bottom`,subNavigationMobilePosition:`bottom`,showSubNavigation:!0,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-left-sub-top-main"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item 1"
      ><a href="#">Item 1</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item 2"
      ><a href="#">Item 2</a></DBControlPanelNavigationItem
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
><DBControlPanelMobile drawerHeaderText="Left + Sub Top"
  ><DBControlPanelNavigation aria-label="shell-left-sub-top-mobile" v-bind="{}"
    ><DBControlPanelNavigationItemGroup text="Group 1"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Sub-Item 1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Sub-Item 2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 3</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 4</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 5</a></DBControlPanelNavigationItem
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
><DBShellSubNavigation aria-label="shell-left-sub-top-sub"
  ><DBControlPanelNavigation aria-label="shell-left-sub-top-sub"
    ><DBControlPanelNavigationItemGroup text="Group 1"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Sub-Item 1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Sub-Item 2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 3</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 4</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 5</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBShellSubNavigation
><DBShellContent
  mainId="main-content-left-sub-top"
  mainLabel="shell-left-sub-top"
  ><p>Left + Sub Top content</p><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:C,DBButton:n,DBControlPanelBrand:i,DBControlPanelDesktop:o,DBControlPanelMeta:c,DBControlPanelMobile:u,DBControlPanelNavigationItemGroup:g,DBControlPanelNavigationItem:m,DBControlPanelNavigation:p,DBControlPanelPrimaryActions:y,DBControlPanelSecondaryActions:b,DBLink:x,DBShellContent:w,DBShellSubNavigation:D},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-top-sub-top",
    "controlPanelDesktopPosition": "top",
    "subNavigationDesktopPosition": "top",
    "showSubNavigation": true,
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-top-sub-top-main"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item 1"
      ><a href="#">Item 1</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item 2"
      ><a href="#">Item 2</a></DBControlPanelNavigationItem
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
><DBControlPanelMobile drawerHeaderText="Top + Sub Top"
  ><DBControlPanelNavigation aria-label="shell-top-sub-top-mobile" v-bind="{}"
    ><DBControlPanelNavigationItemGroup text="Group 1"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Sub-Item 1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Sub-Item 2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 3</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 4</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 5</a></DBControlPanelNavigationItem
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
><DBShellSubNavigation aria-label="shell-top-sub-top-sub"
  ><DBControlPanelNavigation aria-label="shell-top-sub-top-sub"
    ><DBControlPanelNavigationItemGroup text="Group 1"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Sub-Item 1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Sub-Item 2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 3</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 4</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 5</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBShellSubNavigation
><DBShellContent mainId="main-content-top-sub-top" mainLabel="shell-top-sub-top"
  ><p>Top + Sub Top content</p><DBButton>Action</DBButton></DBShellContent
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
      DBShellContent,
      DBShellSubNavigation
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-top-sub-left",
    "controlPanelDesktopPosition": "top",
    "subNavigationDesktopPosition": "left",
    "subNavigationMobilePosition": "bottom",
    "showSubNavigation": true,
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-top-sub-left-main"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item 1"
      ><a href="#">Item 1</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item 2"
      ><a href="#">Item 2</a></DBControlPanelNavigationItem
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
><DBControlPanelMobile drawerHeaderText="Top + Sub Left Popover"
  ><DBControlPanelNavigation aria-label="shell-top-sub-left-mobile" v-bind="{}"
    ><DBControlPanelNavigationItemGroup text="Group 1"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Sub-Item 1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Sub-Item 2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 3</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 4</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 5</a></DBControlPanelNavigationItem
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
><DBShellSubNavigation aria-label="shell-top-sub-left-sub"
  ><DBControlPanelNavigation
    aria-label="shell-top-sub-left-sub"
    variant="drilldown"
    ><DBControlPanelNavigationItemGroup text="Group 1"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Sub-Item 1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Sub-Item 2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 3</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 4</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 5</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBShellSubNavigation
><DBShellContent
  mainId="main-content-top-sub-left"
  mainLabel="shell-top-sub-left"
  ><p>Top + Sub Left Popover content</p
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
      DBShellContent,
      DBShellSubNavigation
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-top-sub-left-tree",
    "controlPanelDesktopPosition": "top",
    "subNavigationDesktopPosition": "left",
    "controlPanelMobilePosition": "bottom",
    "showSubNavigation": true,
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-top-sub-left-tree-main"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item 1"
      ><a href="#">Item 1</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item 2"
      ><a href="#">Item 2</a></DBControlPanelNavigationItem
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
><DBControlPanelMobile drawerHeaderText="Top + Sub Left Tree"
  ><DBControlPanelNavigation
    aria-label="shell-top-sub-left-tree-mobile"
    v-bind="{}"
    ><DBControlPanelNavigationItemGroup text="Group 1"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Sub-Item 1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Sub-Item 2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 3</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 4</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 5</a></DBControlPanelNavigationItem
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
><DBShellSubNavigation aria-label="shell-top-sub-left-tree-sub"
  ><DBControlPanelNavigation
    variant="tree"
    aria-label="shell-top-sub-left-tree-sub"
    ><DBControlPanelNavigationItemGroup text="Group 1"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Sub-Item 1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Sub-Item 2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 3</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 4</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 5</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBShellSubNavigation
><DBShellContent
  mainId="main-content-top-sub-left-tree"
  mainLabel="shell-top-sub-left-tree"
  ><p>Top + Sub Left Tree content</p><DBButton>Action</DBButton></DBShellContent
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
      DBShellContent,
      DBShellSubNavigation
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-left-sub-top",
    "controlPanelDesktopPosition": "left",
    "subNavigationDesktopPosition": "top",
    "controlPanelMobilePosition": "bottom",
    "subNavigationMobilePosition": "bottom",
    "showSubNavigation": true,
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-left-sub-top-main"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item 1"
      ><a href="#">Item 1</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item 2"
      ><a href="#">Item 2</a></DBControlPanelNavigationItem
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
><DBControlPanelMobile drawerHeaderText="Left + Sub Top"
  ><DBControlPanelNavigation aria-label="shell-left-sub-top-mobile" v-bind="{}"
    ><DBControlPanelNavigationItemGroup text="Group 1"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Sub-Item 1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Sub-Item 2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 3</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 4</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 5</a></DBControlPanelNavigationItem
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
><DBShellSubNavigation aria-label="shell-left-sub-top-sub"
  ><DBControlPanelNavigation aria-label="shell-left-sub-top-sub"
    ><DBControlPanelNavigationItemGroup text="Group 1"
      ><DBControlPanelNavigationItem
        ><a href="#" aria-current="page">
          Sub-Item 1
        </a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Sub-Item 2</a></DBControlPanelNavigationItem
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 3</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 4</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Sub-Item 5</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBShellSubNavigation
><DBShellContent
  mainId="main-content-left-sub-top"
  mainLabel="shell-left-sub-top"
  ><p>Left + Sub Top content</p><DBButton>Action</DBButton></DBShellContent
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
      DBShellContent,
      DBShellSubNavigation
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
}`,...P.parameters?.docs?.source}}},F=[`TopSubTop`,`TopSubLeftDrilldown`,`TopSubLeftTree`,`LeftSubTop`]})))()}I();export{P as LeftSubTop,M as TopSubLeftDrilldown,N as TopSubLeftTree,j as TopSubTop,F as __namedExportsOrder,A as default};