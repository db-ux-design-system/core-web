import{n as e}from"./iframe-M3HeINPI.js";import{n as t,t as n}from"./navigation-item-xJjfOace.js";import{n as r}from"./rolldown-runtime-DkW27tQK.js";var i,a,o,s,c,l;function u(){return(u=r((()=>{t(),i=e(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBNavigationItem/Expanded`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{text:`(Default) False`},render:e=>(0,i.jsx)(`ul`,{children:(0,i.jsx)(n,{...e})})},c={args:{text:`True`,subNavigation:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{text:`Also a navigation item with longer label`,subNavigation:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n,{text:`Navigation-Item 2`})})}),(0,i.jsx)(n,{text:`Navigation-Item 1`})]})},render:e=>(0,i.jsx)(`ul`,{children:(0,i.jsx)(n,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "text": "(Default) False"
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "text": "True",
    "subNavigation": <>
                            <DBNavigationItem text="Also a navigation item with longer label" subNavigation={<>
                                        <DBNavigationItem text="Navigation-Item 2"></DBNavigationItem>
                                    </>}></DBNavigationItem>
                            <DBNavigationItem text="Navigation-Item 1"></DBNavigationItem>
                        </>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...c.parameters?.docs?.source}}},l=[`DefaultFalse`,`True`]})))()}u();export{s as DefaultFalse,c as True,l as __namedExportsOrder,o as default};