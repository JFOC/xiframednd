$(function () {

	var li,
		iframe,
		x,
		ul = document.getElementById('frames');

	for ( x = 0; x < 2; x++ ) {

		li = document.createElement('LI');

		iframe = document.createElement('IFRAME');
		iframe.src = "frame1.html";
		iframe.setAttribute('frameborder', 0);
		iframe.setAttribute("scolling", "no");
		iframe.id = "frame1";

		$(iframe).on('load', function () {

			$('li', document.getElementById('mainDraggables')).draggable({
				connectToSortable: $('#frames iframe').contents().find('ul').sortable({
					revert: true,
					iframefix: true,
		            cancel: '',
		            helper: 'clone',
		            placeholder: "drop-hover",
		            connectWith: $(iframe).contents().find('ul'),
				}),
				helper: "clone",
		        revert: "invalid",
		        iframefix: true,
		        appendTo: document.body
			});

		});

		li.appendChild(iframe);
		ul.appendChild(li);

	}

});