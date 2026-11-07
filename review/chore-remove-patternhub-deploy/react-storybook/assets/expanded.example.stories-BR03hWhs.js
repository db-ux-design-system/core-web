import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./navigation-item-glpYvpJ4.js";var a=t({DefaultFalse:()=>l,True:()=>u,__namedExportsOrder:()=>d,default:()=>c}),o,s,c,l,u,d;function f(){return(f=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBNavigationItem/Expanded`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:s()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},l={args:{children:(0,o.jsx)(`a`,{href:`#`,children:`(Default) False`})},render:e=>(0,o.jsx)(`ul`,{children:(0,o.jsx)(i,{...e})})},u={args:{text:`True`,subNavigation:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{text:`Also a navigation item with longer label`,subNavigation:(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i,{children:(0,o.jsx)(`a`,{href:`#`,children:`Navigation-Item 2`})})})}),(0,o.jsx)(i,{children:(0,o.jsx)(`a`,{href:`#`,children:`Navigation-Item 1`})})]})},render:e=>(0,o.jsx)(`ul`,{children:(0,o.jsx)(i,{...e})})},d=[`DefaultFalse`,`True`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#">(Default) False</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}}})))()}export{f as i,u as n,a as r,l as t};