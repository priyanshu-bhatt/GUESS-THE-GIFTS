const  gift1=Math.floor(Math.random() * 9)+1
            const blrand = function(min, max, blacklist) {
            if(!blacklist)
             blacklist = []
             let rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
                let retv = 0;
                while(blacklist.indexOf(retv = rand(min,max)) > -1) { }
                return retv;
        }
        let gift2 = blrand(1, 9, [gift1]);
        let gift3=blrand(1,9,[gift1,gift2])
        console.log(gift1);
        console.log(gift2);
        console.log(gift3);
        
        var win_counter=0;
        var loose_counter=0;
        var collection = document.getElementsByClassName("grid-item");
            function fun(){
                var input_value=document.getElementById("inp1").value;
                if(input_value>=10){
                    alert(input_value+ " is not a Valid Input")
                    window.location.reload();
                }
            if(input_value==gift1 || input_value==gift2 || input_value==gift3){
                //collection[document.getElementById("inp1").value-1].innerHTML =
                collection[input_value-1].innerHTML="Gift!!";
                collection[input_value-1].style.background="linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722)";
                win_counter++;
                if(win_counter==3){
                    collection[input_value-1].innerHTML= "<a style='text-decoration:none;' href='#popup1'>Reedem Gift!!</a>";
                    document.getElementById("accuracy").innerHTML="<b>You took "+ (loose_counter+ win_counter) +"chances to Win</b>";
                    win_counter=0;
                }
                
            }
            else{
                    if( input_value === '' ){
                        alert('empty');
                      }
                if(input_value!=gift1 && input_value!=gift2 && input_value!=gift3)
                {    loose_counter++;
                console.log("loose"+loose_counter)
                alert("Oops!! Try Again");
                }
                //alert("Opps!!! Try Again")
                }
                               
            }
        
            
        