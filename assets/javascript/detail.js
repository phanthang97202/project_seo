const listTabs = document.getElementsByClassName("btn-tab");
// console.log(listTabs);

const desc = document.getElementsByClassName("information__description")[0];
const additional = document.getElementsByClassName(
  "information__additional"
)[0];
const review = document.getElementsByClassName("information__review")[0];
for (let tab of listTabs) {
  tab.addEventListener("click", (e) => {
    if (tab.id === "tab-desc") {
      desc.classList.add("active-infor");
      additional.classList.remove("active-infor");
      review.classList.remove("active-infor");
    }
    if (tab.id === "tab-additional") {
      additional.classList.add("active-infor");
      desc.classList.remove("active-infor");
      review.classList.remove("active-infor");
    }
    if (tab.id === "tab-review") {
      review.classList.add("active-infor");
      desc.classList.remove("active-infor");
      additional.classList.remove("active-infor");
    }
  });
}

const btn_select = document.querySelector(".btn-select");
const cover_header = document.querySelector("#cover-header");
const select_mobile = document.querySelector("#select-mobile");

btn_select.onclick = () => {
  console.log(select_mobile.classList.contains("moveout-menu"));
  if (select_mobile.classList.contains("moveout-menu")) {
    select_mobile.classList.remove("moveout-menu");
  }
  select_mobile.classList.add("move-menu");
  cover_header.classList.add("cover_show");
};
cover_header.onclick = () => {
  if (!select_mobile.classList.contains("moveout-menu")) {
    select_mobile.classList.remove("move-menu");
    select_mobile.classList.add("moveout-menu");
    cover_header.classList.remove("cover_show");
  }
};

const postcomment = document.getElementById("postcomment");
const card = document.querySelector(".card");
const yourcomment = document.getElementById("yourcomment");
// console.log(postcomment, card);
console.log(yourcomment.value);
if (postcomment) {
  postcomment.addEventListener("click", (e) => {
    const content = `
      <div class="card-body">
        <div class="d-flex flex-start align-items-center">
            <img class="rounded-circle shadow-1-strong me-3 mr-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                alt="avatar" width="60" height="60" />
            <div>
                <h6 style="font-size: 1.4rem;" class="fw-bold text-primary mb-1">Phan Thang</h6>
                <p class="text-muted small mb-0">
                    ${new Date()}
                </p>
            </div>
        </div>

        <p style="margin-left: 7.5rem;" class="mt-3 mb-4 pb-2">
           ${yourcomment.value}
        </p>

        <div style="margin-left: 7.5rem;" class="small d-flex justify-content-start">
            <a href="#!" class="d-flex align-items-center me-3">
                <i class="far fa-thumbs-up me-2"></i>
                <p class="ml-2 mb-0">Like</p>
            </a>
            <a style="margin: 0 1rem" href="#!" class="d-flex align-items-center me-3">
                <i class="far fa-comment-dots me-2"></i>
                <p class="ml-2 mb-0">Comment</p>
            </a>
            <a href="#!" class="d-flex align-items-center me-3">
                <i class="fas fa-share me-2"></i>
                <p class="ml-2 mb-0">Share</p>
            </a>
        </div>
    </div>
  `;
    if (yourcomment.value !== "") {
      card.insertAdjacentHTML("afterBegin", content);
      yourcomment.value = "";
    } else {
      alert("Nhập bình luận");
    }
  });
}
