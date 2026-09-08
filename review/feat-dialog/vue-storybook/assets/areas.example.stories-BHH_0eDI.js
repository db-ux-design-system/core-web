import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-CZkMkL9T.js";import{n as r,t as i}from"./button-CaFZ3HzC.js";import{i as a,n as o,r as s,t as c}from"./dialog-header-CbYZ008B.js";import{n as l,t as u}from"./dialog-footer-DJrT7JM5.js";import{n as d,t as f}from"./icon-BVXDZpgY.js";var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{t(),r(),l(),o(),d(),a(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBDialog/Areas`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:p(),onCancel:p()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},h={args:{id:`dialog-areas-text`,open:!1,onClose:p(),default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader
    text="With text prop"
    closeButtonText="Close"
  ></DBDialogHeader
></template>`},render:e=>({components:{DBDialog:s,DBBadge:n,DBButton:i,DBDialogFooter:u,DBDialogHeader:c,DBIcon:f},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-areas-text" :onClick="(event) => openIndex = 0"  >
                    Open: With text prop
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},g={args:{id:`dialog-areas-start`,open:!1,onClose:p(),default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>With start slot</h2
    ><template v-slot:start-slot
      ><DBIcon icon="person"></DBIcon></template></DBDialogHeader
></template>`},render:e=>({components:{DBDialog:s,DBBadge:n,DBButton:i,DBDialogFooter:u,DBDialogHeader:c,DBIcon:f},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-areas-start" :onClick="(event) => openIndex = 1"  >
                    Open: With start slot
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},_={args:{id:`dialog-areas-end`,open:!1,onClose:p(),default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>With end slot</h2
    ><template v-slot:end-slot
      ><DBBadge>New</DBBadge></template
    ></DBDialogHeader
  ></template
>`},render:e=>({components:{DBDialog:s,DBBadge:n,DBButton:i,DBDialogFooter:u,DBDialogHeader:c,DBIcon:f},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-areas-end" :onClick="(event) => openIndex = 2"  >
                    Open: With end slot
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},v={args:{id:`dialog-areas-footer`,open:!1,onClose:p(),default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>With footer</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton variant="ghost" :onClick="(event) => openIndex = -1">
      Cancel </DBButton
    ><DBButton variant="brand" :onClick="(event) => openIndex = -1">
      Confirm
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:s,DBBadge:n,DBButton:i,DBDialogFooter:u,DBDialogHeader:c,DBIcon:f},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-areas-footer" :onClick="(event) => openIndex = 3"  >
                    Open: With footer
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},y={args:{id:`dialog-areas-subtitle`,open:!1,onClose:p(),default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><div
      ><h2>With header subtitle</h2
      ><span>A second line of supporting copy.</span></div
    ><template v-slot:start-slot
      ><DBIcon icon="person"></DBIcon></template></DBDialogHeader
></template>`},render:e=>({components:{DBDialog:s,DBBadge:n,DBButton:i,DBDialogFooter:u,DBDialogHeader:c,DBIcon:f},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-areas-subtitle" :onClick="(event) => openIndex = 4"  >
                    Open: With header subtitle
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},b=[`Withtextprop`,`Withstartslot`,`Withendslot`,`Withfooter`,`Withheadersubtitle`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-areas-text",
    "open": false,
    "onClose": fn(),
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader
    text="With text prop"
    closeButtonText="Close"
  ></DBDialogHeader
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBBadge,
      DBButton,
      DBDialogFooter,
      DBDialogHeader,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-areas-text" :onClick="(event) => openIndex = 0"  >
                    Open: With text prop
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-areas-start",
    "open": false,
    "onClose": fn(),
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>With start slot</h2
    ><template v-slot:start-slot
      ><DBIcon icon="person"></DBIcon></template></DBDialogHeader
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBBadge,
      DBButton,
      DBDialogFooter,
      DBDialogHeader,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-areas-start" :onClick="(event) => openIndex = 1"  >
                    Open: With start slot
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-areas-end",
    "open": false,
    "onClose": fn(),
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>With end slot</h2
    ><template v-slot:end-slot
      ><DBBadge>New</DBBadge></template
    ></DBDialogHeader
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBBadge,
      DBButton,
      DBDialogFooter,
      DBDialogHeader,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-areas-end" :onClick="(event) => openIndex = 2"  >
                    Open: With end slot
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-areas-footer",
    "open": false,
    "onClose": fn(),
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>With footer</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton variant="ghost" :onClick="(event) => openIndex = -1">
      Cancel </DBButton
    ><DBButton variant="brand" :onClick="(event) => openIndex = -1">
      Confirm
    </DBButton></DBDialogFooter
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBBadge,
      DBButton,
      DBDialogFooter,
      DBDialogHeader,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-areas-footer" :onClick="(event) => openIndex = 3"  >
                    Open: With footer
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-areas-subtitle",
    "open": false,
    "onClose": fn(),
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><div
      ><h2>With header subtitle</h2
      ><span>A second line of supporting copy.</span></div
    ><template v-slot:start-slot
      ><DBIcon icon="person"></DBIcon></template></DBDialogHeader
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBBadge,
      DBButton,
      DBDialogFooter,
      DBDialogHeader,
      DBIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-areas-subtitle" :onClick="(event) => openIndex = 4"  >
                    Open: With header subtitle
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...y.parameters?.docs?.source}}}})))()}x();export{_ as Withendslot,v as Withfooter,y as Withheadersubtitle,g as Withstartslot,h as Withtextprop,b as __namedExportsOrder,m as default};