import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./brand-hvrOVGhV.js";import{n as r,t as i}from"./button-BPYHG8kl.js";import{n as a,t as o}from"./header-CDQsJcxy.js";import{n as s,t as c}from"./link-BzlumLcz.js";import{n as l,t as u}from"./navigation-BfrE4Ps5.js";import{n as d,t as f}from"./navigation-item-D9pVj6Ar.js";var p,m,h,g,_,v;function y(){return(y=e((()=>{t(),r(),c(),f(),u(),a(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBHeader/Density`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},h={args:{"data-density":`functional`,default:`<DBNavigation aria-label="Functional" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Functional</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Functional disabled</a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template
><template v-slot:meta-navigation
  ><DBLink href="#">Imprint</DBLink> <DBLink href="#">Help</DBLink></template
><template v-slot:primary-action
  ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
    Search
  </DBButton></template
><template v-slot:secondary-action
  ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Profile
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Notification
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Help
  </DBButton></template
>`},render:e=>({components:{DBHeader:o,DBBrand:n,DBButton:i,DBLink:s,DBNavigationItem:d,DBNavigation:l},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${e.default}</DBHeader></div>`})},g={args:{"data-density":`regular`,default:`<DBNavigation aria-label="(Default) Regular" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">(Default) Regular</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">(Default) Regular disabled</a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template
><template v-slot:meta-navigation
  ><DBLink href="#">Imprint</DBLink> <DBLink href="#">Help</DBLink></template
><template v-slot:primary-action
  ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
    Search
  </DBButton></template
><template v-slot:secondary-action
  ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Profile
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Notification
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Help
  </DBButton></template
>`},render:e=>({components:{DBHeader:o,DBBrand:n,DBButton:i,DBLink:s,DBNavigationItem:d,DBNavigation:l},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${e.default}</DBHeader></div>`})},_={args:{"data-density":`expressive`,default:`<DBNavigation aria-label="Expressive" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Expressive</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Expressive disabled</a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template
><template v-slot:meta-navigation
  ><DBLink href="#">Imprint</DBLink> <DBLink href="#">Help</DBLink></template
><template v-slot:primary-action
  ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
    Search
  </DBButton></template
><template v-slot:secondary-action
  ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Profile
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Notification
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Help
  </DBButton></template
>`},render:e=>({components:{DBHeader:o,DBBrand:n,DBButton:i,DBLink:s,DBNavigationItem:d,DBNavigation:l},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${e.default}</DBHeader></div>`})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "default": \`<DBNavigation aria-label="Functional" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Functional</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Functional disabled</a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template
><template v-slot:meta-navigation
  ><DBLink href="#">Imprint</DBLink> <DBLink href="#">Help</DBLink></template
><template v-slot:primary-action
  ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
    Search
  </DBButton></template
><template v-slot:secondary-action
  ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Profile
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Notification
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Help
  </DBButton></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBHeader,
      DBBrand,
      DBButton,
      DBLink,
      DBNavigationItem,
      DBNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >\${args.default}</DBHeader></div>\`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "default": \`<DBNavigation aria-label="(Default) Regular" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">(Default) Regular</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">(Default) Regular disabled</a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template
><template v-slot:meta-navigation
  ><DBLink href="#">Imprint</DBLink> <DBLink href="#">Help</DBLink></template
><template v-slot:primary-action
  ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
    Search
  </DBButton></template
><template v-slot:secondary-action
  ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Profile
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Notification
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Help
  </DBButton></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBHeader,
      DBBrand,
      DBButton,
      DBLink,
      DBNavigationItem,
      DBNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >\${args.default}</DBHeader></div>\`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "default": \`<DBNavigation aria-label="Expressive" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Expressive</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Expressive disabled</a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template
><template v-slot:meta-navigation
  ><DBLink href="#">Imprint</DBLink> <DBLink href="#">Help</DBLink></template
><template v-slot:primary-action
  ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
    Search
  </DBButton></template
><template v-slot:secondary-action
  ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Profile
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Notification
  </DBButton>
  <DBButton icon="x_placeholder" variant="ghost" :noText="true">
    Help
  </DBButton></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBHeader,
      DBBrand,
      DBButton,
      DBLink,
      DBNavigationItem,
      DBNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >\${args.default}</DBHeader></div>\`
  })
}`,..._.parameters?.docs?.source}}},v=[`Functional`,`DefaultRegular`,`Expressive`]})))()}y();export{g as DefaultRegular,_ as Expressive,h as Functional,v as __namedExportsOrder,m as default};