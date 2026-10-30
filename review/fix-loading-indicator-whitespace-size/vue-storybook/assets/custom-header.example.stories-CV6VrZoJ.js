import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./button-8Gythl1C.js";import{n as r,t as i}from"./control-panel-brand-CYQUxK1u.js";import{n as a,t as o}from"./drawer-header-MOQzqyDz.js";import{n as s,t as c}from"./control-panel-mobile-Dmgc4rTl.js";import{i as l,n as u,r as d,t as f}from"./control-panel-navigation-item-Xn99TCHh.js";var p,m,h,g;function _(){return(_=e((()=>{t(),r(),u(),l(),a(),s(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBControlPanelMobile/Custom Header`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{position:{control:`select`,options:[`top`,`bottom`]},drawerHeaderText:{control:`text`},burgerMenuLabel:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},h={args:{position:`top`,showDrawerHeaderSlot:!0,default:`<DBControlPanelNavigation
  aria-label="With action element in drawer header"
  v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#"
      >With action element in drawer header</a
    ></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
><template v-slot:header
  ><DBDrawerHeader text="DBControlPanel" closeButtonText="Close"
    ><template v-slot:end-slot
      ><DBButton icon="moon" variant="ghost" type="button" :noText="true">
        Dark mode
      </DBButton></template
    ></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBControlPanelMobile:c,DBButton:n,DBControlPanelBrand:i,DBControlPanelNavigationItem:f,DBControlPanelNavigation:d,DBDrawerHeader:o},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelMobile v-bind="args"   >${e.default}</DBControlPanelMobile></div>`})},g=[`Withactionelementindrawerheader`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "position": "top",
    "showDrawerHeaderSlot": true,
    "default": \`<DBControlPanelNavigation
  aria-label="With action element in drawer header"
  v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#"
      >With action element in drawer header</a
    ></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
><template v-slot:header
  ><DBDrawerHeader text="DBControlPanel" closeButtonText="Close"
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
      DBControlPanelMobile,
      DBButton,
      DBControlPanelBrand,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation,
      DBDrawerHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelMobile v-bind="args"   >\${args.default}</DBControlPanelMobile></div>\`
  })
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as Withactionelementindrawerheader,g as __namedExportsOrder,m as default};