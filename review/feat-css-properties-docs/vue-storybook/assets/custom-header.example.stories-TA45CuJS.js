import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-Dy2Ve71T.js";import{n as i,t as a}from"./control-panel-brand-CrB1k5bn.js";import{n as o,t as s}from"./drawer-header-DWF4q5Fk.js";import{n as c,t as l}from"./control-panel-mobile-D55rpzII.js";import{i as u,n as d,r as f,t as p}from"./control-panel-navigation-item-DrgvhKX6.js";var m=t({Withactionelementindrawerheader:()=>_,__namedExportsOrder:()=>v,default:()=>g}),h,g,_,v;function y(){return(y=e((()=>{n(),i(),d(),u(),o(),c(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBControlPanelMobile/Custom Header`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{position:{control:`select`,options:[`top`,`bottom`]},drawerHeaderText:{control:`text`},burgerMenuLabel:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},_={args:{position:`top`,showDrawerHeaderSlot:!0,default:`<DBControlPanelNavigation
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
>`},render:e=>({components:{DBControlPanelMobile:l,DBButton:r,DBControlPanelBrand:a,DBControlPanelNavigationItem:p,DBControlPanelNavigation:f,DBDrawerHeader:s},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelMobile v-bind="args"   >${e.default}</DBControlPanelMobile></div>`})},v=[`Withactionelementindrawerheader`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}})))()}export{g as i,m as n,y as r,_ as t};