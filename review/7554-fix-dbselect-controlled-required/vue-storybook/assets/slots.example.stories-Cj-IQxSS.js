import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-Dmmt9-Ne.js";import{n as r,t as i}from"./button-yjFqAyoL.js";import{i as a,n as o,r as s,t as c}from"./control-panel-actions-2--abxOORV.js";import{n as l,t as u}from"./control-panel-brand-DNUcUbnq.js";import{n as d,t as f}from"./control-panel-desktop-DkQDU0YW.js";import{n as p,t as m}from"./control-panel-meta-CnjjE3dT.js";import{n as h,t as g}from"./control-panel-mobile-CAhSPzZK.js";import{i as _,n as v,r as y,t as b}from"./control-panel-navigation-item-Bo3KgbHO.js";import{n as x,t as S}from"./control-panel-navigation-item-group-Djrofb2Z.js";import{n as C,t as w}from"./link-CH5QHdCw.js";import{i as T,n as E,r as D,t as O}from"./shell-content-B1F4gdNr.js";var k,A,j,M,N,P;function F(){return(F=e((()=>{t(),r(),a(),o(),l(),d(),p(),h(),x(),v(),_(),w(),O(),D(),{fn:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/DBShell/Slots`,component:T,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},j={args:{"data-test-id":`shell-slots-nav-item-badge`,controlPanelDesktopPosition:`top`,default:`<DBControlPanelDesktop
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile
      </DBButton></DBControlPanelActions2
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile
      </DBButton></DBControlPanelActions2
    ></template
  ></DBControlPanelMobile
><DBShellContent
  mainId="main-content-slots-nav-item-badge"
  mainLabel="shell-slots-nav-item-badge"
  ><p> Navigation Item with Badge - StartSlot and EndSlot </p
  ><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:T,DBBadge:n,DBButton:i,DBControlPanelActions1:s,DBControlPanelActions2:c,DBControlPanelBrand:u,DBControlPanelDesktop:f,DBControlPanelMeta:m,DBControlPanelMobile:g,DBControlPanelNavigationItemGroup:S,DBControlPanelNavigationItem:b,DBControlPanelNavigation:y,DBLink:C,DBShellContent:E},setup(){return{args:e}},template:`<div  :style="{
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile
      </DBButton></DBControlPanelActions2
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile
      </DBButton></DBControlPanelActions2
    ></template
  ></DBControlPanelMobile
><DBShellContent
  mainId="main-content-slots-group-badge"
  mainLabel="shell-slots-group-badge-mobile"
  ><p>Group with Badge - StartSlot and EndSlot</p
  ><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:T,DBBadge:n,DBButton:i,DBControlPanelActions1:s,DBControlPanelActions2:c,DBControlPanelBrand:u,DBControlPanelDesktop:f,DBControlPanelMeta:m,DBControlPanelMobile:g,DBControlPanelNavigationItemGroup:S,DBControlPanelNavigationItem:b,DBControlPanelNavigation:y,DBLink:C,DBShellContent:E},setup(){return{args:e}},template:`<div  :style="{
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile
      </DBButton></DBControlPanelActions2
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile
      </DBButton></DBControlPanelActions2
    ></template
  ></DBControlPanelMobile
><DBShellContent
  mainId="main-content-slots-group-badge"
  mainLabel="shell-slots-group-badge"
  ><p>Group with Badge - StartSlot and EndSlot</p
  ><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:T,DBBadge:n,DBButton:i,DBControlPanelActions1:s,DBControlPanelActions2:c,DBControlPanelBrand:u,DBControlPanelDesktop:f,DBControlPanelMeta:m,DBControlPanelMobile:g,DBControlPanelNavigationItemGroup:S,DBControlPanelNavigationItem:b,DBControlPanelNavigation:y,DBLink:C,DBShellContent:E},setup(){return{args:e}},template:`<div  :style="{
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile
      </DBButton></DBControlPanelActions2
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile
      </DBButton></DBControlPanelActions2
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
      DBControlPanelActions1,
      DBControlPanelActions2,
      DBControlPanelBrand,
      DBControlPanelDesktop,
      DBControlPanelMeta,
      DBControlPanelMobile,
      DBControlPanelNavigationItemGroup,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation,
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile
      </DBButton></DBControlPanelActions2
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile
      </DBButton></DBControlPanelActions2
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
      DBControlPanelActions1,
      DBControlPanelActions2,
      DBControlPanelBrand,
      DBControlPanelDesktop,
      DBControlPanelMeta,
      DBControlPanelMobile,
      DBControlPanelNavigationItemGroup,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation,
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile
      </DBButton></DBControlPanelActions2
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile
      </DBButton></DBControlPanelActions2
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
      DBControlPanelActions1,
      DBControlPanelActions2,
      DBControlPanelBrand,
      DBControlPanelDesktop,
      DBControlPanelMeta,
      DBControlPanelMobile,
      DBControlPanelNavigationItemGroup,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation,
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