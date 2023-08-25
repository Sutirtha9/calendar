const rootElement=document.querySelector('#root');

        const wrapper=document.createElement('div');
        wrapper.setAttribute("id","daysBox");

        const weekBox=document.createElement('ul');



        const days=["MON","TUE","WED","THU","FRI","SAT","SUN"];
        const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


        let weekdays=``;

        for(var i=0;i<days.length;i++)
           weekdays+=`<li>${days[i]}  <ion-icon name="ellipse"></ion-icon></li>`;


        weekBox.innerHTML=weekdays;
        wrapper.append(weekBox);
        rootElement.append(wrapper);



        const dataBox=document.createElement('div');
        dataBox.setAttribute("id","dataBox");

        const date=new Date();


        var dd=date.getDate();
        var mm=months[date.getMonth()];
        var yr=date.getFullYear();

        dataBox.innerHTML=`<span id="yr">${yr}</span>
                        <span id="date">${dd}</span>
                        <span id="month">${mm}</span>`;

        rootElement.append(dataBox);


 
        const active=document.querySelector(`ul li:nth-child(${date.getDay()})`);
        active.classList.add('on');


        var x=(date.getDay()-1)*120;
        dataBox.style.transform=`translateX(${x-35}px)`;