import{n as e}from"./iframe-DqiEgONW.js";import{n as t,t as n}from"./button-rE7hsgve.js";import{i as r,n as i,r as a,t as o}from"./dialog-header-BPBCs1gZ.js";import{n as s}from"./rolldown-runtime-DkW27tQK.js";var c,l,u,d,f,p,m,h;function g(){return(g=s((()=>{t(),i(),r(),c=e(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDialog/Container Size`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l(),onCancel:l()},argTypes:{open:{control:`boolean`},backdrop:{control:`select`,options:[`none`,`strong`,`weak`]},containerSize:{control:`select`,options:[`small`,`medium`,`large`,`full`]},header:{control:`text`},footer:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`},onCancel:{action:`onCancel`}}},d={args:{id:`dialog-size-small`,containerSize:`small`,open:!1,onClose:l(),header:(0,c.jsx)(o,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`Small`})}),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(n,{command:`show-modal`,commandfor:`dialog-size-small`,onClick:e=>setOpenIndex(0),children:`Open: Small`}),(0,c.jsx)(a,{...e})]})},f={args:{id:`dialog-size-medium`,containerSize:`medium`,open:!1,onClose:l(),header:(0,c.jsx)(o,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`(Default) Medium`})}),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(n,{command:`show-modal`,commandfor:`dialog-size-medium`,onClick:e=>setOpenIndex(1),children:`Open: (Default) Medium`}),(0,c.jsx)(a,{...e})]})},p={args:{id:`dialog-size-large`,containerSize:`large`,open:!1,onClose:l(),header:(0,c.jsx)(o,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`Large`})}),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(n,{command:`show-modal`,commandfor:`dialog-size-large`,onClick:e=>setOpenIndex(2),children:`Open: Large`}),(0,c.jsx)(a,{...e})]})},m={args:{id:`dialog-size-full`,containerSize:`full`,open:!1,onClose:l(),header:(0,c.jsx)(o,{closeButtonText:`Close`,children:(0,c.jsx)(`h2`,{children:`Full`})}),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`}),(0,c.jsx)(`p`,{children:`Lorem ipsum dolor sit amet.`})]})},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(n,{command:`show-modal`,commandfor:`dialog-size-full`,onClick:e=>setOpenIndex(3),children:`Open: Full`}),(0,c.jsx)(a,{...e})]})},h=[`Small`,`DefaultMedium`,`Large`,`Full`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-size-small",
    "containerSize": "small",
    "open": false,
    "onClose": fn(),
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>Small</h2>
                        </DBDialogHeader>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-size-small" onClick={event => setOpenIndex(0)}>
                    Open: Small
                </DBButton><DBDialog {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-size-medium",
    "containerSize": "medium",
    "open": false,
    "onClose": fn(),
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>(Default) Medium</h2>
                        </DBDialogHeader>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-size-medium" onClick={event => setOpenIndex(1)}>
                    Open: (Default) Medium
                </DBButton><DBDialog {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-size-large",
    "containerSize": "large",
    "open": false,
    "onClose": fn(),
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>Large</h2>
                        </DBDialogHeader>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-size-large" onClick={event => setOpenIndex(2)}>
                    Open: Large
                </DBButton><DBDialog {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "dialog-size-full",
    "containerSize": "full",
    "open": false,
    "onClose": fn(),
    "header": <DBDialogHeader closeButtonText="Close">
                            <h2>Full</h2>
                        </DBDialogHeader>,
    "children": <><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p><p>Lorem ipsum dolor sit amet.</p></>
  },
  render: (properties: any) => <div><DBButton command="show-modal" commandfor="dialog-size-full" onClick={event => setOpenIndex(3)}>
                    Open: Full
                </DBButton><DBDialog {...properties} /></div>
}`,...m.parameters?.docs?.source}}}})))()}g();export{f as DefaultMedium,m as Full,p as Large,d as Small,h as __namedExportsOrder,u as default};