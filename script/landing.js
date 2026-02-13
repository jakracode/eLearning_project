// Course Item Data
let courseTitle = ["គណិតវិទ្យាធរណីមាត្រ", "រូបវិទ្យាចលនា", "ជីវវិទ្យា"];
let courseAuthor = ["Vichhean Sombath", "អ៊ុក សុបញ្ញា", "ហួត សុខឡេង"];
let courseImage = ["math.jpg", "physics.jpg", "biology.jpg"];
let courseAuthorImage = ["mainpfp.jpg", "mainpfp.jpg", "mainpfp.jpg"];

for (let i = 0; i < courseTitle.length; i++) {
  let courseItem = `
<div class="course-item-card">
  <img class="course-thumb"
      src="../asset/image/${courseImage[i]}"
      alt="Maths chalkboard">
      <div class="course-item-card-favorite"><img class="icon-small" src="asset/svg/heart.svg" alt="favorite">
      </div>
          <hr>
            <h3>${courseTitle[i]}</h3>
                <div class="course-item-card-author">
                    <div class="course-profile">
                      <img class="profile-thumb"
                        src="../asset/author/${courseAuthorImage[i]}"
                         alt="author">
              <p>${courseAuthor[i]}</p>
          </div>
      <h2 class="price"><del>$19.99</del> Free</h2>
  </div>
</div>
`;
document.querySelector(".course-item").innerHTML += courseItem;
};

// Category Item Data
let title = ["គណិតវិទ្យា", "បច្ចេកវិទ្យា", "សុខភាព", "ជំនួញ", "ផ្សេងៗ"];
let info = ["ធរណីមាត្រ​,​ តក្កវិទ្យា, ផ្សេងៗ", "កុំព្យូទ័រ, ស្មាតហ្វូន, ផ្សេងៗ", "សុខាភិបាល, ជំងឺ, ផ្សេងៗ", "ទីផ្សារ, ការគ្រប់គ្រង, ផ្សេងៗ"];
let titleID = ["Math", "Technology", "Health", "Business", "Others"];
let titleSVG = ["math.svg", "technology.svg", "health.svg", "business.svg", "others.svg"];

for (let i = 0; i < title.length; i++) {
  let categoryitem = `
  <div class="category-card">
    <div class="category-card-item" id="${titleID[i]}">
      <div class="category-icon"><img src="asset/svg/${titleSVG[i]}" alt=""></div>
      <h3>${title[i]}</h3>
      <p>${info[i]}</p>
    </div>
  </div>
  `;
  document.getElementById("category-item").innerHTML += categoryitem;
}