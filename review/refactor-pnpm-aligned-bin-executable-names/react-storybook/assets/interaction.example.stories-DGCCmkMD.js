import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./drawer-header-CCpxjwkY.js";import{n as i,t as a}from"./drawer-BmWtjXrQ.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDrawer/Interaction`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s(),onCancel:s()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},l={args:{open:!1,onClose:s(),header:(0,o.jsx)(r,{closeButtonText:`Close`,children:`Title`}),children:(0,o.jsx)(`span`,{"data-testid":`drawer-content`,children:`Test`})},render:e=>(0,o.jsx)(a,{...e})},u=[`Interaction`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                        Title
                    </DBDrawerHeader>,
    "children": <span data-testid="drawer-content">Test</span>
  },
  render: (properties: any) => <DBDrawer {...properties} />
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Interaction,u as __namedExportsOrder,c as default};