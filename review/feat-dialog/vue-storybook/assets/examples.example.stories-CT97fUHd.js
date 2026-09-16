import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-85-E6iFP.js";import{n as r,t as i}from"./tooltip-BUN_-Shm.js";import{n as a,t as o}from"./custom-select-C5wB7Tuh.js";import{i as s,n as c,r as l,t as u}from"./dialog-header-DychxkUc.js";import{n as d,t as f}from"./dialog-footer-D3uxCTlU.js";var p,m,h,g,_,v;function y(){return(y=e((()=>{t(),a(),d(),c(),i(),s(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBDialog/Examples`,component:l,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:p(),onCancel:p()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},h={args:{id:`dialog-events`,open:!1,onClose:p(),onCancel:p(),default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Events Test</h2></DBDialogHeader
  ></template
>`},render:e=>({components:{DBDialog:l,DBButton:n,DBCustomSelect:o,DBDialogFooter:f,DBDialogHeader:u,DBTooltip:r},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-events" :onClick="(event) => openIndex = 0"  >
                    Cancel and close Events in console
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},g={args:{id:`dialog-events-form`,open:!1,onClose:p(),default:`<form
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
>`},render:e=>({components:{DBDialog:l,DBButton:n,DBCustomSelect:o,DBDialogFooter:f,DBDialogHeader:u,DBTooltip:r},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-events-form" :onClick="(event) => openIndex = 1"  >
                    Buttons type dialog event in console
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},_={args:{id:`dialog-nested-overlays`,open:!1,onClose:p(),default:`<p>
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
>`},render:e=>({components:{DBDialog:l,DBButton:n,DBCustomSelect:o,DBDialogFooter:f,DBDialogHeader:u,DBTooltip:r},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-nested-overlays" :onClick="(event) => openIndex = 2"  >
                    Open: Nested overlays
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},v=[`CloseandCancel`,`Submitformincontent`,`Nestedoverlays`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-events",
    "open": false,
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
>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBButton,
      DBCustomSelect,
      DBDialogFooter,
      DBDialogHeader,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-events" :onClick="(event) => openIndex = 0"  >
                    Cancel and close Events in console
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-events-form",
    "open": false,
    "onClose": fn(),
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
      DBButton,
      DBCustomSelect,
      DBDialogFooter,
      DBDialogHeader,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-events-form" :onClick="(event) => openIndex = 1"  >
                    Buttons type dialog event in console
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-nested-overlays",
    "open": false,
    "onClose": fn(),
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
>\`
  },
  render: (args: any) => ({
    components: {
      DBDialog,
      DBButton,
      DBCustomSelect,
      DBDialogFooter,
      DBDialogHeader,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-nested-overlays" :onClick="(event) => openIndex = 2"  >
                    Open: Nested overlays
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,..._.parameters?.docs?.source}}}})))()}y();export{h as CloseandCancel,_ as Nestedoverlays,g as Submitformincontent,v as __namedExportsOrder,m as default};