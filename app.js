const getUsername = () => {

    //get input value from html
    let inputValue = document.getElementById("username").value;

    // Displaying the value
    const uname = document.getElementById("uname")
    uname.textContent = inputValue

}