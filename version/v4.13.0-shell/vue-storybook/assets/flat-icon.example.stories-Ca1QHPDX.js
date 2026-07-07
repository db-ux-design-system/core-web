import{i as e}from"./preload-helper-BfXGMw9-.js";import{Bt as t,Et as n,F as r,N as i,ft as a,j as o,mt as s,t as c}from"./src-D7kPOHCd.js";var l,u,d,f,p,m,h;e((()=>{c(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBShell/Flat Icon`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{"data-test-id":`shell-flat-icon-with-text`,default:`<DBControlPanelFlatIcon
  ><DBControlPanelNavigation aria-label="Flat Icon With Text" v-bind="{}"
    ><DBControlPanelNavigationItem icon="house" :active="true"
      ><a href="#">Home</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="magnifying_glass"
      ><a href="#">Search Full</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="person"
      ><a href="#">Account</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBControlPanelFlatIcon
><DBShellContent
  mainId="main-content-flat-icon-with-text"
  mainLabel="shell-flat-icon-with-text"
  ><p>Flat icon with text content</p><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:r,DBButton:t,DBControlPanelFlatIcon:n,DBControlPanelNavigationItem:a,DBControlPanelNavigation:s,DBShellContent:i,DBShellSubNavigation:o},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},f={args:{"data-test-id":`shell-flat-icon-no-text`,default:`<DBControlPanelFlatIcon :noText="true"
  ><DBControlPanelNavigation aria-label="Flat Icon No Text" v-bind="{}"
    ><DBControlPanelNavigationItem icon="house" :active="true"
      ><a href="#">Home</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="magnifying_glass"
      ><a href="#">Search Full</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="person"
      ><a href="#">Account</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBControlPanelFlatIcon
><DBShellContent
  mainId="main-content-flat-icon-no-text"
  mainLabel="shell-flat-icon-no-text"
  ><p>Flat icon no text content</p><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:r,DBButton:t,DBControlPanelFlatIcon:n,DBControlPanelNavigationItem:a,DBControlPanelNavigation:s,DBShellContent:i,DBShellSubNavigation:o},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},p={args:{"data-test-id":`shell-flat-icon-with-text-sub-navigation`,showSubNavigation:!0,default:`<DBControlPanelFlatIcon
  ><DBControlPanelNavigation
    aria-label="Flat Icon With Text Sub Nav"
    v-bind="{}"
    ><DBControlPanelNavigationItem icon="house" :active="true"
      ><a href="#">Home</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="magnifying_glass"
      ><a href="#">Search Full</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="person"
      ><a href="#">Account</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBControlPanelFlatIcon
><DBShellSubNavigation aria-label="shell-flat-icon-with-text-sub-nav"
  ><DBControlPanelNavigation aria-label="shell-flat-icon-with-text-sub-nav"
    ><DBControlPanelNavigationItem :active="true"
      ><a href="#">Test 1</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem :active="true"
      ><a href="#">Test 2</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem :active="true"
      ><a href="#">Test 3</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBShellSubNavigation
><DBShellContent
  mainId="main-content-flat-icon-with-text-sub"
  mainLabel="shell-flat-icon-with-text-sub"
  ><p>Flat icon with text content + Sub-Navigation</p
  ><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:r,DBButton:t,DBControlPanelFlatIcon:n,DBControlPanelNavigationItem:a,DBControlPanelNavigation:s,DBShellContent:i,DBShellSubNavigation:o},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},m={args:{"data-test-id":`shell-flat-icon-no-text-sub-navigation`,showSubNavigation:!0,default:`<DBControlPanelFlatIcon :noText="true"
  ><DBControlPanelNavigation aria-label="Flat Icon No Text Sub Nav" v-bind="{}"
    ><DBControlPanelNavigationItem icon="house" :active="true"
      ><a href="#">Home</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="magnifying_glass"
      ><a href="#">Search Full</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="person"
      ><a href="#">Account</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBControlPanelFlatIcon
><DBShellSubNavigation aria-label="shell-flat-icon-no-text-sub-nav"
  ><DBControlPanelNavigation aria-label="shell-flat-icon-no-text-sub-nav"
    ><DBControlPanelNavigationItem :active="true"
      ><a href="#">Test 1</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem :active="true"
      ><a href="#">Test 2</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem :active="true"
      ><a href="#">Test 3</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBShellSubNavigation
><DBShellContent
  mainId="main-content-flat-icon-no-text-sub"
  mainLabel="shell-flat-icon-no-text-sub"
  ><p>Flat icon no text content + Sub-Navigation</p
  ><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:r,DBButton:t,DBControlPanelFlatIcon:n,DBControlPanelNavigationItem:a,DBControlPanelNavigation:s,DBShellContent:i,DBShellSubNavigation:o},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-flat-icon-with-text",
    "default": \`<DBControlPanelFlatIcon
  ><DBControlPanelNavigation aria-label="Flat Icon With Text" v-bind="{}"
    ><DBControlPanelNavigationItem icon="house" :active="true"
      ><a href="#">Home</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="magnifying_glass"
      ><a href="#">Search Full</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="person"
      ><a href="#">Account</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBControlPanelFlatIcon
><DBShellContent
  mainId="main-content-flat-icon-with-text"
  mainLabel="shell-flat-icon-with-text"
  ><p>Flat icon with text content</p><DBButton>Action</DBButton></DBShellContent
>\`
  },
  render: (args: any) => ({
    components: {
      DBShell,
      DBButton,
      DBControlPanelFlatIcon,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation,
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-flat-icon-no-text",
    "default": \`<DBControlPanelFlatIcon :noText="true"
  ><DBControlPanelNavigation aria-label="Flat Icon No Text" v-bind="{}"
    ><DBControlPanelNavigationItem icon="house" :active="true"
      ><a href="#">Home</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="magnifying_glass"
      ><a href="#">Search Full</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="person"
      ><a href="#">Account</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBControlPanelFlatIcon
><DBShellContent
  mainId="main-content-flat-icon-no-text"
  mainLabel="shell-flat-icon-no-text"
  ><p>Flat icon no text content</p><DBButton>Action</DBButton></DBShellContent
>\`
  },
  render: (args: any) => ({
    components: {
      DBShell,
      DBButton,
      DBControlPanelFlatIcon,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation,
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-flat-icon-with-text-sub-navigation",
    "showSubNavigation": true,
    "default": \`<DBControlPanelFlatIcon
  ><DBControlPanelNavigation
    aria-label="Flat Icon With Text Sub Nav"
    v-bind="{}"
    ><DBControlPanelNavigationItem icon="house" :active="true"
      ><a href="#">Home</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="magnifying_glass"
      ><a href="#">Search Full</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="person"
      ><a href="#">Account</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBControlPanelFlatIcon
><DBShellSubNavigation aria-label="shell-flat-icon-with-text-sub-nav"
  ><DBControlPanelNavigation aria-label="shell-flat-icon-with-text-sub-nav"
    ><DBControlPanelNavigationItem :active="true"
      ><a href="#">Test 1</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem :active="true"
      ><a href="#">Test 2</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem :active="true"
      ><a href="#">Test 3</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBShellSubNavigation
><DBShellContent
  mainId="main-content-flat-icon-with-text-sub"
  mainLabel="shell-flat-icon-with-text-sub"
  ><p>Flat icon with text content + Sub-Navigation</p
  ><DBButton>Action</DBButton></DBShellContent
>\`
  },
  render: (args: any) => ({
    components: {
      DBShell,
      DBButton,
      DBControlPanelFlatIcon,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation,
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-flat-icon-no-text-sub-navigation",
    "showSubNavigation": true,
    "default": \`<DBControlPanelFlatIcon :noText="true"
  ><DBControlPanelNavigation aria-label="Flat Icon No Text Sub Nav" v-bind="{}"
    ><DBControlPanelNavigationItem icon="house" :active="true"
      ><a href="#">Home</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="magnifying_glass"
      ><a href="#">Search Full</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="person"
      ><a href="#">Account</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBControlPanelFlatIcon
><DBShellSubNavigation aria-label="shell-flat-icon-no-text-sub-nav"
  ><DBControlPanelNavigation aria-label="shell-flat-icon-no-text-sub-nav"
    ><DBControlPanelNavigationItem :active="true"
      ><a href="#">Test 1</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem :active="true"
      ><a href="#">Test 2</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem :active="true"
      ><a href="#">Test 3</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBShellSubNavigation
><DBShellContent
  mainId="main-content-flat-icon-no-text-sub"
  mainLabel="shell-flat-icon-no-text-sub"
  ><p>Flat icon no text content + Sub-Navigation</p
  ><DBButton>Action</DBButton></DBShellContent
>\`
  },
  render: (args: any) => ({
    components: {
      DBShell,
      DBButton,
      DBControlPanelFlatIcon,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation,
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
}`,...m.parameters?.docs?.source}}},h=[`WithText`,`NoText`,`WithTextSubNavigation`,`NoTextSubNavigation`]}))();export{f as NoText,m as NoTextSubNavigation,d as WithText,p as WithTextSubNavigation,h as __namedExportsOrder,u as default};