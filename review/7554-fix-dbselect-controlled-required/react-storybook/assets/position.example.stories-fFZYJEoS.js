import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./drawer-header-DaJsV_sQ.js";import{n as i,t as a}from"./drawer-DKbP1Epe.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDrawer/Position`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},rounded:{control:`boolean`},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},l={args:{position:`absolute`,open:!1,onClose:s(),header:(0,o.jsx)(r,{closeButtonText:`Close`,children:`Absolute`}),children:`Absolute`},render:e=>(0,o.jsxs)(`div`,{style:{position:`relative`,height:`500px`,width:`100%`,border:`2px dashed currentColor`,overflow:`hidden`},children:[`Open DBDrawer by switching open property`,(0,o.jsx)(a,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "position": "absolute",
    "open": false,
    "onClose": fn(),
    "header": <DBDrawerHeader closeButtonText="Close">
                            Absolute
                        </DBDrawerHeader>,
    "children": "Absolute"
  },
  render: (properties: any) => <div style={{
    position: 'relative',
    height: '500px',
    width: '100%',
    border: '2px dashed currentColor',
    overflow: 'hidden'
  }}>Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u=[`DefaultFixed`]})))()}d();export{l as DefaultFixed,u as __namedExportsOrder,c as default};