import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./radio-Cg7DF_U-.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBRadio/Required`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{name:`Reservation`,value:`window`,children:`Window seat`},render:e=>(0,i.jsxs)(`fieldset`,{children:[(0,i.jsx)(`legend`,{children:`(Default) false, optional - pick a seat reservation`}),(0,i.jsx)(r,{...e}),(0,i.jsx)(r,{name:`Reservation`,value:`aisle`,children:`Aisle seat`}),(0,i.jsx)(r,{name:`Reservation`,value:`none`,children:`No preference`})]})},c={args:{name:`TravelClass`,value:`first`,required:!0,children:`First class`},render:e=>(0,i.jsxs)(`fieldset`,{children:[(0,i.jsx)(`legend`,{children:`True, required - pick a travel class *`}),(0,i.jsx)(r,{...e}),(0,i.jsx)(r,{name:`TravelClass`,value:`second`,required:!0,children:`Second class`}),(0,i.jsx)(r,{name:`TravelClass`,value:`business`,required:!0,children:`Business class`})]})},l=[`DefaultOptionalgroup`,`Requiredgroup`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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