// https://in.pinterest.com/anirudhgoel/die/

function pinThem(event) {
	event.preventDefault();

	var source_board = $("#source_board").val();
	var destination_board = $("#destination_board").val();
	
	if (source_board.substring(0,6) == "https:") {
		var source_board_parts = source_board.split("/");
		var source_board = source_board_parts[3] + "/" + source_board_parts[4];
	} else if (source_board.replace(/^\/|\/$/g, "").split("/").length == 2) {
		source_board = source_board.replace(/^\/|\/$/g, "");
	} else {
		$("err1").html("");
	}

	if (destination_board.substring(0,6) == "https:") {
		var destination_board_parts = destination_board.split("/");
		var destination_board = destination_board_parts[3] + "/" + destination_board_parts[4];
	} else if (destination_board.replace(/^\/|\/$/g, "").split("/").length == 2) {
		destination_board = destination_board.replace(/^\/|\/$/g, "");
	} else {
		$("err2").html("");
	}

	alert(source_board);

	// alert("Done" + source_board + destination_board);
}