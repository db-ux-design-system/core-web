import{n as e}from"./iframe-DqiEgONW.js";import{n as t,t as n}from"./button-rE7hsgve.js";import{i as r,n as i,r as a,t as o}from"./dialog-header-BPBCs1gZ.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p,m;function h(){return(h=s((()=>{t(),i(),r(),c=e(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDialog/Backdrop`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l(),onCancel:l()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},d={args:{id:`dialog-backdrop-strong`,backdrop:`strong`,open:!1,onClose:l(),header:(0,c.jsx)(o,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`(Default) Strong`})}),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(n,{command:`show-modal`,commandfor:`dialog-backdrop-strong`,onClick:e=>setOpenIndex(0),children:`Open: (Default) Strong`}),(0,c.jsx)(a,{...e})]})},f={args:{id:`dialog-backdrop-weak`,backdrop:`weak`,open:!1,onClose:l(),header:(0,c.jsx)(o,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`Weak`})}),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(n,{command:`show-modal`,commandfor:`dialog-backdrop-weak`,onClick:e=>setOpenIndex(1),children:`Open: Weak`}),(0,c.jsx)(a,{...e})]})},p={args:{id:`dialog-backdrop-none`,backdrop:`none`,open:!1,onClose:l(),header:(0,c.jsx)(o,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`No Backdrop`})}),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(n,{command:`show`,commandfor:`dialog-backdrop-none`,onClick:e=>setOpenIndex(2),children:`Open: No Backdrop`}),(0,c.jsx)(a,{...e})]})},m=[`DefaultStrong`,`Weak`,`NoBackdrop`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-backdrop-strong",
    "backdrop": "strong",
    "open": false,
    "onClose": fn(),
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>(Default) Strong</h2>
                        </DBDialogHeader>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-backdrop-strong" onClick={event => setOpenIndex(0)}>
                    Open: (Default) Strong
                </DBButton><DBDialog {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-backdrop-weak",
    "backdrop": "weak",
    "open": false,
    "onClose": fn(),
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>Weak</h2>
                        </DBDialogHeader>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-backdrop-weak" onClick={event => setOpenIndex(1)}>
                    Open: Weak
                </DBButton><DBDialog {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-backdrop-none",
    "backdrop": "none",
    "open": false,
    "onClose": fn(),
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>No Backdrop</h2>
                        </DBDialogHeader>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div><DBButton command="show" commandfor="dialog-backdrop-none" onClick={event => setOpenIndex(2)}>
                    Open: No Backdrop
                </DBButton><DBDialog {...properties} /></div>
}`,...p.parameters?.docs?.source}}}})))()}h();export{d as DefaultStrong,p as NoBackdrop,f as Weak,m as __namedExportsOrder,u as default};