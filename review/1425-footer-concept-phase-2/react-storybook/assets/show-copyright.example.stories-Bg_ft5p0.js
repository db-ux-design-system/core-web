import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./footer-xYw2CLSo.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBFooter/Show Copyright`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{showCopyright:{control:`boolean`},showMain:{control:`boolean`},showMeta:{control:`boolean`},width:{control:`select`,options:[`full`,`large`,`medium`,`small`]},id:{control:`text`}}},s={args:{showCopyright:!0,meta:(0,i.jsx)(`nav`,{"aria-label":`Show copyright enabled legal navigation`,children:(0,i.jsx)(`ul`,{children:(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{className:`db-link`,href:`#privacy`,children:`Privacy`})})})}),children:(0,i.jsx)(`nav`,{"aria-label":`Show copyright enabled footer navigation`,children:(0,i.jsx)(`ul`,{children:(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{href:`#services`,className:`db-link`,children:`Services`})})})})},render:e=>(0,i.jsx)(r,{...e})},c={args:{showCopyright:!1,meta:(0,i.jsx)(`nav`,{"aria-label":`Show copyright disabled legal navigation`,children:(0,i.jsx)(`ul`,{children:(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{className:`db-link`,href:`#imprint`,children:`Imprint`})})})}),children:(0,i.jsx)(`nav`,{"aria-label":`Show copyright disabled footer navigation`,children:(0,i.jsx)(`ul`,{children:(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{href:`#contact`,className:`db-link`,children:`Contact`})})})})},render:e=>(0,i.jsx)(r,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "showCopyright": true,
    "meta": <nav aria-label="Show copyright enabled legal navigation">
                        <ul>
                            <li>
                                <a className="db-link" href="#privacy">
                                    Privacy
                                </a>
                            </li>
                        </ul>
                    </nav>,
    "children": <nav aria-label="Show copyright enabled footer navigation"><ul><li><a href="#services" className="db-link">
                                Services
                            </a></li></ul></nav>
  },
  render: (properties: any) => <DBFooter {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "showCopyright": false,
    "meta": <nav aria-label="Show copyright disabled legal navigation">
                        <ul>
                            <li>
                                <a className="db-link" href="#imprint">
                                    Imprint
                                </a>
                            </li>
                        </ul>
                    </nav>,
    "children": <nav aria-label="Show copyright disabled footer navigation"><ul><li><a href="#contact" className="db-link">
                                Contact
                            </a></li></ul></nav>
  },
  render: (properties: any) => <DBFooter {...properties} />
}`,...c.parameters?.docs?.source}}},l=[`showCopyrighttrue`,`showCopyrightfalse`]})))()}u();export{l as __namedExportsOrder,o as default,c as showCopyrightfalse,s as showCopyrighttrue};