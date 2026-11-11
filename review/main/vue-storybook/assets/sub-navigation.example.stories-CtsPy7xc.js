import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-D2exQwXH.js";import{i,n as a,r as o,t as s}from"./control-panel-actions-2-D_OaiLDM.js";import{n as c,t as l}from"./control-panel-brand-CGetqLp-.js";import{n as u,t as d}from"./control-panel-desktop-CwPUjerU.js";import{n as f,t as p}from"./control-panel-meta-BCxBCmoW.js";import{n as m,t as h}from"./control-panel-mobile-wFSPp77q.js";import{i as g,n as _,r as v,t as y}from"./control-panel-navigation-item-rVEubFaN.js";import{n as b,t as x}from"./control-panel-navigation-item-group-DMoLbxip.js";import{n as S,t as C}from"./link-yOIEarA2.js";import{i as w,n as T,r as E,t as D}from"./shell-content-B9CN_ENm.js";import{n as O,t as k}from"./shell-sub-navigation-BiHMhDT5.js";var A=t({LeftSubTop:()=>I,TopSubLeftDrilldown:()=>P,TopSubLeftTree:()=>F,TopSubTop:()=>N,__namedExportsOrder:()=>L,default:()=>M}),j,M,N,P,F,I,L;function R(){return(R=e((()=>{n(),i(),a(),c(),u(),f(),m(),b(),_(),g(),C(),D(),k(),E(),{fn:j}=__STORYBOOK_MODULE_TEST__,M={title:`Components/DBShell/Sub Navigation`,component:w,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},N={args:{"data-test-id":`shell-top-sub-top`,controlPanelDesktopPosition:`top`,subNavigationDesktopPosition:`top`,showSubNavigation:!0,default:`<DBControlPanelDesktop
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
>`},render:e=>({components:{DBShell:w,DBButton:r,DBControlPanelActions1:o,DBControlPanelActions2:s,DBControlPanelBrand:l,DBControlPanelDesktop:d,DBControlPanelMeta:p,DBControlPanelMobile:h,DBControlPanelNavigationItemGroup:x,DBControlPanelNavigationItem:y,DBControlPanelNavigation:v,DBLink:S,DBShellContent:T,DBShellSubNavigation:O},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},P={args:{"data-test-id":`shell-top-sub-left`,controlPanelDesktopPosition:`top`,subNavigationDesktopPosition:`left`,subNavigationMobilePosition:`bottom`,showSubNavigation:!0,default:`<DBControlPanelDesktop
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
>`},render:e=>({components:{DBShell:w,DBButton:r,DBControlPanelActions1:o,DBControlPanelActions2:s,DBControlPanelBrand:l,DBControlPanelDesktop:d,DBControlPanelMeta:p,DBControlPanelMobile:h,DBControlPanelNavigationItemGroup:x,DBControlPanelNavigationItem:y,DBControlPanelNavigation:v,DBLink:S,DBShellContent:T,DBShellSubNavigation:O},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},F={args:{"data-test-id":`shell-top-sub-left-tree`,controlPanelDesktopPosition:`top`,subNavigationDesktopPosition:`left`,controlPanelMobilePosition:`bottom`,showSubNavigation:!0,default:`<DBControlPanelDesktop
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
>`},render:e=>({components:{DBShell:w,DBButton:r,DBControlPanelActions1:o,DBControlPanelActions2:s,DBControlPanelBrand:l,DBControlPanelDesktop:d,DBControlPanelMeta:p,DBControlPanelMobile:h,DBControlPanelNavigationItemGroup:x,DBControlPanelNavigationItem:y,DBControlPanelNavigation:v,DBLink:S,DBShellContent:T,DBShellSubNavigation:O},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},I={args:{"data-test-id":`shell-left-sub-top`,controlPanelDesktopPosition:`left`,subNavigationDesktopPosition:`top`,controlPanelMobilePosition:`bottom`,subNavigationMobilePosition:`bottom`,showSubNavigation:!0,default:`<DBControlPanelDesktop
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
>`},render:e=>({components:{DBShell:w,DBButton:r,DBControlPanelActions1:o,DBControlPanelActions2:s,DBControlPanelBrand:l,DBControlPanelDesktop:d,DBControlPanelMeta:p,DBControlPanelMobile:h,DBControlPanelNavigationItemGroup:x,DBControlPanelNavigationItem:y,DBControlPanelNavigation:v,DBLink:S,DBShellContent:T,DBShellSubNavigation:O},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},L=[`TopSubTop`,`TopSubLeftDrilldown`,`TopSubLeftTree`,`LeftSubTop`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}}})))()}export{R as a,N as i,P as n,A as o,F as r,I as t};