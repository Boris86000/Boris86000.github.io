$(document).ready(function () {
    document.querySelector('.custom-select-wrapper').addEventListener('click', function () {
        this.querySelector('.custom-select').classList.toggle('open');
        this.querySelector('.arrow').classList.toggle('open');

    });


    for (const option of document.querySelectorAll(".custom-option")) {
        option.addEventListener('click', function () {
            if (!this.classList.contains('selected')) {
                this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                this.classList.add('selected');
                this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
            }
        });
    }
    $(document).tooltip();

    document.addEventListener("DOMContentLoaded",function(){
	document.querySelector("form").addEventListener("click",e => {
		let checkboxCL = e.target.classList,
			pState = "pristine";

		if (checkboxCL.contains(pState))
			checkboxCL.remove(pState);
	});
});
});