// const scroll = document.querySelector(".scroll");
// 	const content = document.querySelector("#myList .content");
// 	let isFetching = false;
// 	let hasNext = true;

// 	let pageNumber = 0;

// 	const listTitle = document.querySelector(".list-title");
// 	const writer = document.querySelector(".list-writer");
// 	const listType = document.querySelector(".list-type");
// 	const listProgress = document.querySelector(".list-progress");
// 	const createDate = document.querySelector(".list-date");


// 	const data = {
// 		writer: writer,
// 		title: listTitle,
// 		type: listType,
// 		state: listProgress,
// 		createDate: createDate
// 	};

// const listService = {
// 	myList : function (data){
// 		fetch(`http://localhost:8080/board/myList?pageNumber=${pageNumber}`, {
// 			method: 'GET',
// 			headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('jwt')},
// 			// body: JSON.stringify(data),

// 		}).then(response=>{
// 			isFetching = true;
// 			if(!response.ok){
// 				throw new Error("에러떴음");
// 			}

// 			return response.json();
// 		}).then(data => {
// 			isFetching = false;

// 			if(data.content.length === 0){
// 				hasNext = false;
// 				return;
// 			}

// 			for(let i = 0; i < data.content.length; i++){
				
// 				const type = chgType(data.content[i].type);
// 				const state = chgState(data.content[i].state);

// 				content.innerHTML += '<div class="list-box flex space-between align-center pdx30">'
// 							+ '<div class="list-title-box">'
// 							+ '<div class="mb8">'
// 							+ '<span class="list-title">'+`${data.content[i].title}`+'</span>'
// 							+ '<span class="list-type ml8">'+`${type}`+'</span>'
// 							+ '</div>'
// 							+ '<span class="list-progress">'+`${state}`+'</span>'
// 							+ '</div>'
// 							+ '<span class="list-date text-center">'+`${data.content[i].createDate}`+'</span>'
// 							+ '</div>';
// 			}
// 			pageNumber++;

// 			if(data == null || data == "null"){
// 				console.log("null 나옴");
// 			}
// 		})
// 	},
// 	approveList : function (data){
// 		fetch(`http://localhost:8080/board/waitingList?pageNumber=${pageNumber}&DocState=PROCESS_1`, {
// 			method: 'GET',
// 			headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sessionStorage.getItem('jwt')},
// 			// body: JSON.stringify(data),

// 		}).then(response=>{
// 			isFetching = true;
// 			if(!response.ok){
// 				throw new Error("에러떴음");
// 			}

// 			return response.json();
// 		}).then(data => {
// 			console.log(data.content[0].state);
// 			isFetching = false;

// 			if(data.content.length === 0){
// 				hasNext = false;
// 				return;
// 			}

// 			for(let i = 0; i < data.content.length; i++){
				
// 				const type = chgType(data.content[i].type);
// 				const state = chgState(data.content[i].state);

// 				content.innerHTML += '<div class="list-box flex space-between align-center pdx30">'
// 							+ '<div class="list-title-box">'
// 							+ '<div class="mb8">'
// 							+ '<span class="list-title">'+`${data.content[i].writer}`+'</span>'
// 							+ '<span class="list-type ml8">'+`${type}`+'</span>'
// 							+ '</div>'
// 							+ '<span class="list-progress">'+`${state}`+'</span>'
// 							+ '</div>'
// 							+ '<span class="list-date text-center">'+`${data.content[i].createDate}`+'</span>'
// 							+ '</div>';								
// 			}
			

// 			if(data == null || data == "null"){
// 				console.log("null 나옴");
// 			}
// 			pageNumber++;
// 		})
// 	},
// }
	
// listService.approveList(data);



// scroll.addEventListener("scroll", ()=>{
// 	if(isFetching || !hasNext) {
// 		return;
// 	}
			
// 	if((scroll.scrollTop + scroll.clientHeight + 50) >= scroll.scrollHeight) {
	
// 		listService.myList(data);
// 		listService.approveList(data);

// 		console.log("scroll");
// 	}
// })


// function chgType(type) {
// if(type === "VACATION") {
// 	return "휴가 신청";
// } else if(type === "BUSSINESSTRIP") {
// 	return "출장 신청";
// } else if(type === "REPORT") {
// 	return "보고서";
// } else if(type === "ACCOUNTINGEXPENSE") {
// 	return "경비 신청";
// }	
// }


// function chgState(state) {
// 	if(state === "PROCESS_1" || 
// 		state === "PROCESS_2" ||
// 		state === "PROCESS_3") {
// 		return "승인 필요";
// 	} else if(state === "REFERENCE") {
// 		return "참조";
// 	}
// }