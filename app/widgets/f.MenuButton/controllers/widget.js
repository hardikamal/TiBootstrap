$.type = "hamburger";

$.button.image = WPATH('/images/' + $.type + '.png');

function onClick(evt) {
	$.trigger('click', evt);
}

function onTouchStart(evt) {
	if (!$.active )
		setActive();
	else
		setInactive();
}

function onTouchEnd(evt) {
	if ($.active)
		setInactive();
	else
		setActive();
}

function setActive(){
	$.button.image = WPATH('/images/' + $.type + '_active.png');
	$.active = true
}

function setInactive(){
	$.button.image = WPATH('/images/' + $.type + '.png');
	$.active = false
}