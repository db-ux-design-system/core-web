import{_ as a}from"./header-0hIqy2y5.js";import{_ as o}from"./navigation-ByeMTWG5.js";import{_ as i}from"./navigation-item-BOW6Wrwe.js";import{_ as r}from"./link-B8BfZg0m.js";import{_ as l}from"./button-BND3SCu0.js";import{_ as B}from"./brand-aeauyKMx.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./drawer-DrQ68kLA.js";import"./floating-components-1F_x7pmN.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBHeader/Behavior",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"select",options:["full","medium","large","small"]},forceMobile:{control:"boolean"},drawerOpen:{control:"boolean"},burgerMenuLabel:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{default:`<DBNavigation aria-label="Desktop (full width)" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Desktop (full width)</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Desktop (full width) disabled</a></DBNavigationItem
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
>`},render:t=>({components:{DBHeader:a,DBBrand:B,DBButton:l,DBLink:r,DBNavigationItem:i,DBNavigation:o},setup(){return{args:t}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${t.default}</DBHeader></div>`})},n={args:{forceMobile:"true",default:`<DBNavigation aria-label="Mobile" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Mobile</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Mobile disabled</a></DBNavigationItem
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
>`},render:t=>({components:{DBHeader:a,DBBrand:B,DBButton:l,DBLink:r,DBNavigationItem:i,DBNavigation:o},setup(){return{args:t}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${t.default}</DBHeader></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBNavigation aria-label="Desktop (full width)" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Desktop (full width)</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Desktop (full width) disabled</a></DBNavigationItem
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
    "forceMobile": "true",
    "default": \`<DBNavigation aria-label="Mobile" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Mobile</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Mobile disabled</a></DBNavigationItem
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
}`,...n.parameters?.docs?.source}}};const N=["Desktopfullwidth","Mobile"];export{e as Desktopfullwidth,n as Mobile,N as __namedExportsOrder,x as default};
