import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-CZkMkL9T.js";import{n as r,t as i}from"./button-CaFZ3HzC.js";import{n as a,t as o}from"./drawer-footer-BWQSsXV7.js";import{n as s,t as c}from"./drawer-header-ySCbWcJF.js";import{n as l,t as u}from"./drawer-C0ZzfCYP.js";import{n as d,t as f}from"./icon-BVXDZpgY.js";import{n as p,t as m}from"./link-BpfEKqAC.js";var h,g,_,v,y,b,x;function S(){return(S=e((()=>{t(),r(),a(),s(),d(),m(),l(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DBDrawer/Areas`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:h()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},_={args:{id:`drawer-areas-text`,open:!1,onClose:h(),default:`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader
    text="With text prop"
    closeButtonText="Close"
  ></DBDrawerHeader
></template>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBIcon:f,DBLink:p},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-areas-text" :onClick="(event) => openIndex = 0"  >
                    Open: With text prop
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},v={args:{id:`drawer-areas-start`,open:!1,onClose:h(),default:`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>With start slot</h2
    ><template v-slot:start-slot
      ><DBIcon icon="person"></DBIcon></template></DBDrawerHeader
></template>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBIcon:f,DBLink:p},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-areas-start" :onClick="(event) => openIndex = 1"  >
                    Open: With start slot
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},y={args:{id:`drawer-areas-end`,open:!1,onClose:h(),default:`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>With end slot</h2
    ><template v-slot:end-slot
      ><DBBadge>New</DBBadge></template
    ></DBDrawerHeader
  ></template
>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBIcon:f,DBLink:p},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-areas-end" :onClick="(event) => openIndex = 2"  >
                    Open: With end slot
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},b={args:{id:`drawer-areas-footer`,open:!1,onClose:h(),default:`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>With footer</h2></DBDrawerHeader
  ></template
><template v-slot:footer
  ><DBDrawerFooter
    ><DBLink href="#">Link 1</DBLink
    ><DBLink href="#">Link 2</DBLink></DBDrawerFooter
  ></template
>`},render:e=>({components:{DBDrawer:u,DBBadge:n,DBButton:i,DBDrawerFooter:o,DBDrawerHeader:c,DBIcon:f,DBLink:p},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="drawer-areas-footer" :onClick="(event) => openIndex = 3"  >
                    Open: With footer
                </DBButton><DBDrawer v-bind="args"   >${e.default}</DBDrawer></div>`})},x=[`Withtextprop`,`Withstartslot`,`Withendslot`,`Withfooter`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-areas-text",
    "open": false,
    "onClose": fn(),
    "default": \`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader
    text="With text prop"
    closeButtonText="Close"
  ></DBDrawerHeader
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBBadge,
      DBButton,
      DBDrawerFooter,
      DBDrawerHeader,
      DBIcon,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="drawer-areas-text" :onClick="(event) => openIndex = 0"  >
                    Open: With text prop
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-areas-start",
    "open": false,
    "onClose": fn(),
    "default": \`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>With start slot</h2
    ><template v-slot:start-slot
      ><DBIcon icon="person"></DBIcon></template></DBDrawerHeader
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBBadge,
      DBButton,
      DBDrawerFooter,
      DBDrawerHeader,
      DBIcon,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="drawer-areas-start" :onClick="(event) => openIndex = 1"  >
                    Open: With start slot
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-areas-end",
    "open": false,
    "onClose": fn(),
    "default": \`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>With end slot</h2
    ><template v-slot:end-slot
      ><DBBadge>New</DBBadge></template
    ></DBDrawerHeader
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBBadge,
      DBButton,
      DBDrawerFooter,
      DBDrawerHeader,
      DBIcon,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="drawer-areas-end" :onClick="(event) => openIndex = 2"  >
                    Open: With end slot
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "drawer-areas-footer",
    "open": false,
    "onClose": fn(),
    "default": \`Lorem ipsum dolor sit amet.<template v-slot:header
  ><DBDrawerHeader closeButtonText="Close"
    ><h2>With footer</h2></DBDrawerHeader
  ></template
><template v-slot:footer
  ><DBDrawerFooter
    ><DBLink href="#">Link 1</DBLink
    ><DBLink href="#">Link 2</DBLink></DBDrawerFooter
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDrawer,
      DBBadge,
      DBButton,
      DBDrawerFooter,
      DBDrawerHeader,
      DBIcon,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="drawer-areas-footer" :onClick="(event) => openIndex = 3"  >
                    Open: With footer
                </DBButton><DBDrawer v-bind="args"   >\${args.default}</DBDrawer></div>\`
  })
}`,...b.parameters?.docs?.source}}}})))()}S();export{y as Withendslot,b as Withfooter,v as Withstartslot,_ as Withtextprop,x as __namedExportsOrder,g as default};