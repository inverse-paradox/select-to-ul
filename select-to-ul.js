jQuery(document).ready(function($) {
	// convert <select> elements into <ul>
	(function(){
		// setup variables
		var ul_wrapper = $('div.select-ul-wrapper');

		// create unordered lists from each select input, and set the default value
		ul_wrapper.find('select').each(function(i) {
			// setup variables
			var $this = $(this),
				ul_select = '<ul class="select-list">',
				selected_option = '<a href="#" class="selected-option">' + $this.val() + '</a>';

			// loop through each option and create a list item
			$this.children('option').each(function(i) {
				ul_select += '<li>' + $(this).val() + '</li>';
			});
			ul_select += '</ul>';

			// display the ul after the select input
			$this.after(selected_option + ul_select);
		});

		// show/hide the unordered list
		ul_wrapper.on('click', 'a.selected-option', function(e) {
			e.preventDefault();

			// toggle the ul drop down menu on click
			$(this).next('ul.select-list').toggleClass('active');
		});

		// change the value of the select when a list item frop the unordered list is clicked
		ul_wrapper.on('click', 'ul.select-list li', function(e) {
			e.preventDefault();

			// setup variables
			var select_list = $(this).parent('ul.select-list'),
				selected_option = $(this).text();

			// change the selected value when a list item is clicked
			select_list.prev('a.selected-option').text(selected_option);
			select_list.siblings('select').val(selected_option);
			select_list.removeClass('active');
		});
	})();
});