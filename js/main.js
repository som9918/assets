$(document).ready(function () {
  // Mobile menu open js
  $(".hamburger").click(function () {
    $("html").toggleClass("show-menu");
  });

  function countdownToDate(targetDate) {
    const selectedDate = new Date(targetDate).getTime();

    const countdownInterval = setInterval(function () {
        const currentDate = new Date().getTime();
        const timeDifference = selectedDate - currentDate;

        if (timeDifference >= 0) {
            // Calculate time components
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // Display the result
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
            
        } else {
            document.getElementById("countdown").innerHTML = "The countdown has finished!";
            clearInterval(countdownInterval);
        }
    }, 1000); // Update countdown every second
}

// Example usage: user-selected date
const userSelectedDate = document.getElementById("eventdate").innerHTML; // Format: YYYY-MM-DDTHH:mm:ss
countdownToDate(userSelectedDate);

  // Event slider js
  $(".events-slider").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: `<button type="button" class="slick-prev"><img src="https://som9918.github.io/assets/images/arrow.svg" alt="Previous" /></button>`,
    nextArrow: `<button type="button" class="slick-next"><img src="https://som9918.github.io/assets/images/arrow.svg" alt="Next" /></button>`,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Custom select box js
  document.querySelectorAll(".custom-select").forEach((selectBox) => {
    const selected = selectBox.querySelector(".select-selected");
    const items = selectBox.querySelector(".select-items");

    selected.addEventListener("click", function () {
      items.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });

    items.querySelectorAll("div").forEach((option) => {
      option.addEventListener("click", function () {
        selected.innerHTML = this.innerHTML;
        items.classList.add("select-hide");
      });
    });
  });
  // Close the dropdown if the user clicks outside of it
  document.addEventListener("click", function (e) {
    if (!e.target.matches(".select-selected")) {
      document.querySelectorAll(".select-items").forEach((item) => {
        item.classList.add("select-hide");
      });
    }
  });
});
function scrollToSection(id) {
    const targetElement = document.getElementById(id);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth', // Smooth scroll
            top: targetElement.offsetTop - 200,     // Aligns the element at the top of the viewport
        });
    }
}
