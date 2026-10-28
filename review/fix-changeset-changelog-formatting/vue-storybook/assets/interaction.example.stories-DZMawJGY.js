import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./brand-ms5QLV0s.js";import{n as r,t as i}from"./button-Co67g-1U.js";import{n as a,t as o}from"./header-AqfxSikb.js";import{n as s,t as c}from"./navigation-u6ZmcGAj.js";import{n as l,t as u}from"./navigation-item-B9qbdYq0.js";var d,f,p,m;function h(){return(h=e((()=>{t(),r(),u(),c(),a(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBHeader/Interaction`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},p={args:{forceMobile:`true`,drawerHeaderText:`Menu`,closeButtonText:`Close drawer`,burgerMenuLabel:`Open menu`,drawerOpen:!1,onToggle:d(),default:`<DBNavigation aria-label="Interaction" v-bind="{}"
  ><DBNavigationItem><a href="#">Start</a></DBNavigationItem></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template>`},render:e=>({components:{DBHeader:o,DBBrand:n,DBButton:i,DBNavigationItem:l,DBNavigation:s},setup(){return{args:e}},template:`<DBHeader v-bind="args"   >${e.default}</DBHeader>`})},m=[`Interaction`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "forceMobile": "true",
    "drawerHeaderText": "Menu",
    "closeButtonText": "Close drawer",
    "burgerMenuLabel": "Open menu",
    "drawerOpen": false,
    "onToggle": fn(),
    "default": \`<DBNavigation aria-label="Interaction" v-bind="{}"
  ><DBNavigationItem><a href="#">Start</a></DBNavigationItem></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template>\`
  },
  render: (args: any) => ({
    components: {
      DBHeader,
      DBBrand,
      DBButton,
      DBNavigationItem,
      DBNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeader v-bind="args"   >\${args.default}</DBHeader>\`
  })
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as Interaction,m as __namedExportsOrder,f as default};