import{j as i}from"./jsx-runtime-u17CrQMm.js";import{u as xt,c as M,g as O,f as G,a as S,b as I,s as $,d as De,i as K,e as T,h as Ee,j as _e}from"./index-cGbbigiG.js";import{r as n}from"./iframe-CgAvxnEq.js";import{b as Le,c as Ce,d as Ae,g as Fe,h as je,i as Re,e as Y,j as qt,D as j,k as Dt,l as Et,f as Be,m as _t}from"./constants-CD69XpC7.js";import{D as Me}from"./document-scroll-listener-BixpNV2P.js";import{h as Lt}from"./floating-components-BNmGdAgy.js";import{b as Ct}from"./form-components-B5fJjToM.js";import{D as Oe}from"./button-DnZnbJNC.js";import{D as R}from"./infotext-CZi0xQss.js";import{D as At}from"./input-CZfMhmXc.js";import{D as Ft}from"./tag-Bwjb1ZJJ.js";import{D as jt}from"./tooltip-COrPM-Vv.js";const h=class h{static runCallbacks(r){for(const m of Object.values(h.callbacks))typeof m=="function"&&m(r)}constructor(){if(h._instance)return h._instance;h._instance=this,self.document&&self.document.addEventListener("click",r=>h.runCallbacks(r))}addCallback(r){const m=xt();return h.callbacks[m]=r,m}removeCallback(r){delete h.callbacks[r]}};h.callbacks={},h._instance=null;let B=h;function Rt(e,r){e={width:"fixed",...e};const m=r||n.useRef(r);return i.jsx("article",{"data-spacing":"none",ref:m,...G(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),id:e.id,...O(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),className:M("db-custom-select-dropdown db-card",e.className),"data-width":e.width,children:e.children})}const Ge=n.forwardRef(Rt);Ge.__docgenInfo={description:"",methods:[],displayName:"DBCustomSelectDropdown",props:{width:{required:!1,tsType:{name:"union",raw:"CustomSelectDropdownWidthType | string",elements:[{name:"unknown[number]",raw:"(typeof CustomSelectDropdownWidthList)[number]"},{name:"string"}]},description:`Changes the behavior of the dropdown with.
Default: fixed 328px
Full: Based on the size of the form-field
Auto: Based on the size of the largest list item`},children:{required:!1,tsType:{name:"any"},description:"default slot"},className:{required:!1,tsType:{name:"string"},description:"React specific for adding className to the component."},class:{required:!1,tsType:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},description:"Workaround for TypeScript using class for all components."},id:{required:!1,tsType:{name:"string"},description:"[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset."},autofocus:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)"}}};function Bt(e,r){const m=r||n.useRef(r),[P,o]=n.useState(()=>!1);function c(g){g.stopPropagation(),e.onChange&&e.onChange(g)}function k(){if(!(e.isGroupTitle||e.type==="checkbox"))return I(e.checked,"checked")?"check":"x_placeholder"}return n.useEffect(()=>{o(!!(e.isGroupTitle||e.showDivider))},[e.isGroupTitle,e.showDivider]),i.jsx("li",{ref:m,...G(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),id:e.id,...O(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),className:M("db-custom-select-list-item",e.className,{"db-checkbox":e.type==="checkbox"&&!e.isGroupTitle,"db-radio":e.type!=="checkbox"&&!e.isGroupTitle}),"data-divider":S(P),children:e.isGroupTitle?i.jsx("span",{children:e.groupTitle}):i.jsxs("label",{"data-icon":e.type!=="checkbox"&&e.icon?e.icon:void 0,"data-show-icon":S(e.showIcon),"data-icon-trailing":k(),children:[i.jsx("input",{className:"db-custom-select-list-item-checkbox","data-disable-focus":"true",type:e.type,name:e.name,form:e.name,checked:I(e.checked,"checked"),disabled:I(e.disabled,"disabled"),value:e.value,onChange:g=>c(g)}),e.label?i.jsx(i.Fragment,{children:e.label}):i.jsx(i.Fragment,{children:e.children})]})})}const Pe=n.forwardRef(Bt);Pe.__docgenInfo={description:"",methods:[],displayName:"DBCustomSelectListItem",props:{groupTitle:{required:!1,tsType:{name:"string"},description:"Set the title of a group of items - disables radio/checkbox behavior"},type:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof CustomSelectListItemTypeList)[number]"},description:"Change the behavior of the item single(radio) or multiple(checkbox)"},children:{required:!1,tsType:{name:"any"},description:"default slot"},className:{required:!1,tsType:{name:"string"},description:"React specific for adding className to the component."},class:{required:!1,tsType:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},description:"Workaround for TypeScript using class for all components."},id:{required:!1,tsType:{name:"string"},description:"[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset."},autofocus:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)"},disabled:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"The disabled attribute can be set to keep a user from clicking on the form element."},label:{required:!1,tsType:{name:"string"},description:"The label attribute specifies the caption of the form element."},name:{required:!1,tsType:{name:"string"},description:"The name attribute gives the name of the form control, as used in form submission and in the form element's elements object."},value:{required:!1,tsType:{name:"any"},description:"The value property is to receive results from the native form element."},checked:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Define the radio or checkbox elements checked state"},change:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<T>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<T>",elements:[{name:"T"}]},name:"event"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<T>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<T>",elements:[{name:"T"}]},name:"event"}],return:{name:"void"}}},description:""},isGroupTitle:{required:!1,tsType:{name:"boolean"},description:"If the item is a group title (only text)"},showDivider:{required:!1,tsType:{name:"boolean"},description:"Show a divider on the bottom of the list item for visual grouping (don't use it on every item)"},icon:{required:!1,tsType:{name:"IconTypes"},description:"Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content."},showIcon:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:`Enables or disables the visibility of the icon. The default value depends on the component.
For many components this property is optional to reflect Figma properties.`}}};function Mt(e,r){const m=r||n.useRef(r);return i.jsx("div",{role:e.multiple?"group":"radiogroup","aria-label":e.label,ref:m,...G(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),id:e.id,...O(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),className:M("db-custom-select-list",e.className),children:i.jsx("ul",{children:e.children})})}const ze=n.forwardRef(Mt);ze.__docgenInfo={description:"",methods:[],displayName:"DBCustomSelectList",props:{label:{required:!1,tsType:{name:"string"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"any"},description:"default slot"},className:{required:!1,tsType:{name:"string"},description:"React specific for adding className to the component."},class:{required:!1,tsType:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},description:"Workaround for TypeScript using class for all components."},id:{required:!1,tsType:{name:"string"},description:"[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset."},autofocus:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)"}}};function Ot(e,r){e={clearSelectionText:"Clear selection",showClearSelection:!0,...e};const m=n.useId(),P=r||n.useRef(r),o=n.useRef(null),c=n.useRef(null),k=n.useRef(null),g=n.useRef(null),[d,Ne]=n.useState(()=>{}),[J,Ue]=n.useState(()=>{}),[Q,Z]=n.useState(()=>{}),[ee,te]=n.useState(()=>{}),[ne,z]=n.useState(()=>{}),[We,ae]=n.useState(()=>{}),[ie,oe]=n.useState(()=>{}),[He,Ve]=n.useState(()=>{}),[se,re]=n.useState(()=>{}),[le,Xe]=n.useState(()=>{}),[ce,q]=n.useState(()=>"no-validation"),[$e,Ke]=n.useState(()=>!1),[de,Ye]=n.useState(()=>{}),[ue,Je]=n.useState(()=>{}),[N,D]=n.useState(()=>""),[U,Qe]=n.useState(()=>{}),[Ze,C]=n.useState(()=>""),[b,et]=n.useState(()=>[]),[tt,nt]=n.useState(()=>!1),[me,at]=n.useState(()=>!1),[y,it]=n.useState(()=>0),[l,W]=n.useState(()=>[]),[E,A]=n.useState(()=>[]),[fe,he]=n.useState(()=>!1),[ge,ot]=n.useState(()=>{}),[st,rt]=n.useState(()=>0),[be,lt]=n.useState(()=>{}),[pe,ct]=n.useState(()=>{});function dt(t){t?.target?.contains&&t?.target?.contains(o.current)&&H()}const[ut,ye]=n.useState(()=>{});function ve(){return!!(e.validMessage??e.validation==="valid")}function we(){c.current&&(c.current.value=ft()),!c.current?.validity.valid||e.validation==="invalid"?(x(ee),z(e.invalidMessage||c.current?.validationMessage||Y),Ee()&&(C(ne),T(()=>C(""),1e3)),$e&&q(e.validation??"invalid")):ve()&&c.current?.validity.valid&&e.required?(x(Q),Ee()&&(C(e.validMessage??Be),T(()=>C(""),1e3)),q(e.validation??"valid")):$(e.message,e.showMessage)?(x(J),q(e.validation??"no-validation")):(x(se),q(e.validation??"no-validation"))}function mt(t){e.onDropdownToggle&&(t.stopPropagation(),e.onDropdownToggle(t)),t.target instanceof HTMLDetailsElement&&t.target.open?(ot(new B().addCallback(a=>wt(a))),lt(new Me().addCallback(a=>dt(a))),H(),pe?.observe(o.current),t.target.dataset.test||Te()):(ge&&new B().removeCallback(ge),be&&new Me().removeCallback(be),pe?.unobserve(o.current))}function ft(){return l?.length?l.at(0)??"":""}function x(t){const a=[];t&&a.push(t),U&&N?.length&&a.push(U),Je(a.join(" "))}function ht(){return e.selectAllLabel??j}function v(t){return t.label??t.value?.toString()??""}function gt(t){return t&&l?.includes?l?.includes(t):!1}function bt(t){const a=e.removeTagsTexts,s=e.options;if(a&&s){const u=s.findIndex(f=>f.value===t.value);if(u>=0&&u<a.length)return a[u]}return`${_t} ${v(t)}`}function pt(t,a){a&&a.stopPropagation(),V(t.value),L()}function H(){if(o.current){const t=o.current.querySelector("article");t&&T(()=>{Lt(t,o.current,e.placement??"bottom")},1)}}function yt(t){if(o.current?.open){if(self.document){const a=self.document.activeElement;if(a)if(a.getAttribute("type")==="checkbox"||a.getAttribute("type")==="radio"){const u=a?.closest("li");if(t.key==="ArrowDown"||t.key==="ArrowRight"){let f=u?.nextElementSibling;for(;f;){const p=f.querySelector("input");if(p){p.focus();break}f=f.nextElementSibling}f||F(a)}else{let f=u?.previousElementSibling;for(;f;){const p=f.querySelector("input");if(p){p.focus();break}f=f.previousElementSibling}if(!f){const p=o.current.querySelector('input[type="checkbox"]');if(p&&p!==a)F(a);else{const xe=_e(o.current);if(xe)T(()=>{xe.focus()},100);else{const qe=Array.from(o.current?.querySelectorAll('input[type="checkbox"],input[type="radio"]'));qe.length&&qe.at(-1)?.focus()}}}}}else a.getAttribute("type")==="search"&&(t.key==="ArrowUp"||t.key==="ArrowLeft")?(_(void 0,!0),L()):F(a)}}else(t.key==="ArrowDown"||t.key==="ArrowRight")&&(H(),o.current&&(o.current.open=!0),Te());t.stopPropagation(),t.preventDefault()}function vt(t){if(t.stopPropagation(),t.key==="Escape"&&o.current?.open)_(void 0,!0),L();else if(t.key==="Enter"&&o.current?.open){if(self.document){const a=self.document.activeElement;if(["checkbox","radio"].includes(a.getAttribute("type")||""))a.click(),t.preventDefault();else if(a.getAttribute("type")==="search"){const s=E?.find(u=>!u.isGroupTitle&&!u.disabled);s?.value&&(V(s.value),t.preventDefault())}}}else(t.key==="ArrowDown"||t.key==="ArrowUp"||t.key==="ArrowLeft"||t.key==="ArrowRight")&&yt(t)}function _(t,a){if(o.current){if(a)o.current.open=!1,L();else if(o.current.open&&t&&t.relatedTarget){const s=t.relatedTarget;o.current.contains(s)||T(()=>o.current.open=!1,1)}}}function wt(t){if(t){const a=t.target;o.current?.open&&!o.current.contains(a)&&(o.current.open=!1)}}function w(t){new Date().getTime()-st<200||(W(t),Ke(!0),e.onOptionSelected&&e.onOptionSelected(t??[]),rt(new Date().getTime()))}function V(t){t&&(e.multiple?l?.includes(t)?w(l.filter(a=>a!==t)):w([...l||[],t]):(w([t]),_(void 0,!0)))}function Tt(t){if(t.stopPropagation(),l?.length===y)w([]);else{const a=me&&g.current?g.current.value:void 0;w(e.options?e.options.filter(s=>!s.isGroupTitle&&(!a||s.value?.toLowerCase().includes(a.toLowerCase()))).map(s=>s.value??""):[])}}function F(t){if(o.current){const a=Array.from(o.current.querySelectorAll('input[type="checkbox"],input[type="radio"]'));if(a.length){const s=a.at(0),u=s===t&&a.length>1?a.at(1):s;u&&T(()=>{u.focus()},1)}}}function Te(){if(o.current){const t=_e(o.current);t?T(()=>{t.focus()},1):F()}}function Se(t){if(t===void 0)return;let a;if(typeof t=="string")a=t;else{const s=t;s.stopPropagation(),e.onSearch&&e.onSearch(s),a=s.target.value,ye(a)}!e.options||!a||a.length===0?A(e.options):e.searchFilter?A(e.options.filter(s=>e.searchFilter(s,a))):A(e.options.filter(s=>!s.isGroupTitle&&v(s).toLowerCase().includes(a.toLowerCase())))}function St(t){t.stopPropagation(),w([]),L()}function L(){o.current&&o.current.querySelector("summary")?.focus()}const[It,Ie]=n.useState(()=>!1),[ke,X]=n.useState(()=>!1);function kt(t){t.stopPropagation()}return n.useEffect(()=>{const t=e.id??`custom-select-${m}`;Ne(t),Ue(t+Le),Z(t+Ce),te(t+Ae),ae(t+Fe),oe(t+je),Ve(t+"-summary"),re(t+Re),Qe(t+"-selected-labels"),Xe(t+"-info"),z(e.invalidMessage||Y),typeof window<"u"&&"IntersectionObserver"in window&&ct(new IntersectionObserver(a=>{if(o.current){const s=a.find(({target:u})=>u===o.current);s&&!s.isIntersecting&&o.current.open&&(o.current.open=!1)}}))},[]),n.useEffect(()=>{o.current&&o.current.addEventListener("focusout",t=>_(t))},[o.current]),n.useEffect(()=>{if(d){const t=d+Le;oe(d+je),ae(d+Fe),Z(d+Ce),te(d+Ae),re(d+Re),$(e.message,e.showMessage)?x(t):x()}},[d]),n.useEffect(()=>{if(o.current){const t=o.current.querySelector("summary");t&&t.setAttribute("aria-describedby",e.ariaDescribedBy??(ue||""))}},[o.current,ue]),n.useEffect(()=>{e.showNoResults!==void 0?he(e.showNoResults):E&&he(E.length===0)},[e.showNoResults,e.showLoading,E]),n.useEffect(()=>{nt(!!(e.multiple&&(e.showSelectAll??y>5)))},[e.showSelectAll,y,e.multiple]),n.useEffect(()=>{at(e.showSearch??y>9)},[e.showSearch,y]),n.useEffect(()=>{const t=e.values;Array.isArray(t)?l!==t&&W(t):t==null&&l?.length!==0&&W([])},[e.values]),n.useEffect(()=>{c.current&&we()},[l,c.current]),n.useEffect(()=>{if(c.current){let t=de;t||(t=new AbortController,Ye(t));const a=e.values;Ct(c.current,()=>{const s=a||(c.current.value?[c.current.value]:[]);w(s),we()},t.signal)}},[c.current]),n.useEffect(()=>{q(e.validation)},[e.validation]),n.useEffect(()=>{l?.length===0?(Ie(!1),X(!1)):l?.length===y?(X(!1),Ie(!0)):l&&X(!0)},[l,y]),n.useEffect(()=>{A(e.options),it(e.options?.filter(t=>!t.isGroupTitle).length??0)},[e.options]),n.useEffect(()=>{if(ye(e.searchValue),e.searchValue){const t=e.searchValue;Se(t)}},[e.searchValue]),n.useEffect(()=>{e.options?.length&&et(e.options?.filter(t=>!t.value||!l?.includes?!1:!t.isGroupTitle&&l?.includes(t.value)))},[e.options,l]),n.useEffect(()=>{if(e.selectedLabels){D(e.selectedLabels);return}if(b?.length){if(e.transformSelectedLabels){const t=b,a=e.transformSelectedLabels;D(a(t));return}e.selectedType==="amount"?D(e.amountText?e.amountText:`${b?.length} ${qt}`):D(b?.map(t=>v(t)).join(", "))}else D("")},[b,e.selectedType,e.amountText,e.selectedLabels,e.transformSelectedLabels]),n.useEffect(()=>{e.onAmountChange&&e.onAmountChange(b?.length??0)},[b]),n.useEffect(()=>{k.current&&(k.current.indeterminate=!!ke)},[ke,k.current]),n.useEffect(()=>{z(e.invalidMessage||c.current?.validationMessage||Y)},[c.current,e.invalidMessage]),n.useEffect(()=>()=>{de?.abort()},[]),i.jsxs("div",{id:d,ref:P,...G(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density","onOptionSelected","onAmountChange","onDropdownToggle"]),...O(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),className:M("db-custom-select",e.className),"aria-invalid":ce==="invalid","data-custom-validity":ce,"data-width":e.formFieldWidth,"data-variant":e.variant==="floating"&&e.selectedType==="tag"&&e.multiple?"above":e.variant,"data-required":S(e.required),"data-hide-asterisk":De(e.showRequiredAsterisk),"data-placement":e.placement,"data-selected-type":e.multiple?e.selectedType:"text","data-hide-label":De(e.showLabel),"data-icon":e.icon,"data-show-icon":S(e.showIcon),children:[i.jsxs("label",{id:ie,children:[e.label??j,i.jsx("select",{role:"none",hidden:!0,id:We,tabIndex:-1,ref:c,form:e.form,name:e.name,multiple:I(e.multiple,"multiple"),disabled:I(e.disabled,"disabled"),required:I(e.required,"required"),onChange:t=>kt(t),children:e.options?.length?i.jsx(i.Fragment,{children:e.options?.map(t=>i.jsx("option",{disabled:t.disabled,value:t.value,children:v(t)},K(t,"native-select-option-")))}):null})]}),i.jsxs("details",{ref:o,open:e.open,onToggle:t=>mt(t),onKeyDown:t=>vt(t),children:[e.children,e.options?i.jsxs(i.Fragment,{children:[i.jsxs("summary",{className:"db-custom-select-form-field",id:He,"aria-disabled":S(e.disabled),"aria-labelledby":ie,children:[N?.length?i.jsxs("span",{"data-visually-hidden":S(e.selectedType==="tag"),id:U,children:[e.selectedPrefix?i.jsx("span",{"data-visually-hidden":"true",children:e.selectedPrefix}):null,N]}):null,e.selectedType==="tag"?i.jsx("div",{children:b?.map((t,a)=>i.jsx(Ft,{emphasis:"strong",behavior:"removable",removeButton:bt(t),onRemove:s=>pt(t,s),children:v(t)},K(t,"tag-")))}):null]}),i.jsxs(Ge,{width:e.dropdownWidth,children:[me?i.jsx("div",{children:i.jsx(At,{type:"search",ref:g,name:d,form:d,showLabel:!1,value:ut,label:e.searchLabel??j,placeholder:e.searchPlaceholder??e.searchLabel,ariaDescribedBy:fe||e.showLoading?le:void 0,onInput:t=>Se(t)})}):null,fe||e.showLoading?i.jsx(R,{id:le,icon:e.showLoading?"circular_arrows":void 0,semantic:e.showLoading?"informational":"warning",children:(e.showLoading?e.loadingText:e.noResultsText)??Dt}):i.jsx(i.Fragment,{children:i.jsxs(i.Fragment,{children:[tt?i.jsx("div",{children:i.jsx("div",{className:"db-checkbox db-custom-select-list-item",children:i.jsxs("label",{children:[i.jsx("input",{type:"checkbox",value:"select-all",ref:k,form:d,checked:It,onChange:t=>Tt(t)}),ht()]})})}):null,i.jsx(ze,{multiple:I(e.multiple,"multiple"),label:e.listLabel??e.label??j,children:E?.map(t=>i.jsx(Pe,{type:e.multiple?"checkbox":"radio",showDivider:t.showDivider,icon:t.icon,isGroupTitle:t.isGroupTitle,groupTitle:v(t),name:d,checked:gt(t.value),disabled:t.disabled,value:t.value,onChange:a=>V(t.value),children:t.isGroupTitle?null:i.jsx(i.Fragment,{children:v(t)})},K(t,"custom-select-list-item-")))})]})}),i.jsx("div",{children:i.jsx(Oe,{variant:"ghost",width:"full",icon:"cross",size:"small",name:d,form:d,onClick:t=>_(void 0,!0),children:e.mobileCloseButtonText??Et})})]})]}):null]}),(e.showClearSelection??!0)&&l?.length?i.jsxs(Oe,{icon:"cross",variant:"ghost",size:"small",noText:!0,name:d,form:d,onClick:t=>St(t),children:[e.clearSelectionText,i.jsx(jt,{placement:"top",children:e.clearSelectionText})]}):null,i.jsx("span",{className:"db-custom-select-placeholder","aria-hidden":S(!0),id:se,children:e.placeholder??e.label}),$(e.message,e.showMessage)?i.jsx(R,{size:"small",icon:e.messageIcon,id:J,children:e.message}):null,ve()?i.jsx(R,{size:"small",semantic:"successful",id:Q,children:e.validMessage||Be}):null,i.jsx(R,{size:"small",semantic:"critical",id:ee,children:ne}),i.jsx("span",{"data-visually-hidden":"true",role:"status",children:Ze})]})}const Gt=n.forwardRef(Ot);Gt.__docgenInfo={description:"",methods:[],displayName:"DBCustomSelect",props:{children:{required:!1,tsType:{name:"any"},description:"default slot"},className:{required:!1,tsType:{name:"string"},description:"React specific for adding className to the component."},class:{required:!1,tsType:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},description:"Workaround for TypeScript using class for all components."},id:{required:!1,tsType:{name:"string"},description:"[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset."},autofocus:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)"},ariaDescribedBy:{required:!1,tsType:{name:"string"},description:"Overwrites auto handling for aria-describedby."},form:{required:!1,tsType:{name:"string"},description:"Associates the control with a form element"},validation:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof ValidationList)[number]"},description:"Marks an input element as invalid (red) / valid (green) / no-validation (grey). Overwrites the :user-valid selector."},disabled:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"The disabled attribute can be set to keep a user from clicking on the form element."},label:{required:!1,tsType:{name:"string"},description:"The label attribute specifies the caption of the form element."},name:{required:!1,tsType:{name:"string"},description:"The name attribute gives the name of the form control, as used in form submission and in the form element's elements object."},required:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"When the required attribute specified, the user will be required to fill the form element before submitting the form.\nThe form element will be marked semantically as required and by default also visually with an asterisk '*' next to the label (unless the property `showRequiredAsterisk` is also set with the value `false`)."},showRequiredAsterisk:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"This attribute allows to specify whether a form field which is marked as required will show a visual indicator (an asterisk '*').\nIt allows to prevent adding the visual indicator but still keep the field semantically required by setting its value to `false`.\nBy default, its value is `true`, so the asterisk is shown when `required` is set."},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof LabelVariantList)[number]"},description:"Change the variant of the label to float or hidden"},placeholder:{required:!1,tsType:{name:"string"},description:"Text that appears in the form control when it has no value set"},message:{required:!1,tsType:{name:"string"},description:"Optional helper message for form components"},validMessage:{required:!1,tsType:{name:"string"},description:"Helper message for valid form components"},invalidMessage:{required:!1,tsType:{name:"string"},description:"Helper message for invalid form components"},messageIcon:{required:!1,tsType:{name:"IconTypes"},description:"Set/overwrite icon for helper message for form components"},autocomplete:{required:!1,tsType:{name:"union",raw:"string | AutoCompleteType",elements:[{name:"string"},{name:"unknown[number]",raw:"(typeof AutoCompleteList)[number]"}]},description:"See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"},showMessage:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Enables or disables the visibility of the message."},amountText:{required:!1,tsType:{name:"string"},description:'Optional: if select-type="amount" change the shown text'},listLabel:{required:!1,tsType:{name:"string"},description:"Overwrite the default aria-label (props.label) for the custom-select-list"},clearSelectionText:{required:!1,tsType:{name:"string"},description:"Label for the clear selection button"},dropdownWidth:{required:!1,tsType:{name:"union",raw:"CustomSelectDropdownWidthType | string",elements:[{name:"unknown[number]",raw:"(typeof CustomSelectDropdownWidthList)[number]"},{name:"string"}]},description:`Changes the behavior of the dropdown with.
Default: fixed 328px
Auto: Based on the size of the form-field`},formFieldWidth:{required:!1,tsType:{name:"union",raw:"WidthType | string",elements:[{name:"unknown[number]",raw:"(typeof WidthList)[number]"},{name:"string"}]},description:"Width of the component. Auto width based on children size, full width based on parent elements width."},loadingText:{required:!1,tsType:{name:"string"},description:"Dropdown - hint if data has to be loaded"},mobileCloseButtonText:{required:!1,tsType:{name:"string"},description:"Change the button text for mobile close"},multiple:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Enables CustomSelect"},noResultsText:{required:!1,tsType:{name:"string"},description:"Dropdown - hint if there are no options"},open:{required:!1,tsType:{name:"boolean"},description:"Programmatically open the dropdown. May differ if you don't use onDropdownToggle."},options:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  /**
   * Disables this option
   */
  disabled?: boolean;

  /**
   * Identifier for option
   */
  id?: string;

  /**
   * If the value is different from the label you want to show to the user.
   */
  label?: string;

  /**
   * The value for the option
   */
  value?: string;
} & DBCustomSelectListItemExtraProps`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Disables this option
   */
  disabled?: boolean;

  /**
   * Identifier for option
   */
  id?: string;

  /**
   * If the value is different from the label you want to show to the user.
   */
  label?: string;

  /**
   * The value for the option
   */
  value?: string;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1},description:"Disables this option"},{key:"id",value:{name:"string",required:!1},description:"Identifier for option"},{key:"label",value:{name:"string",required:!1},description:"If the value is different from the label you want to show to the user."},{key:"value",value:{name:"string",required:!1},description:"The value for the option"}]}},{name:"intersection",raw:`{
  /**
   * If the item is a group title (only text)
   */
  isGroupTitle?: boolean;
  /**
   * Show a divider on the bottom of the list item for visual grouping (don't use it on every item)
   */
  showDivider?: boolean;
} & IconProps & ShowIconProps`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * If the item is a group title (only text)
   */
  isGroupTitle?: boolean;
  /**
   * Show a divider on the bottom of the list item for visual grouping (don't use it on every item)
   */
  showDivider?: boolean;
}`,signature:{properties:[{key:"isGroupTitle",value:{name:"boolean",required:!1},description:"If the item is a group title (only text)"},{key:"showDivider",value:{name:"boolean",required:!1},description:"Show a divider on the bottom of the list item for visual grouping (don't use it on every item)"}]}},{name:"signature",type:"object",raw:`{
  /**
   * Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content.
   */
  icon?: IconTypes;
}`,signature:{properties:[{key:"icon",value:{name:"IconTypes",required:!1},description:"Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content."}]}},{name:"signature",type:"object",raw:`{
  /**
   * Enables or disables the visibility of the icon. The default value depends on the component.
   * For many components this property is optional to reflect Figma properties.
   */
  showIcon?: boolean | string;
}`,signature:{properties:[{key:"showIcon",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1},description:`Enables or disables the visibility of the icon. The default value depends on the component.
For many components this property is optional to reflect Figma properties.`}]}}]}]}],raw:"CustomSelectOptionType[]"},description:"You should pass in the options as an array."},placement:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof PlacementVerticalList)[number]"},description:"The `placement` attributes values change the position to absolute and adds a transform based on the placement."},removeTagsTexts:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Optional: if you use selectedType=tag and options, you need to set the removeTagsTexts for screen reader users"},searchFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: CustomSelectOptionType, filterText: string) => boolean",signature:{arguments:[{type:{name:"intersection",raw:`{
  /**
   * Disables this option
   */
  disabled?: boolean;

  /**
   * Identifier for option
   */
  id?: string;

  /**
   * If the value is different from the label you want to show to the user.
   */
  label?: string;

  /**
   * The value for the option
   */
  value?: string;
} & DBCustomSelectListItemExtraProps`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Disables this option
   */
  disabled?: boolean;

  /**
   * Identifier for option
   */
  id?: string;

  /**
   * If the value is different from the label you want to show to the user.
   */
  label?: string;

  /**
   * The value for the option
   */
  value?: string;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1},description:"Disables this option"},{key:"id",value:{name:"string",required:!1},description:"Identifier for option"},{key:"label",value:{name:"string",required:!1},description:"If the value is different from the label you want to show to the user."},{key:"value",value:{name:"string",required:!1},description:"The value for the option"}]}},{name:"intersection",raw:`{
  /**
   * If the item is a group title (only text)
   */
  isGroupTitle?: boolean;
  /**
   * Show a divider on the bottom of the list item for visual grouping (don't use it on every item)
   */
  showDivider?: boolean;
} & IconProps & ShowIconProps`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * If the item is a group title (only text)
   */
  isGroupTitle?: boolean;
  /**
   * Show a divider on the bottom of the list item for visual grouping (don't use it on every item)
   */
  showDivider?: boolean;
}`,signature:{properties:[{key:"isGroupTitle",value:{name:"boolean",required:!1},description:"If the item is a group title (only text)"},{key:"showDivider",value:{name:"boolean",required:!1},description:"Show a divider on the bottom of the list item for visual grouping (don't use it on every item)"}]}},{name:"signature",type:"object",raw:`{
  /**
   * Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content.
   */
  icon?: IconTypes;
}`,signature:{properties:[{key:"icon",value:{name:"IconTypes",required:!1},description:"Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content."}]}},{name:"signature",type:"object",raw:`{
  /**
   * Enables or disables the visibility of the icon. The default value depends on the component.
   * For many components this property is optional to reflect Figma properties.
   */
  showIcon?: boolean | string;
}`,signature:{properties:[{key:"showIcon",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1},description:`Enables or disables the visibility of the icon. The default value depends on the component.
For many components this property is optional to reflect Figma properties.`}]}}]}]},name:"option"},{type:{name:"string"},name:"filterText"}],return:{name:"boolean"}}},description:"Optional: Change the filter function for the search input"},searchLabel:{required:!1,tsType:{name:"string"},description:"Search label"},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"Search placeholder"},searchValue:{required:!1,tsType:{name:"string"},description:"Optional: Prefill the value of the search input"},selectAllLabel:{required:!1,tsType:{name:"string"},description:"Select all checkbox label"},selectedLabels:{required:!1,tsType:{name:"string"},description:`Optional: If you want to show a custom label for the selected values.
You need to define the empty state as well based on selected options.`},selectedPrefix:{required:!1,tsType:{name:"string"},description:`Optional: Prefix text announced by screen readers before the selection
(e.g. "Selected").`},selectedType:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof SelectedTypeList)[number]"},description:"Change the selected type for values shown in multi select"},showClearSelection:{required:!1,tsType:{name:"boolean"},description:"Show clear selection button (default:true). Hide it if you have very small inputs e.g. in tables."},showLoading:{required:!1,tsType:{name:"boolean"},description:"Dropdown - enable loading infotext and spinner"},showNoResults:{required:!1,tsType:{name:"boolean"},description:"Dropdown - enable no options infotext"},showSearch:{required:!1,tsType:{name:"boolean"},description:"Forces search in header."},showSelectAll:{required:!1,tsType:{name:"boolean"},description:"Forces select all checkbox (only for multiple)."},transformSelectedLabels:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedOptions?: CustomSelectOptionType[]) => string",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
  /**
   * Disables this option
   */
  disabled?: boolean;

  /**
   * Identifier for option
   */
  id?: string;

  /**
   * If the value is different from the label you want to show to the user.
   */
  label?: string;

  /**
   * The value for the option
   */
  value?: string;
} & DBCustomSelectListItemExtraProps`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Disables this option
   */
  disabled?: boolean;

  /**
   * Identifier for option
   */
  id?: string;

  /**
   * If the value is different from the label you want to show to the user.
   */
  label?: string;

  /**
   * The value for the option
   */
  value?: string;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!1},description:"Disables this option"},{key:"id",value:{name:"string",required:!1},description:"Identifier for option"},{key:"label",value:{name:"string",required:!1},description:"If the value is different from the label you want to show to the user."},{key:"value",value:{name:"string",required:!1},description:"The value for the option"}]}},{name:"intersection",raw:`{
  /**
   * If the item is a group title (only text)
   */
  isGroupTitle?: boolean;
  /**
   * Show a divider on the bottom of the list item for visual grouping (don't use it on every item)
   */
  showDivider?: boolean;
} & IconProps & ShowIconProps`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * If the item is a group title (only text)
   */
  isGroupTitle?: boolean;
  /**
   * Show a divider on the bottom of the list item for visual grouping (don't use it on every item)
   */
  showDivider?: boolean;
}`,signature:{properties:[{key:"isGroupTitle",value:{name:"boolean",required:!1},description:"If the item is a group title (only text)"},{key:"showDivider",value:{name:"boolean",required:!1},description:"Show a divider on the bottom of the list item for visual grouping (don't use it on every item)"}]}},{name:"signature",type:"object",raw:`{
  /**
   * Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content.
   */
  icon?: IconTypes;
}`,signature:{properties:[{key:"icon",value:{name:"IconTypes",required:!1},description:"Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content."}]}},{name:"signature",type:"object",raw:`{
  /**
   * Enables or disables the visibility of the icon. The default value depends on the component.
   * For many components this property is optional to reflect Figma properties.
   */
  showIcon?: boolean | string;
}`,signature:{properties:[{key:"showIcon",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1},description:`Enables or disables the visibility of the icon. The default value depends on the component.
For many components this property is optional to reflect Figma properties.`}]}}]}]}],raw:"CustomSelectOptionType[]"},name:"selectedOptions"}],return:{name:"string"}}},description:"Optional: If you want to show a custom label based on the selected options."},values:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Initial value for multi select"},onAmountChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(amount: number) => void",signature:{arguments:[{type:{name:"number"},name:"amount"}],return:{name:"void"}}},description:`Optional: if select-type="amount" when amount changes
@param amount The amount of selected checkboxes`},amountChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(amount: number) => void",signature:{arguments:[{type:{name:"number"},name:"amount"}],return:{name:"void"}}},description:`Optional: if select-type="amount" when amount changes
@param amount The amount of selected checkboxes`},onOptionSelected:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:`Triggers after some option was clicked in dropdown
@param values the changed values`},optionSelected:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:`Triggers after some option was clicked in dropdown
@param values the changed values`},onDropdownToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: GeneralEvent<HTMLDetailsElement>) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent<T>",elements:[{name:"HTMLDetailsElement"}]},name:"event"}],return:{name:"void"}}},description:"Informs the user when dropdown was toggled."},dropdownToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: GeneralEvent<HTMLDetailsElement>) => void",signature:{arguments:[{type:{name:"ReactSyntheticEvent",raw:"React.SyntheticEvent<T>",elements:[{name:"HTMLDetailsElement"}]},name:"event"}],return:{name:"void"}}},description:"Informs the user when dropdown was toggled."},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: InputEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<T>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Informs the user when a search was performed."},search:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: InputEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<T>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Informs the user when a search was performed."},icon:{required:!1,tsType:{name:"IconTypes"},description:"Define an icon by its identifier (like e.g. _user_, compare to [Icons](https://design-system.deutschebahn.com/core-web/review/main/foundations/icons/overview)) to get displayed in front of the elements content."},showIcon:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:`Enables or disables the visibility of the icon. The default value depends on the component.
For many components this property is optional to reflect Figma properties.`},showLabel:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Enables/disables the visibility of the label"}}};export{Gt as D};
