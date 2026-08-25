import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-DRLogLJr.js";import{i as r,n as i,r as a,t as o}from"./dialog-header-CuZOvYcP.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{t(),i(),r(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDialog/Density`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s(),onCancel:s()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},l={args:{open:!1,onClose:s(),default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close">
    Functional
  </DBDialogHeader></template
>`},render:e=>({components:{DBDialog:a,DBButton:n,DBDialogHeader:o},setup(){return{args:e}},template:`<div data-density="functional"   >Open DBDialog by switching open property<DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},u={args:{open:!1,onClose:s(),default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close">
    (Default) Regular
  </DBDialogHeader></template
>`},render:e=>({components:{DBDialog:a,DBButton:n,DBDialogHeader:o},setup(){return{args:e}},template:`<div data-density="regular"   >Open DBDialog by switching open property<DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},d={args:{open:!1,onClose:s(),default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close">
    Expressive
  </DBDialogHeader></template
>`},render:e=>({components:{DBDialog:a,DBButton:n,DBDialogHeader:o},setup(){return{args:e}},template:`<div data-density="expressive"   >Open DBDialog by switching open property<DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close">
    Functional
  </DBDialogHeader></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBButton,
      DBDialogHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="functional"   >Open DBDialog by switching open property<DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close">
    (Default) Regular
  </DBDialogHeader></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBButton,
      DBDialogHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="regular"   >Open DBDialog by switching open property<DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close">
    Expressive
  </DBDialogHeader></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBButton,
      DBDialogHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-density="expressive"   >Open DBDialog by switching open property<DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...d.parameters?.docs?.source}}},f=[`Functional`,`DefaultRegular`,`Expressive`]})))()}p();export{u as DefaultRegular,d as Expressive,l as Functional,f as __namedExportsOrder,c as default};