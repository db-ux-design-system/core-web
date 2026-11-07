import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./control-panel-brand-BeTYUfXn.js";import{n as i,t as a}from"./control-panel-desktop-CKWReAxI.js";import{i as o,n as s,r as c,t as l}from"./control-panel-navigation-item-DoziUBpD.js";import{n as u,t as d}from"./control-panel-navigation-item-group-tteSfd8Z.js";var f=t({ControlPanelDesktopInteraction1:()=>g,ControlPanelDesktopInteraction2:()=>_,Interaction:()=>h,__namedExportsOrder:()=>v,default:()=>m}),p,m,h,g,_,v;function y(){return(y=e((()=>{n(),u(),s(),o(),i(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBControlPanelDesktop/Interaction`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onExpandButtonTooltipFn:p()},argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},expanded:{control:`boolean`},expandButtonTooltip:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onExpandButtonTooltipFn:{action:`onExpandButtonTooltipFn`}}},h={args:{orientation:`horizontal`,default:`<DBControlPanelNavigation aria-label="Interaction"
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
></template>`},render:e=>({components:{DBControlPanelDesktop:a,DBControlPanelBrand:r,DBControlPanelNavigationItemGroup:d,DBControlPanelNavigationItem:l,DBControlPanelNavigation:c},setup(){return{args:e}},template:`<DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop>`})},g={args:{"data-testid":`tree-panel`,orientation:`horizontal`,default:`<DBControlPanelNavigation aria-label="Tree Interaction" variant="tree"
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
></template>`},render:e=>({components:{DBControlPanelDesktop:a,DBControlPanelBrand:r,DBControlPanelNavigationItemGroup:d,DBControlPanelNavigationItem:l,DBControlPanelNavigation:c},setup(){return{args:e}},template:`<DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop>`})},_={args:{"data-testid":`drilldown-panel`,orientation:`vertical`,default:`<DBControlPanelNavigation aria-label="Drilldown Interaction" variant="drilldown"
  ><DBControlPanelNavigationItemGroup
    text="Drilldown Group"
    data-testid="drilldown-group"
    ><DBControlPanelNavigationItem data-testid="drilldown-sub1"
      ><a href="#">Drilldown Sub 1</a></DBControlPanelNavigationItem
    ></DBControlPanelNavigationItemGroup
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelDesktop:a,DBControlPanelBrand:r,DBControlPanelNavigationItemGroup:d,DBControlPanelNavigationItem:l,DBControlPanelNavigation:c},setup(){return{args:e}},template:`<DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop>`})},v=[`Interaction`,`ControlPanelDesktopInteraction1`,`ControlPanelDesktopInteraction2`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}})))()}export{f as a,y as i,_ as n,h as r,g as t};