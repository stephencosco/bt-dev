import $ from 'jquery';

$(document).ready(function () {
  // Select the first dropdown and open it on page load with fade-in and slide-down effect
  const firstDropdown = $('.faq-wrapper .faq-dropdown').first(); // Adjusted to target .faq-wrapper
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

  // Enable clicking on slides to navigate
  splide.on('mounted', () => {
    splide.Components.Elements.slides.forEach((slide: HTMLElement, index: number) => {
      slide.addEventListener('click', () => {
        splide.go(index);
      });
    });
  });

  // Mount Splide with Autoscroll extension only if needed
  if (useAutoScroll && window.splide?.Extensions) {
    splide.mount(window.splide.Extensions);
  } else {
    splide.mount();
  }
}

// Sliders Initialization
document.addEventListener('DOMContentLoaded', () => {
  const splideConfigs = [
    {
      selector: '.slider-prod1',
      options: {
        perPage: 4,
        perMove: 1,
        gap: '1rem',
        arrows: true,
        pagination: false,
        drag: true,
        type: 'slide',
        trimSpace: false,
        breakpoints: {
          1439: { perPage: 3 },
          991: { perPage: 2 },
          639: { perPage: 1 },
        },
      },
      useAutoScroll: false,
    },
    {
      selector: '.slider-prod-2',
      options: {
        autoWidth: true,
        perMove: 1,
        gap: '1rem',
        arrows: true,
        pagination: false,
        drag: true,
        type: 'slide',
        focus: 'left',
        snap: true,
      },
      useAutoScroll: false,
    },
    {
      selector: '.slider-process',
      options: {
        autoWidth: true,
        perMove: 1,
        gap: '1.25rem',
        arrows: false,
        pagination: false,
        drag: true,
        type: 'slide',
        focus: 'left',
        snap: true,
      },
      useAutoScroll: false,
    },
    {
      selector: '.slider-cpa',
      options: {
        autoWidth: true,
        perMove: 1,
        gap: '1.66rem',
        arrows: true,
        pagination: false,
        drag: true,
        type: 'slide',
        focus: 'left',
        snap: true,
      },
      useAutoScroll: false,
    },
    {
      selector: '.slider-news',
      options: {
        autoWidth: true,
        perMove: 1,
        gap: '1.25rem',
        arrows: true,
        pagination: false,
        drag: true,
        type: 'slide',
        focus: 'left',
        snap: true,
      },
      useAutoScroll: false,
    },
    {
      selector: '.slider-servicenav',
      options: {
        autoWidth: true,
        perMove: 1,
        gap: '1rem',
        arrows: false,
        pagination: false,
        drag: true,
        type: 'slide',
        focus: 'center',
        snap: true,
        breakpoints: {
          991: { autoWidth: true, focus: 'center' },
          874: { autoWidth: true, focus: 'left' },
          579: { autoWidth: true, focus: 'left' },
        },
      },
      useAutoScroll: false,
    },
    {
      selector: '.slider-review',
      options: {
        autoWidth: true,
        perMove: 1,
        gap: '1rem',
        arrows: true,
        pagination: false,
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
      useAutoScroll: false,
    },
    {
      selector: '.news-logos',
      options: {
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
      },
      useAutoScroll: true,
    },
    {
      selector: '.slider-r-articles',
      options: {
        autoWidth: true,
        perMove: 1,
        gap: '1rem',
        arrows: true,
        pagination: false,
        drag: true,
        type: 'loop',
        focus: 'left',
        snap: true,
        breakpoints: {
          991: { autoWidth: true, focus: 'left' },
          874: { autoWidth: true, focus: 'left' },
          579: { autoWidth: true, focus: 'center' },
        },
      },
      useAutoScroll: false,
    },
  ];

  splideConfigs.forEach((config) => {
    initSplide(config.selector, config.options, config.useAutoScroll);
  });
});
