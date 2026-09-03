import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-Ce_dHyhn.js";import{i as r,n as i,r as a,t as o}from"./control-panel-actions-2-9JMTqGgr.js";import{n as s,t as c}from"./control-panel-brand-CbElBCYC.js";import{n as l,t as u}from"./control-panel-desktop-B7LrQKwH.js";import{n as d,t as f}from"./control-panel-meta-BEilGldy.js";import{n as p,t as m}from"./control-panel-mobile-7r0toELU.js";import{i as h,n as g,r as _,t as v}from"./control-panel-navigation-item-QWvEwSGC.js";import{n as y,t as b}from"./link-uRJf36NH.js";import{i as x,n as S,r as C,t as w}from"./shell-content-1vamySU8.js";var T,E,D,O,k;function A(){return(A=e((()=>{t(),r(),i(),s(),l(),d(),p(),g(),h(),b(),w(),C(),{fn:T}=__STORYBOOK_MODULE_TEST__,E={title:`Components/DBShell/Position`,component:x,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},D={args:{"data-test-id":`shell-position-top`,controlPanelDesktopPosition:`top`,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-position-top"
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
><DBControlPanelMobile drawerHeaderText="Top Position"
  ><DBControlPanelNavigation aria-label="shell-position-top-mobile" v-bind="{}"
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
  mainId="main-content-position-top"
  mainLabel="shell-position-top"
  ><p>Top position content</p><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:x,DBButton:n,DBControlPanelActions1:a,DBControlPanelActions2:o,DBControlPanelBrand:c,DBControlPanelDesktop:u,DBControlPanelMeta:f,DBControlPanelMobile:m,DBControlPanelNavigationItem:v,DBControlPanelNavigation:_,DBLink:y,DBShellContent:S},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},O={args:{"data-test-id":`shell-position-left`,controlPanelDesktopPosition:`left`,controlPanelMobilePosition:`bottom`,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-position-left"
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
><DBControlPanelMobile drawerHeaderText="Left Position"
  ><DBControlPanelNavigation aria-label="shell-position-left-mobile" v-bind="{}"
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
  mainId="main-content-position-left"
  mainLabel="shell-position-left"
  ><p>Left position content</p><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:x,DBButton:n,DBControlPanelActions1:a,DBControlPanelActions2:o,DBControlPanelBrand:c,DBControlPanelDesktop:u,DBControlPanelMeta:f,DBControlPanelMobile:m,DBControlPanelNavigationItem:v,DBControlPanelNavigation:_,DBLink:y,DBShellContent:S},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-position-top",
    "controlPanelDesktopPosition": "top",
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-position-top"
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
><DBControlPanelMobile drawerHeaderText="Top Position"
  ><DBControlPanelNavigation aria-label="shell-position-top-mobile" v-bind="{}"
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
  mainId="main-content-position-top"
  mainLabel="shell-position-top"
  ><p>Top position content</p><DBButton>Action</DBButton></DBShellContent
>\`
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-position-left",
    "controlPanelDesktopPosition": "left",
    "controlPanelMobilePosition": "bottom",
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-position-left"
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
><DBControlPanelMobile drawerHeaderText="Left Position"
  ><DBControlPanelNavigation aria-label="shell-position-left-mobile" v-bind="{}"
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
  mainId="main-content-position-left"
  mainLabel="shell-position-left"
  ><p>Left position content</p><DBButton>Action</DBButton></DBShellContent
>\`
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
}`,...O.parameters?.docs?.source}}},k=[`DefaultTop`,`Left`]})))()}A();export{D as DefaultTop,O as Left,k as __namedExportsOrder,E as default};