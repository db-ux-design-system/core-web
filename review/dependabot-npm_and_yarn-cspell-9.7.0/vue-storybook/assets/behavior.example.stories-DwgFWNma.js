import{_ as o}from"./navigation-QFpN81_D.js";import{_ as i}from"./navigation-item-dWuZw0Uj.js";import{_ as r}from"./link-C2sguBvw.js";import{_ as l}from"./button-DY5D6Y05.js";import{_ as B}from"./brand-A1E6HLwF.js";import{_ as a}from"./header-DET9ueOF.js";import"./iframe-CE4y1F0q.js";import"./preload-helper-CSJ1qRbl.js";import"./index-B2WiKbs4.js";import"./constants-y2N5m1XS.js";import"./floating-components-CKmcRn_b.js";import"./drawer-C8yMjyO7.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBHeader/Behavior",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"select",options:["full","medium","large","small"]},forceMobile:{control:"boolean"},drawerOpen:{control:"boolean"},burgerMenuLabel:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{default:`<DBNavigation aria-label="Desktop (full width)" v-bind="{}"
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
