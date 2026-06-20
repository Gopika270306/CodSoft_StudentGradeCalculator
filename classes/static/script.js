function calculateGrade(){

    let s1 = parseInt(document.getElementById("sub1").value);
    let s2 = parseInt(document.getElementById("sub2").value);
    let s3 = parseInt(document.getElementById("sub3").value);
    let s4 = parseInt(document.getElementById("sub4").value);
    let s5 = parseInt(document.getElementById("sub5").value);

    let total = s1 + s2 + s3 + s4 + s5;

    let average = total / 5;

    let grade = "";

    if(average >= 90){
        grade = "A+";
    }
    else if(average >= 80){
        grade = "A";
    }
    else if(average >= 70){
        grade = "B";
    }
    else if(average >= 60){
        grade = "C";
    }
    else if(average >= 50){
        grade = "D";
    }
    else{
        grade = "F";
    }

    document.getElementById("total").innerHTML =
    "Total Marks : " + total;

    document.getElementById("average").innerHTML =
    "Average Percentage : " + average.toFixed(2) + "%";

    document.getElementById("grade").innerHTML =
    "Grade : " + grade;
}
