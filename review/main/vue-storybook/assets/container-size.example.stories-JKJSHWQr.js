import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-DUMH1zrU.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./dialog-header-DqX_B48I.js";var u=t({DefaultMedium:()=>m,Full:()=>g,Large:()=>h,Small:()=>p,__namedExportsOrder:()=>_,default:()=>f}),d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),a(),o(),s(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBDialog/Container Size`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:d(),onCancel:d()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},p={args:{containerSize:`small`,propOverrides:{id:`dialog-size-small`},default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Small</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-size-small"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-size-small"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:i,DBButton:r,DBDialogFooter:c,DBDialogHeader:l},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-size-small"   >
                    Open: Small
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},m={args:{containerSize:`medium`,propOverrides:{id:`dialog-size-medium`},default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>(Default) Medium</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-size-medium"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-size-medium"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:i,DBButton:r,DBDialogFooter:c,DBDialogHeader:l},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-size-medium"   >
                    Open: (Default) Medium
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},h={args:{containerSize:`large`,propOverrides:{id:`dialog-size-large`},default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Large</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-size-large"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-size-large"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:i,DBButton:r,DBDialogFooter:c,DBDialogHeader:l},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-size-large"   >
                    Open: Large
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},g={args:{containerSize:`full`,propOverrides:{id:`dialog-size-full`},default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Full</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-size-full"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-size-full"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:i,DBButton:r,DBDialogFooter:c,DBDialogHeader:l},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-size-full"   >
                    Open: Full
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},_=[`Small`,`DefaultMedium`,`Large`,`Full`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "containerSize": "small",
    "propOverrides": {
      id: 'dialog-size-small'
    },
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Small</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-size-small"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-size-small"
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
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-size-small"   >
                    Open: Small
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "containerSize": "medium",
    "propOverrides": {
      id: 'dialog-size-medium'
    },
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>(Default) Medium</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-size-medium"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-size-medium"
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
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-size-medium"   >
                    Open: (Default) Medium
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "containerSize": "large",
    "propOverrides": {
      id: 'dialog-size-large'
    },
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Large</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-size-large"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-size-large"
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
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-size-large"   >
                    Open: Large
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "containerSize": "full",
    "propOverrides": {
      id: 'dialog-size-full'
    },
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Full</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-size-full"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-size-full"
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
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-size-full"   >
                    Open: Full
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...g.parameters?.docs?.source}}}})))()}export{u as a,p as i,g as n,v as o,h as r,m as t};