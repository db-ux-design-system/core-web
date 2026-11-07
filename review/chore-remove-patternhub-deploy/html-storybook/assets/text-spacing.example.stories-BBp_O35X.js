import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./paragraph-Da_20bXe.js";import{n as a,t as o}from"./text-group-DnOZfylj.js";var s=t({DefaultUnsetinherited:()=>p,Falsewithoutspacing:()=>d,Truewithspacing:()=>f,__namedExportsOrder:()=>m,default:()=>u}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTextGroup/Text spacing`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},d={args:{textSpacing:!1,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{children:`False: the paragraphs sit directly on top of each other.`}),(0,c.jsx)(i,{children:`Nothing has to be set on the paragraphs themselves.`})]})},render:e=>(0,c.jsx)(o,{...e})},f={args:{textSpacing:!0,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{children:`True: every child gets half a line height above and below.`}),(0,c.jsx)(i,{children:`Two adjacent children are a full line height apart, and the group keeps half of one at its outer edges.`})]})},render:e=>(0,c.jsx)(o,{...e})},p={args:{children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{children:`Unset: this group sets nothing, so it follows the surrounding element that opted in.`}),(0,c.jsx)(i,{children:`Use false to switch the spacing off for certain.`})]})},render:e=>(0,c.jsx)(`div`,{"data-text-spacing":`true`,children:(0,c.jsx)(o,{...e})})},m=[`Falsewithoutspacing`,`Truewithspacing`,`DefaultUnsetinherited`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": false,
    "children": <><DBParagraph>
                    False: the paragraphs sit directly on top of each other.
                </DBParagraph><DBParagraph>
                    Nothing has to be set on the paragraphs themselves.
                </DBParagraph></>
  },
  render: (properties: any) => <DBTextGroup {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true,
    "children": <><DBParagraph>
                    True: every child gets half a line height above and below.
                </DBParagraph><DBParagraph>
                    Two adjacent children are a full line height apart, and the
                    group keeps half of one at its outer edges.
                </DBParagraph></>
  },
  render: (properties: any) => <DBTextGroup {...properties} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><DBParagraph>
                        Unset: this group sets nothing, so it follows the
                        surrounding element that opted in.
                    </DBParagraph><DBParagraph>
                        Use false to switch the spacing off for certain.
                    </DBParagraph></>
  },
  render: (properties: any) => <div data-text-spacing="true"><DBTextGroup {...properties} /></div>
}`,...p.parameters?.docs?.source}}}})))()}export{s as a,h as i,d as n,f as r,p as t};