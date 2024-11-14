import{_ as c}from"./PageContainer-CAdvsjI7.js";import{q as m,s as E,a as V,w as l,o as U,v as t,y as _,A as y,c0 as x,E as S}from"./index-4bJ1JJ2F.js";import{E as q,a as k}from"./el-form-item-BHFjbLh1.js";import{E as B}from"./_plugin-vue_export-helper-B4V0kNGH.js";import{E as C}from"./el-input-CyZCGOUE.js";import"./el-message-CvJ2GjTm.js";const T={__name:"UserPassword",setup(P){const u=m(),o=m({old_pwd:"",new_pwd:"",re_pwd:""}),s=E(),i={old_pwd:[{required:!0,message:"请输入原密码",trigger:"change"},{pattern:/^\S{6,15}$/,message:"密码必须是6-15位的非空字符",trigger:"change"},{validator:(d,e,r)=>{e!==s.password?r(new Error("原密码不正确")):r()},trigger:"change"}],new_pwd:[{required:!0,message:"请输入新密码",trigger:"chagne"},{pattern:/^\S{6,15}$/,message:"密码必须是6-15位的非空字符",trigger:"change"},{validator:(d,e,r)=>{e===o.value.old_pwd?r(new Error("新密码不能与原密码相同")):r()},trigger:"change"}],re_pwd:[{required:!0,message:"请确认新密码",trigger:"chagne"},{validator:(d,e,r)=>{e!==o.value.new_pwd?r(new Error("两次输入的密码不一致")):r()},trigger:"change"}]},w=y(),g=async()=>{await u.value.validate(),await x(o.value),S.success("修改密码成功"),s.setToken(""),s.setUser({}),s.password="",w.push("/login")};return(d,e)=>{const r=C,n=q,p=B,f=k,v=c;return U(),V(v,{title:"重置密码"},{default:l(()=>[t(f,{ref_key:"formRef",ref:u,model:o.value,rules:i,"label-width":"100px",style:{width:"40%"}},{default:l(()=>[t(n,{label:"原密码",prop:"old_pwd"},{default:l(()=>[t(r,{modelValue:o.value.old_pwd,"onUpdate:modelValue":e[0]||(e[0]=a=>o.value.old_pwd=a)},null,8,["modelValue"])]),_:1}),t(n,{label:"新密码",prop:"new_pwd"},{default:l(()=>[t(r,{modelValue:o.value.new_pwd,"onUpdate:modelValue":e[1]||(e[1]=a=>o.value.new_pwd=a)},null,8,["modelValue"])]),_:1}),t(n,{label:"确认密码",prop:"re_pwd"},{default:l(()=>[t(r,{modelValue:o.value.re_pwd,"onUpdate:modelValue":e[2]||(e[2]=a=>o.value.re_pwd=a)},null,8,["modelValue"])]),_:1}),t(n,null,{default:l(()=>[t(p,{type:"primary",onClick:g},{default:l(()=>e[4]||(e[4]=[_(" 修改密码 ")])),_:1}),t(p,{onClick:e[3]||(e[3]=a=>o.value={})},{default:l(()=>e[5]||(e[5]=[_(" 重置 ")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1})}}};export{T as default};