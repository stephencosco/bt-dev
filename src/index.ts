import $ from 'jquery'; // Import jQuery to use it within TypeScript

$(document).ready(function () {
  // Prevent the parent dropdown from closing when clicking inside the parent dropdown content
  $('#search-dropdown .w-dropdown-list').on('click', function (event) {
    event.stopPropagation(); // Prevent clicks inside dropdown content from closing the parent dropdown
  });

  // Ensure that clicks on the parent dropdown toggle still function as expected
  $('#search-dropdown .w-dropdown-toggle').on('click', function (event) {
    event.stopPropagation(); // Stop the click event from bubbling up and affecting nested dropdowns
  });
});

$(document).ready(function () {
  // Prevent closing both dropdowns when clicking inside the child dropdown
  $('#search-dropdown .w-dropdown-list').on('click', function (event) {
    event.stopPropagation(); // Prevents the click from closing the parent dropdown
  });
});

$(document).ready(function () {
  // Select the first dropdown and open it on page load with fade-in and slide-down effect
  const firstDropdown = $('.container-medium .faq-dropdown').first();
  const firstDropdownContent = firstDropdown.find('.faq-dropdown-list');
  const firstDropdownIcon = firstDropdown.find('.faq-dropdown-toggle-icon'); // Target the icon

  firstDropdown.addClass('w--open');
  firstDropdownContent
    .css('opacity', 0)
    .slideDown(500)
    .animate({ opacity: 1 }, { queue: false, duration: 500 }); // Fade in and slide down
  firstDropdownIcon.css('transform', 'rotate(180deg)'); // Rotate the icon

  // Handle the behavior for other dropdowns
  $('.faq-dropdown-toggle').on('click', function () {
    const dropdownParent = $(this).parent();
    const dropdownContent = $(this).siblings('.faq-dropdown-list');
    const toggleIcon = $(this).find('.faq-dropdown-toggle-icon'); // Get the icon within the toggle

    // Close other open dropdowns with fade out and slide up animation
    $('.faq-dropdown').not(dropdownParent).removeClass('w--open');
    $('.faq-dropdown-list')
      .not(dropdownContent)
      .slideUp(500)
      .animate({ opacity: 0 }, { queue: false, duration: 500 }); // Fade out and slide up
    $('.faq-dropdown-toggle-icon').not(toggleIcon).css('transform', 'rotate(0deg)'); // Reset other icons

    // Toggle the clicked dropdown
    dropdownParent.toggleClass('w--open');

    // Apply fade in and slide down when opening
    if (dropdownParent.hasClass('w--open')) {
      dropdownContent
        .css('opacity', 0)
        .slideDown(500)
        .animate({ opacity: 1 }, { queue: false, duration: 500 }); // Fade in and slide down
      toggleIcon.css('transform', 'rotate(180deg)'); // Rotate icon 180 degrees
    } else {
      dropdownContent.slideUp(500).animate({ opacity: 0 }, { queue: false, duration: 500 }); // Fade out and slide up
      toggleIcon.css('transform', 'rotate(0deg)'); // Reset icon rotation
    }
  });
});

///splide >>>
function initSplide(selector: string, options: any, useAutoScroll = false) {
  const splideElement = document.querySelector(selector);
  if (!splideElement) return;

  const splide = new Splide(splideElement, options);
  const bar = splide.root.querySelector('.my-slider-progress-bar') as HTMLElement;

  // Function to update the progress bar
  function updateProgressBar() {
    if (bar) {
      const end = splide.Components.Controller.getEnd() + 1;
      bar.style.width = `${(100 * (splide.index + 1)) / end}%`;
    }
  }

  // Update the progress bar width when necessary
  if (bar) {
    splide.on('mounted move', updateProgressBar);
  }

  // Enable clicking on slides to navigate
  splide.on('mounted', () => {
    splide.Components.Elements.slides.forEach((slide: HTMLElement, index: number) => {
      slide.addEventListener('click', () => {
        splide.go(index);
      });
    });
  });

  // Trigger progress bar update on viewport resize
  window.addEventListener('resize', updateProgressBar);

  // Mount Splide with Autoscroll extension only if needed
  if (useAutoScroll && window.splide?.Extensions) {
    splide.mount(window.splide.Extensions);
  } else {
    splide.mount();
  }
}

// Sliders Initialization
document.addEventListener('DOMContentLoaded', () => {
  initSplide(
    '.slider-prod1',
    {
      perPage: 4,
      perMove: 1,
      gap: '1rem',
      arrows: true,
      pagination: true,
      drag: true,
      type: 'slide',
      trimSpace: false,
      breakpoints: {
        1439: { perPage: 3 },
        991: { perPage: 2 },
        639: { perPage: 1 },
      },
    },
    false
  );

  initSplide(
    '.slider-process',
    {
      autoWidth: true,
      perMove: 1,
      gap: '1.25rem',
      arrows: true,
      pagination: true,
      drag: true,
      type: 'slide',
      focus: 'left',
      snap: true,
      breakpoints: {
        991: { autoWidth: true, focus: 'left' },
        874: { autoWidth: true, focus: 'left' },
        579: { autoWidth: true, focus: 'left' },
      },
    },
    false
  );

  initSplide(
    '.slider-review',
    {
      autoWidth: true,
      perMove: 1,
      gap: '1rem',
      arrows: true,
      pagination: true,
      drag: true,
      type: 'loop',
      focus: 'left',
      snap: true,
      breakpoints: {
        991: { autoWidth: true, focus: 'center' },
        874: { autoWidth: true, focus: 'center' },
        579: { autoWidth: true, focus: 'center' },
      },
    },
    false
  );

  initSplide(
    '.news-logos',
    {
      type: 'loop',
      autoWidth: true,
      gap: '3rem',
      drag: 'false',
      focus: 'left',
      arrows: false,
      pagination: false,
      keyboard: false,
      autoScroll: {
        autoStart: true,
        speed: 0.5,
        pauseOnHover: false,
      },
      breakpoints: {
        768: { perPage: 4 },
        450: { perPage: 3 },
        350: { perPage: 2 },
      },
    },
    true
  );
});
