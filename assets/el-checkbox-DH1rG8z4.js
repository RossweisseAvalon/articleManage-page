import{aD as Y,J,k as W,bb as U,j as F,c as f,ay as P,t as ee,Z as ae,a3 as le,q as O,aw as I,bv as T,l as pe,as as Z,d as E,N as ne,u as A,o as x,a as te,w as oe,x as Q,n as C,e as n,ab as N,H as S,bh as $,a4 as w,bw as z,r as M,a5 as ge,y as ue,aj as se,a2 as j,g as ie,_ as R,f as Ce,b as xe,i as ye,p as Ve,au as Se,h as Le,O as re}from"./index-CCMOTNZm.js";import{b as ce,U as D,p as Be}from"./el-input-BjAHswYO.js";import{f as Ee,c as K,e as de,a as X,d as be,b as G}from"./_plugin-vue_export-helper-CDDQ20vA.js";import{i as _e}from"./isEqual-BnqUEraH.js";const ve={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},border:Boolean,size:Y,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...ce(["ariaControls"])},me={[D]:e=>J(e)||W(e)||U(e),change:e=>J(e)||W(e)||U(e)},_=Symbol("checkboxGroupContextKey"),Ie=({model:e,isChecked:c})=>{const i=F(_,void 0),l=f(()=>{var r,d;const t=(r=i==null?void 0:i.max)==null?void 0:r.value,v=(d=i==null?void 0:i.min)==null?void 0:d.value;return!P(t)&&e.value.length>=t&&!c.value||!P(v)&&e.value.length<=v&&c.value});return{isDisabled:Ee(f(()=>(i==null?void 0:i.disabled.value)||l.value)),isLimitDisabled:l}},Fe=(e,{model:c,isLimitExceeded:i,hasOwnLabel:l,isDisabled:b,isLabeledByFormItem:r})=>{const d=F(_,void 0),{formItem:t}=K(),{emit:v}=le();function s(a){var h,k,u,p;return[!0,e.trueValue,e.trueLabel].includes(a)?(k=(h=e.trueValue)!=null?h:e.trueLabel)!=null?k:!0:(p=(u=e.falseValue)!=null?u:e.falseLabel)!=null?p:!1}function o(a,h){v("change",s(a),h)}function m(a){if(i.value)return;const h=a.target;v("change",s(h.checked),a)}async function y(a){i.value||!l.value&&!b.value&&r.value&&(a.composedPath().some(u=>u.tagName==="LABEL")||(c.value=s([!1,e.falseValue,e.falseLabel].includes(c.value)),await ae(),o(c.value,a)))}const L=f(()=>(d==null?void 0:d.validateEvent)||e.validateEvent);return ee(()=>e.modelValue,()=>{L.value&&(t==null||t.validate("change").catch(a=>de()))}),{handleChange:m,onClickRoot:y}},Ne=e=>{const c=O(!1),{emit:i}=le(),l=F(_,void 0),b=f(()=>P(l)===!1),r=O(!1),d=f({get(){var t,v;return b.value?(t=l==null?void 0:l.modelValue)==null?void 0:t.value:(v=e.modelValue)!=null?v:c.value},set(t){var v,s;b.value&&I(t)?(r.value=((v=l==null?void 0:l.max)==null?void 0:v.value)!==void 0&&t.length>(l==null?void 0:l.max.value)&&t.length>d.value.length,r.value===!1&&((s=l==null?void 0:l.changeEvent)==null||s.call(l,t))):(i(D,t),c.value=t)}});return{model:d,isGroup:b,isLimitExceeded:r}},$e=(e,c,{model:i})=>{const l=F(_,void 0),b=O(!1),r=f(()=>T(e.value)?e.label:e.value),d=f(()=>{const o=i.value;return U(o)?o:I(o)?pe(r.value)?o.map(Z).some(m=>_e(m,r.value)):o.map(Z).includes(r.value):o!=null?o===e.trueValue||o===e.trueLabel:!!o}),t=X(f(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value}),{prop:!0}),v=X(f(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value})),s=f(()=>!!c.default||!T(r.value));return{checkboxButtonSize:t,isChecked:d,isFocused:b,checkboxSize:v,hasOwnLabel:s,actualValue:r}},fe=(e,c)=>{const{formItem:i}=K(),{model:l,isGroup:b,isLimitExceeded:r}=Ne(e),{isFocused:d,isChecked:t,checkboxButtonSize:v,checkboxSize:s,hasOwnLabel:o,actualValue:m}=$e(e,c,{model:l}),{isDisabled:y}=Ie({model:l,isChecked:t}),{inputId:L,isLabeledByFormItem:a}=be(e,{formItemContext:i,disableIdGeneration:o,disableIdManagement:b}),{handleChange:h,onClickRoot:k}=Fe(e,{model:l,isLimitExceeded:r,hasOwnLabel:o,isDisabled:y,isLabeledByFormItem:a});return(()=>{function p(){var V,g;I(l.value)&&!l.value.includes(m.value)?l.value.push(m.value):l.value=(g=(V=e.trueValue)!=null?V:e.trueLabel)!=null?g:!0}e.checked&&p()})(),G({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},f(()=>b.value&&T(e.value))),G({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},f(()=>!!e.trueLabel)),G({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},f(()=>!!e.falseLabel)),{inputId:L,isLabeledByFormItem:a,isChecked:t,isDisabled:y,isFocused:d,checkboxButtonSize:v,checkboxSize:s,hasOwnLabel:o,model:l,actualValue:m,handleChange:h,onClickRoot:k}},we=E({name:"ElCheckbox"}),ze=E({...we,props:ve,emits:me,setup(e){const c=e,i=ne(),{inputId:l,isLabeledByFormItem:b,isChecked:r,isDisabled:d,isFocused:t,checkboxSize:v,hasOwnLabel:s,model:o,actualValue:m,handleChange:y,onClickRoot:L}=fe(c,i),a=A("checkbox"),h=f(()=>[a.b(),a.m(v.value),a.is("disabled",d.value),a.is("bordered",c.border),a.is("checked",r.value)]),k=f(()=>[a.e("input"),a.is("disabled",d.value),a.is("checked",r.value),a.is("indeterminate",c.indeterminate),a.is("focus",t.value)]);return(u,p)=>(x(),te(ie(!n(s)&&n(b)?"span":"label"),{class:C(n(h)),"aria-controls":u.indeterminate?u.ariaControls:null,onClick:n(L)},{default:oe(()=>{var V,g,q,H;return[Q("span",{class:C(n(k))},[u.trueValue||u.falseValue||u.trueLabel||u.falseLabel?N((x(),S("input",{key:0,id:n(l),"onUpdate:modelValue":B=>$(o)?o.value=B:null,class:C(n(a).e("original")),type:"checkbox",indeterminate:u.indeterminate,name:u.name,tabindex:u.tabindex,disabled:n(d),"true-value":(g=(V=u.trueValue)!=null?V:u.trueLabel)!=null?g:!0,"false-value":(H=(q=u.falseValue)!=null?q:u.falseLabel)!=null?H:!1,onChange:n(y),onFocus:B=>t.value=!0,onBlur:B=>t.value=!1,onClick:w(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[z,n(o)]]):N((x(),S("input",{key:1,id:n(l),"onUpdate:modelValue":B=>$(o)?o.value=B:null,class:C(n(a).e("original")),type:"checkbox",indeterminate:u.indeterminate,disabled:n(d),value:n(m),name:u.name,tabindex:u.tabindex,onChange:n(y),onFocus:B=>t.value=!0,onBlur:B=>t.value=!1,onClick:w(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","disabled","value","name","tabindex","onChange","onFocus","onBlur","onClick"])),[[z,n(o)]]),Q("span",{class:C(n(a).e("inner"))},null,2)],2),n(s)?(x(),S("span",{key:0,class:C(n(a).e("label"))},[M(u.$slots,"default"),u.$slots.default?j("v-if",!0):(x(),S(ge,{key:0},[ue(se(u.label),1)],64))],2)):j("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var De=R(ze,[["__file","checkbox.vue"]]);const Ge=E({name:"ElCheckboxButton"}),Ue=E({...Ge,props:ve,emits:me,setup(e){const c=e,i=ne(),{isFocused:l,isChecked:b,isDisabled:r,checkboxButtonSize:d,model:t,actualValue:v,handleChange:s}=fe(c,i),o=F(_,void 0),m=A("checkbox"),y=f(()=>{var a,h,k,u;const p=(h=(a=o==null?void 0:o.fill)==null?void 0:a.value)!=null?h:"";return{backgroundColor:p,borderColor:p,color:(u=(k=o==null?void 0:o.textColor)==null?void 0:k.value)!=null?u:"",boxShadow:p?`-1px 0 0 0 ${p}`:void 0}}),L=f(()=>[m.b("button"),m.bm("button",d.value),m.is("disabled",r.value),m.is("checked",b.value),m.is("focus",l.value)]);return(a,h)=>{var k,u,p,V;return x(),S("label",{class:C(n(L))},[a.trueValue||a.falseValue||a.trueLabel||a.falseLabel?N((x(),S("input",{key:0,"onUpdate:modelValue":g=>$(t)?t.value=g:null,class:C(n(m).be("button","original")),type:"checkbox",name:a.name,tabindex:a.tabindex,disabled:n(r),"true-value":(u=(k=a.trueValue)!=null?k:a.trueLabel)!=null?u:!0,"false-value":(V=(p=a.falseValue)!=null?p:a.falseLabel)!=null?V:!1,onChange:n(s),onFocus:g=>l.value=!0,onBlur:g=>l.value=!1,onClick:w(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[z,n(t)]]):N((x(),S("input",{key:1,"onUpdate:modelValue":g=>$(t)?t.value=g:null,class:C(n(m).be("button","original")),type:"checkbox",name:a.name,tabindex:a.tabindex,disabled:n(r),value:n(v),onChange:n(s),onFocus:g=>l.value=!0,onBlur:g=>l.value=!1,onClick:w(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","value","onChange","onFocus","onBlur","onClick"])),[[z,n(t)]]),a.$slots.default||a.label?(x(),S("span",{key:2,class:C(n(m).be("button","inner")),style:Ce(n(b)?n(y):void 0)},[M(a.$slots,"default",{},()=>[ue(se(a.label),1)])],6)):j("v-if",!0)],2)}}});var he=R(Ue,[["__file","checkbox-button.vue"]]);const Pe=xe({modelValue:{type:ye(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Y,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...ce(["ariaLabel"])}),Oe={[D]:e=>I(e),change:e=>I(e)},Te=E({name:"ElCheckboxGroup"}),je=E({...Te,props:Pe,emits:Oe,setup(e,{emit:c}){const i=e,l=A("checkbox"),{formItem:b}=K(),{inputId:r,isLabeledByFormItem:d}=be(i,{formItemContext:b}),t=async s=>{c(D,s),await ae(),c("change",s)},v=f({get(){return i.modelValue},set(s){t(s)}});return Ve(_,{...Be(Se(i),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:v,changeEvent:t}),ee(()=>i.modelValue,()=>{i.validateEvent&&(b==null||b.validate("change").catch(s=>de()))}),(s,o)=>{var m;return x(),te(ie(s.tag),{id:n(r),class:C(n(l).b("group")),role:"group","aria-label":n(d)?void 0:s.ariaLabel||"checkbox-group","aria-labelledby":n(d)?(m=n(b))==null?void 0:m.labelId:void 0},{default:oe(()=>[M(s.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ke=R(je,[["__file","checkbox-group.vue"]]);const qe=Le(De,{CheckboxButton:he,CheckboxGroup:ke});re(he);re(ke);export{qe as E};
