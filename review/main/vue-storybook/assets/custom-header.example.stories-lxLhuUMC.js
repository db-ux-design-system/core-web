import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./brand-NXPpsTQF.js";import{n as i,t as a}from"./button-3DTdTqCh.js";import{n as o,t as s}from"./drawer-header-5VykIbEz.js";import{n as c,t as l}from"./header-CVubXk9m.js";import{n as u,t as d}from"./navigation-D_VbPb-t.js";import{n as f,t as p}from"./navigation-item-cKlJAJjL.js";var m=t({Withactionelementindrawerheader:()=>_,__namedExportsOrder:()=>v,default:()=>g}),h,g,_,v;function y(){return(y=e((()=>{n(),i(),o(),p(),d(),c(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBHeader/Custom Header`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},_={args:{forceMobile:`true`,burgerMenuLabel:`Open menu`,showDrawerHeaderSlot:!0,drawerOpen:!1,onToggle:h(),default:`<DBNavigation aria-label="With action element in drawer header" v-bind="{}"
  ><DBNavigationItem
    ><a href="#">With action element in drawer header</a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template
><template v-slot:header
  ><DBDrawerHeader text="Menu" closeButtonText="Close"
    ><template v-slot:end-slot
      ><DBButton icon="moon" variant="ghost" type="button" :noText="true">
        Dark mode
      </DBButton></template
    ></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBHeader:l,DBBrand:r,DBButton:a,DBDrawerHeader:s,DBNavigationItem:f,DBNavigation:u},setup(){return{args:e}},template:`<DBHeader v-bind="args"   >${e.default}</DBHeader>`})},v=[`Withactionelementindrawerheader`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "forceMobile": "true",
    "burgerMenuLabel": "Open menu",
    "showDrawerHeaderSlot": true,
    "drawerOpen": false,
    "onToggle": fn(),
    "default": \`<DBNavigation aria-label="With action element in drawer header" v-bind="{}"
  ><DBNavigationItem
    ><a href="#">With action element in drawer header</a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template
><template v-slot:header
  ><DBDrawerHeader text="Menu" closeButtonText="Close"
    ><template v-slot:end-slot
      ><DBButton icon="moon" variant="ghost" type="button" :noText="true">
        Dark mode
      </DBButton></template
    ></DBDrawerHeader
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBHeader,
      DBBrand,
      DBButton,
      DBDrawerHeader,
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
}`,..._.parameters?.docs?.source}}}})))()}export{m as n,y as r,_ as t};