function openpopup(boutonBas) {
  if (boutonBas == true) {
    document.getElementById("0").setAttribute("style", "display: block;");
    marginTopValue = (screen.height)/2-document.getElementById("1").clientHeight+document.querySelector("html").scrollTop/2.5
    console.log(marginTopValue)
    document.getElementById("1").setAttribute("style", "display: block;margin-top:"+marginTopValue+"px");
    document.getElementById("2").setAttribute("style", "display: block;height: 1716px");
  } else {
    document.getElementById("0").setAttribute("style", "display: block;");
    document.getElementById("1").setAttribute("style", "display: block;");
    document.getElementById("2").setAttribute("style", "display: block;");
  }
}
function closepopup() {
  document.getElementById("0").setAttribute("style", "display: none;");
  document.getElementById("1").setAttribute("style", "display: none;");
  document.getElementById("2").setAttribute("style", "display: none;");œ
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
        "top:112px;position:absolute;display:flex;left:420px"
      );
  } else if (dropdown == "actualité") {
    document
      .getElementById("actualité")
      .setAttribute(
        "style",
        "top:112px;position:absolute;display:flex;left:499px"
      );
  } else if (dropdown == "encyclopedie") {
    document
      .getElementById("encyclopedie")
      .setAttribute(
        "style",
        "top:112px;position:absolute;display:flex;left:583px"
      );
  } else if (dropdown == "communauter") {
    document
      .getElementById("communauter")
      .setAttribute(
        "style",
        "top:112px;position:absolute;display:flex;left:380px"
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
  oldContent = document.getElementsByClassName("content-popup")[0]
  oldContent.remove()
  document.getElementById("verifcodeContent").setAttribute("style","display:block")
}
function popupToVerifcode2(){
  oldContent = document.getElementById("verifcodeContent")
  oldContent.remove()
  document.getElementById("verifcodeContent2").setAttribute("style","display:block")
}
function popupToVerifcode3(){
  oldContent = document.getElementById("verifcodeContent2")
  oldContent.remove()
  document.getElementById("verifcodeContent3").setAttribute("style","display:block")
}