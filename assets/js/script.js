  document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll('.tab-panel').forEach(panel => {
	  const buttons = panel.querySelectorAll('.tab-buttons button');
	  const contents = panel.querySelectorAll('.tab-content > div');

	  buttons.forEach(button => {
		button.addEventListener('click', () => {
		  const target = button.getAttribute('data-tab');

		  buttons.forEach(btn => btn.classList.remove('active'));
		  contents.forEach(div => div.classList.remove('active'));

		  button.classList.add('active');
		  panel.querySelector('#' + target).classList.add('active');
		});
	  });

	  // Initialize first tab as active in this panel
	  if (buttons.length > 0 && contents.length > 0) {
		buttons[0].classList.add('active');
		contents[0].classList.add('active');
	  }
	});
  });
