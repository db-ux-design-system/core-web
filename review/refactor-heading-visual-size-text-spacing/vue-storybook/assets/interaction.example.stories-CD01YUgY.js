import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./control-panel-brand-XNBvvHyd.js";import{n as r,t as i}from"./control-panel-desktop-Bj6ITXKQ.js";import{i as a,n as o,r as s,t as c}from"./control-panel-navigation-item-DuA7SZQv.js";import{n as l,t as u}from"./control-panel-navigation-item-group-CFZSyIkL.js";var d,f,p,m,h;function g(){return(g=e((()=>{t(),l(),o(),a(),r(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBControlPanelDesktop/Interaction`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onExpandButtonTooltipFn:d()},argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},expanded:{control:`boolean`},expandButtonTooltip:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onExpandButtonTooltipFn:{action:`onExpandButtonTooltipFn`}}},p={args:{orientation:`horizontal`,default:`<DBControlPanelNavigation aria-label="Interaction"
  ><DBControlPanelNavigationItemGroup text="Group" data-testid="group"
    ><DBControlPanelNavigationItem data-testid="group-item1"
      ><a href="#">Item 1</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem data-testid="group-item2"
      ><a href="#">Item 2</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigationItemGroup
  ><DBControlPanelNavigationItem data-testid="disabled-item" :disabled="true"
    ><a href="#">Disabled</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelDesktop:i,DBControlPanelBrand:n,DBControlPanelNavigationItemGroup:u,DBControlPanelNavigationItem:c,DBControlPanelNavigation:s},setup(){return{args:e}},template:`<DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop>`})},m={args:{"data-testid":`tree-panel`,orientation:`horizontal`,default:`<DBControlPanelNavigation aria-label="Tree Interaction" variant="tree"
  ><DBControlPanelNavigationItemGroup text="Tree Group" data-testid="tree-group"
    ><DBControlPanelNavigationItem data-testid="tree-sub1"
      ><a href="#">Sub 1</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigationItemGroup
  ><DBControlPanelNavigationItem data-testid="tree-item2"
    ><a href="#">Item 2</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem data-testid="tree-item3"
    ><a href="#">Item 3</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelDesktop:i,DBControlPanelBrand:n,DBControlPanelNavigationItemGroup:u,DBControlPanelNavigationItem:c,DBControlPanelNavigation:s},setup(){return{args:e}},template:`<DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop>`})},h=[`Interaction`,`ControlPanelDesktopInteraction1`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "default": \`<DBControlPanelNavigation aria-label="Interaction"
  ><DBControlPanelNavigationItemGroup text="Group" data-testid="group"
    ><DBControlPanelNavigationItem data-testid="group-item1"
      ><a href="#">Item 1</a></DBControlPanelNavigationItem
    ><DBControlPanelNavigationItem data-testid="group-item2"
      ><a href="#">Item 2</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigationItemGroup
  ><DBControlPanelNavigationItem data-testid="disabled-item" :disabled="true"
    ><a href="#">Disabled</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelDesktop,
      DBControlPanelBrand,
      DBControlPanelNavigationItemGroup,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBControlPanelDesktop v-bind="args"   >\${args.default}</DBControlPanelDesktop>\`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "tree-panel",
    "orientation": "horizontal",
    "default": \`<DBControlPanelNavigation aria-label="Tree Interaction" variant="tree"
  ><DBControlPanelNavigationItemGroup text="Tree Group" data-testid="tree-group"
    ><DBControlPanelNavigationItem data-testid="tree-sub1"
      ><a href="#">Sub 1</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigationItemGroup
  ><DBControlPanelNavigationItem data-testid="tree-item2"
    ><a href="#">Item 2</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem data-testid="tree-item3"
    ><a href="#">Item 3</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelDesktop,
      DBControlPanelBrand,
      DBControlPanelNavigationItemGroup,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBControlPanelDesktop v-bind="args"   >\${args.default}</DBControlPanelDesktop>\`
  })
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as ControlPanelDesktopInteraction1,p as Interaction,h as __namedExportsOrder,f as default};