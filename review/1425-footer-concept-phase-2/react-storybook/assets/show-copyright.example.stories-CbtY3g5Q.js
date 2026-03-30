import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./footer-CPYhAIqV.js";import"./index-D2E5Z_bU.js";import"./iframe-DbA3YEAN.js";import"./preload-helper-Wao4K5wC.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBFooter/Show Copyright",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{showCopyright:{control:"boolean"},showMain:{control:"boolean"},showMeta:{control:"boolean"},width:{control:"select",options:["full","large","small"]},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{showCopyright:!0,main:e.jsx("div",{style:{width:"100%",textAlign:"left"},children:"showCopyright=true"}),meta:e.jsxs("ul",{style:{display:"flex",width:"100%",justifyContent:"flex-end",gap:"var(--db-spacing-fixed-sm)",listStyle:"none",margin:"0",padding:"0"},children:[e.jsx("li",{children:e.jsx("a",{className:"db-link",href:"#",children:"Contact"})}),e.jsx("li",{children:e.jsx("a",{className:"db-link",href:"#",children:"Imprint"})})]})},render:i=>e.jsx("div",{style:{width:"100%"},children:e.jsx(r,{...i})})},s={args:{showCopyright:!1,main:e.jsx("div",{style:{width:"100%",textAlign:"left"},children:"showCopyright=false"}),meta:e.jsxs("ul",{style:{display:"flex",width:"100%",justifyContent:"flex-end",gap:"var(--db-spacing-fixed-sm)",listStyle:"none",margin:"0",padding:"0"},children:[e.jsx("li",{children:e.jsx("a",{className:"db-link",href:"#",children:"Contact"})}),e.jsx("li",{children:e.jsx("a",{className:"db-link",href:"#",children:"Imprint"})})]})},render:i=>e.jsx("div",{style:{width:"100%"},children:e.jsx(r,{...i})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "showCopyright": true,
    "main": <div style={{
      width: '100%',
      textAlign: 'left'
    }}>
                            showCopyright=true
                        </div>,
    "meta": <ul style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-end',
      gap: 'var(--db-spacing-fixed-sm)',
      listStyle: 'none',
      margin: '0',
      padding: '0'
    }}>
                            <li>
                                <a className="db-link" href="#">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a className="db-link" href="#">
                                    Imprint
                                </a>
                            </li>
                        </ul>
  },
  render: (properties: any) => <div style={{
    width: '100%'
  }}><DBFooter {...properties} /></div>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "showCopyright": false,
    "main": <div style={{
      width: '100%',
      textAlign: 'left'
    }}>
                            showCopyright=false
                        </div>,
    "meta": <ul style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-end',
      gap: 'var(--db-spacing-fixed-sm)',
      listStyle: 'none',
      margin: '0',
      padding: '0'
    }}>
                            <li>
                                <a className="db-link" href="#">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a className="db-link" href="#">
                                    Imprint
                                </a>
                            </li>
                        </ul>
  },
  render: (properties: any) => <div style={{
    width: '100%'
  }}><DBFooter {...properties} /></div>
}`,...s.parameters?.docs?.source}}};const c=["showCopyrighttrue","showCopyrightfalse"];export{c as __namedExportsOrder,p as default,s as showCopyrightfalse,t as showCopyrighttrue};
