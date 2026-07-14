import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{At as t,F as n,Kt as r,N as i,Pt as a,Rt as o,St as s,Z as c,bt as l,ft as u,gt as d,j as f,mt as p,t as m,vt as h}from"./src-Duq55lQ1.js";var g,_,v,y,b,x,S;e((()=>{m(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/DBShell/Sub Navigation`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},v={args:{"data-test-id":`shell-top-sub-top`,controlPanelDesktopPosition:`top`,subNavigationDesktopPosition:`top`,showSubNavigation:!0,default:`<DBControlPanelDesktop
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
>`},render:e=>({components:{DBShell:n,DBButton:r,DBControlPanelBrand:o,DBControlPanelDesktop:a,DBControlPanelMeta:t,DBControlPanelMobile:s,DBControlPanelNavigationItemGroup:d,DBControlPanelNavigationItem:h,DBControlPanelNavigation:l,DBControlPanelPrimaryActions:p,DBControlPanelSecondaryActions:u,DBLink:c,DBShellContent:i,DBShellSubNavigation:f},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},y={args:{"data-test-id":`shell-top-sub-left`,controlPanelDesktopPosition:`top`,subNavigationDesktopPosition:`left`,subNavigationMobilePosition:`bottom`,showSubNavigation:!0,default:`<DBControlPanelDesktop
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
><DBShellSubNavigation aria-label="shell-top-sub-left-sub"
  ><DBControlPanelNavigation aria-label="shell-top-sub-left-sub"
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
>`},render:e=>({components:{DBShell:n,DBButton:r,DBControlPanelBrand:o,DBControlPanelDesktop:a,DBControlPanelMeta:t,DBControlPanelMobile:s,DBControlPanelNavigationItemGroup:d,DBControlPanelNavigationItem:h,DBControlPanelNavigation:l,DBControlPanelPrimaryActions:p,DBControlPanelSecondaryActions:u,DBLink:c,DBShellContent:i,DBShellSubNavigation:f},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},b={args:{"data-test-id":`shell-top-sub-left-tree`,controlPanelDesktopPosition:`top`,subNavigationDesktopPosition:`left`,controlPanelMobilePosition:`bottom`,showSubNavigation:!0,default:`<DBControlPanelDesktop
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
>`},render:e=>({components:{DBShell:n,DBButton:r,DBControlPanelBrand:o,DBControlPanelDesktop:a,DBControlPanelMeta:t,DBControlPanelMobile:s,DBControlPanelNavigationItemGroup:d,DBControlPanelNavigationItem:h,DBControlPanelNavigation:l,DBControlPanelPrimaryActions:p,DBControlPanelSecondaryActions:u,DBLink:c,DBShellContent:i,DBShellSubNavigation:f},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},x={args:{"data-test-id":`shell-left-sub-top`,controlPanelDesktopPosition:`left`,subNavigationDesktopPosition:`top`,controlPanelMobilePosition:`bottom`,subNavigationMobilePosition:`bottom`,showSubNavigation:!0,default:`<DBControlPanelDesktop
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
>`},render:e=>({components:{DBShell:n,DBButton:r,DBControlPanelBrand:o,DBControlPanelDesktop:a,DBControlPanelMeta:t,DBControlPanelMobile:s,DBControlPanelNavigationItemGroup:d,DBControlPanelNavigationItem:h,DBControlPanelNavigation:l,DBControlPanelPrimaryActions:p,DBControlPanelSecondaryActions:u,DBLink:c,DBShellContent:i,DBShellSubNavigation:f},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
><DBShellSubNavigation aria-label="shell-top-sub-left-sub"
  ><DBControlPanelNavigation aria-label="shell-top-sub-left-sub"
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`TopSubTop`,`TopSubLeftPopover`,`TopSubLeftTree`,`LeftSubTop`]}))();export{x as LeftSubTop,y as TopSubLeftPopover,b as TopSubLeftTree,v as TopSubTop,S as __namedExportsOrder,_ as default};