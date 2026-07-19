import{i as e}from"./preload-helper-SUPR7oLw.js";import{t}from"./jsx-runtime-DsRh6Rir.js";import{X as n,et as r,t as i}from"./src-B1T0FmWM.js";var a,o,s,c,l,u;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDrawer/Show Spacing`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:o()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},c={args:{containerSize:`full`,open:!1,showSpacing:!0,onClose:o(),header:(0,a.jsx)(n,{closeButtonText:`Close`,children:`(Default) With Spacing`}),children:`(Default) With Spacing`},render:e=>(0,a.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,a.jsx)(r,{...e})]})},l={args:{containerSize:`full`,showSpacing:!1,open:!1,onClose:o(),header:(0,a.jsx)(n,{closeButtonText:`Close`,children:`Without Spacing`}),children:`Without Spacing`},render:e=>(0,a.jsxs)(`div`,{children:[`Open DBDrawer by switching open property`,(0,a.jsx)(r,{...e})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "containerSize": "full",
    "open": false,
    "showSpacing": true,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            (Default) With Spacing
                        </DBDrawerHeader>,
    "children": "(Default) With Spacing"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "containerSize": "full",
    "showSpacing": false,
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            Without Spacing
                        </DBDrawerHeader>,
    "children": "Without Spacing"
  },
  render: (properties: any) => <div>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u=[`DefaultWithSpacing`,`WithoutSpacing`]}))();export{c as DefaultWithSpacing,l as WithoutSpacing,u as __namedExportsOrder,s as default};