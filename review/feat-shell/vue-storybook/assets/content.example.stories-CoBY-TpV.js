import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-B9MJekmS.js";import{n as r,t as i}from"./control-panel-brand-BTgrphyr.js";import{n as a,t as o}from"./control-panel-desktop-Bm0AS0nF.js";import{n as s,t as c}from"./control-panel-meta-CeG2utFY.js";import{n as l,t as u}from"./control-panel-mobile-CnohtA-f.js";import{i as d,n as f,r as p,t as m}from"./control-panel-navigation-item-50b77jEd.js";import{i as h,n as g,r as _,t as v}from"./control-panel-secondary-actions-Bff04iiw.js";import{n as y,t as b}from"./link-D1V-0ZS7.js";import{n as x,t as S}from"./notification-BGVNjGE1.js";import{i as C,n as w,r as T,t as E}from"./shell-content-B5e9bFHJ.js";var D,O,k,A,j,M,N;function P(){return(P=e((()=>{t(),r(),a(),s(),l(),f(),d(),h(),g(),b(),S(),E(),T(),{fn:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/DBShell/Position`,component:C,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},k={args:{"data-test-id":`shell-position-auto-top`,controlPanelDesktopPosition:`top`,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="content-position-auto-top"
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
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Auto Top"
  ><DBControlPanelNavigation
    aria-label="content-position-auto-top-mobile"
    v-bind="{}"
    ><DBControlPanelNavigationItem icon="x_placeholder"
      ><a href="#">Item</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
      ><a href="#">Item disabled</a></DBControlPanelNavigationItem
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
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelMobile
><DBShellContent
  mainId="main-content-auto-top"
  mainLabel="shell-position-auto-top"
  ><p>Auto-Top position content</p><p>Auto-Top position content</p
  ><p>Auto-Top position content</p><p>Auto-Top position content</p
  ><p>Auto-Top position content</p><p>Auto-Top position content</p
  ><DBButton>Action</DBButton
  ><template v-slot:start-slot
    ><DBNotification headline="Test"> Test </DBNotification></template
  ><template v-slot:end-slot
    ><DBNotification headline="Test"> Test </DBNotification></template
  ></DBShellContent
