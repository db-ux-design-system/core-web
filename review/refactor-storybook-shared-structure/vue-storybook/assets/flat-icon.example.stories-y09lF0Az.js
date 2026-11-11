import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-DF9JTPi5.js";import{n as i,t as a}from"./control-panel-flat-icon-DzLsQ_2a.js";import{i as o,n as s,r as c,t as l}from"./control-panel-navigation-item-C_SiO_Lm.js";import{i as u,n as d,r as f,t as p}from"./shell-content-DVSRP7D4.js";import{n as m,t as h}from"./shell-sub-navigation-n8E749sC.js";var g=t({NoText:()=>b,NoTextSubNavigation:()=>S,WithText:()=>y,WithTextSubNavigation:()=>x,__namedExportsOrder:()=>C,default:()=>v}),_,v,y,b,x,S,C;function w(){return(w=e((()=>{n(),i(),s(),o(),p(),h(),f(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/DBShell/Flat Icon`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{controlPanelDesktopPosition:{control:`select`,options:[`top`,`left`]},controlPanelMobilePosition:{control:`select`,options:[`top`,`bottom`]},subNavigationDesktopPosition:{control:`select`,options:[`top`,`left`]},subNavigationMobilePosition:{control:`select`,options:[`top`,`bottom`,`none`]},showSubNavigation:{control:`boolean`},fadeIn:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},y={args:{"data-test-id":`shell-flat-icon-with-text`,default:`<DBControlPanelFlatIcon
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
>`},render:e=>({components:{DBShell:u,DBButton:r,DBControlPanelFlatIcon:a,DBControlPanelNavigationItem:l,DBControlPanelNavigation:c,DBShellContent:d,DBShellSubNavigation:m},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},b={args:{"data-test-id":`shell-flat-icon-no-text`,default:`<DBControlPanelFlatIcon :noText="true"
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
>`},render:e=>({components:{DBShell:u,DBButton:r,DBControlPanelFlatIcon:a,DBControlPanelNavigationItem:l,DBControlPanelNavigation:c,DBShellContent:d,DBShellSubNavigation:m},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},x={args:{"data-test-id":`shell-flat-icon-with-text-sub-navigation`,showSubNavigation:!0,default:`<DBControlPanelFlatIcon
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
>`},render:e=>({components:{DBShell:u,DBButton:r,DBControlPanelFlatIcon:a,DBControlPanelNavigationItem:l,DBControlPanelNavigation:c,DBShellContent:d,DBShellSubNavigation:m},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},S={args:{"data-test-id":`shell-flat-icon-no-text-sub-navigation`,showSubNavigation:!0,default:`<DBControlPanelFlatIcon :noText="true"
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
>`},render:e=>({components:{DBShell:u,DBButton:r,DBControlPanelFlatIcon:a,DBControlPanelNavigationItem:l,DBControlPanelNavigation:c,DBShellContent:d,DBShellSubNavigation:m},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBShell v-bind="args"   >${e.default}</DBShell></div>`})},C=[`WithText`,`NoText`,`WithTextSubNavigation`,`NoTextSubNavigation`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}})))()}export{g as a,x as i,S as n,w as o,y as r,b as t};