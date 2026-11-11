import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./badge-BsC0gw7S.js";import{n as i,t as a}from"./tooltip-BH-WTpqp.js";import{n as o,t as s}from"./button-CZleEg5N.js";import{n as c,t as l}from"./custom-select-Bf2VyG9z.js";import{a as u,i as d,n as f,o as p,r as m,t as h}from"./dialog-header-B40UXDTV.js";import{n as g,t as _}from"./icon-B2Ph48z9.js";var v=t({CloseandCancel:()=>x,Nestedoverlays:()=>C,Submitformincontent:()=>S,Withheaderendslot:()=>E,Withheaderstartslot:()=>T,Withheadersubtitle:()=>O,Withoutfooter:()=>D,Withtextprop:()=>w,__namedExportsOrder:()=>k,default:()=>b}),y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{n(),o(),c(),d(),f(),g(),a(),p(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/DBDialog/Examples`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:y(),onCancel:y()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},x={args:{propOverrides:{id:`dialog-events`},onClose:y(),onCancel:y(),default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Events Test</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-events"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-events"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:u,DBBadge:r,DBButton:s,DBCustomSelect:l,DBDialogFooter:m,DBDialogHeader:h,DBIcon:_,DBTooltip:i},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-events"   >
                    Cancel and close Events in console
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},S={args:{propOverrides:{id:`dialog-events-form`},default:`<form
  id="dialog-events-form-content"
  @submit="async (event) => handleSubmit(event)"
  ><p> Submitting reaches the form in the dialog content. </p></form
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Submit form in content</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton type="submit" variant="brand" form="dialog-events-form-content">
      Submit
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:u,DBBadge:r,DBButton:s,DBCustomSelect:l,DBDialogFooter:m,DBDialogHeader:h,DBIcon:_,DBTooltip:i},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-events-form"   >
                    Buttons type dialog event in console
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},C={args:{propOverrides:{id:`dialog-nested-overlays`},default:`<p>
  The tooltip and the custom-select dropdown must line up with their trigger and
  must not be clipped by the dialog. </p
><DBButton>
  Hover for a tooltip
  <DBTooltip placement="top" id="dialog-nested-tooltip">
    I position against the viewport
  </DBTooltip></DBButton
><DBCustomSelect
  label="Pick an option"
  listLabel="dialog-nested-select-list"
  :options="[{
  value: 'Option 1',
  id: 'dialog-nested-opt-1'
}, {
  value: 'Option 2',
  id: 'dialog-nested-opt-2'
}, {
  value: 'Option 3',
  id: 'dialog-nested-opt-3'
}]"
></DBCustomSelect
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Nested overlays</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-nested-overlays"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-nested-overlays"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:u,DBBadge:r,DBButton:s,DBCustomSelect:l,DBDialogFooter:m,DBDialogHeader:h,DBIcon:_,DBTooltip:i},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-nested-overlays"   >
                    Open: Nested overlays
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},w={args:{propOverrides:{id:`dialog-areas-text`},default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader
    text="With text prop"
    closeButtonText="Close"
  ></DBDialogHeader></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-areas-text"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-areas-text"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:u,DBBadge:r,DBButton:s,DBCustomSelect:l,DBDialogFooter:m,DBDialogHeader:h,DBIcon:_,DBTooltip:i},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-areas-text"   >
                    Open: With text prop
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},T={args:{propOverrides:{id:`dialog-areas-start`},default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>With header start slot</h2
    ><template v-slot:start-slot
      ><DBIcon icon="person"></DBIcon></template></DBDialogHeader></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-areas-start"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-areas-start"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:u,DBBadge:r,DBButton:s,DBCustomSelect:l,DBDialogFooter:m,DBDialogHeader:h,DBIcon:_,DBTooltip:i},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-areas-start"   >
                    Open: With header start slot
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},E={args:{propOverrides:{id:`dialog-areas-end`},default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>With header end slot</h2
    ><template v-slot:end-slot
      ><DBBadge>New</DBBadge></template
    ></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-areas-end"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-areas-end"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:u,DBBadge:r,DBButton:s,DBCustomSelect:l,DBDialogFooter:m,DBDialogHeader:h,DBIcon:_,DBTooltip:i},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-areas-end"   >
                    Open: With header end slot
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},D={args:{propOverrides:{id:`dialog-areas-no-footer`},default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Without footer</h2></DBDialogHeader
  ></template
>`},render:e=>({components:{DBDialog:u,DBBadge:r,DBButton:s,DBCustomSelect:l,DBDialogFooter:m,DBDialogHeader:h,DBIcon:_,DBTooltip:i},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-areas-no-footer"   >
                    Open: Without footer
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},O={args:{propOverrides:{id:`dialog-areas-subtitle`},default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>With header subtitle</h2><span>A second line of supporting</span
    ><template v-slot:start-slot
      ><DBIcon icon="person"></DBIcon></template></DBDialogHeader></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-areas-subtitle"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-areas-subtitle"
    >
      Confirm
    </DBButton></DBDialogFooter
  ></template
>`},render:e=>({components:{DBDialog:u,DBBadge:r,DBButton:s,DBCustomSelect:l,DBDialogFooter:m,DBDialogHeader:h,DBIcon:_,DBTooltip:i},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-areas-subtitle"   >
                    Open: With header subtitle
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},k=[`CloseandCancel`,`Submitformincontent`,`Nestedoverlays`,`Withtextprop`,`Withheaderstartslot`,`Withheaderendslot`,`Withoutfooter`,`Withheadersubtitle`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-events'
    },
    "onClose": fn(),
    "onCancel": fn(),
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Events Test</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-events"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-events"
    >
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
      DBCustomSelect,
      DBDialogFooter,
      DBDialogHeader,
      DBIcon,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-events"   >
                    Cancel and close Events in console
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-events-form'
    },
    "default": \`<form
  id="dialog-events-form-content"
  @submit="async (event) => handleSubmit(event)"
  ><p> Submitting reaches the form in the dialog content. </p></form
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Submit form in content</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton type="submit" variant="brand" form="dialog-events-form-content">
      Submit
    </DBButton></DBDialogFooter
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBBadge,
      DBButton,
      DBCustomSelect,
      DBDialogFooter,
      DBDialogHeader,
      DBIcon,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-events-form"   >
                    Buttons type dialog event in console
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-nested-overlays'
    },
    "default": \`<p>
  The tooltip and the custom-select dropdown must line up with their trigger and
  must not be clipped by the dialog. </p
><DBButton>
  Hover for a tooltip
  <DBTooltip placement="top" id="dialog-nested-tooltip">
    I position against the viewport
  </DBTooltip></DBButton
><DBCustomSelect
  label="Pick an option"
  listLabel="dialog-nested-select-list"
  :options="[{
  value: 'Option 1',
  id: 'dialog-nested-opt-1'
}, {
  value: 'Option 2',
  id: 'dialog-nested-opt-2'
}, {
  value: 'Option 3',
  id: 'dialog-nested-opt-3'
}]"
></DBCustomSelect
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Nested overlays</h2></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-nested-overlays"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-nested-overlays"
    >
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
      DBCustomSelect,
      DBDialogFooter,
      DBDialogHeader,
      DBIcon,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-nested-overlays"   >
                    Open: Nested overlays
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-areas-text'
    },
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader
    text="With text prop"
    closeButtonText="Close"
  ></DBDialogHeader></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-areas-text"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-areas-text"
    >
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
      DBCustomSelect,
      DBDialogFooter,
      DBDialogHeader,
      DBIcon,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-areas-text"   >
                    Open: With text prop
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-areas-start'
    },
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>With header start slot</h2
    ><template v-slot:start-slot
      ><DBIcon icon="person"></DBIcon></template></DBDialogHeader></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-areas-start"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-areas-start"
    >
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
      DBCustomSelect,
      DBDialogFooter,
      DBDialogHeader,
      DBIcon,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-areas-start"   >
                    Open: With header start slot
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-areas-end'
    },
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>With header end slot</h2
    ><template v-slot:end-slot
      ><DBBadge>New</DBBadge></template
    ></DBDialogHeader
  ></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-areas-end"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-areas-end"
    >
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
      DBCustomSelect,
      DBDialogFooter,
      DBDialogHeader,
      DBIcon,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-areas-end"   >
                    Open: With header end slot
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-areas-no-footer'
    },
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Without footer</h2></DBDialogHeader
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBBadge,
      DBButton,
      DBCustomSelect,
      DBDialogFooter,
      DBDialogHeader,
      DBIcon,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-areas-no-footer"   >
                    Open: Without footer
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'dialog-areas-subtitle'
    },
    "default": \`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>With header subtitle</h2><span>A second line of supporting</span
    ><template v-slot:start-slot
      ><DBIcon icon="person"></DBIcon></template></DBDialogHeader></template
><template v-slot:footer
  ><DBDialogFooter
    ><DBButton
      variant="ghost"
      command="request-close"
      commandfor="dialog-areas-subtitle"
    >
      Cancel </DBButton
    ><DBButton
      variant="brand"
      command="request-close"
      commandfor="dialog-areas-subtitle"
    >
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
      DBCustomSelect,
      DBDialogFooter,
      DBDialogHeader,
      DBIcon,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-areas-subtitle"   >
                    Open: With header subtitle
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...O.parameters?.docs?.source}}}})))()}export{T as a,w as c,E as i,v as l,C as n,O as o,S as r,D as s,x as t,A as u};