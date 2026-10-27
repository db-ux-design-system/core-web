import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./brand-CIkAjUJ4.js";import{n as r,t as i}from"./button-C69fevm2.js";import{n as a,t as o}from"./drawer-header-CBUhpHCC.js";import{n as s,t as c}from"./header-lvdYL0Za.js";import{n as l,t as u}from"./navigation-DjVo79Dx.js";import{n as d,t as f}from"./navigation-item-CaMekmaX.js";var p,m,h,g;function _(){return(_=e((()=>{t(),r(),a(),f(),u(),s(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBHeader/Custom Header`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},h={args:{forceMobile:`true`,burgerMenuLabel:`Open menu`,drawerOpen:!1,onToggle:p(),default:`<DBNavigation aria-label="With action element in drawer header" v-bind="{}"
  ><DBNavigationItem
    ><a href="#">With action element in drawer header</a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template
><template v-slot:drawer-header
  ><DBDrawerHeader text="Menu" closeButtonText="Close"
    ><template v-slot:end-slot
      ><DBButton icon="moon" variant="ghost" type="button" :noText="true">
        Dark mode
      </DBButton></template
    ></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBHeader:c,DBBrand:n,DBButton:i,DBDrawerHeader:o,DBNavigationItem:d,DBNavigation:l},setup(){return{args:e}},template:`<DBHeader v-bind="args"   >${e.default}</DBHeader>`})},g=[`Withactionelementindrawerheader`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "forceMobile": "true",
    "burgerMenuLabel": "Open menu",
    "drawerOpen": false,
    "onToggle": fn(),
    "default": \`<DBNavigation aria-label="With action element in drawer header" v-bind="{}"
  ><DBNavigationItem
    ><a href="#">With action element in drawer header</a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template
><template v-slot:drawer-header
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
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as Withactionelementindrawerheader,g as __namedExportsOrder,m as default};