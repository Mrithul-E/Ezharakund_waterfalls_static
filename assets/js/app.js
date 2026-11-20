$(function () {
  const today = new Date();
  const dateInput = $('#date');
  dateInput.attr('min', today.toISOString().split('T')[0]);
  const soon = new Date(today);
  soon.setDate(today.getDate() + 7);
  dateInput.val(soon.toISOString().split('T')[0]);

  const toastElement = document.getElementById('siteToast');
  const siteToast = new bootstrap.Toast(toastElement, { delay: 3500 });
  const showToast = (message) => {
    $('#toastMessage').text(message);
    siteToast.show();
  };

  $('.gallery-filters button').on('click', function () {
    const filter = $(this).data('filter');
    $('.gallery-filters button').removeClass('active');
    $(this).addClass('active');
    $('.gallery-item').each(function () {
      const shouldShow = filter === 'all' || $(this).data('category') === filter;
      $(this).stop(true, true).fadeTo(180, shouldShow ? 1 : .13);
    });
  });

  $('.newsletter').on('submit', function (event) { event.preventDefault(); showToast('Thank you. You will get updates by email.'); this.reset(); });
});
