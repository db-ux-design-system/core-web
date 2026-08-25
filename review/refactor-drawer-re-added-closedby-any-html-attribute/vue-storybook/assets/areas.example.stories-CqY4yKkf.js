import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,M as n,P as r,S as i,a,b as o,d as s,m as c}from"./iframe-D9csi-ZM.js";import{h as l,r as u}from"./utils-BxtlSMMP.js";import{n as d,t as f}from"./badge-SYHz1st0.js";import{n as p,t as m}from"./button-DDrYDrW4.js";import{i as h,n as g,r as _,t as v}from"./dialog-header-D40hj0bO.js";import{n as y,t as b}from"./icon-Hs170Q_e.js";var x,S;function C(){return(C=e((()=>{a(),l(),x=[`id`],S=c({name:`DBDialogFooter`,__name:`dialog-footer`,props:{children:{default:void 0},className:{default:void 0},class:{},id:{default:void 0},autofocus:{type:[Boolean,String]},propOverrides:{default:void 0}},setup(e){let a=e,c=t(null);return(t,l)=>(o(),s(`footer`,{ref_key:`_ref`,ref:c,id:e.id||e.propOverrides?.id,class:r(n(u)(`db-dialog-footer`,a.class))},[i(t.$slots,`default`)],10,x))}})})))()}var w;function T(){return(T=e((()=>{C(),w=S})))()}var E,D,O,k,A,j,M;function N(){return(N=e((()=>{d(),p(),T(),g(),y(),h(),{fn:E}=__STORYBOOK_MODULE_TEST__,D={title:`Components/DBDialog/Areas`,component:_,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:E(),onCancel:E()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},O={args:{open:!1,onClose:E(),default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader
    text="With text prop"
    closeButtonText="Close"
  ></DBDialogHeader
></template>`},render:e=>({components:{DBDialog:_,DBBadge:f,DBButton:m,DBDialogFooter:w,DBDialogHeader:v,DBIcon:b},setup(){return{args:e}},template:`<div    >Open DBDialog by switching open property<DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},k={args:{open:!1,onClose:E(),default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close">
    With start slot
    <template v-slot:start-slot
      ><DBIcon icon="account"></DBIcon></template></DBDialogHeader
></template>`},render:e=>({components:{DBDialog:_,DBBadge:f,DBButton:m,DBDialogFooter:w,DBDialogHeader:v,DBIcon:b},setup(){return{args:e}},template:`<div    >Open DBDialog by switching open property<DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},A={args:{open:!1,onClose:E(),default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close">
    With end slot
    <template v-slot:end-slot
      ><DBBadge>New</DBBadge></template
    ></DBDialogHeader
  ></template
>`},render:e=>({components:{DBDialog:_,DBBadge:f,DBButton:m,DBDialogFooter:w,DBDialogHeader:v,DBIcon:b},setup(){return{args:e}},template:`<div    >Open DBDialog by switching open property<DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},j={args:{open:!1,onClose:E(),default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close">
    With footer
  </DBDialogHeader></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton variant="ghost" :onClick="(event) => openIndex = -1">
      Cancel </DBButton
    ><DBButton variant="brand" :onClick="(event) => openIndex = -1">
      Confirm
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:_,DBBadge:f,DBButton:m,DBDialogFooter:w,DBDialogHeader:v,DBIcon:b},setup(){return{args:e}},template:`<div    >Open DBDialog by switching open property<DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
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
    template: \`<div    >Open DBDialog by switching open property<DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
    With start slot
    <template v-slot:start-slot
      ><DBIcon icon="account"></DBIcon></template></DBDialogHeader
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
    template: \`<div    >Open DBDialog by switching open property<DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
    With end slot
    <template v-slot:end-slot
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
    template: \`<div    >Open DBDialog by switching open property<DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
    With footer
  </DBDialogHeader></template
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
    template: \`<div    >Open DBDialog by switching open property<DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...j.parameters?.docs?.source}}},M=[`Withtextprop`,`Withstartslot`,`Withendslot`,`Withfooter`]})))()}N();export{A as Withendslot,j as Withfooter,k as Withstartslot,O as Withtextprop,M as __namedExportsOrder,D as default};