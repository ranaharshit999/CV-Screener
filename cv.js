const data = [
    {
        name: 'Jack',
        age: 19,
        city: 'LA',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/44.jpg'
    },

    {
        name: 'Jaby k',
        age: 22,
        city: 'Amsterdam',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/64.jpg'
    },

    {
        name: 'Angel Priya',
        age: 18,
        city: 'Brisbane',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/35.jpg'
    },

    {
        name: 'Rihaana',
        age: 25,
        city: 'LA',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/54.jpg'
    },

    {
        name: 'Dwayne',
        age: 34,
        city: 'New South Wales',
        language: 'JavaScript',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/men/33.jpg'
    }
]


function cvIterator(profiles){
    let nextIndex=0;
   
    return {
        next:function(){
            return nextIndex<profiles.length?
            {
                value:profiles[nextIndex++],done:false
            }:{done:true}
        }
    }
}
const candidates=cvIterator(data);
nextCV();
const next=document.getElementById('next');
next.addEventListener('click',nextCV);
function nextCV(){
    const currentCandidate=candidates.next().value;
    let image=document.getElementById('image');
    let profile=document.getElementById('profile');
    if(currentCandidate!=undefined){
        image.innerHTML=`<img src=${currentCandidate.image}>`;
        profile.innerHTML=`<ul class="list-group">
        <li class="list-group-item">${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.age}</li>
        <li class="list-group-item">${currentCandidate.city}</li>
        <li  class="list-group-item">${currentCandidate.language}</li>
        <li class="list-group-item">${currentCandidate.framework}</li>
        </ul>`;

    }else{
        alert("End of Profiles");
        window.location.reload();
    }
}