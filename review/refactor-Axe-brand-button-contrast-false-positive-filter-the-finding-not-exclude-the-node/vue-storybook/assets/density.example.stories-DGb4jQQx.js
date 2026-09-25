import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-B0hcS9Xm.js";import{a as r,i,n as a,o,r as s,t as c}from"./dialog-header-B_cm1wu6.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{t(),i(),a(),o(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDialog/Density`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l(),onCancel:l()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},d={args:{propOverrides:{id:`dialog-density-functional`},default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Functional</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-density-functional"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-density-functional"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:r,DBButton:n,DBDialogFooter:s,DBDialogHeader:c},setup(){return{args:e}},template:`<div data-density="functional"   ><DBButton command="show-modal" commandfor="dialog-density-functional"   >
                    Open: Functional
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},f={args:{propOverrides:{id:`dialog-density-regular`},default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>(Default) Regular</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-density-regular"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-density-regular"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:r,DBButton:n,DBDialogFooter:s,DBDialogHeader:c},setup(){return{args:e}},template:`<div data-density="regular"   ><DBButton command="show-modal" commandfor="dialog-density-regular"   >
                    Open: (Default) Regular
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},p={args:{propOverrides:{id:`dialog-density-expressive`},default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Expressive</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-density-expressive"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-density-expressive"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:r,DBButton:n,DBDialogFooter:s,DBDialogHeader:c},setup(){return{args:e}},template:`<div data-density="expressive"   ><DBButton command="show-modal" commandfor="dialog-density-expressive"   >
                    Open: Expressive
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},m=[`Functional`,`DefaultRegular`,`Expressive`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-density-functional'
    },
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Functional</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-density-functional"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-density-functional"
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
    template: \`<div data-density="functional"   ><DBButton command="show-modal" commandfor="dialog-density-functional"   >
                    Open: Functional
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-density-regular'
    },
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>(Default) Regular</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-density-regular"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-density-regular"
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
    template: \`<div data-density="regular"   ><DBButton command="show-modal" commandfor="dialog-density-regular"   >
                    Open: (Default) Regular
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-density-expressive'
    },
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Expressive</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-density-expressive"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-density-expressive"
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
    template: \`<div data-density="expressive"   ><DBButton command="show-modal" commandfor="dialog-density-expressive"   >
                    Open: Expressive
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as DefaultRegular,p as Expressive,d as Functional,m as __namedExportsOrder,u as default};