import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-D2exQwXH.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./dialog-header-D1SI32kG.js";var u=t({DefaultStrong:()=>p,NoBackdrop:()=>h,Weak:()=>m,__namedExportsOrder:()=>g,default:()=>f}),d,f,p,m,h,g;function _(){return(_=e((()=>{n(),a(),o(),s(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBDialog/Backdrop`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:d(),onCancel:d()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},p={args:{backdrop:`strong`,propOverrides:{id:`dialog-backdrop-strong`},default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
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
>`},render:e=>({components:{DBDialog:i,DBButton:r,DBDialogFooter:c,DBDialogHeader:l},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-backdrop-strong"   >
                    Open: (Default) Strong
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},m={args:{backdrop:`weak`,propOverrides:{id:`dialog-backdrop-weak`},default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
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
>`},render:e=>({components:{DBDialog:i,DBButton:r,DBDialogFooter:c,DBDialogHeader:l},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-backdrop-weak"   >
                    Open: Weak
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},h={args:{backdrop:`none`,propOverrides:{id:`dialog-backdrop-none`},open:!1,onClose:d(),default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
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
>`},render:e=>({components:{DBDialog:i,DBButton:r,DBDialogFooter:c,DBDialogHeader:l},setup(){return{args:e}},template:`<div    ><DBButton  :onClick="(event) => noBackdropOpen = true"  >
                    Open: No Backdrop
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},g=[`DefaultStrong`,`Weak`,`NoBackdrop`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}}})))()}export{_ as a,u as i,h as n,f as o,m as r,p as t};