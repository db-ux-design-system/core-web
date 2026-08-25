import{n as e}from"./iframe-CLiCEex2.js";import{n as t,t as n}from"./footer-DsJx6SYs.js";import{n as r}from"./rolldown-runtime-DkW27tQK.js";var i,a,o,s,c,l;function u(){return(u=r((()=>{t(),i=e(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBFooter/Show Main`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{showCopyright:{control:`boolean`},showMain:{control:`boolean`},showMeta:{control:`boolean`},width:{control:`select`,options:[`full`,`large`,`medium`,`small`]},id:{control:`text`}}},s={args:{showMain:!0,meta:(0,i.jsx)(`nav`,{"aria-label":`Legal navigation`,children:(0,i.jsx)(`ul`,{children:(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{className:`db-link`,href:`#privacy`,children:`Privacy`})})})}),children:(0,i.jsx)(`nav`,{"aria-label":`Footer navigation`,children:(0,i.jsx)(`ul`,{children:(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{href:`#services`,className:`db-link`,children:`Services`})})})})},render:e=>(0,i.jsx)(n,{...e})},c={args:{showMain:!1,meta:(0,i.jsx)(`nav`,{"aria-label":`Legal navigation`,children:(0,i.jsx)(`ul`,{children:(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{className:`db-link`,href:`#imprint`,children:`Imprint`})})})}),children:(0,i.jsx)(`nav`,{"aria-label":`Footer navigation`,children:(0,i.jsx)(`ul`,{children:(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{href:`#contact`,className:`db-link`,children:`Contact`})})})})},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "showMain": true,
    "meta": <nav aria-label="Legal navigation">
                        <ul>
                            <li>
                                <a className="db-link" href="#privacy">
                                    Privacy
                                </a>
                            </li>
                        </ul>
                    </nav>,
    "children": <nav aria-label="Footer navigation"><ul><li><a href="#services" className="db-link">
                                Services
                            </a></li></ul></nav>
  },
  render: (properties: any) => <DBFooter {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "showMain": false,
    "meta": <nav aria-label="Legal navigation">
                        <ul>
                            <li>
                                <a className="db-link" href="#imprint">
                                    Imprint
                                </a>
                            </li>
                        </ul>
                    </nav>,
    "children": <nav aria-label="Footer navigation"><ul><li><a href="#contact" className="db-link">
                                Contact
                            </a></li></ul></nav>
  },
  render: (properties: any) => <DBFooter {...properties} />
}`,...c.parameters?.docs?.source}}},l=[`showMaintrue`,`showMainfalse`]})))()}u();export{l as __namedExportsOrder,o as default,c as showMainfalse,s as showMaintrue};