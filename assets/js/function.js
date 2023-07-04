function openpopup(boutonBas) {
  if (boutonBas == true) {
    document.getElementById("0").setAttribute("style", "display: block;");
    marginTopValue = (screen.height)/2-document.getElementById("1").clientHeight+document.querySelector("html").scrollTop/2.5
    console.log(marginTopValue)
    document.getElementById("1").setAttribute("style", "display: block;margin-top:"+marginTopValue+"px");
    document.getElementById("2").setAttribute("style", "display: block;height:"+document.querySelector("html").scrollHeight+"px");
  } else {

    document.getElementById("0").setAttribute("style", "display: block;");
    document.getElementById("1").setAttribute("style", "display: block;");
    document.getElementById("2").setAttribute("style", "display: block;height:"+document.querySelector("html").scrollHeight+"px");
  }
}
function closepopup() {
  document.getElementById("0").setAttribute("style", "display: none;");
  document.getElementById("1").setAttribute("style", "display: none;");
  document.getElementById("2").setAttribute("style", "display: none;");
}
wsrwdrhhwrt = [
  "univers",
  "actualité",
  "encyclopedie",
  "media",
  "communauter",
];
function close(){
  for (i = 0; i < 5; i++) {
    document.getElementById(wsrwdrhhwrt[i]).setAttribute("style", "display:none");
  }
}
function lose_focus(event) {
  console.log(event.relatedTarget)
  if(event.relatedTarget == null) {
    close()
  }
}
function dropdownmenu(dropdown) {
  close()
  if (dropdown == "univers") {
    document
      .getElementById("univers")
      .setAttribute(
        "style",
        "top:112px;position:absolute;display:flex;left:600px"
      );
  } else if (dropdown == "actualité") {
    document
      .getElementById("actualité")
      .setAttribute(
        "style",
        "top:112px;position:absolute;display:flex;left:650px"
      );
  } else if (dropdown == "encyclopedie") {
    document
      .getElementById("encyclopedie")
      .setAttribute(
        "style",
        "top:112px;position:absolute;display:flex;left:700px"
      );
  } else if (dropdown == "communauter") {
    document
      .getElementById("communauter")
      .setAttribute(
        "style",
        "top:112px;position:absolute;display:flex;left:900px"
      );
  }
}

function popup() {
  var popup = window.open("", "Erreur de connexion", "width=400,height=200");

  var html = "<h1>hey.html</h1>";
  html +=
    "<p>Impossible de se connecter au serveur. Veuillez réessayer plus tard.</p>";

  popup.document.write(html);
}

function backToTop(){
  if (document.querySelector("html").scrollTop > 800){
    document.getElementsByClassName("ak-backtotop")[0].setAttribute("style","display:block")
  }
  else{
    document.getElementsByClassName("ak-backtotop")[0].setAttribute("style","display:none")
  }
}

function loginform() {
  // Récupérer les valeurs des champs du formulaire
  var username = document.getElementById("pseudo").value;
  var password = document.getElementById("password").value;
  console.log(username,password)
}
  // Vérifier les informations de connexion
  function afficherPopup() {
  if (username === "admin" && password === "123456") {
    alert("Les identifiants sont incorrects.");
    console.log("Les identifiants sont incorrects.")
    // Ajoutez ici votre code pour rediriger l'utilisateur vers une autre page ou effectuer d'autres actions après la connexion réussie
  } else {
    alert("Identifiant ou mot de passe incorrect.");
  }

  // Réinitialiser les champs du formulaire
  document.getElementById("pseudo").value = "";
  document.getElementById("password").value = "";
}

function afficherPopup() {
  alert("Les identifiants sont incorrects!");
}

