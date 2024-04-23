console.log('Hello World'); 

// console.log(document);

            const collectionOfLi = document.getElementsByTagName('li')

            for (const li of collectionOfLi) {
                console.log(li.innerText);
            }
            const h1Heading = document.getElementsByTagName('h1')
            for (const li of h1Heading) {
                console.log(li.innerText);
            }

            // this is how we can access HTML from JS file

            const testId = document.getElementById("hello-world");
            console.log(testId.innerText);
            

            const getClass = document.getElementsByClassName('important-class')
            for(const className of getClass){
                console.log(className.innerText);
            }