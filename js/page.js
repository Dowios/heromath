

var ques1 = true;
var ques2 = true;

var student = true;
var teacher = true;

function q1() {
	ques1 = !(ques1);
	if(ques1){
		$('.one-title').show();
		$('.one-answer').show();
		$('#q1').removeClass('o3');
	}else{
		$('.one-title').hide();
		$('.one-answer').hide();
		$('#q1').addClass('o3');
	}
}

function q2() {
	ques2 = !(ques2);
	if(ques2){
		$('.two-title').show();
		$('.two-answer').show();
		$('#q2').removeClass('o3');
	}else{
		$('.two-title').hide();
		$('.two-answer').hide();
		$('#q2').addClass('o3');
	}
}

function stu() {
	student = !(student);
	if(student){
		$('.stu').show();
		$('#stu').removeClass('o3');
	}else{
		$('.stu').hide();
		$('#stu').addClass('o3');
	}
}

function tr() {
	teacher = !(teacher);
	if(teacher){
		$('.tr').show();
		$('#tr').removeClass('o3');
	}else{
		$('.tr').hide();
		$('#tr').addClass('o3');
	}
}


function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

