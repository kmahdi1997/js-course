// const tabs = document.querySelector('.tabs');
// const tabButtons = tabs.querySelectorAll('[role="tab"]');
// const tabPanels = tabs.querySelectorAll('[role="tab"]');

// function handleTabClick(event) {
//   // hide all tab panels
//   tabPanels.forEach(panel => {
//     panel.hidden = true;
//   });

//   // mark all tabs as unselected
//   tabButtons.forEach(tab => {
//     // tab.ariaSelected = false;
//     tab.setAttribute('aria-selected', false);
//   });

//   // mark the cli cked tab as selected
//   event.currentTarget.setAttribute('aria-selected', true);
//   // find the associated tabPanel and show it!
//   const tabPanel = tabPanels.find(
//     panel => panel.getAttribute('aria-labelledby') === id
//   )};
//   console.log(tabPanels);


// var tabButtons = document.querySelectorAll(".tab .tabButtons .buttons button");
// var tabPanels = document.querySelectorAll(".tab .tabPanels .panels");

// function showPanel(panelIndex, colorCode) {
//   tabButtons.forEach(function(node){
//     node.style.backgroundColor="";
//   });
//   tabButtons[panelIndex].style.backgroundColor = colorCode;
//   tabButtons[panelIndex].style.color = "yellow";
//   tabPanels.forEach(function(node){
//     node.style.display="none"
//   });
//   tabPanels[panelIndex].style.display = "block";
//   tabPanels[panelIndex].style.backgroundColor = "colorCode";
// }


let tabBtn = document.getElementsByClassName("btn");
let tabBtns = document.getElementsByClassName("buttons")[0];
let tabPanel = document.getElementsByClassName("tabPanels")[0];

for (let i = 0; i < tabBtn.length; i++) {
  tabBtn[i].addEventListener("click", function(){
    tabBtns.getElementsByClassName("active")[0].classList.remove("active");
    tabBtn[i].classList.add("active");
    tabPanel.getElementsByClassName("tabActive")[0].classList.remove("tabActive");
    tabPanel.getElementsByClassName("btn")[i].classList.add("tabActive");
  });
}