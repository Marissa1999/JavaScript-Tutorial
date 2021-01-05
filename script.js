//Always create 10-15 methods on EVERY ASSIGNMENT
//Driver program (onload): VERY IMPORTANT
//NO DUPLICATION on ANY ASSIGNMENT


//Player:
//getRandomCard()
//displayCard()


//Dealer:
//getRandomCard()
//displayCard()



function displayVal()
{
	var strUserName = document.getElementById("username").value;
	alert(strUserName);
	
	document.getElementsByTagName("form")[0].submit();
}



function displayDate()
{
	var x = new Date();
	var strDate = x.getMonth() + 1 + '/';
	strDate += x.getDate() + "/";
	strDate += x.getFullYear();
	
	console.log(strDate);
    document.write(strDate);
}   



function displayDate2() 
{
	
	var x = new Date();
	var arrayMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Sept", "Oct", "Nov", "Dec"];
	var strDate = arrayMonth[x.getMonth()] + ' ';
	strDate += x.getDate() + ', ';
	strDate += x.getFullYear();
	
	console.log(strDate);
	document.write(strDate);
	
}



function forLoop()
{

	var j = 19;
	
	for (var k = 0; k < 5 && j < 20; k++)
    {
		popup();
	}
	
	var i = 0; 
	
	while(i < 5)
    {
		//Code Block
		i++;
	}
}




function doWhileLoop()
{
	var l = 0;
	do
	{
		l++;
	}
	while (l < 5);
}




function popup()
{
	alert("Hello World.");
	document.write("Help me Seymour!");
	var a = document.getElementById("title").innerHTML = "Paragraph Title";
	console.log(a);
	window.alert(5+6);
	var x = 100;
	var y = "100";

	
	alert (typeof 100);
	alert (typeof "100");
	
	
	var x = new Date(1973);
	console.log(x);
	
	var month = getMonth(7);
    var day = getDay(31);
	var year = getFullYear(2018);
    document.write(month + "/" + day + "/" + year);
}


