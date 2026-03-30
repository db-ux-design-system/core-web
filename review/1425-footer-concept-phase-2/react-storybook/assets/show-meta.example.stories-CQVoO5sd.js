import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./footer-CPYhAIqV.js";import"./index-D2E5Z_bU.js";import"./iframe-DbA3YEAN.js";import"./preload-helper-Wao4K5wC.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBFooter/Show Meta",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{showCopyright:{control:"boolean"},showMain:{control:"boolean"},showMeta:{control:"boolean"},width:{control:"select",options:["full","large","small"]},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{showMeta:!0,main:e.jsx("div",{style:{width:"100%",textAlign:"left"},children:"showMeta=true"}),meta:e.jsxs("ul",{style:{display:"flex",justifyContent:"flex-end",gap:"var(--db-spacing-fixed-sm)",listStyle:"none",margin:"0",padding:"0"},children:[e.jsx("li",{children:e.jsx("a",{className:"db-link",href:"#",children:"Contact"})}),e.jsx("li",{children:e.jsx("a",{className:"db-link",href:"#",children:"Imprint"})})]})},render:a=>e.jsx("div",{style:{width:"100%"},children:e.jsx(r,{...a})})},s={args:{showMeta:!1,main:e.jsx("div",{style:{width:"100%",textAlign:"left"},children:"showMeta=false"})},render:a=>e.jsx("div",{style:{width:"100%"},children:e.jsx(r,{...a})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "showMeta": true,
    "main": <div style={{
      width: '100%',
      textAlign: 'left'
    }}>
                            showMeta=true
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
    "showMeta": false,
    "main": <div style={{
      width: '100%',
      textAlign: 'left'
    }}>
                            showMeta=false
                        </div>
  },
  render: (properties: any) => <div style={{
    width: '100%'
  }}><DBFooter {...properties} /></div>
}`,...s.parameters?.docs?.source}}};const h=["showMetatrue","showMetafalse"];export{h as __namedExportsOrder,p as default,s as showMetafalse,t as showMetatrue};
