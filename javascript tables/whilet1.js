let emp=[{"id":1,"first_name":"Birdie","email":"bpeckham0@google.com.au","gender":"Female"},
{"id":2,"first_name":"North","email":"nskyppe1@dedecms.com","gender":"Male"},
{"id":3,"first_name":"Frederico","email":"fpeever2@jimdo.com","gender":"Male"},
{"id":4,"first_name":"Dasie","email":"dpywell3@over-blog.com","gender":"Male"},
{"id":5,"first_name":"Francesca","email":"fduckerin4@psu.edu","gender":"Male"},
{"id":6,"first_name":"Caren","email":"corring5@twitter.com","gender":"Male"},
{"id":7,"first_name":"Felic","email":"frigmond6@springer.com","gender":"Male"},
{"id":8,"first_name":"Keefe","email":"kgandley7@networkadvertising.org","gender":"Female"},
{"id":9,"first_name":"Flint","email":"fjoslow8@dell.com","gender":"Female"},
{"id":10,"first_name":"Giulio","email":"ggogan9@nhs.uk","gender":"Male"},
{"id":11,"first_name":"Claudine","email":"ckinga@dedecms.com","gender":"Female"},
{"id":12,"first_name":"Monica","email":"mkreutzerb@surveymonkey.com","gender":"Female"},
{"id":13,"first_name":"Jillayne","email":"jcaretc@facebook.com","gender":"Female"},
{"id":14,"first_name":"Korie","email":"kgatenbyd@sina.com.cn","gender":"Male"},
{"id":15,"first_name":"Opal","email":"okeene@gravatar.com","gender":"Female"},
{"id":16,"first_name":"Demetri","email":"dvoelkerf@businessinsider.com","gender":"Non-binary"},
{"id":17,"first_name":"Costa","email":"cdoltong@paginegialle.it","gender":"Female"},
{"id":18,"first_name":"Heindrick","email":"hfiginh@qq.com","gender":"Female"},
{"id":19,"first_name":"Johnna","email":"jsentinellai@webmd.com","gender":"Male"},
{"id":20,"first_name":"Sully","email":"spackerj@craigslist.org","gender":"Male"}]


function table(){
    let rows="";
    i=0;
    while(i<=emp.length-1){
        
        rows=
        rows+
        `<tr>
        <td>${emp[i].id}</td>
       <td>${emp[i].first_name}</td>
       <td>${emp[i].email}</td>
       <td>${emp[i].gender}</td>
        </tr>`
        i++;

    }
    document.getElementById("maddy").innerHTML=rows;
    console.log("working");

}