import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./badge-DNB3-Lgy.js";import{n as i,t as a}from"./button-CZnqPe03.js";import{i as o,n as s,r as c,t as l}from"./control-panel-actions-2-DnpmG2Dg.js";import{n as u,t as d}from"./control-panel-brand-CiqzQkpn.js";import{n as f,t as p}from"./control-panel-desktop-j3xVITHx.js";import{n as m,t as h}from"./control-panel-meta-CpLCfBHp.js";import{n as g,t as _}from"./control-panel-mobile-DXC1I7Zb.js";import{i as v,n as y,r as b,t as x}from"./control-panel-navigation-item-BH0wUnj9.js";import{n as S,t as C}from"./control-panel-navigation-item-group-CnaTTLka.js";import{n as w,t as T}from"./link-Cuck8RYZ.js";import{i as E,n as D,r as O,t as k}from"./shell-content-CxeJmoag.js";var A=t({ControlPanelLeftPopover:()=>P,ControlPanelLeftTree:()=>F,ControlPanelTop:()=>N,__namedExportsOrder:()=>I,default:()=>M}),j,M,N,P,F,I;function L(){return(L=e((()=>{n(),i(),o(),s(),u(),f(),m(),g(),S(),y(),v(),T(),k(),O(),{fn:j}=__STORYBOOK_MODULE_TEST__,M={title:`Components/DBShell/Slots`,component:E,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},N={args:{"data-test-id":`shell-slots-nav-item-badge`,controlPanelDesktopPosition:`top`,default:`<DBControlPanelDesktop
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
>`},render:e=>({components:{DBShell:E,DBBadge:r,DBButton:a,DBControlPanelActions1:c,DBControlPanelActions2:l,DBControlPanelBrand:d,DBControlPanelDesktop:p,DBControlPanelMeta:h,DBControlPanelMobile:_,DBControlPanelNavigationItemGroup:C,DBControlPanelNavigationItem:x,DBControlPanelNavigation:b,DBLink:w,DBShellContent:D},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},P={args:{"data-test-id":`shell-slots-group-badge`,controlPanelDesktopPosition:`left`,default:`<DBControlPanelDesktop
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
>`},render:e=>({components:{DBShell:E,DBBadge:r,DBButton:a,DBControlPanelActions1:c,DBControlPanelActions2:l,DBControlPanelBrand:d,DBControlPanelDesktop:p,DBControlPanelMeta:h,DBControlPanelMobile:_,DBControlPanelNavigationItemGroup:C,DBControlPanelNavigationItem:x,DBControlPanelNavigation:b,DBLink:w,DBShellContent:D},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},F={args:{"data-test-id":`shell-slots-left-tree`,controlPanelDesktopPosition:`left`,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-slots-left-tree" variant="tree"
    ><DBControlPanelNavigationItem
      ><a href="#">Inbox</a
      ><template v-slot:end-slot
        ><DBBadge semantic="successful" size="small"> 2 </DBBadge></template
      ></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItemGroup icon="x_placeholder" text="Tasks"
      ><DBControlPanelNavigationItem icon="x_placeholder"
        ><a href="#">Open Tasks</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem icon="x_placeholder"
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
>`},render:e=>({components:{DBShell:E,DBBadge:r,DBButton:a,DBControlPanelActions1:c,DBControlPanelActions2:l,DBControlPanelBrand:d,DBControlPanelDesktop:p,DBControlPanelMeta:h,DBControlPanelMobile:_,DBControlPanelNavigationItemGroup:C,DBControlPanelNavigationItem:x,DBControlPanelNavigation:b,DBLink:w,DBShellContent:D},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},I=[`ControlPanelTop`,`ControlPanelLeftPopover`,`ControlPanelLeftTree`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
      ><DBControlPanelNavigationItem icon="x_placeholder"
        ><a href="#">Open Tasks</a></DBControlPanelNavigationItem
      ><DBControlPanelNavigationItem icon="x_placeholder"
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
}`,...F.parameters?.docs?.source}}}})))()}export{A as a,L as i,F as n,N as r,P as t};