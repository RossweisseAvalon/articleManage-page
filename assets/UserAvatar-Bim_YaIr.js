import{_ as g}from"./PageContainer-CAdvsjI7.js";import{s as E,q as p,a as _,w as t,o as s,v as o,H as U,e as r,y as i,bO as w,E as x,I as b,aT as d,bP as A}from"./index-4bJ1JJ2F.js";import{_ as B,E as R}from"./_plugin-vue_export-helper-B4V0kNGH.js";import{E as S}from"./el-progress-BZdLrfxt.js";import"./el-message-CvJ2GjTm.js";import"./isEqual-CjjpAgkx.js";const C=["src"],I={__name:"UserAvatar",setup(q){const l=E(),a=p("");a.value=l.user.user_pic;const n=p(),f=c=>{const e=new FileReader;e.readAsDataURL(c.raw),e.onload=()=>{a.value=e.result}},m=async()=>{await w(a.value),await l.getUser(),x.success("上传头像成功")};return(c,e)=>{const v=b,y=S,u=R,k=g;return s(),_(k,{title:"更换头像"},{default:t(()=>[o(y,{ref_key:"uploadRef",ref:n,"on-change":f,style:{"margin-bottom":"20px"},"auto-upload":!1,"show-file-list":!1,class:"avatar-uploader"},{default:t(()=>[a.value?(s(),U("img",{key:0,src:a.value,class:"avatar"},null,8,C)):(s(),_(v,{key:1,class:"avatar-uploader-icon"},{default:t(()=>[o(r(d))]),_:1}))]),_:1},512),o(u,{type:"primary",icon:r(d),onClick:e[0]||(e[0]=F=>n.value.$el.querySelector("input").click())},{default:t(()=>e[1]||(e[1]=[i(" 选择图片 ")])),_:1},8,["icon"]),o(u,{type:"success",icon:r(A),onClick:m},{default:t(()=>e[2]||(e[2]=[i(" 上传头像 ")])),_:1},8,["icon"])]),_:1})}}},L=B(I,[["__scopeId","data-v-02aa04be"]]);export{L as default};