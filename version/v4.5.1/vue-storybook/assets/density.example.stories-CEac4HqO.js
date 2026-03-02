import{_ as i}from"./navigation-CYyeWr-7.js";import{_ as r}from"./navigation-item-HIb-vo9u.js";import{_ as l}from"./link-Bqw10tu6.js";import{_ as B}from"./button-B9cujt8-.js";import{_ as s}from"./brand-CSUjvjM6.js";import{_ as o}from"./header-D2KTX1fD.js";import"./iframe-BCCTV3qu.js";import"./preload-helper-B6T4qU05.js";import"./index-B2WiKbs4.js";import"./constants-y2N5m1XS.js";import"./floating-components-CKmcRn_b.js";import"./drawer-BIC1KEuJ.js";const{fn:N}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBHeader/Density",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"select",options:["full","medium","large","small"]},forceMobile:{control:"boolean"},drawerOpen:{control:"boolean"},burgerMenuLabel:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{"data-density":"functional",default:`<DBNavigation aria-label="Functional" v-bind="{}"
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
>`},render:t=>({components:{DBHeader:o,DBBrand:s,DBButton:B,DBLink:l,DBNavigationItem:r,DBNavigation:i},setup(){return{args:t}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${t.default}</DBHeader></div>`})},e={args:{"data-density":"regular",default:`<DBNavigation aria-label="(Default) Regular" v-bind="{}"
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
>`},render:t=>({components:{DBHeader:o,DBBrand:s,DBButton:B,DBLink:l,DBNavigationItem:r,DBNavigation:i},setup(){return{args:t}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${t.default}</DBHeader></div>`})},a={args:{"data-density":"expressive",default:`<DBNavigation aria-label="Expressive" v-bind="{}"
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
>`},render:t=>({components:{DBHeader:o,DBBrand:s,DBButton:B,DBLink:l,DBNavigationItem:r,DBNavigation:i},setup(){return{args:t}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${t.default}</DBHeader></div>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const y=["Functional","DefaultRegular","Expressive"];export{e as DefaultRegular,a as Expressive,n as Functional,y as __namedExportsOrder,b as default};
