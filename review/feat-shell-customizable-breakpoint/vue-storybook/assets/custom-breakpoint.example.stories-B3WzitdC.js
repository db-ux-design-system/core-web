import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./button-Gp1a6mlm.js";import{i as r,n as i,r as a,t as o}from"./control-panel-actions-2-BGradeVi.js";import{n as s,t as c}from"./control-panel-brand-DfNIdLGq.js";import{n as l,t as u}from"./control-panel-desktop-BDkJqSNe.js";import{n as d,t as f}from"./control-panel-mobile-Dsr06QFY.js";import{i as p,n as m,r as h,t as g}from"./control-panel-navigation-item-CfKRWFF5.js";import{i as _,n as v,r as y,t as b}from"./shell-content-CTz0_f9R.js";var x,S,C,w,T;function E(){return(E=e((()=>{t(),r(),i(),s(),l(),d(),m(),p(),b(),y(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/DBShell/Custom Breakpoint`,component:_,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},C={args:{"data-test-id":`shell-custom-breakpoint-force-mobile`,controlPanelDesktopPosition:`top`,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-custom-breakpoint-force-mobile"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item"
      ><a href="#">Item</a></DBControlPanelNavigationItem
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
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Force Mobile"
  ><DBControlPanelNavigation
    aria-label="shell-custom-breakpoint-force-mobile-mobile"
    v-bind="{}"
    ><DBControlPanelNavigationItem icon="x_placeholder"
      ><a href="#">Item</a></DBControlPanelNavigationItem
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
  mainId="main-content-custom-breakpoint-force-mobile"
  mainLabel="shell-custom-breakpoint-force-mobile"
  ><p>
    This shell uses --db-desktop-breakpoint: 2000px, so it stays in its mobile
    layout until the viewport is at least 2000px wide.
  </p></DBShellContent
>`},render:e=>({components:{DBShell:_,DBButton:n,DBControlPanelActions1:a,DBControlPanelActions2:o,DBControlPanelBrand:c,DBControlPanelDesktop:u,DBControlPanelMobile:f,DBControlPanelNavigationItem:g,DBControlPanelNavigation:h,DBShellContent:v},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},w={args:{"data-test-id":`shell-custom-breakpoint-force-desktop`,controlPanelDesktopPosition:`top`,default:`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-custom-breakpoint-force-desktop"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item"
      ><a href="#">Item</a></DBControlPanelNavigationItem
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
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Force Desktop"
  ><DBControlPanelNavigation
    aria-label="shell-custom-breakpoint-force-desktop-mobile"
    v-bind="{}"
    ><DBControlPanelNavigationItem icon="x_placeholder"
      ><a href="#">Item</a></DBControlPanelNavigationItem
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
  mainId="main-content-custom-breakpoint-force-desktop"
  mainLabel="shell-custom-breakpoint-force-desktop"
  ><p>
    This shell uses --db-desktop-breakpoint: 400px, so it switches to its
    desktop layout on almost every viewport.
  </p></DBShellContent
>`},render:e=>({components:{DBShell:_,DBButton:n,DBControlPanelActions1:a,DBControlPanelActions2:o,DBControlPanelBrand:c,DBControlPanelDesktop:u,DBControlPanelMobile:f,DBControlPanelNavigationItem:g,DBControlPanelNavigation:h,DBShellContent:v},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},T=[`ForceMobile2000px`,`ForceDesktop400px`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-custom-breakpoint-force-mobile",
    "controlPanelDesktopPosition": "top",
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-custom-breakpoint-force-mobile"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item"
      ><a href="#">Item</a></DBControlPanelNavigationItem
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
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Force Mobile"
  ><DBControlPanelNavigation
    aria-label="shell-custom-breakpoint-force-mobile-mobile"
    v-bind="{}"
    ><DBControlPanelNavigationItem icon="x_placeholder"
      ><a href="#">Item</a></DBControlPanelNavigationItem
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
  mainId="main-content-custom-breakpoint-force-mobile"
  mainLabel="shell-custom-breakpoint-force-mobile"
  ><p>
    This shell uses --db-desktop-breakpoint: 2000px, so it stays in its mobile
    layout until the viewport is at least 2000px wide.
  </p></DBShellContent
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
      DBControlPanelMobile,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation,
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-custom-breakpoint-force-desktop",
    "controlPanelDesktopPosition": "top",
    "default": \`<DBControlPanelDesktop
  ><DBControlPanelNavigation aria-label="shell-custom-breakpoint-force-desktop"
    ><DBControlPanelNavigationItem icon="x_placeholder" tooltip="Item"
      ><a href="#">Item</a></DBControlPanelNavigationItem
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
  ></DBControlPanelDesktop
><DBControlPanelMobile drawerHeaderText="Force Desktop"
  ><DBControlPanelNavigation
    aria-label="shell-custom-breakpoint-force-desktop-mobile"
    v-bind="{}"
    ><DBControlPanelNavigationItem icon="x_placeholder"
      ><a href="#">Item</a></DBControlPanelNavigationItem
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
  mainId="main-content-custom-breakpoint-force-desktop"
  mainLabel="shell-custom-breakpoint-force-desktop"
  ><p>
    This shell uses --db-desktop-breakpoint: 400px, so it switches to its
    desktop layout on almost every viewport.
  </p></DBShellContent
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
      DBControlPanelMobile,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation,
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
}`,...w.parameters?.docs?.source}}}})))()}E();export{w as ForceDesktop400px,C as ForceMobile2000px,T as __namedExportsOrder,S as default};