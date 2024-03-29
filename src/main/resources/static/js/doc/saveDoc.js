(function(w, d) {
let quill = null;
d.addEventListener("DOMContentLoaded", function(){
	let form = d.getElementById('saveDoc');
	validate(form, defInput);

	quill = new Quill('#content', {
		theme: 'snow'
	});
});

let defInput = [
	{
		name: "title",
		required : true,
	},
	{
		name: "content",
		required : true,
	},
];

/**
 * saveDoc
 */
w.saveDoc = (formId) => {
	let form = d.getElementById(formId);
	let data = getData(formId);
	
	var delta = quill.getContents();
	
	/*if(!checkValidate(form, defInput)){
		return;
	}*/
	console.log(delta);
	if(!confirm(data.id? "수정 하시겠습니까?" : "저장 하시겠습니까?")){
		return;
	}
	let url = "/doc/saveDocAction";
	//sendPostData(url, data);
}

})(window, document);