import{n as e}from"./iframe-BTXAr51U.js";import{n as t,t as n}from"./paragraph-zdIru3ih.js";import{n as r,t as i}from"./text-group-DqgVa-1y.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d,f;function p(){return(p=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTextGroup/Text spacing`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},l={args:{textSpacing:!1,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:`False: the paragraphs sit directly on top of each other.`}),(0,o.jsx)(n,{children:`Nothing has to be set on the paragraphs themselves.`})]})},render:e=>(0,o.jsx)(i,{...e})},u={args:{textSpacing:!0,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:`True: every child gets half a line height above and below.`}),(0,o.jsx)(n,{children:`Two adjacent children are a full line height apart, and the group keeps half of one at its outer edges.`})]})},render:e=>(0,o.jsx)(i,{...e})},d={args:{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:`Unset: this group sets nothing, so it follows the surrounding element that opted in.`}),(0,o.jsx)(n,{children:`Use false to switch the spacing off for certain.`})]})},render:e=>(0,o.jsx)(`div`,{"data-text-spacing":`true`,children:(0,o.jsx)(i,{...e})})},f=[`Falsewithoutspacing`,`Truewithspacing`,`DefaultUnsetinherited`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": false,
    "children": <><DBParagraph>
                    False: the paragraphs sit directly on top of each other.
                </DBParagraph><DBParagraph>
                    Nothing has to be set on the paragraphs themselves.
                </DBParagraph></>
  },
  render: (properties: any) => <DBTextGroup {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><DBParagraph>
                        Unset: this group sets nothing, so it follows the
                        surrounding element that opted in.
                    </DBParagraph><DBParagraph>
                        Use false to switch the spacing off for certain.
                    </DBParagraph></>
  },
  render: (properties: any) => <div data-text-spacing="true"><DBTextGroup {...properties} /></div>
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as DefaultUnsetinherited,l as Falsewithoutspacing,u as Truewithspacing,f as __namedExportsOrder,c as default};