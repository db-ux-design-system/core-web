import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./control-panel-brand-CYQUxK1u.js";import{n as r,t as i}from"./control-panel-desktop-DLD26_s4.js";import{i as a,n as o,r as s,t as c}from"./control-panel-navigation-item-Xn99TCHh.js";import{n as l,t as u}from"./control-panel-navigation-item-group-BxvjA2KV.js";var d,f,p,m,h,g;function _(){return(_=e((()=>{t(),l(),o(),a(),r(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBControlPanelDesktop/Interaction`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onExpandButtonTooltipFn:d()},argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},expanded:{control:`boolean`},expandButtonTooltip:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onExpandButtonTooltipFn:{action:`onExpandButtonTooltipFn`}}},p={args:{orientation:`horizontal`,default:`<DBControlPanelNavigation aria-label="Interaction"
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
></template>`},render:e=>({components:{DBControlPanelDesktop:i,DBControlPanelBrand:n,DBControlPanelNavigationItemGroup:u,DBControlPanelNavigationItem:c,DBControlPanelNavigation:s},setup(){return{args:e}},template:`<DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop>`})},h={args:{"data-testid":`drilldown-panel`,orientation:`vertical`,default:`<DBControlPanelNavigation aria-label="Drilldown Interaction" variant="drilldown"
  ><DBControlPanelNavigationItemGroup
    text="Drilldown Group"
    data-testid="drilldown-group"
    ><DBControlPanelNavigationItem data-testid="drilldown-sub1"
      ><a href="#">Drilldown Sub 1</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigationItemGroup
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelDesktop:i,DBControlPanelBrand:n,DBControlPanelNavigationItemGroup:u,DBControlPanelNavigationItem:c,DBControlPanelNavigation:s},setup(){return{args:e}},template:`<DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop>`})},g=[`Interaction`,`ControlPanelDesktopInteraction1`,`ControlPanelDesktopInteraction2`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "drilldown-panel",
    "orientation": "vertical",
    "default": \`<DBControlPanelNavigation aria-label="Drilldown Interaction" variant="drilldown"
  ><DBControlPanelNavigationItemGroup
    text="Drilldown Group"
    data-testid="drilldown-group"
    ><DBControlPanelNavigationItem data-testid="drilldown-sub1"
      ><a href="#">Drilldown Sub 1</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigationItemGroup
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
}`,...h.parameters?.docs?.source}}}})))()}_();export{m as ControlPanelDesktopInteraction1,h as ControlPanelDesktopInteraction2,p as Interaction,g as __namedExportsOrder,f as default};