import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./control-panel-brand-fTX-DtH1.js";import{n as i,t as a}from"./control-panel-desktop-CWlSj2LC.js";import{i as o,n as s,r as c,t as l}from"./control-panel-navigation-item-BmXbpleW.js";var u=t({DefaultHorizontal:()=>p,Vertical:()=>m,__namedExportsOrder:()=>h,default:()=>f}),d,f,p,m,h;function g(){return(g=e((()=>{n(),s(),o(),i(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBControlPanelDesktop/Orientation`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onExpandButtonTooltipFn:d()},argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},expanded:{control:`boolean`},expandButtonTooltip:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onExpandButtonTooltipFn:{action:`onExpandButtonTooltipFn`}}},p={args:{orientation:`horizontal`,default:`<DBControlPanelNavigation aria-label="(Default) Horizontal" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">(Default) Horizontal</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
    ><a href="#">(Default) Horizontal disabled</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelDesktop:a,DBControlPanelBrand:r,DBControlPanelNavigationItem:l,DBControlPanelNavigation:c},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop></div>`})},m={args:{orientation:`vertical`,default:`<DBControlPanelNavigation aria-label="Vertical" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">Vertical</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
    ><a href="#">Vertical disabled</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelDesktop:a,DBControlPanelBrand:r,DBControlPanelNavigationItem:l,DBControlPanelNavigation:c},setup(){return{args:e}},template:`<div  :style="{
  maxInlineSize: '300px',
  width: 'auto',
  height: '500px',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop></div>`})},h=[`DefaultHorizontal`,`Vertical`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "default": \`<DBControlPanelNavigation aria-label="(Default) Horizontal" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">(Default) Horizontal</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
    ><a href="#">(Default) Horizontal disabled</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelDesktop,
      DBControlPanelBrand,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >\${args.default}</DBControlPanelDesktop></div>\`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "vertical",
    "default": \`<DBControlPanelNavigation aria-label="Vertical" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">Vertical</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
    ><a href="#">Vertical disabled</a></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelDesktop,
      DBControlPanelBrand,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  maxInlineSize: '300px',
  width: 'auto',
  height: '500px',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >\${args.default}</DBControlPanelDesktop></div>\`
  })
}`,...m.parameters?.docs?.source}}}})))()}export{u as i,m as n,g as r,p as t};