import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-B0hcS9Xm.js";import{a as r,i,n as a,o,r as s,t as c}from"./dialog-header-B_cm1wu6.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{t(),i(),a(),o(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDialog/Backdrop`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l(),onCancel:l()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},d={args:{backdrop:`strong`,propOverrides:{id:`dialog-backdrop-strong`},default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>(Default) Strong</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-backdrop-strong"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-backdrop-strong"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:r,DBButton:n,DBDialogFooter:s,DBDialogHeader:c},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-backdrop-strong"   >
                    Open: (Default) Strong
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},f={args:{backdrop:`weak`,propOverrides:{id:`dialog-backdrop-weak`},default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Weak</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-backdrop-weak"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-backdrop-weak"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:r,DBButton:n,DBDialogFooter:s,DBDialogHeader:c},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-backdrop-weak"   >
                    Open: Weak
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},p={args:{backdrop:`none`,propOverrides:{id:`dialog-backdrop-none`},open:!1,onClose:l(),default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>No Backdrop</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-backdrop-none"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-backdrop-none"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:r,DBButton:n,DBDialogFooter:s,DBDialogHeader:c},setup(){return{args:e}},template:`<div    ><DBButton  :onClick="(event) => noBackdropOpen = true"  >
                    Open: No Backdrop
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},m=[`DefaultStrong`,`Weak`,`NoBackdrop`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "strong",
    "propOverrides": {
      id: 'dialog-backdrop-strong'
    },
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>(Default) Strong</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-backdrop-strong"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-backdrop-strong"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBButton,
      DBDialogFooter,
      DBDialogHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-backdrop-strong"   >
                    Open: (Default) Strong
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "weak",
    "propOverrides": {
      id: 'dialog-backdrop-weak'
    },
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Weak</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-backdrop-weak"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-backdrop-weak"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBButton,
      DBDialogFooter,
      DBDialogHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-backdrop-weak"   >
                    Open: Weak
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "backdrop": "none",
    "propOverrides": {
      id: 'dialog-backdrop-none'
    },
    "open": false,
    "onClose": fn(),
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>No Backdrop</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-backdrop-none"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-backdrop-none"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBButton,
      DBDialogFooter,
      DBDialogHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton  :onClick="(event) => noBackdropOpen = true"  >
                    Open: No Backdrop
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...p.parameters?.docs?.source}}}})))()}h();export{d as DefaultStrong,p as NoBackdrop,f as Weak,m as __namedExportsOrder,u as default};