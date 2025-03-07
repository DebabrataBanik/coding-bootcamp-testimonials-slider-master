const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const testimonial = document.querySelector('.text');
const author = document.querySelector('.author')
const role = document.querySelector('.role');
const userImg = document.querySelector('.user-image');

const testimonialArr = [
  {
    image: 'images/image-tanya.jpg',
    alt: 'picture of Tanya Sinclair',
    text: "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
    author: 'Tanya Sinclair',
    role: 'UX Engineer'
  },
  {
    image: 'images/image-john.jpg',
    alt: 'picture of John Tarkpor',
    text: "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructions go into is incredible. I now feel so confident about starting up as a professional developer.",
    author: 'John Tarkpor',
    role: 'Junior Front-end Developer'
  }
]

let currentIndex = 0

function updateContent(currentIndex){
  testimonial.textContent = `“${testimonialArr[currentIndex].text} ”`;
  userImg.src = testimonialArr[currentIndex].image;
  userImg.alt = testimonialArr[currentIndex].alt;
  author.innerHTML = `${testimonialArr[currentIndex].author}<span>${testimonialArr[currentIndex].role}</span>`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonialArr.length)%testimonialArr.length;
  updateContent(currentIndex)
})

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1)%testimonialArr.length
  updateContent(currentIndex);
})

updateContent(currentIndex)