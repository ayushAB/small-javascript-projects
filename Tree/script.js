
const data = [
    {
       "id":17809,
       "parentId":null,
       "name":"priyanka singh",
       "username":"priyatrade",
       "mobileNo":"1236985480",
       "emailaddress":"wwwselftrade@gmail.com",
       "status":1,
       "userType":"User",
       "category":"Member",
       "kycStatus":0,
       "totalAchievedIncome":67.267500,
       "totalExpectedIncome":300.000000,
       "packageName":"Package 100",
       "packageAmount":100.00,
       "createdOn":"0001-01-01T00:00:00",
       "children":[
          {
             "id":17815,
             "parentId":17809,
             "name":"ram",
             "username":"ram1976",
             "mobileNo":"9140779828",
             "emailaddress":"0003mlm@gmail.com",
             "status":1,
             "userType":"User",
             "category":"Member",
             "kycStatus":0,
             "totalAchievedIncome":0.000000,
             "totalExpectedIncome":0.000000,
             "packageName":null,
             "packageAmount":null,
             "createdOn":"0001-01-01T00:00:00",
             "children":[
                {
                    "id":17815,
                    "parentId":17809,
                    "name":"ram -1",
                    "username":"ram1976",
                    "mobileNo":"9140779828",
                    "emailaddress":"0003mlm@gmail.com",
                    "status":1,
                    "userType":"User",
                    "category":"Member",
                    "kycStatus":0,
                    "totalAchievedIncome":0.000000,
                    "totalExpectedIncome":0.000000,
                    "packageName":null,
                    "packageAmount":null,
                    "createdOn":"0001-01-01T00:00:00",
                    "children":[
               
                       
                    ],
                    "j":null,
                    "i":null
                 },
                 {
                    "id":17815,
                    "parentId":17809,
                    "name":"ram-2",
                    "username":"ram1976",
                    "mobileNo":"9140779828",
                    "emailaddress":"0003mlm@gmail.com",
                    "status":1,
                    "userType":"User",
                    "category":"Member",
                    "kycStatus":0,
                    "totalAchievedIncome":0.000000,
                    "totalExpectedIncome":0.000000,
                    "packageName":null,
                    "packageAmount":null,
                    "createdOn":"0001-01-01T00:00:00",
                    "children":[
               
                       
                    ],
                    "j":null,
                    "i":null
                 },
             ],
             "j":null,
             "i":null
          },
          {
             "id":18051,
             "parentId":17809,
             "name":"Vishakha Sonker",
             "username":"vishtrade",
             "mobileNo":"7007728861",
             "emailaddress":"tradervishakha@gmail.com",
             "status":1,
             "userType":"User",
             "category":"Member",
             "kycStatus":0,
             "totalAchievedIncome":0.000000,
             "totalExpectedIncome":0.000000,
             "packageName":null,
             "packageAmount":null,
             "createdOn":"0001-01-01T00:00:00",
             "children":[
                
             ],
             "j":null,
             "i":null
          },
          {
             "id":18053,
             "parentId":17809,
             "name":"Arpita Singh",
             "username":"arpittrade",
             "mobileNo":"7753034882",
             "emailaddress":"traderarpita@gmail.com",
             "status":1,
             "userType":"User",
             "category":"Member",
             "kycStatus":0,
             "totalAchievedIncome":0.000000,
             "totalExpectedIncome":0.000000,
             "packageName":null,
             "packageAmount":null,
             "createdOn":"0001-01-01T00:00:00",
             "children":[
                
             ],
             "j":null,
             "i":null
          },
          {
             "id":18054,
             "parentId":17809,
             "name":"Priyanka Singh",
             "username":"priyatrade2",
             "mobileNo":"7007728861",
             "emailaddress":"traderpriyankasingh@gmail.com",
             "status":1,
             "userType":"User",
             "category":"Member",
             "kycStatus":0,
             "totalAchievedIncome":15.000000,
             "totalExpectedIncome":75.000000,
             "packageName":"Package 25",
             "packageAmount":25.00,
             "createdOn":"0001-01-01T00:00:00",
             "children":[
                
             ],
             "j":null,
             "i":null
          },
          {
             "id":18055,
             "parentId":17809,
             "name":"Shivangini Singh",
             "username":"shivitrade",
             "mobileNo":"7007728861",
             "emailaddress":"shivangini211@gmail.com",
             "status":1,
             "userType":"User",
             "category":"Member",
             "kycStatus":0,
             "totalAchievedIncome":0.000000,
             "totalExpectedIncome":0.000000,
             "packageName":null,
             "packageAmount":null,
             "createdOn":"0001-01-01T00:00:00",
             "children":[
                
             ],
             "j":null,
             "i":null
          }
       ],
       "j":0,
       "i":0
    }
 ];

function createNode(node) {
    if(typeof node.children == 'undefined') return document.createElement('div');

    let divEle = document.createElement('div');
    divEle.innerHTML = `<span class="cursor-pointer"><span class="mr-2 ">-</span>${node.name}</span>`;
    divEle.childNodes[0].onclick = ($event) =>{
        if(divEle.classList.contains('hide')){
            divEle.classList.remove('hide');
            $event.srcElement.childNodes[0].innerText = "-"
        }else {
            divEle.classList.add('hide');
            $event.srcElement.childNodes[0].innerText = "+"

        }
    }
    let rootUl = document.createElement('ul');
    rootUl.style.marginLeft = "25px"
    divEle.appendChild(rootUl);
    for(let i = 0; i < node.children.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `<span class="flex items-center"><span>*</span> ${node.children[i].name} </span>`;
        rootUl.appendChild(li);
        if(node.children[i].children.length > 0)
        li.appendChild(createNode(node.children[i]));
        
    }
    return divEle;
}

document.getElementById('tree').appendChild(createNode(data[0]));