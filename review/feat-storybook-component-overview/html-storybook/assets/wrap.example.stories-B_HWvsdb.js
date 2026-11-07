import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./navigation-item-B5fx7dqF.js";var a=t({DefaultFalse:()=>l,True:()=>u,__namedExportsOrder:()=>d,default:()=>c}),o,s,c,l,u,d;function f(){return(f=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBNavigationItem/Wrap`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:s()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},l={args:{children:(0,o.jsx)(`a`,{href:`#`,children:`No Wrap (Default)`})},render:e=>(0,o.jsx)(`ul`,{children:(0,o.jsx)(i,{...e})})},u={args:{text:`This is a very long text that is broken into multiple lines.`,icon:`x_placeholder`,subNavigation:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{text:`Sub-Navi-Item 1`,subNavigation:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{children:(0,o.jsx)(`a`,{href:`#`,children:`Sub-Sub-Navi-Item 1`})}),(0,o.jsx)(i,{children:(0,o.jsx)(`a`,{href:`#`,children:`Sub-Sub-Navi-Item 2`})})]})}),(0,o.jsx)(i,{children:(0,o.jsx)(`a`,{href:`#`,children:`Sub-Navi-Item 2`})})]}),showIcon:!0,wrap:!0},render:e=>(0,o.jsx)(`ul`,{style:{width:`200px`},children:(0,o.jsx)(i,{...e})})},d=[`DefaultFalse`,`True`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#">No Wrap (Default)</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "text": "This is a very long text that is broken into multiple lines.",
    "icon": "x_placeholder",
    "subNavigation": <>
                            <DBNavigationItem text="Sub-Navi-Item 1" subNavigation={<>
                                        <DBNavigationItem>
                                            <a href="#">Sub-Sub-Navi-Item 1</a>
                                        </DBNavigationItem>
                                        <DBNavigationItem>
                                            <a href="#">Sub-Sub-Navi-Item 2</a>
                                        </DBNavigationItem>
                                    </>}></DBNavigationItem>
                            <DBNavigationItem>
                                <a href="#">Sub-Navi-Item 2</a>
                            </DBNavigationItem>
                        </>,
    "showIcon": true,
    "wrap": true
  },
  render: (properties: any) => <ul style={{
    width: '200px'
  }}><DBNavigationItem {...properties} /></ul>
}`,...u.parameters?.docs?.source}}}})))()}export{a as i,u as n,f as r,l as t};