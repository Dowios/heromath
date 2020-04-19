var i = 0;
$(document).ready(function(){
	shuffle(d_ans);
	$.each(d_ans, function(index, el) {
		$('#ansrow').append('<div class="card my-3 c-answer"></div>');
	});
	$('#ansrow > .card').each(function(index, el) {
		$(this).load("card.html #one");
	});
	$('#ansrow > .card > .card-body').each(function () {
		$(this).children('.one-answer').html(d_ans[i][0]);
		$(this).children('.two-answer').html(d_ans[i][1]);
		if(d_ans[i][2] == "n"){
			$(this).children('.one-title').addClass('text-info');
			$(this).children('.two-title').addClass('text-info');
			$(this).parent('.card').addClass('stu');
		}else{
			$(this).children('.one-title').addClass('text-info');
			$(this).children('.two-title').addClass('text-info');
			$(this).parent('.card').addClass('tr');
		}
		i++;
 	});
	$('.card').addClass('rounded-lg');
	$('.card').addClass('shadow');
	$('.card').addClass('border-0');
});

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
var d_ans = [
["嘗試自己三梯以來沒有嘗試過的事，試著用教程課所學在教案上","多看課本（參考資料），多花一些時間在想教案上","n"],
["一群信任的夥伴","適時的幫助他人，培養關係，學著踏出以往不敢踏出的一步踏出自己的舒適圈去認識新的人","n"],
["我希望從梯隊學習到教學的流程。從課前準備、上課中的危機處理應變到課程結束後的檢討。","課前準備理所當然從教案開始，雖然很討厭寫教案，每次都沒靈感，直到學年規定的期限當天才開始想要教什麼主題。當我好不容易釐清我想幹嘛的時候就已經要沒時間了?。不過雖然如此，我依然喜歡梯隊。我很想體驗真正帶到小朋友的感覺；完成小時候的夢想當老師（現在還在猶豫啦，不過應該不會變）；在教學現場遇到事情如何圓滿處理等等。<br><br>我雖還沒有經歷過這一塊，不過在上學期的磨練下，我大概能知道要做什麼、怎麼做。<br><br>很開心加入梯隊，雖然美工總是使我煩躁?^_^<br><br>不過真的不後悔啦 期許這學期的我可以更進步，不論是教案、美工、試教，任何事～","n"],
["我期望從梯隊獲得慢慢的正能量","不管是在做行政還是有小活動的時候，能和夥伴們一起彼此鼓勵 互相加油，甚至是以後出梯面對小朋友，我給予真心和用心的態度，他們也能給我相對的回應以及成就感。","n"],
["一直在這個梯隊收穫了各種意想不到的收穫，所以想將這些經驗傳承給學員們；一方面也學習如何帶領一個年級，學習要如何把自己想傳達的東西好好地傳達給別人。","多請教有經驗的人，和趴呢一起溝通討論，邏輯化自己的重點整理後再表達。","y"],
["我期許能從梯隊中找出自己的價值，","無論是在面對學員還是夥伴或五長，我都期許自己是在做我認為必須要做的事而不是完成我應該做的事。對我而言，有意識的去完成我的責任是現階段而言最優先學習的事物","y"],
["能保持正面的心情、把握住每一個能使自己進步的機會，堅持且勇敢的去做。","充分準備好、努力做到該做的事，從做行政、寫教案、練梯舞做起，想著訓練自己、想著為了小朋友、想著這些都是值得未來的自己驕傲的事蹟。","n"],
["我期待小朋友們在梯隊期間有所收穫並成長。雖然只有短短的一個星期，我希望能在他們的身邊陪伴他們，並在他們的心中留下美好的回憶。","認真想有趣、吸引小朋友的課程內容，認真對待每一個小朋友，好好把握能努力付出的時間。","n"],
["成長和堅持，勿半途而廢，不要因為受挫而放棄。","想想之前出過梯的經驗，哪些地方不足的，看看以前的教案，以前的教學經驗，學習別人的做得好地方，讓自己更加進步。挫折的時候，想想做這些事情是不是可以收穫什麼，或許就有動力堅持做下去。","n"],
["我期待自己能過了解自己想不想當老師，","所以我要認真積極的付出，在結束後才能清楚了解自己的想法！","n"],
["我期待整個年級的各位能在各方面（美工、設計課程、合作、溝通...有所進步，都能在梯隊有個濃厚的歸屬感，得到收穫與感動","我會儘量去貼近學員和我的夥伴，而且真心發自內心的對待他們，了解其不足之處、遇到問題給予幫助，藉此一起進步成長","y"],
["我期待在梯隊中當一個稱職的學年，在口條、給建議的能力上可以進步，更即時的找到方向引導。並維持良好的年級氣氛，帶領大家一起成長。","多聽多想多講，把考慮的面向放寬事先準備，向趴呢也像所有梯隊的成員學習。揪大家一起做梯隊的事，也適時的了解大家近況。","y"],
["o","o","n"],
["o","o","n"],
["o","o","y"],
["o","o","y"],
["我期待可以把教案寫好，分配好時間。","可以多參考資料(?)、做好時間規劃。","n"],
["我期待能變得更不怕與人溝通，講話能更有條理。","多跟他人講話，不要常常句點別人。","n"],
["我期待我可以在這梯中增進自己溝通能力以及如何去引導別人。","可以在這梯不斷的練習去將這能力加強，除了溝通外，如何取得別人的信任也是一大課題。","y"],
["我期待可以有一個很peace&感情很好的年級，教個2堂猛的主任課(一堂情意，另一堂可能ㄈㄏ吧!)☆在上營前可以&4年級變熟一起出去玩，GO2衝浪!","多花時間陪學員(17做美宣，主動找他們玩)，自己多花時間想教案??!","y"],
["我期望可以得到做美勞的成就感，怎麼保持耐心處理小孩的突發狀況","與趴呢通力合作做出理想中的東西並鍛鍊堅不可摧的意志力","n"],
["我期望可以得到做美勞的快樂、怎麼對付小孩且不生氣。","持續快樂的做美勞並鍛鍊有容乃大的精神。","n"],
["我期待我能透過幫助每位梯隊成員不論在教學、行政、美工或是談吐與待人處事方面都能有所收穫，來獲得自己的成就感","對學員：具體提出教案中可修改的問題點和提供建議、有空就可以協助他們製作美工、能多去看其他人試教並能給出具體有用的回饋、出梯時協助解決所有困難與解惑所有問題、盡可能認識和了解他們，透過觀察與回饋，讓他們能知道自己這段時間的成長<br><br>對學年：多聊聊天，提出問題讓大家反思，同時可以說說自己對於梯隊或活動行政的想法、提供自己的經驗<br><br>對五長：提供自己的經驗和觀念<br><br>對顧問：提供自己的經驗、詢問並提供解釋行政處理的觀念","y"],
["我希望能得到歸屬感，並且在新的角色中得到成就","陪伴年級的夥伴們，和他們一起參與很多不僅限於梯隊的事，和趴呢一起互相幫助與學習","y"]];

