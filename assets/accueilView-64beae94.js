import{_ as u,C as d,r as c,o as r,c as m,a as e,b as g}from"./index-dca5ab24.js";var l="";l="http://tavue.youssefwali.fr";const t=new d(l);var o;const v={methods:{async login(){await t.collection("users").authWithPassword(document.getElementById("email").value,document.getElementById("passwd").value),t.authStore.isValid&&(document.getElementById("status").innerHTML="Vous etes maintenant connecté(e)",o=t.authStore.model,document.getElementById("signOut").style.visibility="hidden",document.getElementById("addPoem").style.visibility="visible")},async register(){o=await t.collection("users").create({email:document.getElementById("email").value,password:document.getElementById("passwd").value,passwordConfirm:document.getElementById("passwd").value,name:"John Di"}),o&&(document.getElementById("status").innerHTML="Nous vous avons envoyer un mail de vérifictaion ...",await t.collection("users").requestVerification(document.getElementById("email").value))},async googlelogin(){await t.collection("users").authWithOAuth2({provider:"google"}),t.authStore.isValid&&(document.getElementById("status").innerHTML="Vous êtes maintenant connecté avec Google",o=t.authStore.model,document.getElementById("signOut").style.visibility="hidden",document.getElementById("addPoem").style.visibility="visible")},async loginGithub(){await t.collection("users").authWithOAuth2({provider:"github"}),t.authStore.isValid&&(document.getElementById("status").innerHTML="Vous êtes maintenant connecté(e) avec Github",o=t.authStore.model)},async createPoem(){await t.collection("poems").create({title:document.getElementById("title").value,content:document.getElementById("content").value,private:document.getElementById("notpublic").value,email:o.email,illustration:document.getElementById("file").files[0]})}}},y={class:"card"},h={style:{"align-items":"center"}},p=e("h1",null,"Connectez-vous !",-1),_={class:"container"},b={class:"wrapper",id:"signOut"},B=e("label",null,"Adresse mail: ",-1),E=e("br",null,null,-1),I=e("input",{type:"email",required:"",id:"email",placeholder:"username@domain.tld"},null,-1),w=e("br",null,null,-1),f=e("label",null,"Mot de passe: ",-1),S=e("br",null,null,-1),V=e("input",{type:"password",required:"",id:"passwd"},null,-1),C=e("br",null,null,-1),k=e("p",null,[e("label",{id:"status"}," Vous n'etes pas connectez "),e("br")],-1);function G(M,n,O,H,L,i){const a=c("SignIn");return r(),m("div",y,[e("div",h,[p,e("div",_,[e("div",b,[e("div",null,[g(a,{msg:"Enter votre email pour vous connecter"})]),B,E,I,w,f,S,V,C,e("button",{onClick:n[0]||(n[0]=s=>i.register())},"S'inscrire"),e("button",{onClick:n[1]||(n[1]=s=>i.login())},"Se connecter"),e("button",{onClick:n[2]||(n[2]=s=>i.googlelogin())},"Se connecter avec Google"),e("button",{onClick:n[3]||(n[3]=s=>i.loginGithub())},"Se connecter avec Github"),k])])])])}const T=u(v,[["render",G]]);export{T as default};
