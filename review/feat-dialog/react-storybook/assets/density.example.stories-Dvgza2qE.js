import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./button-CmbTulbT.js";import{i,n as a,r as o,t as s}from"./dialog-header-hsFlPhvX.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),a(),i(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDialog/Density`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l(),onCancel:l()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},d={args:{id:`dialog-density-functional`,open:!1,onClose:l(),header:(0,c.jsx)(s,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`Functional`})}),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,c.jsxs)(`div`,{"data-density":`functional`,children:[(0,c.jsx)(r,{command:`show-modal`,commandfor:`dialog-density-functional`,onClick:e=>setOpenIndex(0),children:`Open: Functional`}),(0,c.jsx)(o,{...e})]})},f={args:{id:`dialog-density-regular`,open:!1,onClose:l(),header:(0,c.jsx)(s,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`(Default) Regular`})}),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,c.jsxs)(`div`,{"data-density":`regular`,children:[(0,c.jsx)(r,{command:`show-modal`,commandfor:`dialog-density-regular`,onClick:e=>setOpenIndex(1),children:`Open: (Default) Regular`}),(0,c.jsx)(o,{...e})]})},p={args:{id:`dialog-density-expressive`,open:!1,onClose:l(),header:(0,c.jsx)(s,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`Expressive`})}),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,c.jsxs)(`div`,{"data-density":`expressive`,children:[(0,c.jsx)(r,{command:`show-modal`,commandfor:`dialog-density-expressive`,onClick:e=>setOpenIndex(2),children:`Open: Expressive`}),(0,c.jsx)(o,{...e})]})},m=[`Functional`,`DefaultRegular`,`Expressive`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-density-functional",
    "open": false,
    "onClose": fn(),
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>Functional</h2>
                        </DBDialogHeader>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div data-density="functional"><DBButton command="show-modal" commandfor="dialog-density-functional" onClick={event => setOpenIndex(0)}>
                    Open: Functional
                </DBButton><DBDialog {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-density-regular",
    "open": false,
    "onClose": fn(),
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>(Default) Regular</h2>
                        </DBDialogHeader>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div data-density="regular"><DBButton command="show-modal" commandfor="dialog-density-regular" onClick={event => setOpenIndex(1)}>
                    Open: (Default) Regular
                </DBButton><DBDialog {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-density-expressive",
    "open": false,
    "onClose": fn(),
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>Expressive</h2>
                        </DBDialogHeader>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div data-density="expressive"><DBButton command="show-modal" commandfor="dialog-density-expressive" onClick={event => setOpenIndex(2)}>
                    Open: Expressive
                </DBButton><DBDialog {...properties} /></div>
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as DefaultRegular,p as Expressive,d as Functional,m as __namedExportsOrder,u as default};