import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-BwkSXIar.js";import{n as r,t as i}from"./button-CAiFGzq5.js";import{n as a,t as o}from"./control-panel-brand-Cnk8l79P.js";import{n as s,t as c}from"./control-panel-desktop-DlY7CpMp.js";import{n as l,t as u}from"./control-panel-meta-CMiSyrVS.js";import{n as d,t as f}from"./control-panel-mobile-Dn1KdBn1.js";import{i as p,n as m,r as h,t as g}from"./control-panel-navigation-item-CsNHUG4z.js";import{n as _,t as v}from"./control-panel-navigation-item-group-Cwapmqmg.js";import{i as y,n as b,r as x,t as S}from"./control-panel-secondary-actions-gXf6bU77.js";import{n as C,t as w}from"./link-C0cpCsNp.js";import{i as T,n as E,r as D,t as O}from"./shell-content-D-10W74E.js";var k,A,j,M,N,P;function F(){return(F=e((()=>{t(),r(),a(),s(),l(),d(),_(),m(),p(),y(),b(),w(),O(),D(),{fn:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/DBShell/Slots`,component:T,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},j={args:{"data-test-id":`shell-slots-nav-item-badge`,controlPanelDesktopPosition:`top`,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-slots-top"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Inbox"
      ><a href="#" aria-current="page"> Inbox </a
      ><template v-slot:end-slot
        ><DBBadge semantic="warning" placement="corner-top-right" size="small">
          3
        </DBBadge></template
      ></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Tasks"
      ><DBControlPanelNavigationItem
        ><a href="#">Open Tasks</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Completed</a></DBControlPanelNavigationItem
      ><template v-slot:end-slot
        ><DBBadge
          semantic="successful"
          size="small"
          placement="corner-top-right"
        >
          2
        </DBBadge></template
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Dashboard"
      ><a href="#">Dashboard</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ><template v-slot:brand
    ><DBControlPanelBrand data-logo="db-systel"
      ><DBBadge
        semantic="informational"
        size="small"
        label="New version available"
      >
        New
      </DBBadge></DBControlPanelBrand
    ></template
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
><DBControlPanelMobile drawerHeaderText="Nav Item Badge"
  ><DBControlPanelNavigation aria-label="shell-slots-top"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Inbox"
      ><a href="#" aria-current="page"> Inbox </a
      ><template v-slot:end-slot
        ><DBBadge semantic="warning" placement="corner-top-right" size="small">
          3
        </DBBadge></template
      ></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Tasks"
      ><DBControlPanelNavigationItem
        ><a href="#">Open Tasks</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Completed</a></DBControlPanelNavigationItem
      ><template v-slot:end-slot
        ><DBBadge
          semantic="successful"
          size="small"
          placement="corner-top-right"
        >
          2
        </DBBadge></template
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Dashboard"
      ><a href="#">Dashboard</a></DBControlPanelNavigationItem
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
  mainId="main-content-slots-nav-item-badge"
  mainLabel="shell-slots-nav-item-badge"
  ><p> Navigation Item with Badge - StartSlot and EndSlot </p
  ><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:T,DBBadge:n,DBButton:i,DBControlPanelBrand:o,DBControlPanelDesktop:c,DBControlPanelMeta:u,DBControlPanelMobile:f,DBControlPanelNavigationItemGroup:v,DBControlPanelNavigationItem:g,DBControlPanelNavigation:h,DBControlPanelPrimaryActions:x,DBControlPanelSecondaryActions:S,DBLink:C,DBShellContent:E},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},M={args:{"data-test-id":`shell-slots-group-badge`,controlPanelDesktopPosition:`left`,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-slots-group-badge"
    ><DBControlPanelNavigationItem
      ><a href="#">Inbox</a
      ><template v-slot:end-slot
        ><DBBadge semantic="successful" size="small"> 2 </DBBadge></template
      ></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Tasks"
      ><DBControlPanelNavigationItem
        ><a href="#">Open Tasks</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Completed</a></DBControlPanelNavigationItem
      ><template v-slot:end-slot
        ><DBBadge semantic="successful" size="small"> 2 </DBBadge></template
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Dashboard"
      ><a href="#">Dashboard</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ><template v-slot:brand
    ><DBControlPanelBrand data-logo="db-systel"
      ><DBBadge
        semantic="informational"
        size="small"
        label="New version available"
      >
        New
      </DBBadge></DBControlPanelBrand
    ></template
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
><DBControlPanelMobile drawerHeaderText="Group Badge"
  ><DBControlPanelNavigation aria-label="shell-slots-group-badge-mobile"
    ><DBControlPanelNavigationItem
      ><a href="#">Inbox</a
      ><template v-slot:end-slot
        ><DBBadge semantic="successful" size="small"> 2 </DBBadge></template
      ></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItemGroup text="Tasks"
      ><DBControlPanelNavigationItem
        ><a href="#">Open Tasks</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Completed</a></DBControlPanelNavigationItem
      ><template v-slot:end-slot
        ><DBBadge semantic="successful" size="small"> 2 </DBBadge></template
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Dashboard</a></DBControlPanelNavigationItem
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
  mainId="main-content-slots-group-badge"
  mainLabel="shell-slots-group-badge-mobile"
  ><p>Group with Badge - StartSlot and EndSlot</p
  ><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:T,DBBadge:n,DBButton:i,DBControlPanelBrand:o,DBControlPanelDesktop:c,DBControlPanelMeta:u,DBControlPanelMobile:f,DBControlPanelNavigationItemGroup:v,DBControlPanelNavigationItem:g,DBControlPanelNavigation:h,DBControlPanelPrimaryActions:x,DBControlPanelSecondaryActions:S,DBLink:C,DBShellContent:E},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},N={args:{"data-test-id":`shell-slots-left-tree`,controlPanelDesktopPosition:`left`,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-slots-left-tree" variant="tree"
    ><DBControlPanelNavigationItem
      ><a href="#">Inbox</a
      ><template v-slot:end-slot
        ><DBBadge semantic="successful" size="small"> 2 </DBBadge></template
      ></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Tasks"
      ><DBControlPanelNavigationItem
        ><a href="#">Open Tasks</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Completed</a></DBControlPanelNavigationItem
      ><template v-slot:end-slot
        ><DBBadge semantic="successful" size="small"> 2 </DBBadge></template
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Dashboard"
      ><a href="#">Dashboard</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ><template v-slot:brand
    ><DBControlPanelBrand data-logo="db-systel"
      ><DBBadge
        semantic="informational"
        size="small"
        label="New version available"
      >
        New
      </DBBadge></DBControlPanelBrand
    ></template
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
><DBControlPanelMobile drawerHeaderText="Group Badge"
  ><DBControlPanelNavigation
    aria-label="shell-slots-left-tree-mobile"
    variant="tree"
    ><DBControlPanelNavigationItem
      ><a href="#">Inbox</a
      ><template v-slot:end-slot
        ><DBBadge semantic="successful" size="small"> 2 </DBBadge></template
      ></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItemGroup text="Tasks"
      ><DBControlPanelNavigationItem
        ><a href="#">Open Tasks</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Completed</a></DBControlPanelNavigationItem
      ><template v-slot:end-slot
        ><DBBadge semantic="successful" size="small"> 2 </DBBadge></template
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Dashboard</a></DBControlPanelNavigationItem
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
  mainId="main-content-slots-group-badge"
  mainLabel="shell-slots-group-badge"
  ><p>Group with Badge - StartSlot and EndSlot</p
  ><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:T,DBBadge:n,DBButton:i,DBControlPanelBrand:o,DBControlPanelDesktop:c,DBControlPanelMeta:u,DBControlPanelMobile:f,DBControlPanelNavigationItemGroup:v,DBControlPanelNavigationItem:g,DBControlPanelNavigation:h,DBControlPanelPrimaryActions:x,DBControlPanelSecondaryActions:S,DBLink:C,DBShellContent:E},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-slots-nav-item-badge",
    "controlPanelDesktopPosition": "top",
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-slots-top"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Inbox"
      ><a href="#" aria-current="page"> Inbox </a
      ><template v-slot:end-slot
        ><DBBadge semantic="warning" placement="corner-top-right" size="small">
          3
        </DBBadge></template
      ></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Tasks"
      ><DBControlPanelNavigationItem
        ><a href="#">Open Tasks</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Completed</a></DBControlPanelNavigationItem
      ><template v-slot:end-slot
        ><DBBadge
          semantic="successful"
          size="small"
          placement="corner-top-right"
        >
          2
        </DBBadge></template
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Dashboard"
      ><a href="#">Dashboard</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ><template v-slot:brand
    ><DBControlPanelBrand data-logo="db-systel"
      ><DBBadge
        semantic="informational"
        size="small"
        label="New version available"
      >
        New
      </DBBadge></DBControlPanelBrand
    ></template
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
><DBControlPanelMobile drawerHeaderText="Nav Item Badge"
  ><DBControlPanelNavigation aria-label="shell-slots-top"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Inbox"
      ><a href="#" aria-current="page"> Inbox </a
      ><template v-slot:end-slot
        ><DBBadge semantic="warning" placement="corner-top-right" size="small">
          3
        </DBBadge></template
      ></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Tasks"
      ><DBControlPanelNavigationItem
        ><a href="#">Open Tasks</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Completed</a></DBControlPanelNavigationItem
      ><template v-slot:end-slot
        ><DBBadge
          semantic="successful"
          size="small"
          placement="corner-top-right"
        >
          2
        </DBBadge></template
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Dashboard"
      ><a href="#">Dashboard</a></DBControlPanelNavigationItem
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
  mainId="main-content-slots-nav-item-badge"
  mainLabel="shell-slots-nav-item-badge"
  ><p> Navigation Item with Badge - StartSlot and EndSlot </p
  ><DBButton>Action</DBButton></DBShellContent
>\`
  },
  render: (args: any) => ({
    components: {
      DBShell,
      DBBadge,
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-slots-group-badge",
    "controlPanelDesktopPosition": "left",
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-slots-group-badge"
    ><DBControlPanelNavigationItem
      ><a href="#">Inbox</a
      ><template v-slot:end-slot
        ><DBBadge semantic="successful" size="small"> 2 </DBBadge></template
      ></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Tasks"
      ><DBControlPanelNavigationItem
        ><a href="#">Open Tasks</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Completed</a></DBControlPanelNavigationItem
      ><template v-slot:end-slot
        ><DBBadge semantic="successful" size="small"> 2 </DBBadge></template
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Dashboard"
      ><a href="#">Dashboard</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ><template v-slot:brand
    ><DBControlPanelBrand data-logo="db-systel"
      ><DBBadge
        semantic="informational"
        size="small"
        label="New version available"
      >
        New
      </DBBadge></DBControlPanelBrand
    ></template
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
><DBControlPanelMobile drawerHeaderText="Group Badge"
  ><DBControlPanelNavigation aria-label="shell-slots-group-badge-mobile"
    ><DBControlPanelNavigationItem
      ><a href="#">Inbox</a
      ><template v-slot:end-slot
        ><DBBadge semantic="successful" size="small"> 2 </DBBadge></template
      ></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItemGroup text="Tasks"
      ><DBControlPanelNavigationItem
        ><a href="#">Open Tasks</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Completed</a></DBControlPanelNavigationItem
      ><template v-slot:end-slot
        ><DBBadge semantic="successful" size="small"> 2 </DBBadge></template
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Dashboard</a></DBControlPanelNavigationItem
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
  mainId="main-content-slots-group-badge"
  mainLabel="shell-slots-group-badge-mobile"
  ><p>Group with Badge - StartSlot and EndSlot</p
  ><DBButton>Action</DBButton></DBShellContent
>\`
  },
  render: (args: any) => ({
    components: {
      DBShell,
      DBBadge,
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-slots-left-tree",
    "controlPanelDesktopPosition": "left",
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-slots-left-tree" variant="tree"
    ><DBControlPanelNavigationItem
      ><a href="#">Inbox</a
      ><template v-slot:end-slot
        ><DBBadge semantic="successful" size="small"> 2 </DBBadge></template
      ></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Tasks"
      ><DBControlPanelNavigationItem
        ><a href="#">Open Tasks</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Completed</a></DBControlPanelNavigationItem
      ><template v-slot:end-slot
        ><DBBadge semantic="successful" size="small"> 2 </DBBadge></template
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Dashboard"
      ><a href="#">Dashboard</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ><template v-slot:brand
    ><DBControlPanelBrand data-logo="db-systel"
      ><DBBadge
        semantic="informational"
        size="small"
        label="New version available"
      >
        New
      </DBBadge></DBControlPanelBrand
    ></template
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
><DBControlPanelMobile drawerHeaderText="Group Badge"
  ><DBControlPanelNavigation
    aria-label="shell-slots-left-tree-mobile"
    variant="tree"
    ><DBControlPanelNavigationItem
      ><a href="#">Inbox</a
      ><template v-slot:end-slot
        ><DBBadge semantic="successful" size="small"> 2 </DBBadge></template
      ></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItemGroup text="Tasks"
      ><DBControlPanelNavigationItem
        ><a href="#">Open Tasks</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem
        ><a href="#">Completed</a></DBControlPanelNavigationItem
      ><template v-slot:end-slot
        ><DBBadge semantic="successful" size="small"> 2 </DBBadge></template
      ></DBControlPanelNavigationItemGroup
    ><DBControlPanelNavigationItem
      ><a href="#">Dashboard</a></DBControlPanelNavigationItem
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
  mainId="main-content-slots-group-badge"
  mainLabel="shell-slots-group-badge"
  ><p>Group with Badge - StartSlot and EndSlot</p
  ><DBButton>Action</DBButton></DBShellContent
>\`
  },
  render: (args: any) => ({
    components: {
      DBShell,
      DBBadge,
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
}`,...N.parameters?.docs?.source}}},P=[`ControlPanelTop`,`ControlPanelLeftPopover`,`ControlPanelLeftTree`]})))()}F();export{M as ControlPanelLeftPopover,N as ControlPanelLeftTree,j as ControlPanelTop,P as __namedExportsOrder,A as default};