import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./footer-CPYhAIqV.js";import"./index-D2E5Z_bU.js";import"./iframe-DbA3YEAN.js";import"./preload-helper-Wao4K5wC.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBFooter/Show Main",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{showCopyright:{control:"boolean"},showMain:{control:"boolean"},showMeta:{control:"boolean"},width:{control:"select",options:["full","large","small"]},id:{control:"text"},autofocus:{control:"boolean"}}},s={args:{showMain:!0,main:e.jsx("div",{style:{width:"100%",textAlign:"left"},children:"showMain=true"}),meta:e.jsxs("ul",{style:{display:"flex",justifyContent:"flex-end",gap:"var(--db-spacing-fixed-sm)",listStyle:"none",margin:"0",padding:"0"},children:[e.jsx("li",{children:e.jsx("a",{className:"db-link",href:"#",children:"Contact"})}),e.jsx("li",{children:e.jsx("a",{className:"db-link",href:"#",children:"Imprint"})})]})},render:a=>e.jsx("div",{style:{width:"100%"},children:e.jsx(i,{...a})})},t={args:{showMain:!1,main:e.jsx("div",{style:{width:"100%",textAlign:"left"},children:"showMain=false"}),meta:e.jsxs("ul",{style:{display:"flex",justifyContent:"flex-end",gap:"var(--db-spacing-fixed-sm)",listStyle:"none",margin:"0",padding:"0"},children:[e.jsx("li",{children:e.jsx("a",{className:"db-link",href:"#",children:"Contact"})}),e.jsx("li",{children:e.jsx("a",{className:"db-link",href:"#",children:"Imprint"})})]})},render:a=>e.jsx("div",{style:{width:"100%"},children:e.jsx(i,{...a})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "showMain": true,
    "main": <div style={{
      width: '100%',
      textAlign: 'left'
    }}>
                            showMain=true
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "showMain": false,
    "main": <div style={{
      width: '100%',
      textAlign: 'left'
    }}>
                            showMain=false
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
}`,...t.parameters?.docs?.source}}};const p=["showMaintrue","showMainfalse"];export{p as __namedExportsOrder,m as default,t as showMainfalse,s as showMaintrue};
