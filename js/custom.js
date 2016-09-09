$(function () {

	var li,
		iframe,
		ul = document.getElementById('frames');

	li = document.createElement('LI');

	iframe = document.createElement('IFRAME');
	iframe.src = "frame1.html";
	iframe.frameborder = 0;
	iframe.scolling = "no";
	iframe.id = "frame1";

	$(iframe).on('load', function () {

		$('li', document.getElementById('mainDraggables')).draggable({
			connectToSortable: $('#frame1').contents().find('ul').sortable({
				revert: true,
	            cancel: '',
	            helper: 'clone',
	            iframefix: true
			}),
			helper: "clone",
	        revert: "invalid",
	        iframefix: true,
	        appendTo: document.body
		});

	});

	li.appendChild(iframe);
	ul.appendChild(li);

});