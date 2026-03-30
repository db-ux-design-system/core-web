import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./footer-CPYhAIqV.js";import"./index-D2E5Z_bU.js";import"./iframe-DbA3YEAN.js";import"./preload-helper-Wao4K5wC.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBFooter/Width",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{showCopyright:{control:"boolean"},showMain:{control:"boolean"},showMeta:{control:"boolean"},width:{control:"select",options:["full","large","small"]},id:{control:"text"},autofocus:{control:"boolean"}}},i={args:{width:"full",main:e.jsx("div",{style:{width:"100%",textAlign:"left"},children:"Full"}),meta:e.jsxs("ul",{style:{display:"flex",justifyContent:"flex-end",gap:"var(--db-spacing-fixed-sm)",listStyle:"none",margin:"0",padding:"0"},children:[e.jsx("li",{children:e.jsx("a",{className:"db-link",href:"#",children:"Contact"})}),e.jsx("li",{children:e.jsx("a",{className:"db-link",href:"#",children:"Imprint"})})]})},render:l=>e.jsx("div",{style:{width:"100%"},children:e.jsx(a,{...l})})},t={args:{width:"large",main:e.jsx("div",{style:{width:"100%",textAlign:"left"},children:"Large"}),meta:e.jsxs("ul",{style:{display:"flex",justifyContent:"flex-end",gap:"var(--db-spacing-fixed-sm)",listStyle:"none",margin:"0",padding:"0"},children:[e.jsx("li",{children:e.jsx("a",{className:"db-link",href:"#",children:"Contact"})}),e.jsx("li",{children:e.jsx("a",{className:"db-link",href:"#",children:"Imprint"})})]})},render:l=>e.jsx("div",{style:{width:"100%"},children:e.jsx(a,{...l})})},s={args:{width:"small",main:e.jsx("div",{style:{width:"100%",textAlign:"left"},children:"Small"}),meta:e.jsxs("ul",{style:{display:"flex",justifyContent:"flex-end",gap:"var(--db-spacing-fixed-sm)",listStyle:"none",margin:"0",padding:"0"},children:[e.jsx("li",{children:e.jsx("a",{className:"db-link",href:"#",children:"Contact"})}),e.jsx("li",{children:e.jsx("a",{className:"db-link",href:"#",children:"Imprint"})})]})},render:l=>e.jsx("div",{style:{width:"100%"},children:e.jsx(a,{...l})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "main": <div style={{
      width: '100%',
      textAlign: 'left'
    }}>
                            Full
                        </div>,
    "meta": <ul style={{
      display: 'flex',
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
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "large",
    "main": <div style={{
      width: '100%',
      textAlign: 'left'
    }}>
                            Large
                        </div>,
    "meta": <ul style={{
      display: 'flex',
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
    "width": "small",
    "main": <div style={{
      width: '100%',
      textAlign: 'left'
    }}>
                            Small
                        </div>,
    "meta": <ul style={{
      display: 'flex',
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
}`,...s.parameters?.docs?.source}}};const h=["full","large","small"];export{h as __namedExportsOrder,p as default,i as full,t as large,s as small};
