import{_ as o}from"./header-oHGEqV0E.js";import{_ as i}from"./navigation-COw4jYhm.js";import{_ as r}from"./navigation-item-Zv8fweaF.js";import{_ as B}from"./link-BFuUpPuS.js";import{_ as l}from"./button-DrG1ypXq.js";import{_ as d}from"./brand-EabgfeXC.js";import"./iframe-XYC5JVpw.js";import"./preload-helper-MpUUyRtn.js";import"./constants-BMPlMwqI.js";import"./index-DAOIw2cL.js";import"./drawer-B0INtNv5.js";import"./floating-components-1F_x7pmN.js";const{fn:N}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBHeader/Width",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"select",options:["full","medium","large","small"]},forceMobile:{control:"boolean"},drawerOpen:{control:"boolean"},burgerMenuLabel:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{default:`<DBNavigation aria-label="Full" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"><a href="#">Full</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Full disabled</a></DBNavigationItem
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
>`},render:t=>({components:{DBHeader:o,DBBrand:d,DBButton:l,DBLink:B,DBNavigationItem:r,DBNavigation:i},setup(){return{args:t}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${t.default}</DBHeader></div>`})},n={args:{width:"medium",default:`<DBNavigation aria-label="Medium" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Medium</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Medium disabled</a></DBNavigationItem
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
>`},render:t=>({components:{DBHeader:o,DBBrand:d,DBButton:l,DBLink:B,DBNavigationItem:r,DBNavigation:i},setup(){return{args:t}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${t.default}</DBHeader></div>`})},a={args:{width:"large",default:`<DBNavigation aria-label="Large" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Large</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Large disabled</a></DBNavigationItem
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
>`},render:t=>({components:{DBHeader:o,DBBrand:d,DBButton:l,DBLink:B,DBNavigationItem:r,DBNavigation:i},setup(){return{args:t}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${t.default}</DBHeader></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBNavigation aria-label="Full" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"><a href="#">Full</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Full disabled</a></DBNavigationItem
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "medium",
    "default": \`<DBNavigation aria-label="Medium" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Medium</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Medium disabled</a></DBNavigationItem
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "large",
    "default": \`<DBNavigation aria-label="Large" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Large</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Large disabled</a></DBNavigationItem
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
}`,...a.parameters?.docs?.source}}};const L=["Full","Medium","Large"];export{e as Full,a as Large,n as Medium,L as __namedExportsOrder,b as default};
