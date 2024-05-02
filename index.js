    let allLinks =document.getElementsByClassName("about-link");
    let allBoxex = document.getElementsByClassName("about-link-data");

function openBox(LinkName)
{
    for(link of allLinks)
    {
        link.classList.remove("active-link");
    }
    for(box of allBoxex)
    {
        box.classList.remove("active-box");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(LinkName).classList.add("active-box");


    // document.getElementsByClassName("about-link")[0].classList.remove('active-link');
    // document.getElementById(LinkName).classList.remove("active-box");
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbw_JXVbezEqucj-Rc6HSZ_JDMlrPkMGbU0fXKO5rVpqq08j-rebblL6lhX_Ed2am1w8/exec'
  const form = document.forms['submit-to-google-sheet']

  const submitmsg = document.getElementById('confirm-submit')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {submitmsg.innerHTML ="Messeage sent successfully"
        setTimeout(function(){
            submitmsg.innerHTML = "";
        },5000)
        form.reset();
    })
      .catch(error => console.error('Error!', error.message))
  })
