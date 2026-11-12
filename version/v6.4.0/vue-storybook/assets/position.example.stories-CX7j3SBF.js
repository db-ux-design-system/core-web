import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-QxDoPcgB.js";import{i,n as a,r as o,t as s}from"./control-panel-actions-2-CW4bV6HE.js";import{n as c,t as l}from"./control-panel-brand-D7m_7P_M.js";import{n as u,t as d}from"./control-panel-desktop-twTqSZuw.js";import{n as f,t as p}from"./control-panel-meta-CSns4uJJ.js";import{n as m,t as h}from"./control-panel-mobile-x1ZUCcgE.js";import{i as g,n as _,r as v,t as y}from"./control-panel-navigation-item-BKTyWQW8.js";import{n as b,t as x}from"./link-DACjzqmU.js";import{i as S,n as C,r as w,t as T}from"./shell-content-Jf5vOY0k.js";var E=t({DefaultTop:()=>k,Left:()=>A,__namedExportsOrder:()=>j,default:()=>O}),D,O,k,A,j;function M(){return(M=e((()=>{n(),i(),a(),c(),u(),f(),m(),_(),g(),x(),T(),w(),{fn:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/DBShell/Position`,component:S,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},k={args:{"data-test-id":`shell-position-top`,controlPanelDesktopPosition:`top`,default:`<DBControlPanelDesktop
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
>`},render:e=>({components:{DBShell:S,DBButton:r,DBControlPanelActions1:o,DBControlPanelActions2:s,DBControlPanelBrand:l,DBControlPanelDesktop:d,DBControlPanelMeta:p,DBControlPanelMobile:h,DBControlPanelNavigationItem:y,DBControlPanelNavigation:v,DBLink:b,DBShellContent:C},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},A={args:{"data-test-id":`shell-position-left`,controlPanelDesktopPosition:`left`,controlPanelMobilePosition:`bottom`,default:`<DBControlPanelDesktop
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
>`},render:e=>({components:{DBShell:S,DBButton:r,DBControlPanelActions1:o,DBControlPanelActions2:s,DBControlPanelBrand:l,DBControlPanelDesktop:d,DBControlPanelMeta:p,DBControlPanelMobile:h,DBControlPanelNavigationItem:y,DBControlPanelNavigation:v,DBLink:b,DBShellContent:C},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},j=[`DefaultTop`,`Left`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}}})))()}export{E as i,A as n,M as r,k as t};