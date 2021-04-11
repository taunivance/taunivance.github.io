
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

function togglelist() {
    document.getElementById("directoryList").classList.toggle("hide2");
  }


  function switchgrid() {

    document.getElementById("switch").classList.add("directoryGrid");
    document.getElementById("switch").classList.remove("directoryList");
    document.getElementById("grid").classList.add("currentView");
    document.getElementById("list").classList.remove("currentView");
}

function switchlist() {

    document.getElementById("switch").classList.remove("directoryGrid");
    document.getElementById("switch").classList.add("directoryList");
    document.getElementById("grid").classList.remove("currentView");
    document.getElementById("list").classList.add("currentView");
}

