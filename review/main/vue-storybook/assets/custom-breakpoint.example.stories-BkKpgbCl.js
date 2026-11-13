import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-1TrOfrAR.js";import{i,n as a,r as o,t as s}from"./control-panel-actions-2-B2a48rc-.js";import{n as c,t as l}from"./control-panel-brand-CZpVyIgy.js";import{n as u,t as d}from"./control-panel-desktop-KCXnwH53.js";import{n as f,t as p}from"./control-panel-mobile-CX_XuW3h.js";import{i as m,n as h,r as g,t as _}from"./control-panel-navigation-item-14jcRcd6.js";import{i as v,n as y,r as b,t as x}from"./shell-content-DjPs3rXP.js";var S=t({ForceDesktop:()=>E,ForceMobile:()=>T,__namedExportsOrder:()=>D,default:()=>w}),C,w,T,E,D;function O(){return(O=e((()=>{n(),i(),a(),c(),u(),f(),h(),m(),x(),b(),{fn:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/DBShell/Custom Breakpoint`,component:v,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},T={args:{"data-test-id":`shell-custom-breakpoint-force-mobile`,controlPanelDesktopPosition:`top`,default:`<DBControlPanelDesktop
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
    This shell sets --db-breakpoint: "mobile" on an ancestor, so it stays in its
    mobile layout on every viewport.
  </p></DBShellContent
>`},render:e=>({components:{DBShell:v,DBButton:r,DBControlPanelActions1:o,DBControlPanelActions2:s,DBControlPanelBrand:l,DBControlPanelDesktop:d,DBControlPanelMobile:p,DBControlPanelNavigationItem:_,DBControlPanelNavigation:g,DBShellContent:y},setup(){return{args:e}},template:`<div data-test-id="shell-custom-breakpoint-force-mobile-scope" :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},E={args:{"data-test-id":`shell-custom-breakpoint-force-desktop`,controlPanelDesktopPosition:`top`,default:`<DBControlPanelDesktop
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
    This shell sets --db-breakpoint: "desktop" on an ancestor, so it switches to
    its desktop layout on every viewport.
  </p></DBShellContent
>`},render:e=>({components:{DBShell:v,DBButton:r,DBControlPanelActions1:o,DBControlPanelActions2:s,DBControlPanelBrand:l,DBControlPanelDesktop:d,DBControlPanelMobile:p,DBControlPanelNavigationItem:_,DBControlPanelNavigation:g,DBShellContent:y},setup(){return{args:e}},template:`<div data-test-id="shell-custom-breakpoint-force-desktop-scope" :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},D=[`ForceMobile`,`ForceDesktop`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
    This shell sets --db-breakpoint: "mobile" on an ancestor, so it stays in its
    mobile layout on every viewport.
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
    template: \`<div data-test-id="shell-custom-breakpoint-force-mobile-scope" :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >\${args.default}</DBShell></div>\`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
    This shell sets --db-breakpoint: "desktop" on an ancestor, so it switches to
    its desktop layout on every viewport.
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
    template: \`<div data-test-id="shell-custom-breakpoint-force-desktop-scope" :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >\${args.default}</DBShell></div>\`
  })
}`,...E.parameters?.docs?.source}}}})))()}export{w as a,O as i,T as n,S as r,E as t};