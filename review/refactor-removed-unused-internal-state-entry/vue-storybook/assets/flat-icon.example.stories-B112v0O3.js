import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-CfL62Sjg.js";import{n as r,t as i}from"./control-panel-flat-icon-CGHeC86f.js";import{i as a,n as o,r as s,t as c}from"./control-panel-navigation-item-Cyjx0rmJ.js";import{i as l,n as u,r as d,t as f}from"./shell-content-C2bsl7be.js";import{n as p,t as m}from"./shell-sub-navigation-DlY9-lK1.js";var h,g,_,v,y,b,x;function S(){return(S=e((()=>{t(),r(),o(),a(),f(),m(),d(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBShell/Flat Icon`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},_={args:{"data-test-id":`shell-flat-icon-with-text`,default:`<DBControlPanelFlatIcon
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
>`},render:e=>({components:{DBShell:l,DBButton:n,DBControlPanelFlatIcon:i,DBControlPanelNavigationItem:c,DBControlPanelNavigation:s,DBShellContent:u,DBShellSubNavigation:p},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},v={args:{"data-test-id":`shell-flat-icon-no-text`,default:`<DBControlPanelFlatIcon :noText="true"
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
>`},render:e=>({components:{DBShell:l,DBButton:n,DBControlPanelFlatIcon:i,DBControlPanelNavigationItem:c,DBControlPanelNavigation:s,DBShellContent:u,DBShellSubNavigation:p},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},y={args:{"data-test-id":`shell-flat-icon-with-text-sub-navigation`,showSubNavigation:!0,default:`<DBControlPanelFlatIcon
  ><DBControlPanelNavigation
    aria-label="Flat Icon With Text Sub Nav"
    v-bind="{}"
    ><DBControlPanelNavigationItem icon="house"
      ><a href="#">Home</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="magnifying_glass" :active="true"
      ><a href="#">Search Full</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="person"
      ><a href="#">Account</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBControlPanelFlatIcon
><DBShellSubNavigation aria-label="shell-flat-icon-with-text-sub-nav"
  ><DBControlPanelNavigation aria-label="shell-flat-icon-with-text-sub-nav"
    ><DBControlPanelNavigationItem :active="true"
      ><a href="#">Test 1</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Test 2</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Test 3</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBShellSubNavigation
><DBShellContent
  mainId="main-content-flat-icon-with-text-sub"
  mainLabel="shell-flat-icon-with-text-sub"
  ><p>Flat icon with text content + Sub-Navigation</p
  ><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:l,DBButton:n,DBControlPanelFlatIcon:i,DBControlPanelNavigationItem:c,DBControlPanelNavigation:s,DBShellContent:u,DBShellSubNavigation:p},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},b={args:{"data-test-id":`shell-flat-icon-no-text-sub-navigation`,showSubNavigation:!0,default:`<DBControlPanelFlatIcon :noText="true"
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
    ><DBControlPanelNavigationItem
      ><a href="#">Test 2</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Test 3</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBShellSubNavigation
><DBShellContent
  mainId="main-content-flat-icon-no-text-sub"
  mainLabel="shell-flat-icon-no-text-sub"
  ><p>Flat icon no text content + Sub-Navigation</p
  ><DBButton>Action</DBButton></DBShellContent
>`},render:e=>({components:{DBShell:l,DBButton:n,DBControlPanelFlatIcon:i,DBControlPanelNavigationItem:c,DBControlPanelNavigation:s,DBShellContent:u,DBShellSubNavigation:p},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "data-test-id": "shell-flat-icon-with-text-sub-navigation",
    "showSubNavigation": true,
    "default": \`<DBControlPanelFlatIcon
  ><DBControlPanelNavigation
    aria-label="Flat Icon With Text Sub Nav"
    v-bind="{}"
    ><DBControlPanelNavigationItem icon="house"
      ><a href="#">Home</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="magnifying_glass" :active="true"
      ><a href="#">Search Full</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem icon="person"
      ><a href="#">Account</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigation
  ></DBControlPanelFlatIcon
><DBShellSubNavigation aria-label="shell-flat-icon-with-text-sub-nav"
  ><DBControlPanelNavigation aria-label="shell-flat-icon-with-text-sub-nav"
    ><DBControlPanelNavigationItem :active="true"
      ><a href="#">Test 1</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
      ><a href="#">Test 2</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    ><DBControlPanelNavigationItem
      ><a href="#">Test 2</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem
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
}`,...b.parameters?.docs?.source}}},x=[`WithText`,`NoText`,`WithTextSubNavigation`,`NoTextSubNavigation`]})))()}S();export{v as NoText,b as NoTextSubNavigation,_ as WithText,y as WithTextSubNavigation,x as __namedExportsOrder,g as default};