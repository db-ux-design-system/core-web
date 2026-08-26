import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{At as t,F as n,Kt as r,N as i,Pt as a,Rt as o,St as s,Xt as c,Z as l,bt as u,ft as d,gt as f,mt as p,t as m,vt as h}from"./src-Duq55lQ1.js";var g,_,v,y,b,x;e((()=>{m(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/DBShell/Slots`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},v={args:{"data-test-id":`shell-slots-nav-item-badge`,controlPanelDesktopPosition:`top`,default:`<DBControlPanelDesktop
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
>`},render:e=>({components:{DBShell:n,DBBadge:c,DBButton:r,DBControlPanelBrand:o,DBControlPanelDesktop:a,DBControlPanelMeta:t,DBControlPanelMobile:s,DBControlPanelNavigationItemGroup:f,DBControlPanelNavigationItem:h,DBControlPanelNavigation:u,DBControlPanelPrimaryActions:p,DBControlPanelSecondaryActions:d,DBLink:l,DBShellContent:i},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},y={args:{"data-test-id":`shell-slots-group-badge`,controlPanelDesktopPosition:`left`,default:`<DBControlPanelDesktop
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
>`},render:e=>({components:{DBShell:n,DBBadge:c,DBButton:r,DBControlPanelBrand:o,DBControlPanelDesktop:a,DBControlPanelMeta:t,DBControlPanelMobile:s,DBControlPanelNavigationItemGroup:f,DBControlPanelNavigationItem:h,DBControlPanelNavigation:u,DBControlPanelPrimaryActions:p,DBControlPanelSecondaryActions:d,DBLink:l,DBShellContent:i},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},b={args:{"data-test-id":`shell-slots-left-tree`,controlPanelDesktopPosition:`left`,default:`<DBControlPanelDesktop
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
>`},render:e=>({components:{DBShell:n,DBBadge:c,DBButton:r,DBControlPanelBrand:o,DBControlPanelDesktop:a,DBControlPanelMeta:t,DBControlPanelMobile:s,DBControlPanelNavigationItemGroup:f,DBControlPanelNavigationItem:h,DBControlPanelNavigation:u,DBControlPanelPrimaryActions:p,DBControlPanelSecondaryActions:d,DBLink:l,DBShellContent:i},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`ControlPanelTop`,`ControlPanelLeftPopover`,`ControlPanelLeftTree`]}))();export{y as ControlPanelLeftPopover,b as ControlPanelLeftTree,v as ControlPanelTop,x as __namedExportsOrder,_ as default};