import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-HiccZljf.js";import{n as a,t as o}from"./drawer-header-gZlJfv-V.js";import{n as s,t as c}from"./drawer-0Jg33BAA.js";var l=t({DefaultRegular:()=>m,Expressive:()=>h,Functional:()=>p,__namedExportsOrder:()=>g,default:()=>f}),u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),a(),s(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBDrawer/Density`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:d(),onCancel:d()},argTypes:{open:{control:`boolean`},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},showSpacing:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`to-left`,`to-right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},p={args:{propOverrides:{id:`drawer-density-functional`},header:(0,u.jsx)(o,{closeButtonText:`Close`,children:(0,u.jsx)(`h2`,{children:`Functional`})}),children:`Functional`},render:e=>(0,u.jsxs)(`div`,{"data-density":`functional`,children:[(0,u.jsx)(i,{command:`show-modal`,commandfor:`drawer-density-functional`,children:`Open: Functional`}),(0,u.jsx)(c,{...e})]})},m={args:{propOverrides:{id:`drawer-density-regular`},header:(0,u.jsx)(o,{closeButtonText:`Close`,children:(0,u.jsx)(`h2`,{children:`(Default) Regular`})}),children:`(Default) Regular`},render:e=>(0,u.jsxs)(`div`,{"data-density":`regular`,children:[(0,u.jsx)(i,{command:`show-modal`,commandfor:`drawer-density-regular`,children:`Open: (Default) Regular`}),(0,u.jsx)(c,{...e})]})},h={args:{propOverrides:{id:`drawer-density-expressive`},header:(0,u.jsx)(o,{closeButtonText:`Close`,children:(0,u.jsx)(`h2`,{children:`Expressive`})}),children:`Expressive`},render:e=>(0,u.jsxs)(`div`,{"data-density":`expressive`,children:[(0,u.jsx)(i,{command:`show-modal`,commandfor:`drawer-density-expressive`,children:`Open: Expressive`}),(0,u.jsx)(c,{...e})]})},g=[`Functional`,`DefaultRegular`,`Expressive`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-density-functional'
    },
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>Functional</h2>
                        </DBDrawerHeader>,
    "children": "Functional"
  },
  render: (properties: any) => <div data-density="functional"><DBButton command="show-modal" commandfor="drawer-density-functional">
                    Open: Functional
                </DBButton><DBDrawer {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-density-regular'
    },
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>(Default) Regular</h2>
                        </DBDrawerHeader>,
    "children": "(Default) Regular"
  },
  render: (properties: any) => <div data-density="regular"><DBButton command="show-modal" commandfor="drawer-density-regular">
                    Open: (Default) Regular
                </DBButton><DBDrawer {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "propOverrides": {
      id: 'drawer-density-expressive'
    },
    "header": <DBDrawerHeader closeButtonText="Close">
                            <h2>Expressive</h2>
                        </DBDrawerHeader>,
    "children": "Expressive"
  },
  render: (properties: any) => <div data-density="expressive"><DBButton command="show-modal" commandfor="drawer-density-expressive">
                    Open: Expressive
                </DBButton><DBDrawer {...properties} /></div>
}`,...h.parameters?.docs?.source}}}})))()}export{_ as a,l as i,h as n,p as r,m as t};