import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./navigation-item-CgYwv9u5.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./floating-components-BNmGdAgy.js";import"./button-DnZnbJNC.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBNavigationItem/Expanded",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},active:{control:"boolean"},showIcon:{control:"boolean"},width:{control:"select",options:["full","auto"]},wrap:{control:"boolean"},text:{control:"text"},subNavigationExpanded:{control:"boolean"},backButtonId:{control:"text"},backButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},a={args:{children:e.jsx("a",{href:"#",children:"(Default) False"})},render:n=>e.jsx("ul",{children:e.jsx(t,{...n})})},o={args:{subNavigation:e.jsxs(e.Fragment,{children:[e.jsx(t,{subNavigation:e.jsx(e.Fragment,{children:e.jsx(t,{children:e.jsx("a",{href:"#",children:"Navigation-Item 2"})})}),children:"Also a navigation item with longer label"}),e.jsx(t,{children:e.jsx("a",{href:"#",children:"Navigation-Item 1"})})]}),children:"True"},render:n=>e.jsx("ul",{children:e.jsx(t,{...n})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#">(Default) False</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "subNavigation": <>
                            <DBNavigationItem subNavigation={<>
                                        <DBNavigationItem>
                                            <a href="#">Navigation-Item 2</a>
                                        </DBNavigationItem>
                                    </>}>
                                Also a navigation item with longer label
                            </DBNavigationItem>
                            <DBNavigationItem>
                                <a href="#">Navigation-Item 1</a>
                            </DBNavigationItem>
                        </>,
    "children": "True"
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...o.parameters?.docs?.source}}};const h=["DefaultFalse","True"];export{a as DefaultFalse,o as True,h as __namedExportsOrder,g as default};