function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}
function popupToVerifcode(){
  document.getElementsByClassName("content-popup")[0].setAttribute("style","display:none")
  document.getElementById("verifcodeContent2").setAttribute("style","display:none")
  document.getElementById("verifcodeContent").setAttribute("style","display:block")
}
function popupToVerifcode2(){
  document.getElementsByClassName("content-popup")[0].setAttribute("style","display:none")
  document.getElementById("verifcodeContent").setAttribute("style","display:none")
  document.getElementById("verifcodeContent2").setAttribute("style","display:block")
}
function popupToVerifcode3(){
  document.getElementsByClassName("content-popup")[0].setAttribute("style","display:none")
  document.getElementById("verifcodeContent2").setAttribute("style","display:none")
  document.getElementById("verifcodeContent3").setAttribute("style","display:block")
}
open = false
function openLvl1(target){
  if(target == 'univers' && open == false){
    document.getElementsByClassName("menu")[1].setAttribute("style","display:none;")
    document.getElementsByClassName("level-1")[0].setAttribute("style","display:block;") 
    document.getElementsByClassName("caret")[4].setAttribute("style","float: inline-start;margin-top: 5px;rotate: 180deg;margin-right: 5px")
    open = true
  }
  else if(target == 'univers' && open == true){
    document.getElementsByClassName("level-1")[0].setAttribute("style","display:none") 
    document.getElementsByClassName("menu")[1].setAttribute("style","display:block;")
    open = false
  }
  else if(target == 'actualité' && open == false){
    document.getElementsByClassName("menu")[1].setAttribute("style","display:none;")
    document.getElementsByClassName("level-1")[1].setAttribute("style","display:block;") 
    document.getElementsByClassName("caret")[9].setAttribute("style","float: inline-start;margin-top: 5px;rotate: 180deg;margin-right: 5px")
    open = true
  }
  else if(target == 'actualité' && open == true){
    document.getElementsByClassName("menu")[1].setAttribute("style","display:block;")
    document.getElementsByClassName("level-1")[1].setAttribute("style","display:none") 
    open = false
  }
  else if(target == 'encyclopédie' && open == false){
    document.getElementsByClassName("menu")[1].setAttribute("style","display:none;")
    document.getElementsByClassName("level-1")[2].setAttribute("style","display:block;") 
    document.getElementsByClassName("caret")[10].setAttribute("style","float: inline-start;margin-top: 5px;rotate: 180deg;margin-right: 5px")
    open = true
  }
  else if(target == 'encyclopédie' && open == true){
    document.getElementsByClassName("menu")[1].setAttribute("style","display:block;")
    document.getElementsByClassName("level-1")[2].setAttribute("style","display:none") 
    open = false
  }
  else if(target == 'communauté' && open == false){
    document.getElementsByClassName("menu")[1].setAttribute("style","display:none;")
    document.getElementsByClassName("level-1")[3].setAttribute("style","display:block;") 
    document.getElementsByClassName("caret")[11].setAttribute("style","float: inline-start;margin-top: 5px;rotate: 180deg;margin-right: 5px")
    open = true
  }
  else if(target == 'communauté' && open == true){
    document.getElementsByClassName("menu")[1].setAttribute("style","display:block;")
    document.getElementsByClassName("level-1")[3].setAttribute("style","display:none") 
    open = false
  }
}
open1 = false
function openLvl2(target){
  console.log(target, open1)
  if(target == 'jeuLigne' && open1 == false){
    document.getElementsByClassName("level-1")[0].setAttribute("style","display:none;")
    document.getElementsByClassName("level-2")[0].setAttribute("style","display:block;") 
    document.getElementsByClassName("caret")[15].setAttribute("style","float: inline-start;margin-top: 5px;rotate: 180deg;margin-right: 5px")
    open1 = true
  }
  else if(target == 'jeuLigne' && open1 == true){
    document.getElementsByClassName("level-2")[0].setAttribute("style","display:none") 
    document.getElementsByClassName("level-1")[0].setAttribute("style","display:block;")
    open1 = false
  }
  else if(target == 'animation' && open1 == false){
    document.getElementsByClassName("level-1")[0].setAttribute("style","display:none;")
    document.getElementsByClassName("level-2")[1].setAttribute("style","display:block;") 
    document.getElementsByClassName("caret")[16].setAttribute("style","float: inline-start;margin-top: 5px;rotate: 180deg;margin-right: 5px")
    open1 = true
  }
  else if(target == 'animation' && open1 == true){
    document.getElementsByClassName("level-1")[0].setAttribute("style","display:block;")
    document.getElementsByClassName("level-2")[1].setAttribute("style","display:none") 
    open1 = false
  }
  else if(target == 'editions' && open1 == false){
    document.getElementsByClassName("level-1")[0].setAttribute("style","display:none;")
    document.getElementsByClassName("level-2")[2].setAttribute("style","display:block;") 
    document.getElementsByClassName("caret")[17].setAttribute("style","float: inline-start;margin-top: 5px;rotate: 180deg;margin-right: 5px")
    open1 = true
  }
  else if(target == 'editions' && open1 == true){
    document.getElementsByClassName("level-1")[0].setAttribute("style","display:block;")
    document.getElementsByClassName("level-2")[2].setAttribute("style","display:none") 
    open1 = false
  }
  else if(target == 'krosmaster' && open1 == false){
    document.getElementsByClassName("level-1")[0].setAttribute("style","display:none;")
    document.getElementsByClassName("level-2")[3].setAttribute("style","display:block;") 
    document.getElementsByClassName("caret")[18].setAttribute("style","float: inline-start;margin-top: 5px;rotate: 180deg;margin-right: 5px")
    open1 = true
  }
  else if(target == 'krosmaster' && open1 == true){
    document.getElementsByClassName("level-1")[0].setAttribute("style","display:block;")
    document.getElementsByClassName("level-2")[3].setAttribute("style","display:none") 
    open1 = false
  }
  else if(target == 'informations' && open1 == false){
    document.getElementsByClassName("level-1")[3].setAttribute("style","display:none;")
    document.getElementsByClassName("level-2")[4].setAttribute("style","display:block;") 
    document.getElementsByClassName("caret")[19].setAttribute("style","float: inline-start;margin-top: 5px;rotate: 180deg;margin-right: 5px")
    open1 = true
  }
  else if(target == 'informations' && open1 == true){
    document.getElementsByClassName("level-1")[3].setAttribute("style","display:block;")
    document.getElementsByClassName("level-2")[4].setAttribute("style","display:none") 
    open1 = false
  }
  else if(target == 'annuaires' && open1 == false){
    document.getElementsByClassName("level-1")[3].setAttribute("style","display:none;")
    document.getElementsByClassName("level-2")[5].setAttribute("style","display:block;") 
    document.getElementsByClassName("caret")[20].setAttribute("style","float: inline-start;margin-top: 5px;rotate: 180deg;margin-right: 5px")
    open1 = true
  }
  else if(target == 'annuaires' && open1 == true){
    document.getElementsByClassName("level-1")[3].setAttribute("style","display:block;")
    document.getElementsByClassName("level-2")[5].setAttribute("style","display:none") 
    open1 = false
  }
  else if(target == 'coinJoueurs' && open1 == false){
    console.log("open")
    document.getElementsByClassName("level-1")[3].setAttribute("style","display:none;")
    document.getElementsByClassName("level-2")[6].setAttribute("style","display:block;") 
    document.getElementsByClassName("caret")[21].setAttribute("style","float: inline-start;margin-top: 5px;rotate: 180deg;margin-right: 5px")
    open1 = true
  }
  else if(target == 'coinJoueurs' && open1 == true){
    document.getElementsByClassName("level-1")[3].setAttribute("style","display:block;")
    document.getElementsByClassName("level-2")[6].setAttribute("style","display:none") 
    open1 = false
  }
}
open2 = false
function openMenu(){
  if(open2 == false){
    document.querySelector("aside").setAttribute("style","display:block;")
    open2 = true
  }
  else if(open2 == true){
    document.querySelector("aside").setAttribute("style","display:none;")
    open2 = false
  }
}