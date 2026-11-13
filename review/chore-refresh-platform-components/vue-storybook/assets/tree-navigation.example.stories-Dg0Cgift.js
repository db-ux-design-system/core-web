import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-Bri_6VPq.js";import{i,n as a,r as o,t as s}from"./control-panel-actions-2-hlr0yiUG.js";import{n as c,t as l}from"./control-panel-brand-CtQ6S_dD.js";import{n as u,t as d}from"./control-panel-desktop-DR0W0X5-.js";import{n as f,t as p}from"./control-panel-meta-B1ODbMrZ.js";import{n as m,t as h}from"./control-panel-mobile-CIw4tDgy.js";import{i as g,n as _,r as v,t as y}from"./control-panel-navigation-item-DV77KvQv.js";import{n as b,t as x}from"./control-panel-navigation-item-group-1N6-jRgo.js";import{n as S,t as C}from"./link-BSaRafRT.js";import{i as w,n as T,r as E,t as D}from"./shell-content-BeHw3Vgj.js";var O=t({Multiple:()=>M,Single:()=>j,__namedExportsOrder:()=>N,default:()=>A}),k,A,j,M,N;function P(){return(P=e((()=>{n(),i(),a(),c(),u(),f(),m(),b(),_(),g(),C(),D(),E(),{fn:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/DBShell/Tree Navigation`,component:w,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},j={args:{"data-test-id":`shell-tree-nav-single`,controlPanelDesktopPosition:`left`,default:`<DBControlPanelDesktop
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
  mainId="main-content-tree-nav-single"
  mainLabel="shell-tree-nav-single"
  ><p> Tree Navigation - Single Behavior (only one group open at a time) </p
  ><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:w,DBButton:r,DBControlPanelActions1:o,DBControlPanelActions2:s,DBControlPanelBrand:l,DBControlPanelDesktop:d,DBControlPanelMeta:p,DBControlPanelMobile:h,DBControlPanelNavigationItemGroup:x,DBControlPanelNavigationItem:y,DBControlPanelNavigation:v,DBLink:S,DBShellContent:T},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},M={args:{"data-test-id":`shell-tree-nav-multiple`,controlPanelDesktopPosition:`left`,default:`<DBControlPanelDesktop
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
  mainId="main-content-tree-nav-multiple"
  mainLabel="shell-tree-nav-multiple"
  ><p>
    Tree Navigation - Multiple Behavior (multiple groups can be open
    simultaneously) </p
  ><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:w,DBButton:r,DBControlPanelActions1:o,DBControlPanelActions2:s,DBControlPanelBrand:l,DBControlPanelDesktop:d,DBControlPanelMeta:p,DBControlPanelMobile:h,DBControlPanelNavigationItemGroup:x,DBControlPanelNavigationItem:y,DBControlPanelNavigation:v,DBLink:S,DBShellContent:T},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},N=[`Single`,`Multiple`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}}})))()}export{O as i,j as n,P as r,M as t};