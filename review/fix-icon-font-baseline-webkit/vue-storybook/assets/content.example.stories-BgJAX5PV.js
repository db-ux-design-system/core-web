import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-BOorGazw.js";import{i as r,n as i,r as a,t as o}from"./control-panel-actions-2-CfaR0mFw.js";import{n as s,t as c}from"./control-panel-brand-BK_t3JEh.js";import{n as l,t as u}from"./control-panel-desktop-Lpg5PuMt.js";import{n as d,t as f}from"./control-panel-meta-Diath1TE.js";import{n as p,t as m}from"./control-panel-mobile-Bxt62DhL.js";import{i as h,n as g,r as _,t as v}from"./control-panel-navigation-item-ChBAw9Qh.js";import{i as y,n as b,r as x,t as S}from"./footer-meta-BQK0SiyK.js";import{n as C,t as w}from"./link-D8XUqpVr.js";import{n as T,t as E}from"./notification-BctbxnIP.js";import{i as D,n as O,r as k,t as A}from"./shell-content-DUj80Nj3.js";var j,M,N,P,F,I,L;function R(){return(R=e((()=>{t(),r(),i(),s(),l(),d(),p(),g(),h(),b(),y(),w(),E(),A(),k(),{fn:j}=__STORYBOOK_MODULE_TEST__,M={title:`Components/DBShell/Position`,component:D,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},N={args:{"data-test-id":`shell-position-auto-top`,controlPanelDesktopPosition:`top`,default:`<DBControlPanelDesktop
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelActions2
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelActions2
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
    ><DBFooter
      ><DBFooterMeta
        copyright="Example Company"
      ></DBFooterMeta></DBFooter></template
></DBShellContent>`},render:e=>({components:{DBShell:D,DBButton:n,DBControlPanelActions1:a,DBControlPanelActions2:o,DBControlPanelBrand:c,DBControlPanelDesktop:u,DBControlPanelMeta:f,DBControlPanelMobile:m,DBControlPanelNavigationItem:v,DBControlPanelNavigation:_,DBFooterMeta:S,DBFooter:x,DBLink:C,DBNotification:T,DBShellContent:O},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},P={args:{"data-test-id":`shell-position-fixed-top`,controlPanelDesktopPosition:`top`,default:`<DBControlPanelDesktop
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelActions2
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelActions2
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
    ><DBFooter
      ><DBFooterMeta
        copyright="Example Company"
      ></DBFooterMeta></DBFooter></template
></DBShellContent>`},render:e=>({components:{DBShell:D,DBButton:n,DBControlPanelActions1:a,DBControlPanelActions2:o,DBControlPanelBrand:c,DBControlPanelDesktop:u,DBControlPanelMeta:f,DBControlPanelMobile:m,DBControlPanelNavigationItem:v,DBControlPanelNavigation:_,DBFooterMeta:S,DBFooter:x,DBLink:C,DBNotification:T,DBShellContent:O},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},F={args:{"data-test-id":`shell-position-auto-left`,controlPanelDesktopPosition:`left`,controlPanelMobilePosition:`bottom`,default:`<DBControlPanelDesktop
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelActions2
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelActions2
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
    ><DBFooter
      ><DBFooterMeta
        copyright="Example Company"
      ></DBFooterMeta></DBFooter></template
></DBShellContent>`},render:e=>({components:{DBShell:D,DBButton:n,DBControlPanelActions1:a,DBControlPanelActions2:o,DBControlPanelBrand:c,DBControlPanelDesktop:u,DBControlPanelMeta:f,DBControlPanelMobile:m,DBControlPanelNavigationItem:v,DBControlPanelNavigation:_,DBFooterMeta:S,DBFooter:x,DBLink:C,DBNotification:T,DBShellContent:O},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},I={args:{"data-test-id":`shell-position-fixed-left`,controlPanelDesktopPosition:`left`,controlPanelMobilePosition:`bottom`,default:`<DBControlPanelDesktop
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelActions2
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelActions2
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
    ><DBFooter
      ><DBFooterMeta
        copyright="Example Company"
      ></DBFooterMeta></DBFooter></template
></DBShellContent>`},render:e=>({components:{DBShell:D,DBButton:n,DBControlPanelActions1:a,DBControlPanelActions2:o,DBControlPanelBrand:c,DBControlPanelDesktop:u,DBControlPanelMeta:f,DBControlPanelMobile:m,DBControlPanelNavigationItem:v,DBControlPanelNavigation:_,DBFooterMeta:S,DBFooter:x,DBLink:C,DBNotification:T,DBShellContent:O},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},L=[`DefaultAutoTop`,`FixedTop`,`AutoLeft`,`FixedLeft`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelActions2
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelActions2
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
    ><DBFooter
      ><DBFooterMeta
        copyright="Example Company"
      ></DBFooterMeta></DBFooter></template
></DBShellContent>\`
  },
  render: (args: any) => ({
    components: {
      DBShell,
      DBButton,
      DBControlPanelActions1,
      DBControlPanelActions2,
      DBControlPanelBrand,
      DBControlPanelDesktop,
      DBControlPanelMeta,
      DBControlPanelMobile,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation,
      DBFooterMeta,
      DBFooter,
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelActions2
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelActions2
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
    ><DBFooter
      ><DBFooterMeta
        copyright="Example Company"
      ></DBFooterMeta></DBFooter></template
></DBShellContent>\`
  },
  render: (args: any) => ({
    components: {
      DBShell,
      DBButton,
      DBControlPanelActions1,
      DBControlPanelActions2,
      DBControlPanelBrand,
      DBControlPanelDesktop,
      DBControlPanelMeta,
      DBControlPanelMobile,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation,
      DBFooterMeta,
      DBFooter,
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelActions2
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelActions2
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
    ><DBFooter
      ><DBFooterMeta
        copyright="Example Company"
      ></DBFooterMeta></DBFooter></template
></DBShellContent>\`
  },
  render: (args: any) => ({
    components: {
      DBShell,
      DBButton,
      DBControlPanelActions1,
      DBControlPanelActions2,
      DBControlPanelBrand,
      DBControlPanelDesktop,
      DBControlPanelMeta,
      DBControlPanelMobile,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation,
      DBFooterMeta,
      DBFooter,
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelActions2
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
  ><template v-slot:actions-1
    ><DBControlPanelActions1
      ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
        Search
      </DBButton></DBControlPanelActions1
    ></template
  ><template v-slot:actions-2
    ><DBControlPanelActions2
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Profile </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Notification </DBButton
      ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
        Help
      </DBButton></DBControlPanelActions2
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
    ><DBFooter
      ><DBFooterMeta
        copyright="Example Company"
      ></DBFooterMeta></DBFooter></template
></DBShellContent>\`
  },
  render: (args: any) => ({
    components: {
      DBShell,
      DBButton,
      DBControlPanelActions1,
      DBControlPanelActions2,
      DBControlPanelBrand,
      DBControlPanelDesktop,
      DBControlPanelMeta,
      DBControlPanelMobile,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation,
      DBFooterMeta,
      DBFooter,
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
}`,...I.parameters?.docs?.source}}}})))()}R();export{F as AutoLeft,N as DefaultAutoTop,I as FixedLeft,P as FixedTop,L as __namedExportsOrder,M as default};