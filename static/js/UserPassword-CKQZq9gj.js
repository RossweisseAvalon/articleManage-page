import{_ as c}from"./PageContainer-Ep9YLR5U.js";import{a as V,d as E,c as U,e as x,g as y}from"./element-plus-DI_bgyNY.js";import{u as S,f as R}from"./index-B1nXIkEK.js";import{u as k}from"./vue-router-jgiCMz-_.js";import{r as m,R as q,Q as l,o as B,M as t,U as i}from"./@vue-BIhkC9RN.js";import"./plugin-vueexport-helper-DlAUqK2U.js";import"./lodash-es-CxpLErxa.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-D3_Zpga0.js";import"./dayjs-CxMP4GVf.js";import"./@element-plus-CxMXKtfz.js";import"./@ctrl-r5W6hzzQ.js";import"./@sxzz-D9SI2xQl.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./pinia-_JLQ5g36.js";import"./vue-demi-Dq6ymT-8.js";import"./pinia-plugin-persistedstate-BQU3TZ4K.js";import"./destr-CVtkxrq9.js";import"./deep-pick-omit-CegYQlcN.js";import"./axios-CCb-kr4I.js";const W={__name:"UserPassword",setup(C){const d=m(),o=m({old_pwd:"",new_pwd:"",re_pwd:""}),s=S(),_={old_pwd:[{required:!0,message:"请输入原密码",trigger:"change"},{pattern:/^\S{6,15}$/,message:"密码必须是6-15位的非空字符",trigger:"change"},{validator:(n,e,r)=>{e!==s.password?r(new Error("原密码不正确")):r()},trigger:"change"}],new_pwd:[{required:!0,message:"请输入新密码",trigger:"chagne"},{pattern:/^\S{6,15}$/,message:"密码必须是6-15位的非空字符",trigger:"change"},{validator:(n,e,r)=>{e===o.value.old_pwd?r(new Error("新密码不能与原密码相同")):r()},trigger:"change"}],re_pwd:[{required:!0,message:"请确认新密码",trigger:"chagne"},{validator:(n,e,r)=>{e!==o.value.new_pwd?r(new Error("两次输入的密码不一致")):r()},trigger:"change"}]},w=k(),g=async()=>{await d.value.validate(),await R(o.value),V.success("修改密码成功"),s.setToken(""),s.setUser({}),s.password="",w.push("/login")};return(n,e)=>{const r=E,p=U,u=x,f=y,v=c;return B(),q(v,{title:"重置密码"},{default:l(()=>[t(f,{ref_key:"formRef",ref:d,model:o.value,rules:_,"label-width":"100px",style:{width:"40%"}},{default:l(()=>[t(p,{label:"原密码",prop:"old_pwd"},{default:l(()=>[t(r,{modelValue:o.value.old_pwd,"onUpdate:modelValue":e[0]||(e[0]=a=>o.value.old_pwd=a)},null,8,["modelValue"])]),_:1}),t(p,{label:"新密码",prop:"new_pwd"},{default:l(()=>[t(r,{modelValue:o.value.new_pwd,"onUpdate:modelValue":e[1]||(e[1]=a=>o.value.new_pwd=a)},null,8,["modelValue"])]),_:1}),t(p,{label:"确认密码",prop:"re_pwd"},{default:l(()=>[t(r,{modelValue:o.value.re_pwd,"onUpdate:modelValue":e[2]||(e[2]=a=>o.value.re_pwd=a)},null,8,["modelValue"])]),_:1}),t(p,null,{default:l(()=>[t(u,{type:"primary",onClick:g},{default:l(()=>e[4]||(e[4]=[i(" 修改密码 ")])),_:1}),t(u,{onClick:e[3]||(e[3]=a=>o.value={})},{default:l(()=>e[5]||(e[5]=[i(" 重置 ")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})}}};export{W as default};
