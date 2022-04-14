async function getHi() {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    let hi = response.json();   
    return hi;
}
getHi().then(hi => makeList(hi));

function makeList(posts) {


 posts.forEach(p => {

    //converting data to text
     let title = document.createTextNode(p.title);
     let body = document.createTextNode(p.body);

    //creating containers for the text 
     let header = document.createElement("h2");
     let paragraph = document.createElement("p");
     let listItem = document.createElement("li");

    //put the text into the container
     header.appendChild(title);
     paragraph.appendChild(body);

    console.log(header);

     //put the text containers to a bigger container
     listItem.appendChild(header);
     listItem.appendChild(paragraph);

     //put the bigger container onto the page
     document.querySelector("ul").appendChild(listItem);

     //get the ul that exists on the page, then append listItem
  
})
}