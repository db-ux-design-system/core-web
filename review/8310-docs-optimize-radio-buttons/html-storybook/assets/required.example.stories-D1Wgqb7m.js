import{n as e}from"./iframe-DcvCoVHV.js";import{n as t,t as n}from"./radio-DwQa3zFp.js";import{n as r}from"./rolldown-runtime-DkW27tQK.js";var i,a,o,s,c,l;function u(){return(u=r((()=>{t(),i=e(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBRadio/Required`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{name:`Reservation`,value:`window`,children:`Window seat`},render:e=>(0,i.jsxs)(`fieldset`,{children:[(0,i.jsx)(`legend`,{children:`(Default) false, optional - pick a seat reservation`}),(0,i.jsx)(n,{...e}),(0,i.jsx)(n,{name:`Reservation`,value:`aisle`,children:`Aisle seat`}),(0,i.jsx)(n,{name:`Reservation`,value:`none`,children:`No preference`})]})},c={args:{name:`TravelClass`,value:`first`,required:!0,children:`First class`},render:e=>(0,i.jsxs)(`fieldset`,{children:[(0,i.jsx)(`legend`,{children:`True, required - pick a travel class *`}),(0,i.jsx)(n,{...e}),(0,i.jsx)(n,{name:`TravelClass`,value:`second`,required:!0,children:`Second class`}),(0,i.jsx)(n,{name:`TravelClass`,value:`business`,required:!0,children:`Business class`})]})},l=[`DefaultOptionalgroup`,`Requiredgroup`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Reservation",
    "value": "window",
    "children": "Window seat"
  },
  render: (properties: any) => <fieldset><legend>
                    (Default) false, optional - pick a seat reservation
                </legend><DBRadio {...properties} /><DBRadio name="Reservation" value="aisle">
                    Aisle seat
                </DBRadio><DBRadio name="Reservation" value="none">
                    No preference
                </DBRadio></fieldset>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "TravelClass",
    "value": "first",
    "required": true,
    "children": "First class"
  },
  render: (properties: any) => <fieldset><legend>True, required - pick a travel class *</legend><DBRadio {...properties} /><DBRadio name="TravelClass" value="second" required>
                    Second class
                </DBRadio><DBRadio name="TravelClass" value="business" required>
                    Business class
                </DBRadio></fieldset>
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as DefaultOptionalgroup,c as Requiredgroup,l as __namedExportsOrder,o as default};