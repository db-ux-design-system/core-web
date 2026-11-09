import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./brand-5VEL-nlW.js";import{n as i,t as a}from"./button-Bd0wAvmA.js";import{n as o,t as s}from"./header-BXY083jy.js";import{n as c,t as l}from"./navigation-rQhfx6dm.js";import{n as u,t as d}from"./navigation-item-DcYTxwG3.js";var f=t({Interaction:()=>h,__namedExportsOrder:()=>g,default:()=>m}),p,m,h,g;function _(){return(_=e((()=>{n(),i(),d(),l(),o(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBHeader/Interaction`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},h={args:{forceMobile:`true`,drawerHeaderText:`Menu`,closeButtonText:`Close drawer`,burgerMenuLabel:`Open menu`,drawerOpen:!1,onToggle:p(),default:`<DBNavigation aria-label="Interaction" v-bind="{}"
  ><DBNavigationItem><a href="#">Start</a></DBNavigationItem></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template>`},render:e=>({components:{DBHeader:s,DBBrand:r,DBButton:a,DBNavigationItem:u,DBNavigation:c},setup(){return{args:e}},template:`<DBHeader v-bind="args"   >${e.default}</DBHeader>`})},g=[`Interaction`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}}})))()}export{_ as n,f as r,h as t};