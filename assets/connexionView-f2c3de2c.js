import{C as l}from"./pocketbase.es-2eb1282e.js";import{_ as u,o as d,c,a as n,e as r}from"./index-41f03487.js";var a="";a="http://tavue.youssefwali.fr:443";const e=new l(a);var o;const m={methods:{async login(){await e.collection("users").authWithPassword(document.getElementById("email").value,document.getElementById("passwd").value),e.authStore.isValid&&(document.getElementById("status").innerHTML="Vous etes maintenant connecté(e)",o=e.authStore.model,this.$router.push("/"))},async register(){o=await e.collection("users").create({email:document.getElementById("email").value,password:document.getElementById("passwd").value,passwordConfirm:document.getElementById("passwd").value,name:"John Di"}),o&&(document.getElementById("status").innerHTML="Nous vous avons envoyer un mail de vérifictaion ...",await e.collection("users").requestVerification(document.getElementById("email").value))},async googlelogin(){await e.collection("users").authWithOAuth2({provider:"google"}),e.authStore.isValid&&(document.getElementById("status").innerHTML="Vous êtes maintenant connecté avec Google",o=e.authStore.model,document.getElementById("signOut").style.visibility="hidden",document.getElementById("addPoem").style.visibility="visible")},async loginGithub(){await e.collection("users").authWithOAuth2({provider:"github"}),e.authStore.isValid&&(document.getElementById("status").innerHTML="Vous êtes maintenant connecté(e) avec Github",o=e.authStore.model)},async createPoem(){await e.collection("poems").create({title:document.getElementById("title").value,content:document.getElementById("content").value,private:document.getElementById("notpublic").value,email:o.email,illustration:document.getElementById("file").files[0]})}}},g={class:"login-container"},p={class:"card"},v=r('<h1>Connectez-vous !</h1><div class="input-group"><label for="email">Adresse mail</label><input class="input-field" type="email" required id="email" placeholder="username@domain.tld"></div><div class="input-group"><label for="passwd">Mot de passe</label><input class="input-field" type="password" required id="passwd"></div>',3),y={class:"social-login"},b=n("p",{class:"status"},[n("label",{id:"status"}," Vous n'êtes pas connecté ")],-1);function h(f,t,w,B,_,s){return d(),c("div",g,[n("div",p,[v,n("button",{class:"btn register-btn",onClick:t[0]||(t[0]=i=>s.register())},"S'inscrire"),n("button",{class:"btn login-btn",onClick:t[1]||(t[1]=i=>s.login())},"Se connecter"),n("div",y,[n("button",{class:"btn google-btn",onClick:t[2]||(t[2]=i=>s.googlelogin())},"Google"),n("button",{class:"btn github-btn",onClick:t[3]||(t[3]=i=>s.loginGithub())},"Github")]),b])])}const V=u(m,[["render",h]]);export{V as default};