>`},render:e=>({components:{DBShell:C,DBButton:n,DBControlPanelBrand:i,DBControlPanelDesktop:o,DBControlPanelMeta:c,DBControlPanelMobile:u,DBControlPanelNavigationItem:m,DBControlPanelNavigation:p,DBControlPanelPrimaryActions:_,DBControlPanelSecondaryActions:v,DBLink:y,DBNotification:x,DBShellContent:w},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},A={args:{"data-test-id":`shell-position-fixed-top`,controlPanelDesktopPosition:`top`,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="content-position-fixed-top"
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
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Fixed Top"
  ><DBControlPanelNavigation
    aria-label="content-position-fixed-top-mobile"
    v-bind="{}"
    ><DBControlPanelNavigationItem icon="x_placeholder"
      ><a href="#">Item</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
      ><a href="#">Item disabled</a></DBControlPanelNavigationItem
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
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelMobile
><DBShellContent
  variant="fixed"
  mainId="main-content-fixed-top"
  mainLabel="shell-position-fixed-top"
  ><p>Fixed-Top position content</p><p>Fixed-Top position content</p
  ><p>Fixed-Top position content</p><p>Fixed-Top position content</p
  ><p>Fixed-Top position content</p><p>Fixed-Top position content</p
  ><DBButton>Action</DBButton
  ><template v-slot:start-slot
    ><DBNotification headline="Test"> Test </DBNotification></template
  ><template v-slot:end-slot
    ><DBNotification headline="Test"> Test </DBNotification></template
  ></DBShellContent
>`},render:e=>({components:{DBShell:C,DBButton:n,DBControlPanelBrand:i,DBControlPanelDesktop:o,DBControlPanelMeta:c,DBControlPanelMobile:u,DBControlPanelNavigationItem:m,DBControlPanelNavigation:p,DBControlPanelPrimaryActions:_,DBControlPanelSecondaryActions:v,DBLink:y,DBNotification:x,DBShellContent:w},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},j={args:{"data-test-id":`shell-position-auto-left`,controlPanelDesktopPosition:`left`,controlPanelMobilePosition:`bottom`,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="content-position-auto-left"
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
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Auto Left"
  ><DBControlPanelNavigation
    aria-label="content-position-auto-left-mobile"
    v-bind="{}"
    ><DBControlPanelNavigationItem icon="x_placeholder"
      ><a href="#">Item</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
      ><a href="#">Item disabled</a></DBControlPanelNavigationItem
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
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelMobile
><DBShellContent
  mainId="main-content-auto-left"
  mainLabel="shell-position-auto-left"
  ><p>Auto-Left position content</p><p>Auto-Left position content</p
  ><p>Auto-Left position content</p><p>Auto-Left position content</p
  ><p>Auto-Left position content</p><p>Auto-Left position content</p
  ><DBButton>Action</DBButton
  ><template v-slot:start-slot
    ><DBNotification headline="Test"> Test </DBNotification></template
  ><template v-slot:end-slot
    ><DBNotification headline="Test"> Test </DBNotification></template
  ></DBShellContent
>`},render:e=>({components:{DBShell:C,DBButton:n,DBControlPanelBrand:i,DBControlPanelDesktop:o,DBControlPanelMeta:c,DBControlPanelMobile:u,DBControlPanelNavigationItem:m,DBControlPanelNavigation:p,DBControlPanelPrimaryActions:_,DBControlPanelSecondaryActions:v,DBLink:y,DBNotification:x,DBShellContent:w},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},M={args:{"data-test-id":`shell-position-fixed-left`,controlPanelDesktopPosition:`left`,controlPanelMobilePosition:`bottom`,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="content-position-fixed-left"
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
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Fixed Left"
  ><DBControlPanelNavigation
    aria-label="content-position-fixed-left-mobile"
    v-bind="{}"
    ><DBControlPanelNavigationItem icon="x_placeholder"
      ><a href="#">Item</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
      ><a href="#">Item disabled</a></DBControlPanelNavigationItem
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
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelMobile
><DBShellContent
  variant="fixed"
  mainId="main-content-fixed-left"
  mainLabel="shell-position-fixed-left"
  ><p>Fixed-Left position content</p><p>Fixed-Left position content</p
  ><p>Fixed-Left position content</p><p>Fixed-Left position content</p
  ><p>Fixed-Left position content</p><p>Fixed-Left position content</p
  ><DBButton>Action</DBButton
  ><template v-slot:start-slot
    ><DBNotification headline="Test"> Test </DBNotification></template
  ><template v-slot:end-slot
    ><DBNotification headline="Test"> Test </DBNotification></template
  ></DBShellContent
>`},render:e=>({components:{DBShell:C,DBButton:n,DBControlPanelBrand:i,DBControlPanelDesktop:o,DBControlPanelMeta:c,DBControlPanelMobile:u,DBControlPanelNavigationItem:m,DBControlPanelNavigation:p,DBControlPanelPrimaryActions:_,DBControlPanelSecondaryActions:v,DBLink:y,DBNotification:x,DBShellContent:w},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-position-auto-top",
    "controlPanelDesktopPosition": "top",
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="content-position-auto-top"
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
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Auto Top"
  ><DBControlPanelNavigation
    aria-label="content-position-auto-top-mobile"
    v-bind="{}"
    ><DBControlPanelNavigationItem icon="x_placeholder"
      ><a href="#">Item</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
      ><a href="#">Item disabled</a></DBControlPanelNavigationItem
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
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelMobile
><DBShellContent
  mainId="main-content-auto-top"
  mainLabel="shell-position-auto-top"
  ><p>Auto-Top position content</p><p>Auto-Top position content</p
  ><p>Auto-Top position content</p><p>Auto-Top position content</p
  ><p>Auto-Top position content</p><p>Auto-Top position content</p
  ><DBButton>Action</DBButton
  ><template v-slot:start-slot
    ><DBNotification headline="Test"> Test </DBNotification></template
  ><template v-slot:end-slot
    ><DBNotification headline="Test"> Test </DBNotification></template
  ></DBShellContent
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
      DBNotification,
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
    "data-test-id": "shell-position-fixed-top",
    "controlPanelDesktopPosition": "top",
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="content-position-fixed-top"
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
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Fixed Top"
  ><DBControlPanelNavigation
    aria-label="content-position-fixed-top-mobile"
    v-bind="{}"
    ><DBControlPanelNavigationItem icon="x_placeholder"
      ><a href="#">Item</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
      ><a href="#">Item disabled</a></DBControlPanelNavigationItem
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
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelMobile
><DBShellContent
  variant="fixed"
  mainId="main-content-fixed-top"
  mainLabel="shell-position-fixed-top"
  ><p>Fixed-Top position content</p><p>Fixed-Top position content</p
  ><p>Fixed-Top position content</p><p>Fixed-Top position content</p
  ><p>Fixed-Top position content</p><p>Fixed-Top position content</p
  ><DBButton>Action</DBButton
  ><template v-slot:start-slot
    ><DBNotification headline="Test"> Test </DBNotification></template
  ><template v-slot:end-slot
    ><DBNotification headline="Test"> Test </DBNotification></template
  ></DBShellContent
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
      DBNotification,
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-position-auto-left",
    "controlPanelDesktopPosition": "left",
    "controlPanelMobilePosition": "bottom",
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="content-position-auto-left"
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
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Auto Left"
  ><DBControlPanelNavigation
    aria-label="content-position-auto-left-mobile"
    v-bind="{}"
    ><DBControlPanelNavigationItem icon="x_placeholder"
      ><a href="#">Item</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
      ><a href="#">Item disabled</a></DBControlPanelNavigationItem
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
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelMobile
><DBShellContent
  mainId="main-content-auto-left"
  mainLabel="shell-position-auto-left"
  ><p>Auto-Left position content</p><p>Auto-Left position content</p
  ><p>Auto-Left position content</p><p>Auto-Left position content</p
  ><p>Auto-Left position content</p><p>Auto-Left position content</p
  ><DBButton>Action</DBButton
  ><template v-slot:start-slot
    ><DBNotification headline="Test"> Test </DBNotification></template
  ><template v-slot:end-slot
    ><DBNotification headline="Test"> Test </DBNotification></template
  ></DBShellContent
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
      DBNotification,
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
    "data-test-id": "shell-position-fixed-left",
    "controlPanelDesktopPosition": "left",
    "controlPanelMobilePosition": "bottom",
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="content-position-fixed-left"
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
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Fixed Left"
  ><DBControlPanelNavigation
    aria-label="content-position-fixed-left-mobile"
    v-bind="{}"
    ><DBControlPanelNavigationItem icon="x_placeholder"
      ><a href="#">Item</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
      ><a href="#">Item disabled</a></DBControlPanelNavigationItem
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
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelSecondaryActions
    ></template
  ></DBControlPanelMobile
><DBShellContent
  variant="fixed"
  mainId="main-content-fixed-left"
  mainLabel="shell-position-fixed-left"
  ><p>Fixed-Left position content</p><p>Fixed-Left position content</p
  ><p>Fixed-Left position content</p><p>Fixed-Left position content</p
  ><p>Fixed-Left position content</p><p>Fixed-Left position content</p
  ><DBButton>Action</DBButton
  ><template v-slot:start-slot
    ><DBNotification headline="Test"> Test </DBNotification></template
  ><template v-slot:end-slot
    ><DBNotification headline="Test"> Test </DBNotification></template
  ></DBShellContent
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
      DBNotification,
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
}`,...M.parameters?.docs?.source}}},N=[`DefaultAutoTop`,`FixedTop`,`AutoLeft`,`FixedLeft`]})))()}P();export{j as AutoLeft,k as DefaultAutoTop,M as FixedLeft,A as FixedTop,N as __namedExportsOrder,O as default};