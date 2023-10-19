//Original by Golderen on codepen.io

let amountOfPages = $(".reviews").length;

showPage = (pagination) => {
  if (pagination < 0 || pagination >= amountOfPages) return;

  $(".reviews").hide().eq(pagination).show();
  $("#pagin li")
    .removeClass("page-active").addClass('hover:bg-[#CCCCCC]')
    .eq(pagination).removeClass('hover:bg-[#CCCCCC]')
    .addClass("page-active");
};

// Go to Left
$("#previous img").click(() => {
  showPage($("#pagin ul .page-active").index() - 1);
});

// Go to Right
$("#next img").click(() => {
  showPage($("#pagin ul .page-active").index() + 1);
});

showPage(0);

// Go to page with same number
let pageNums = document.querySelectorAll('.page-num')

pageNums.forEach((element, index) => {
  element.addEventListener('click',() => {
    showPage(index)
  })
})


