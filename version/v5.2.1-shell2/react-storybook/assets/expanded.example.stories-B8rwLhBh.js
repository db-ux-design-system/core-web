import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./navigation-item-ChTcBj9B.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBNavigationItem/Expanded`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{children:(0,i.jsx)(`a`,{href:`#`,children:`(Default) False`})},render:e=>(0,i.jsx)(`ul`,{children:(0,i.jsx)(r,{...e})})},c={args:{text:`True`,subNavigation:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{text:`Also a navigation item with longer label`,subNavigation:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r,{children:(0,i.jsx)(`a`,{href:`#`,children:`Navigation-Item 2`})})})}),(0,i.jsx)(r,{children:(0,i.jsx)(`a`,{href:`#`,children:`Navigation-Item 1`})})]})},render:e=>(0,i.jsx)(`ul`,{children:(0,i.jsx)(r,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#">(Default) False</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "text": "True",
    "subNavigation": <>
                            <DBNavigationItem text="Also a navigation item with longer label" subNavigation={<>
                                        <DBNavigationItem>
                                            <a href="#">Navigation-Item 2</a>
                                        </DBNavigationItem>
                                    </>}></DBNavigationItem>
                            <DBNavigationItem>
                                <a href="#">Navigation-Item 1</a>
                            </DBNavigationItem>
                        </>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...c.parameters?.docs?.source}}},l=[`DefaultFalse`,`True`]})))()}u();export{s as DefaultFalse,c as True,l as __namedExportsOrder,o as default};