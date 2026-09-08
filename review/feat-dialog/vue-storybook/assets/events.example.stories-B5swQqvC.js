import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-CaFZ3HzC.js";import{i as r,n as i,r as a,t as o}from"./dialog-header-CbYZ008B.js";import{n as s,t as c}from"./dialog-footer-DJrT7JM5.js";var l,u,d,f,p;function m(){return(m=e((()=>{t(),s(),i(),r(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDialog/JS Events on console`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l(),onCancel:l()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},d={args:{id:`dialog-events`,open:!1,onClose:l(),onCancel:l(),default:`<p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p
><template v-slot:header
  ><DBDialogHeader closeButtonText="Close"
    ><h2>Events Test</h2></DBDialogHeader
  ></template
>`},render:e=>({components:{DBDialog:a,DBButton:n,DBDialogFooter:c,DBDialogHeader:o},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-events" :onClick="(event) => open = true"  >
                    Open Dialog
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},f={args:{id:`dialog-events-form`,open:!1,onClose:l(),default:`<form
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
>`},render:e=>({components:{DBDialog:a,DBButton:n,DBDialogFooter:c,DBDialogHeader:o},setup(){return{args:e}},template:`<div    ><DBButton command="show-modal" commandfor="dialog-events-form" :onClick="(event) => openForm = true"  >
                    Open Dialog
                </DBButton><DBDialog v-bind="args"   >${e.default}</DBDialog></div>`})},p=[`CloseandCancel`,`Submitformincontent`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      DBDialogFooter,
      DBDialogHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-events" :onClick="(event) => open = true"  >
                    Open Dialog
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
      DBDialogFooter,
      DBDialogHeader
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBButton command="show-modal" commandfor="dialog-events-form" :onClick="(event) => openForm = true"  >
                    Open Dialog
                </DBButton><DBDialog v-bind="args"   >\${args.default}</DBDialog></div>\`
  })
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as CloseandCancel,f as Submitformincontent,p as __namedExportsOrder,u as default};