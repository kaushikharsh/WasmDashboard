function loadJQueryFunction() {
	$(document).ready(function () {
		/*  Show/Hidden Submenus */
		$('.nav-btn-submenu').on('click', function (e) {
			e.preventDefault();
			var SubMenu = $(this).next('ul');
			var iconBtn = $(this).children('.fa-chevron-down');
			if (SubMenu.hasClass('show-nav-lateral-submenu')) {
				$(this).removeClass('active');
				iconBtn.removeClass('fa-rotate-180');
				SubMenu.removeClass('show-nav-lateral-submenu');
			} else {
				$(this).addClass('active');
				iconBtn.addClass('fa-rotate-180');
				SubMenu.addClass('show-nav-lateral-submenu');
			}
		});

		/*  Show/Hidden Nav Lateral */
		$('.show-nav-lateral').on('click', function (e) {
			e.preventDefault();
			var NavLateral = $('.nav-lateral');
			var PageConten = $('.page-content');
			if (NavLateral.hasClass('active')) {
				NavLateral.removeClass('active');
				PageConten.removeClass('active');
			} else {
				NavLateral.addClass('active');
				PageConten.addClass('active');
			}
		});

		/*  Exit system buttom */
		$('.btn-exit-system').on('click', function (e) {
			e.preventDefault();
			Swal.fire({
				title: 'Are you sure to close the session?',
				text: "You are about to close the session and exit the system",
				type: 'question',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, exit!',
				cancelButtonText: 'No, cancel'
			}).then((result) => {
				if (result.value) {
					window.location = "index.html";
				}
			});
		});
	});
	(function ($) {
		$(window).on("load", function () {
			$(".page-content, .nav-lateral-content").mCustomScrollbar({
				theme: "light-thin",
				scrollbarPosition: "inside",
				autoHideScrollbar: true,
				scrollButtons: { enable: true }
			});
		});
	})(jQuery);

	// Show and hide modal functions
}

function showModal(element) {
		$(element).modal('show');
	};

function hideModal(element) {
		$(element).modal('hide');
};

function showLoader() {
	document.getElementById('overlay').style.display = 'block'; // Show the overlay
	document.getElementById('loader').style.display = 'block';   // Show the loader
}

function hideLoader() {
	document.getElementById('overlay').style.display = 'none';  // Hide the overlay
	document.getElementById('loader').style.display = 'none';    // Hide the loader
	alert('Loading completed!');
}

function startProcess(dotnetHelper) {
	showLoader(); // Show the loader
	setTimeout(() => {
		// Notify Blazor that the process is completed
		dotnetHelper.invokeMethodAsync('NotifyProcessCompleted');
	}, 10000); // Simulate process completion after 10 seconds
}
